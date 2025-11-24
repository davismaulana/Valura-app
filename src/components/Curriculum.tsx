
import { RevealOnScroll } from './RevealOnScroll';

const modules = [
  {
    title: "Module 1: AI Fundamentals",
    duration: "Weeks 1-2",
    topics: [
      "Introduction to AI, ML, and Deep Learning basics",
      "Python for AI & NumPy essentials",
      "Data preprocessing and exploratory data analysis",
      "Building your first ML model"
    ],
    deliverable: "Predict house prices using linear regression"
  },
  {
    title: "Module 2: Machine Learning Mastery",
    duration: "Weeks 3-4",
    topics: [
      "Classification algorithms (Decision Trees, SVM, Random Forest)",
      "Regression techniques advanced methods",
      "Model evaluation and hyperparameter tuning",
      "Feature engineering strategies"
    ],
    deliverable: "Build a fraud detection system"
  },
  {
    title: "Module 3: Deep Learning & Neural Networks",
    duration: "Weeks 5-6",
    topics: [
      "Neural network architecture fundamentals",
      "Convolutional Neural Networks (CNNs) for image recognition",
      "Recurrent Neural Networks (RNNs) for sequence data",
      "Transfer learning and pre-trained models"
    ],
    deliverable: "Create an image classification model"
  },
  {
    title: "Module 4: Generative AI & LLMs",
    duration: "Week 7",
    topics: [
      "Large Language Models (ChatGPT, Claude, etc.)",
      "Prompt engineering techniques",
      "Fine-tuning LLMs for specific use cases",
      "Building AI applications with APIs"
    ],
    deliverable: "Build a custom AI chatbot"
  },
  {
    title: "Module 5: Capstone & Real-World Applications",
    duration: "Week 8",
    topics: [
      "Deploy ML models to production",
      "Real-time inference and optimization",
      "Ethical AI and responsible AI practices",
      "Pitching your AI project"
    ],
    deliverable: "Complete end-to-end AI project portfolio piece"
  }
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-32 bg-gradient-to-b from-black via-dark-surface to-black relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-24">
            <div className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">📚 Kurikulum</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Jalur <span className="bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">Pembelajaran Anda</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Kuasai AI secara menyeluruh melalui modul progresif. Setiap modul dibangun berdasarkan modul sebelumnya, memastikan Anda mengembangkan keahlian mendalam.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Enhanced Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/80 to-transparent md:-translate-x-1/2 shadow-[0_0_20px_rgba(139,90,111,0.4)]"></div>

          <div className="space-y-20">
            {modules.map((module, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center group`}>
                  
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-black rounded-full border-4 border-primary transform -translate-x-1/2 z-10 mt-8 md:mt-0 shadow-[0_0_20px_rgba(139,90,111,0.6)] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_30px_rgba(139,90,111,0.8)]"></div>

                  {/* Enhanced Content Card */}
                  <div className={`w-full md:w-7/12 pl-32 md:pl-0 ${index % 2 === 0 ? 'md:pl-32 md:pr-16' : 'md:pr-32 md:pl-16'}`}>
                    <div className={`bg-gradient-to-br from-dark-surface/90 via-dark/80 to-dark border-2 border-primary/20 rounded-3xl p-10 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(139,90,111,0.2)] group-hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-8`}>
                        <RevealOnScroll delay={200}>
                          <span className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-bold tracking-wider uppercase mb-4 border border-primary/30 shadow-lg shadow-primary/10">
                            {module.duration}
                          </span>
                        </RevealOnScroll>
                        <RevealOnScroll delay={300}>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{module.title}</h3>
                        </RevealOnScroll>
                      </div>
                      
                      <RevealOnScroll delay={400}>
                        <ul className={`space-y-3 mb-10 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                          {module.topics.map((topic, idx) => (
                            <li key={idx} className={`flex items-start gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                              <span className={`w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(139,90,111,0.6)] ${index % 2 === 0 ? '' : 'md:order-last'}`}></span>
                              <span className="text-gray-300 text-sm md:text-base leading-relaxed">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </RevealOnScroll>

                      <RevealOnScroll delay={500}>
                        <div className={`pt-8 border-t-2 border-dark-border/70 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                          <p className="text-xs text-primary uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
                            Project Deliverable
                          </p>
                          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-dark to-dark-surface px-6 py-4 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">
                            <div className="p-2.5 bg-primary/15 rounded-xl text-primary shadow-inner">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-white font-semibold text-lg">{module.deliverable}</span>
                          </div>
                        </div>
                      </RevealOnScroll>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
