
import { Link } from 'react-router-dom';
import { RevealOnScroll } from './RevealOnScroll';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-black via-dark to-dark-surface">
      {/* Enhanced Background Effects with Mesh Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-60">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/30 to-accent/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        <RevealOnScroll>
          <div className="inline-block mb-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 border-2 border-primary/40 backdrop-blur-sm shadow-lg shadow-primary/10">
            <span className="text-primary font-bold text-sm tracking-wider flex items-center gap-2">
              🚀 Memberdayakan Pertumbuhan dengan AI
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
            Valura Club <br />
            <span className="bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">
              Memberdayakan Pertumbuhan dengan AI
            </span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Valura Club membantu orang berkembang melalui AI menjadi lebih produktif, kreatif, dan inovatif.
            AI bukan ancaman, tetapi mitra yang dapat memudahkan tugas rutin dan meningkatkan efisiensi.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={600}>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mb-16">
            <Link to="/register" className="w-full sm:w-auto bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-500 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 border-2 border-primary/60">
              Gabung Valura Club
            </Link>
            <a href="#curriculum" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-dark-surface/80 to-dark-border/80 backdrop-blur-sm border-2 border-dark-border hover:border-primary/60 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all hover:bg-dark-border group shadow-xl hover:shadow-primary/20">
              Jelajahi Jalur Pembelajaran AI
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={800}>
          <div className="mt-16 pt-12 border-t-2 border-dark-border/50 flex flex-wrap justify-center gap-10 text-gray-300 text-base font-semibold">
             <div className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-primary transition-colors">
               <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               <span className="font-semibold">Pemberdayaan</span>
             </div>
             <div className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-primary transition-colors">
               <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <span className="font-semibold">Aksesibilitas</span>
             </div>
             <div className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-primary transition-colors">
               <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
               <span className="font-semibold">Kolaborasi</span>
             </div>
             <div className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-primary transition-colors">
               <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <span className="font-semibold">Inovasi</span>
             </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;
