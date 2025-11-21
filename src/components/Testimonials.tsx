
import { RevealOnScroll } from './RevealOnScroll';

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Former Data Analyst → AI Engineer at Google",
    rating: 5,
    quote: "Valura Club gave me the skills and confidence to land my dream job. The capstone project was exactly what tech companies wanted to see. Worth every penny!",
    metric: "Salary increase: +62% | Time to job: 3 months"
  },
  {
    name: "Marcus Williams",
    title: "Founder, AI Startup",
    rating: 5,
    quote: "As a non-technical founder, I went from zero AI knowledge to building my own ML models. The practical focus is what sets this apart from other courses.",
    metric: "3 AI products launched | $500K in funding"
  },
  {
    name: "Priya Patel",
    title: "Data Scientist → Senior ML Engineer at Microsoft",
    rating: 5,
    quote: "The generative AI module alone is worth the entire course price. I'm now leading an AI team of 5 people.",
    metric: "Promotion in 6 months | Team leadership"
  },
  {
    name: "James Rodriguez",
    title: "Career Changer from Marketing to AI",
    rating: 5,
    quote: "Never thought I could learn AI with no tech background. The step-by-step approach made everything click. Highly recommend!",
    metric: "Landed AI role in 4 months | +52% salary"
  },
  {
    name: "Aisha Okafor",
    title: "AI Consultant, Building Her Own Agency",
    rating: 5,
    quote: "The capstone project framework helped me land consulting clients immediately. I've already made back 3x the course cost.",
    metric: "$150K annual consulting revenue"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories from Our Community</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with Valura Club.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-dark border border-dark-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-dark-border pt-4">
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-primary text-sm mb-2">{testimonial.title}</p>
                  <p className="text-xs text-gray-500 font-mono bg-dark-surface inline-block px-2 py-1 rounded border border-dark-border">
                    {testimonial.metric}
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

export default Testimonials;
