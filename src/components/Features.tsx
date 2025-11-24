import { RevealOnScroll } from './RevealOnScroll';

const features = [
  {
    title: "Platform Edukasi & Komunitas",
    description: "Kombinasi pembelajaran AI terstruktur dengan ruang kolaborasi komunitas yang suportif.",
    icon: "🤝"
  },
  {
    title: "Inspiratif, Praktis, dan Aplikatif",
    description: "Konten yang langsung bisa dipraktikkan untuk kebutuhan nyata, bukan sekadar teori.",
    icon: "💡"
  },
  {
    title: "Human-Centered Approach",
    description: "Menempatkan AI sebagai partner yang memberdayakan, bukan pengganti manusia.",
    icon: "❤️"
  },
  {
    title: "Relevansi Multi-Segmen",
    description: "Materi yang disesuaikan untuk Profesional, Entrepreneur, Mahasiswa, dan Pencari Peluang.",
    icon: "🎯"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-black via-dark-surface to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/25 to-primary/15 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-primary/30 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">✨ Keunggulan</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mengapa Memilih <span className="bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">Valura Club?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Kami menawarkan pendekatan berbeda dalam mempelajari AI yang fokus pada pemberdayaan dan hasil nyata.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-gradient-to-br from-dark-surface/90 via-dark/80 to-dark-surface/70 p-10 rounded-3xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 h-full group hover:shadow-[0_20px_60px_rgba(139,90,111,0.2)] relative overflow-hidden backdrop-blur-sm">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/25 to-accent/15 rounded-2xl flex items-center justify-center text-5xl mb-8 group-hover:scale-110 group-hover:from-primary/35 group-hover:to-accent/25 transition-all duration-500 shadow-lg shadow-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
