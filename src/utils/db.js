/**
 * src/utils/db.js
 * Setup database IndexedDB menggunakan Dexie.js
 * Menyimpan riwayat deteksi penyakit daun cabai
 */

import Dexie from 'dexie'

const db = new Dexie('SiDaunDB')

// Schema Database IndexedDB
db.version(1).stores({
  riwayat: '++id, timestamp, kelas',
})

/**
 * Simpan hasil deteksi ke IndexedDB
 */
export async function simpanRiwayat({ imageBase64, kelas, akurasi, penyebab, penanganan }) {
  return await db.riwayat.add({
    timestamp: new Date().toISOString(),
    imageBase64,
    kelas,
    akurasi,
    penyebab,
    penanganan,
  })
}

/**
 * Ambil semua riwayat, diurutkan dari terbaru
 */
export async function ambilSemuaRiwayat() {
  return await db.riwayat.orderBy('id').reverse().toArray()
}

/**
 * Hapus satu riwayat
 */
export async function hapusRiwayat(id) {
  return await db.riwayat.delete(id)
}

/**
 * Hapus semua riwayat
 */
export async function hapusSemuaRiwayat() {
  return await db.riwayat.clear()
}

export default db;
