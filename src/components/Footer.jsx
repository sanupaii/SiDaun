import { useNavigate } from 'react-router-dom'
import { Leaf, GraduationCap, MapPin } from 'lucide-react'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer
      className="w-full mt-auto border-t z-10 pb-20 md:pb-0"
      style={{ borderColor: 'rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
            >
              <Leaf size={16} color="white" strokeWidth={2} />
            </div>
            <span className="text-lg font-black text-slate-900">SiDaun</span>
            <div className="w-[1.5px] h-4 bg-slate-300 mx-1" />
            <div className="flex items-center gap-1.5 cursor-default group">
              <img
                src="/icons/karo.png"
                alt="Logo Kabupaten Karo"
                className="w-5 h-auto object-contain"
              />
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">Kab. Karo</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Aplikasi deteksi penyakit daun cabai berbasis AI untuk mendukung petani Indonesia.
          </p>
          <p className="text-xs text-slate-400">© 2026 SiDaun. Hak cipta dilindungi.</p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">Navigasi</h3>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Beranda', path: '/' },
              { label: 'Deteksi AI', path: '/deteksi' },
              { label: 'Edukasi', path: '/edukasi' },
              { label: 'Riwayat', path: '/riwayat' },
              { label: 'Tentang', path: '/about' },
            ].map(({ label, path }) => (
              <li key={label}>
                <button
                  onClick={() => navigate(path)}
                  className="text-sm text-slate-500 hover:text-emerald-600 transition-colors duration-150 font-medium"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Proyek */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">Informasi</h3>
          <ul className="flex flex-col gap-2 text-xs text-slate-500">
            <li className="flex items-center gap-2">
              <GraduationCap size={13} color="#10b981" />
              Mahasiswa Tingkat Akhir · Sistem Informasi
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={13} color="#10b981" />
              STMIK Triguna Dharma, Medan
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <Leaf size={13} color="#10b981" className="mt-0.5 flex-shrink-0" />
              Studi Kasus Kabupaten Karo, Sumatera Utara
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div
        className="border-t px-6 py-4 text-center text-xs text-slate-400"
        style={{ borderColor: 'rgba(0,0,0,0.06)' }}
      >
        Dibuat dengan ❤️ untuk petani cabai Indonesia · Didukung TensorFlow.js + MobileNetV2 CNN
      </div> */}
    </footer>
  )
}

export default Footer
