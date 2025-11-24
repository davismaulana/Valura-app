import { RevealOnScroll } from './RevealOnScroll';

const solutions = [
  {
    title: "Professionals",
    description: "AI untuk laporan, presentasi cepat, ringkasan dokumen, dan panduan efisiensi kerja.",
    icon: "⚡"
  },
  {
    title: "Entrepreneurs",
    description: "AI untuk marketing, riset pasar, chatbot CS, dan template strategi bisnis.",
    icon: "📈"
  },
  {
    title: "Students",
    description: "AI untuk riset, desain akademik, portofolio kreatif, dan panduan freelance.",
    icon: "🎓"
  },
  {
    title: "Side Job Seekers",
    description: "AI untuk jasa online, bisnis kecil, panduan praktis, dan template siap pakai.",
    icon: "💸"
  }
];

const SolutionOverview = () => {
  return (
    <section id="solutions" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Valura Club Hadir Sebagai <span className="text-primary">Solusi</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami menyediakan platform edukasi AI yang relevan, praktis, dan aplikatif untuk membantu Anda berkembang.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="flex items-start p-6 rounded-xl bg-dark-surface border border-dark-border hover:border-primary/50 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mr-4 group-hover:bg-primary/20 transition-colors">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
