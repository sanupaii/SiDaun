import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { BookOpen, AlertTriangle, Activity, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react'

// Convert external name cleanly to slug
const slugify = (text) => text.split(' (')[0].toLowerCase().trim().replace(/\s+/g, '-')

// Dummy Data
const dataPenyakit = [
  {
    nama: 'Daun Bercak (Cercospora capsici)',
    deskripsi_singkat: 'Penyakit jamur yang paling sering melanda cabai saat musim hujan akibat kelembapan tinggi.',
    penyebab: 'Infeksi patogen jamur Cercospora capsici yang menyebar melalui percikan air hujan atau tiupan angin.',
    gejala_visual: 'Muncul bercak bundar kecil berwarna coklat pucat dengan tepi gelap. Seiring waktu, bagian tengah bercak bisa memutih memudar dan berlubang.',
    cara_penanganan: 'Segera buang daun yang terinfeksi. Gunakan fungisida berbahan aktif mankozeb secara berkala pada seluruh tanaman untuk mencegah spora jamur berpindah sel.',
    cara_pencegahan: 'Atur jarak tanam agar tajuk tidak terlalu rimbun. Perbaiki saluran air/drainase di sekitar area tanam dan bersihkan daun berguguran penyebab pertumbuhan jamur.',
    icon: AlertTriangle,
    color: '#ea580c',
    bgBadge: 'rgba(234, 88, 12, 0.1)',
    image: '/bercak.png',
  },
  {
    nama: 'Daun Keriting (Aphids / Kutu)',
    deskripsi_singkat: 'Kerusakan struktural pada daun yang diakibatkan oleh hama penghisap cairan sel tanaman yang mengerumuni daun.',
    penyebab: 'Hama parasit mikroskopis seperti kutu daun (aphids), thrips, atau tungau yang bersembunyi di bawah jaringan kulit daun muda.',
    gejala_visual: 'Tepi lembar daun terlihat menggulung ke atas atau ke bawah. Permukaan daun menjadi keriput abnormal, kasar, kaku, dan menyusut secara dramatis.',
    cara_penanganan: 'Respons medis: Semprotkan insektisida atau akarisida berbahan dasar abamektin berulang. Pasang perangkap kuning perekat lalat.',
    cara_pencegahan: 'Menambahkan mulsa perak atau aluminium untuk memantulkan silau dan mengganggu navigasi terbang serangga hama.',
    icon: Activity,
    color: '#a16207',
    bgBadge: 'rgba(161, 98, 7, 0.1)',
    image: '/keriting.png',
  },
  {
    nama: 'Daun Kuning (Virus Gemini)',
    deskripsi_singkat: 'Penyakit genetik viral super agresif dan sangat mematikan bagi sistem imun tanaman cabai.',
    penyebab: 'Infeksi langsung oleh DNA Virus Gemini yang ditularkan lewat air liur lalat vektor berbahaya jenis kutu kebul (Bemisia tabaci).',
    gejala_visual: 'Corak awal: Tulang daun meranggas dan menguning tajam bersinar (vein clearing). Segera menyebar ke seluruh piringan daun lalu memucat.',
    cara_penanganan: 'SANGAT FATAL - TIDAK ADA OBAT untuk virus yang sudah merasuk ke DNA. Tanaman harus SEGERA dicabut ke akar dan dibakar/dijauhkan (eradikasi absolut) agar tidak menular ke kebun lain.',
    cara_pencegahan: 'Semprot protektor vektor kutu kebul dengan pelapis tanaman sejak awal pembuahan. Fokus merotasi varietas cabai hibrida kebal.',
    icon: AlertTriangle,
    color: '#dc2626',
    bgBadge: 'rgba(220, 38, 38, 0.1)',
    image: '/kuning.png',
  },
  {
    nama: 'Daun Sehat (Kondisi Natural)',
    deskripsi_singkat: 'Tanaman tumbuh dalam kondisi imun terbaiknya tanpa ada riwayat deteksi parasit, jamur sel, maupun RNA viral asing.',
    penyebab: 'Pengelolaan ekosistem tanah berkualitas, sinar hidrasi memadai, serta keseimbangan irigasi.',
    gejala_visual: 'Tekstur daun kenyal, berwarna klorofil hijau merata dominan, lebar secara geometris normal tanpa lubang mikro.',
    cara_penanganan: 'Pengecekan konstan mingguan - tidak diperkenankan input kuratif/kimia buatan jika tak ada sinyal reaktif hama.',
    cara_pencegahan: 'Tetapkan pemupukan basis berimbang rasio NPK terstandar. Rajin menggemburkan tanah demi akar bernapas optimal.',
    icon: CheckCircle2,
    color: '#16a34a',
    bgBadge: 'rgba(22, 163, 74, 0.1)',
    image: '/sehat.png',
  }
]

export default function EdukasiPage() {
  const { diseaseId } = useParams()
  const navigate = useNavigate()

  // Match url slug to internal items naturally
  const selected = useMemo(() => {
    if (!diseaseId) return null
    return dataPenyakit.find(item => slugify(item.nama) === diseaseId)
  }, [diseaseId])

  // Efek Highlighting & Auto Scroll
  useEffect(() => {
    if (selected) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selected])

  // ── VIEW: HALAMAN DETAIL (Ketik Item Diklik) ──
  if (selected) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8 pb-28 md:pb-12 flex flex-col gap-6 animate-fade-in relative z-10">
        <button
          onClick={() => navigate(-1)} // Navigasi Histori (-1)
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-medium w-fit mb-2 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Kembali
        </button>

        {/* Efek Border Neon/Highlight via custom style & ring animation */}
        <div
          className="rounded-3xl p-6 md:p-10 transition-all duration-300 bg-white/60 backdrop-blur-md border-[2px] shadow-2xl animate-scale-in"
          style={{ borderColor: selected.color, boxShadow: `0 0 40px ${selected.color}30` }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 rounded-2xl border" style={{ background: selected.bgBadge, borderColor: `${selected.color}30` }}>
              <selected.icon size={26} color={selected.color} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">{selected.nama}</h2>
          </div>

          <p className="text-base font-medium text-slate-600 mb-8 italic leading-relaxed border-l-4 pl-4 border-emerald-400">
            "{selected.deskripsi_singkat}"
          </p>

          {/* Reference Image Focus */}
          <div className="mb-10 flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))', border: `1px dashed ${selected.color}40` }}>
            <img
              src={selected.image}
              alt={`Visualisasi ${selected.nama}`}
              className="w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-500 hover:scale-105"
              style={{ filter: `drop-shadow(0 16px 24px ${selected.color}50)` }}
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-sm md:text-base font-bold text-slate-700 flex items-center gap-2 mb-2">
                <Activity size={18} className="text-emerald-500" />
                Penyebab & Sumber Infeksi
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed bg-white/40 p-4 rounded-xl border border-white/50">{selected.penyebab}</p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-bold text-slate-700 flex items-center gap-2 mb-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Deteksi Gejala Visual
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed bg-white/40 p-4 rounded-xl border border-white/50">{selected.gejala_visual}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div>
                <h3 className="text-sm md:text-base font-bold text-indigo-700 flex items-center gap-2 mb-2">
                  <ShieldCheck size={18} className="text-indigo-500" />
                  Preventif Pencegahan
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50">{selected.cara_pencegahan}</p>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-emerald-800 flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  Langkah Penanganan
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">{selected.cara_penanganan}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── VIEW: HALAMAN MASTER (Grid List) ──
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 pb-28 md:pb-12 flex flex-col gap-8 animate-fade-in relative z-10">

      {/* Header */}
      <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left mb-2">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            <BookOpen size={28} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Ensiklopedia Penyakit</h1>
            <p className="text-sm md:text-base text-slate-500 mt-1">Pilih jenis penyakit di bawah ini untuk melihat pedoman detail dari AI SiDaun.</p>
          </div>
        </div>
      </div>

      {/* Grid Thumbnail Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
        {dataPenyakit.map((item, idx) => (
          <Link
            key={idx}
            to={`/edukasi/${slugify(item.nama)}`}
            className="rounded-3xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer bg-white/50 backdrop-blur-md border border-white/60 shadow flex flex-col items-center justify-center text-center group block"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Reference Image Thumbnail */}
            <div className="mb-4 flex flex-col items-center justify-center p-3 rounded-2xl w-full" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.2))', border: `1px dashed ${item.color}40` }}>
              <img
                src={item.image}
                alt={`Visualisasi ${item.nama}`}
                className="w-24 h-24 md:w-32 md:h-32 object-contain transition-transform duration-500 group-hover:scale-110"
                style={{ filter: `drop-shadow(0 12px 16px ${item.color}30)` }}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 w-full">
              <item.icon size={18} color={item.color} strokeWidth={2.5} className="flex-shrink-0" />
              <h2 className="text-sm md:text-base font-bold text-slate-800 leading-tight">
                {item.nama.split(' (')[0]}
              </h2>
            </div>

            <div className="text-[10px] md:text-xs text-slate-500 font-medium px-3 py-1.5 rounded-full border bg-white/40 transition-colors group-hover:bg-white/80" style={{ borderColor: `${item.color}30` }}>
              Lihat Detail →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
