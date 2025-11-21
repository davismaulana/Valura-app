import React from 'react';
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
    <section id="curriculum" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Learning Path</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Complete AI mastery in progressive modules. Each module builds upon the previous, ensuring you develop deep expertise.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/60 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(217,4,41,0.3)]"></div>

          <div className="space-y-16">
            {modules.map((module, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center group`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-primary transform -translate-x-1/2 z-10 mt-8 md:mt-0 shadow-[0_0_15px_rgba(217,4,41,0.5)] transition-transform duration-300 group-hover:scale-125"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pl-24 md:pr-12' : 'md:pr-24 md:pl-12'}`}>
                    <div className={`bg-dark-surface border border-dark-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group-hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-6`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3 border border-primary/20">
                          {module.duration}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                      </div>
                      
                      <ul className={`space-y-3 mb-8 text-gray-400 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className={`flex items-center gap-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                            <span className={`w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 ${index % 2 === 0 ? '' : 'md:order-last'}`}></span>
                            <span className="text-base">{topic}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`pt-6 border-t border-dark-border/50 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-2">Deliverable</p>
                        <div className="inline-flex items-center gap-3 bg-dark px-4 py-3 rounded-xl border border-dark-border/50">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <span className="text-white font-medium">{module.deliverable}</span>
                        </div>
                      </div>
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
