import { RevealOnScroll } from './RevealOnScroll';

const pillars = [
  {
    title: "AI Insights & Trends",
    description: "Update teknologi AI terkini yang relevan untuk pekerjaan, bisnis, dan kehidupan sehari-hari.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Practical AI Learning",
    description: "Micro learning, tips, dan tutorial singkat yang bisa langsung diaplikasikan.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI for Career & Business",
    description: "Strategi memanfaatkan AI untuk produktivitas profesional dan peluang bisnis baru.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Future of Work & Innovation",
    description: "Topik reflektif tentang perubahan metode kerja dan peran AI di masa depan.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  }
];

const ContentPillars = () => {
  return (
    <section id="curriculum" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apa yang Akan Anda <span className="text-primary">Pelajari?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kurikulum kami dirancang mencakup 4 pilar utama untuk memastikan pemahaman AI yang komprehensif.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-dark-border hover:border-primary/50 transition-all h-80 md:h-80">
                <div className="absolute inset-0">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300 transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                    {pillar.description}
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

export default ContentPillars;
