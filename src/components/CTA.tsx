
import { RevealOnScroll } from './RevealOnScroll';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-surface to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Master AI?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 2,000+ professionals building the future with AI. Start your journey today.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#pricing" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:scale-105">
              Enroll Now - Save 30%
            </a>
            <button className="bg-transparent border border-dark-border hover:border-primary/50 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-dark-border">
              Schedule a Free Consultation
            </button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={600}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark rounded-full border border-dark-border">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-300 font-medium">4.9/5 rating from 800+ reviews</span>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-300">30-day money-back guarantee</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTA;
