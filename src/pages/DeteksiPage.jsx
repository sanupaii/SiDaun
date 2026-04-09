/**
 * src/pages/DeteksiPage.jsx
 * Halaman utama - deteksi penyakit daun cabai
 * Fitur: input kamera/galeri, preview gambar, analisis TF.js, auto-save riwayat
 * ⚠️ LOGIKA TFJS DAN INDEXEDDB TIDAK DIUBAH SAMA SEKALI
 */

import { useState, useRef, useCallback } from 'react'
import { Camera, ImagePlus, Loader2, Leaf, Sparkles, RefreshCw, Brain } from 'lucide-react'
import { predict } from '../utils/model'
import { simpanRiwayat } from '../utils/db'
import { kompresGambar } from '../utils/imageUtils'
import HasilKartu from '../components/HasilKartu'

function DeteksiPage({ modelReady }) {
  const [previewURL, setPreviewURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasil, setHasil] = useState(null)
  const [error, setError] = useState(null)
  const [savedInfo, setSavedInfo] = useState(null)

  const imgRef = useRef(null)
  const kameraRef = useRef(null)
  const galeriRef = useRef(null)

  /**
   * Handler saat file gambar dipilih (dari kamera atau galeri)
   * Membuat preview URL dan reset state sebelumnya
   */
  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setHasil(null)
    setError(null)
    setSavedInfo(null)

    if (previewURL) URL.revokeObjectURL(previewURL)
    setPreviewURL(URL.createObjectURL(file))
  }, [previewURL])

  /**
   * Handler utama analisis gambar
   * Alur: validasi → prediksi TF.js → kompresi canvas → auto-save IndexedDB → tampil hasil
   * ⚠️ TIDAK DIUBAH — logika TFJS (tf.tidy) dan IndexedDB tetap identik
   */
  const handleAnalisis = useCallback(async () => {
    if (!imgRef.current || !modelReady) return

    setLoading(true)
    setError(null)
    setHasil(null)
    setSavedInfo(null)

    try {
      console.log('[SiDaun] Memulai prediksi...')
      const prediksi = await predict(imgRef.current)
      console.log('[SiDaun] Prediksi selesai:', prediksi.kelas, `${(prediksi.akurasi * 100).toFixed(1)}%`)

      // KOMENTAR EDUKASI: Fungsi ini menurunkan ukuran gambar memakai Canvas HTML
      // Mengurangi resolusi ke 500px & kualitas JPEG 60% agar file tidak menumpuk dan memberatkan database (IndexedDB).
      const imageBase64 = kompresGambar(imgRef.current, 500, 0.6)

      const savedId = await simpanRiwayat({
        imageBase64,
        kelas: prediksi.kelas,
        akurasi: prediksi.akurasi,
        penyebab: prediksi.penyebab,
        penanganan: prediksi.penanganan,
      })
      console.log('[SiDaun] Riwayat tersimpan dengan ID:', savedId)
      setSavedInfo(savedId)

      setHasil({ ...prediksi, imageBase64 })

    } catch (err) {
      console.error('[SiDaun] Error saat prediksi:', err)
      setError('Gagal menganalisis gambar. Pastikan gambar valid dan coba lagi.')
    } finally {
      setLoading(false)
    }
  }, [modelReady])

  /**
   * Reset semua state ke kondisi awal untuk analisis baru
   */
  const handleReset = useCallback(() => {
    setHasil(null)
    setError(null)
    setSavedInfo(null)
    if (previewURL) URL.revokeObjectURL(previewURL)
    setPreviewURL(null)
    if (kameraRef.current) kameraRef.current.value = ''
    if (galeriRef.current) galeriRef.current.value = ''
  }, [previewURL])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 pb-28 md:pb-12 flex flex-col gap-8">

      {/* ── Page Header ── */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            <Brain size={20} color="white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Deteksi Penyakit
            </h1>
            <p className="text-sm text-slate-500">Analisis daun cabai menggunakan AI</p>
          </div>
        </div>
      </div>

      {/* ── Status Model Badge ── */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit"
        style={{
          background: modelReady ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
          border: `1px solid ${modelReady ? 'rgba(52,211,153,0.4)' : 'rgba(245,158,11,0.4)'}`,
          color: modelReady ? '#059669' : '#b45309',
        }}
      >
        <div
          className={`w-2 h-2 rounded-full ${modelReady ? 'animate-pulse-green' : ''}`}
          style={{ background: modelReady ? '#10b981' : '#f59e0b' }}
        />
        {modelReady ? 'Model AI siap digunakan' : 'Memuat model AI…'}
      </div>

      {/* ── Main Grid: 2 kolom Desktop, 1 kolom Mobile ── */}
      {/* items-start: biarkan kolom setinggi kontennya — syarat wajib agar sticky bekerja */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* ══════════════════════════════════════════
            KOLOM KIRI — Upload / Kamera Area
            ══════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <div className="container-hijau-pekat p-6 flex flex-col gap-4">
            <h2 className="text-base font-bold text-slate-700">📷 Unggah Gambar Daun</h2>

            {/* Area Preview / Placeholder */}
            {previewURL ? (
              <div className="relative">
                <div
                  className="rounded-2xl overflow-hidden animate-scale-in"
                  style={{
                    aspectRatio: '4/3',
                    border: '2px solid rgba(52, 211, 153, 0.5)',
                    boxShadow: '0 4px 24px rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <img
                    ref={imgRef}
                    src={previewURL}
                    alt="Preview daun cabai"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                {!loading && (
                  <button
                    onClick={handleReset}
                    className="absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      backdropFilter: 'blur(8px)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <RefreshCw size={11} />
                    Ganti
                  </button>
                )}
              </div>
            ) : (
              <div
                className="upload-zone rounded-2xl flex flex-col items-center justify-center animate-fade-in"
                style={{ aspectRatio: '4/3' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(16, 185, 129, 0.12)' }}
                >
                  <Leaf size={32} color="#10b981" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-slate-600">Pilih Gambar Daun Cabai</p>
                <p className="text-xs text-slate-400 mt-1">Gunakan kamera atau pilih dari galeri</p>
              </div>
            )}

            {/* Input Hidden */}
            <input ref={kameraRef} id="input-kamera" type="file" accept="image/*" capture="environment" onChange={handleFileChange} className="hidden" disabled={loading} />
            <input ref={galeriRef} id="input-galeri" type="file" accept="image/*" onChange={handleFileChange} className="hidden" disabled={loading} />

            {/* Tombol Kamera & Galeri */}
            <div className="grid grid-cols-2 gap-3">
              <button
                id="btn-kamera"
                onClick={() => kameraRef.current?.click()}
                disabled={loading}
                className="flex flex-col items-center gap-2 py-5 rounded-2xl transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                  border: '1.5px solid rgba(52, 211, 153, 0.4)',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.5 : 1,
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.12)' }}>
                  <Camera size={24} color="#10b981" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Kamera</span>
              </button>

              <button
                id="btn-galeri"
                onClick={() => galeriRef.current?.click()}
                disabled={loading}
                className="flex flex-col items-center gap-2 py-5 rounded-2xl transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                  border: '1.5px solid rgba(52, 211, 153, 0.4)',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.5 : 1,
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.12)' }}>
                  <ImagePlus size={24} color="#10b981" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Galeri</span>
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            KOLOM KANAN — Analisis & Hasil
            ══════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">

          {/* Panel Analisis */}
          <div className="container-hijau-pekat p-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.1))' }}
              >
                <Sparkles size={20} color="#10b981" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800">Analisis AI</h2>
                <p className="text-xs text-slate-500">Tekan tombol untuk memulai</p>
              </div>
            </div>

            <p className="text-sm text-slate-500 mb-5 leading-relaxed">
              Unggah gambar daun cabai, lalu klik tombol di bawah untuk mendeteksi jenis penyakitnya secara otomatis.
            </p>

            {/* Tombol Analisis */}
            <button
              id="btn-analisis"
              className="btn-primary w-full"
              onClick={handleAnalisis}
              disabled={!previewURL || loading || !modelReady}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Menganalisis…
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Analisis Daun
                </>
              )}
            </button>

            {!modelReady && (
              <p className="text-center text-xs text-amber-600 mt-3 font-medium">
                ⏳ Harap tunggu, model AI sedang dimuat…
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="rounded-2xl p-4 animate-slide-up"
              style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              <p className="text-sm text-red-600 font-medium text-center">⚠️ {error}</p>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="container-hijau-pekat p-8 flex flex-col items-center gap-4 animate-fade-in">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center animate-pulse"
                style={{ background: 'rgba(16,185,129,0.12)' }}
              >
                <Brain size={32} color="#10b981" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-700">Menganalisis gambar…</p>
                <p className="text-xs text-slate-400 mt-1">Model AI sedang memproses</p>
              </div>
            </div>
          )}

          {/* Kartu Hasil */}
          {hasil && !loading && (
            <div className="animate-slide-up">
              <HasilKartu hasil={hasil} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeteksiPage
