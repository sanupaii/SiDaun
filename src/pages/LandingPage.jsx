/**
 * src/pages/LandingPage.jsx
 * Halaman utama / landing page SiDaun
 * Menampilkan hero section modern dengan CTA ke halaman deteksi
 */

import { useNavigate, Link } from 'react-router-dom'
import { Leaf, Sparkles, Shield, Zap, ArrowRight, ChevronDown, MapPin, GraduationCap, Activity, Camera, UploadCloud, Cpu, CheckCircle, ArrowDown } from 'lucide-react'

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
  {
    icon: Activity,
    title: 'Akurasi 95%+',
    desc: 'Model AI dilatih untuk mengenali 4 kategori kondisi daun cabai dengan tingkat akurasi tinggi.',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
  },
]

const howItWorks = [
  {
    title: 'Ambil Foto',
    desc: 'Ambil foto daun dari kamera atau pilih dari galeri.',
    icon: Camera,
    color: '#10b981'
  },
  {
    title: 'Kirim Gambar',
    desc: 'Gambar dikirim ke sistem model AI untuk dianalisis.',
    icon: UploadCloud,
    color: '#6366f1'
  },
  {
    title: 'Hasil Deteksi',
    desc: 'Sistem memberikan hasil deteksi dan tingkat akurasi.',
    icon: CheckCircle,
    color: '#8b5cf6'
  },
  {
    title: 'Klasifikasi AI',
    desc: 'Model AI melakukan identifikasi jenis penyakit.',
    icon: Cpu,
    color: '#f59e0b'
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
      <div className="hero-landing-bg">
        <section className="relative flex flex-col items-center md:justify-start justify-center text-center px-6 pt-16 pb-12 md:pt-12 md:pb-10 min-h-[80vh] md:min-h-[75vh] lg:min-h-[70vh]">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold mb-6 md:mb-4 animate-fade-in"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse-green"
              style={{ background: '#34d399' }}
            />
            Mejuah-Juah · Selamat datang di SiDaun
          </div>

          {/* Floating Leaf Icon */}
          <div
            className="w-16 h-16 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-4 animate-float animate-glow"
            style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              boxShadow: '0 6px 30px rgba(16, 185, 129, 0.4)',
            }}
          >
            <Leaf size={32} color="white" strokeWidth={2.5} />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 md:mb-3 animate-slide-up"
            style={{ lineHeight: 1.1, animationDelay: '0.1s' }}
          >
            <span className="text-white drop-shadow-lg">Si</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #34d399, #10b981, #d1fae5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 10px rgba(16,185,129,0.3))',
              }}
            >
              Daun
            </span>
            <br />
            <span className="text-white/90 text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-md">
              Asisten Cerdas Petani Cabai Di Tanah Karo
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm md:text-base lg:text-lg text-white/80 max-w-xl leading-relaxed mb-8 md:mb-6 animate-slide-up"
            style={{ animationDelay: '0.2s', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Deteksi penyakit daun cabai secara instan menggunakan kecerdasan buatan.
            Cukup foto daun Anda AI kami siap menganalisis dalam hitungan detik.
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
          </div>

          {/* Scroll hint */}
          <div className="mt-auto pt-16 md:pt-12 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <span className="text-xs text-white/70 font-bold tracking-wider uppercase">Scroll untuk selengkapnya</span>
            <ChevronDown size={16} className="text-white/60 animate-float" />
          </div>
        </section>
      </div>



      {/* ── Feature Cards ── */}
      <section className="px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-3">
            Kenapa SiDaun?
          </h2>
          <p className="text-center text-slate-600 font-medium mb-10 text-sm md:text-base">
            Teknologi AI terkini untuk membantu petani cabai Di Tanah Karo
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
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
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{desc}</p>
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
          <p className="text-center text-slate-600 font-medium mb-10 text-sm md:text-base">
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

      {/* ── How It Works Section ── */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-3">
            Cara Kerja Model AI
          </h2>
          <p className="text-center text-slate-600 font-medium mb-12 text-sm md:text-base">
            Proses deteksi cerdas yang mudah dan cepat
          </p>

          <div className="relative">
            {/* Desktop Connectors (Z-Pattern) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              {/* Box 1 -> Box 2 (Top Row) */}
              <div className="absolute top-[25%] left-[50%] -translate-x-1/2">
                <ArrowRight size={24} className="text-slate-300" />
              </div>
              {/* Box 2 -> Box 3 (Right Side Drop) */}
              <div className="absolute top-[50%] right-[25%] -translate-y-1/2">
                <ArrowDown size={24} className="text-slate-300" />
              </div>
              {/* Box 3 -> Box 4 (Bottom Row) */}
              <div className="absolute top-[75%] left-[50%] -translate-x-1/2">
                <ArrowRight className="text-slate-300 rotate-180" size={24} />
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16 md:gap-x-24">
              {howItWorks.map((step, i) => (
                <div
                  key={step.title}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${0.1 + i * 0.15}s` }}
                >
                  <div className="container-hijau-pekat p-6 flex items-start gap-5 relative z-10 hover:shadow-md transition-all duration-300">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${step.color}15` }}
                    >
                      <step.icon size={24} color={step.color} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-xs font-black shadow-sm">
                      {i === 2 ? 4 : i === 3 ? 3 : i + 1}
                    </div>
                  </div>

                  {/* Mobile Arrow */}
                  {i < howItWorks.length - 1 && (
                    <div className="md:hidden flex justify-center py-4">
                      <ArrowDown size={20} className="text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button
              id="btn-mulai-deteksi-bottom"
              onClick={() => navigate('/deteksi')}
              className="btn-neon px-12 py-5 text-lg"
            >
              <Sparkles size={22} />
              Coba Sekarang
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
