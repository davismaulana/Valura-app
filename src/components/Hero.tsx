

import { RevealOnScroll } from './RevealOnScroll';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-dark to-dark-surface">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <span className="text-accent font-semibold text-sm tracking-wide">
              🎯 30% OFF First 100 Enrollments | Lifetime Access | Money-Back Guarantee
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Master AI in 8 Weeks — <br />
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              From Beginner to Industry-Ready
            </span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Learn cutting-edge AI fundamentals, machine learning, and generative AI with hands-on projects. 
            Join <span className="text-white font-semibold">2,000+ professionals</span> already building their AI careers.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={600}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a href="#pricing" className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-primary/25 hover:scale-105 hover:shadow-primary/40">
              Start Your Free Trial
            </a>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-dark-surface border border-dark-border hover:border-primary/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-dark-border group">
              <svg className="w-6 h-6 text-primary group-hover:text-primary-light transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch 5-Min Demo
            </button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={800}>
          <div className="mt-12 pt-8 border-t border-dark-border/50 flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-medium">
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               4.9/5 Rating
             </div>
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               Verified Certificates
             </div>
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               Lifetime Access
             </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;
