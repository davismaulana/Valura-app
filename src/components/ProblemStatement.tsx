import { RevealOnScroll } from './RevealOnScroll';

const problems = [
  {
    title: "Professionals (25-45 thn)",
    icon: "💼",
    pains: [
      "Deadline ketat & tugas administratif menumpuk",
      "Skill analisis data kompleks terbatas",
      "Burnout akibat pekerjaan monoton"
    ]
  },
  {
    title: "Entrepreneurs (24-50 thn)",
    icon: "🚀",
    pains: [
      "Tim & modal terbatas, banyak kerja manual",
      "Sulit buat konten marketing konsisten",
      "Riset pasar minim, takut salah strategi",
      "Customer service lambat karena SDM terbatas"
    ]
  },
  {
    title: "Students (18-25 thn)",
    icon: "🎓",
    pains: [
      "Tugas kuliah menumpuk, deadline singkat",
      "Minim pengalaman kerja/freelance",
      "Bingung mulai side hustle",
      "Kurang PD karena skill terbatas"
    ]
  },
  {
    title: "Side Job Seekers (20-40 thn)",
    icon: "💰",
    pains: [
      "Tidak tahu cara monetisasi dengan AI",
      "Skill teknis minim (design, coding, dll)",
      "Waktu terbatas karena kerjaan utama",
      "Kurang PD dengan kualitas hasil"
    ]
  }
];

const ProblemStatement = () => {
  return (
    <section id="problems" className="py-32 bg-gradient-to-b from-dark-surface via-dark to-dark-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-35">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/25 to-secondary/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-accent/15 to-primary/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-primary/30 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">🎯 Tantangan</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Apakah Anda Mengalami <span className="bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">Masalah Ini?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Banyak orang merasa tertinggal di era AI. Temukan tantangan yang sering dihadapi oleh berbagai kalangan.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-gradient-to-br from-dark/90 via-dark-surface/80 to-dark/90 p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 h-full group hover:shadow-[0_20px_60px_rgba(139,90,111,0.2)] relative overflow-hidden backdrop-blur-sm">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <RevealOnScroll delay={(index * 100) + 200}>
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={(index * 100) + 300}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">{item.title}</h3>
                  </RevealOnScroll>
                  <ul className="space-y-3">
                    {item.pains.map((pain, idx) => (
                      <RevealOnScroll key={idx} delay={(index * 100) + 400 + (idx * 100)}>
                        <li className="flex items-start text-gray-300 text-sm md:text-base leading-relaxed">
                          <span className="text-primary mr-3 mt-1 text-lg">•</span>
                          <span>{pain}</span>
                        </li>
                      </RevealOnScroll>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
