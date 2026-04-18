/**
 * src/pages/LandingPage.jsx
 * Halaman utama / landing page SiDaun
 * Menampilkan hero section modern dengan CTA ke halaman deteksi
 */

import { useNavigate, Link } from 'react-router-dom'
import { Leaf, Sparkles, Shield, Zap, ArrowRight, ChevronDown, MapPin, GraduationCap } from 'lucide-react'

const slugify = (text) => text.toLowerCase().trim().replace(/\s+/g, '-');

const features = [
  {
    icon: Sparkles,
    title: 'Deteksi Cerdas AI',
    desc: 'Didukung MobileNetV2 CNN yang dioptimasi khusus untuk performa tinggi di perangkat mobile.',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
  },
  {
    icon: Shield,
    title: 'Privasi Terjaga',
    desc: 'Analisis diproses 100% di perangkat Anda. Tidak ada gambar yang dikirim ke server.',
    color: '#6366f1',
    bgColor: 'rgba(99, 102, 241, 0.1)',
  },
  {
    icon: Zap,
    title: 'Offline Pertama',
    desc: 'Berfungsi penuh tanpa koneksi internet sebagai Progressive Web App (PWA).',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
]

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen md:min-h-[80vh] lg:min-h-[70vh] overflow-hidden">

      {/* ── Decorative Blob Background ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div
          className="absolute animate-blob"
          style={{
            width: 600,
            height: 600,
            top: '-15%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute animate-blob"
          style={{
            width: 500,
            height: 500,
            bottom: '5%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute animate-blob"
          style={{
            width: 400,
            height: 400,
            top: '40%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
            animationDelay: '5s',
          }}
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center md:justify-start justify-center text-center px-6 pt-24 pb-16 md:pt-16 md:pb-12">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 md:mb-5 animate-fade-in"
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.35)',
            color: '#059669',
          }}
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse-green"
            style={{ background: '#10b981' }}
          />
          Mejuah-Juah · Selamat datang di SiDaun
        </div>

        {/* Floating Leaf Icon */}
        <div
          className="w-24 h-24 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mb-8 md:mb-5 animate-float animate-glow"
          style={{
            background: 'linear-gradient(135deg, #10b981, #059669)',
            boxShadow: '0 8px 40px rgba(16, 185, 129, 0.4)',
          }}
        >
          <Leaf size={48} color="white" strokeWidth={2} />
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 md:mb-4 animate-slide-up"
          style={{ lineHeight: 1.1, animationDelay: '0.1s' }}
        >
          <span className="text-slate-900">Si</span>
          <span
            style={{
              background: 'linear-gradient(135deg, #10b981, #34d399, #059669)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Daun
          </span>
          <br />
          <span className="text-slate-700 text-3xl md:text-4xl lg:text-5xl font-bold">
            Asisten Cerdas Petani Cabai
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10 md:mb-6 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Deteksi penyakit daun cabai secara instan menggunakan kecerdasan buatan.
          Cukup foto daun Anda — AI kami siap menganalisis dalam hitungan detik.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            id="btn-mulai-deteksi"
            onClick={() => navigate('/deteksi')}
            className="btn-neon"
          >
            <Sparkles size={20} />
            Mulai Deteksi Sekarang
            <ArrowRight size={18} />
          </button>

          <button
            id="btn-lihat-riwayat-landing"
            onClick={() => navigate('/riwayat')}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-600 transition-all duration-200 hover:bg-white hover:shadow-md"
            style={{
              border: '1.5px solid rgba(0,0,0,0.1)',
              fontSize: 16,
            }}
          >
            Lihat Riwayat
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 md:mt-8 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <span className="text-xs text-slate-400 font-medium">Scroll untuk selengkapnya</span>
          <ChevronDown size={16} className="text-slate-400 animate-float" />
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="px-6 pb-12">
        <div
          className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:gap-8 glass-card rounded-3xl px-6 py-6 md:py-8"
        >
          {[
            { value: '4', label: 'Kelas Penyakit', suffix: '' },
            { value: '95', label: 'Akurasi Model', suffix: '%+' },
            { value: '100', label: 'Offline Ready', suffix: '%' },
          ].map(({ value, label, suffix }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl md:text-4xl font-black mb-1"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}{suffix}
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-3">
            Kenapa SiDaun?
          </h2>
          <p className="text-center text-slate-500 mb-10 text-sm md:text-base">
            Teknologi AI terkini untuk membantu petani cabai Indonesia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, color, bgColor }, i) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: bgColor }}
                >
                  <Icon size={24} color={color} strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disease Preview Section ── */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-3">
            Penyakit yang Dapat Dideteksi
          </h2>
          <p className="text-center text-slate-500 mb-10 text-sm md:text-base">
            Model AI dilatih untuk mengenali 4 kondisi daun cabai
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { nama: 'Daun Bercak', image: '/bercak.png', color: '#000000ff', bg: 'rgba(21,128,61,0.05)', border: 'rgba(0, 0, 0, 0.2))' },
              { nama: 'Daun Keriting', image: '/keriting.png', color: '#000000ff', bg: 'rgba(21,128,61,0.05)', border: 'rgba(0, 0, 0, 0.2))' },
              { nama: 'Daun Kuning', image: '/kuning.png', color: '#000000ff', bg: 'rgba(21,128,61,0.05)', border: 'rgba(0, 0, 0, 0.2))' },
              { nama: 'Daun Sehat', image: '/sehat.png', color: '#000000ff', bg: 'rgba(21,128,61,0.05)' },
            ].map(({ nama, image, color, bg, border }) => (
              <Link
                key={nama}
                to={`/edukasi/${slugify(nama)}`}
                className="block group relative rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden"
                style={{ background: bg, border: `1.5px solid ${border}` }}
              >
                {/* Glow background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 80%)` }}
                />

                <div className="mb-4 flex flex-col items-center justify-center relative z-10">
                  <img
                    src={image}
                    alt={nama}
                    className="w-20 h-20 sm:w-28 sm:h-28 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{ filter: `drop-shadow(0 12px 20px ${color}40)` }}
                  />
                </div>
                <div className="text-sm sm:text-base font-bold relative z-10 transition-colors duration-300" style={{ color }}>{nama}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-6 pb-24 md:pb-32">
        <div
          className="max-w-2xl mx-auto rounded-3xl p-8 md:p-12 text-center overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Siap Mendeteksi Penyakit Daun?
            </h2>
            <p className="text-emerald-100 mb-8 text-sm md:text-base leading-relaxed">
              Ambil foto daun cabai Anda dan biarkan AI menganalisisnya dalam hitungan detik.
            </p>
            <button
              id="btn-mulai-deteksi-bottom"
              onClick={() => navigate('/deteksi')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-emerald-700 bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              style={{ fontSize: 16 }}
            >
              <Sparkles size={20} />
              Mulai Deteksi Gratis
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
