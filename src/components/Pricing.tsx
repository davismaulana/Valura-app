
import { Link } from 'react-router-dom';
import { RevealOnScroll } from './RevealOnScroll';

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "",
    description: "Best For: Curious learners and hobbyists",
    features: [
      "Full access to all 5 course modules",
      "50+ hours of video lessons",
      "Code templates and project files",
      "Basic certificate of completion",
      "Community access (read-only)",
      "Monthly Q&A webinars"
    ],
    notIncluded: [
      "Job placement support",
      "1-on-1 mentor sessions",
      "Advanced project reviews"
    ],
    cta: "Enroll Now",
    popular: false,
    highlight: "Perfect for self-motivated learners"
  },
  {
    name: "Professional",
    price: "$299",
    period: "",
    description: "Best For: Career-switchers and professionals",
    features: [
      "Full access to all 5 course modules",
      "50+ hours of video lessons + exclusive advanced workshops",
      "Code templates and project files",
      "Verified blockchain certificate",
      "Unlimited community access (ask questions)",
      "Weekly live Q&A sessions with instructors",
      "2 monthly 1-on-1 mentor sessions",
      "Capstone project review & feedback",
      "Resume review and job board access",
      "Interview preparation guide"
    ],
    notIncluded: [
      "Priority support (24-hour response)",
      "Custom project consulting"
    ],
    cta: "Start with Pro",
    popular: true,
    highlight: "Save $100 with annual billing"
  },
  {
    name: "Elite",
    price: "$699",
    period: "",
    description: "Best For: Serious career changers and entrepreneurs",
    features: [
      "All Professional features, PLUS:",
      "Unlimited 1-on-1 mentor sessions",
      "Priority support (1-hour response time)",
      "Custom project consulting (10 hours/month)",
      "Exclusive advanced AI workshops",
      "Direct instructor access via Slack",
      "Guaranteed job matching within 6 months",
      "Lifetime career coaching",
      "Networking events with industry leaders",
      "Early access to new courses"
    ],
    notIncluded: [],
    cta: "Go Elite",
    popular: false,
    highlight: "Includes 6-month money-back guarantee"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-black via-dark to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-primary/30 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">💳 Harga</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Paket Fleksibel untuk <span className="bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">Setiap Pelajar</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan tujuan Anda. Semua paket termasuk akses seumur hidup, materi kursus, dan dukungan komunitas.
            </p>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className={`relative bg-dark-surface rounded-2xl p-8 border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 scale-105 z-10' : 'border-dark-border'} flex flex-col transition-all duration-300 hover:border-primary/30 h-full`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR ⭐
                  </div>
                )}
                <div className="mb-8">
                  <RevealOnScroll delay={200}>
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                    {plan.highlight && (
                       <p className="text-xs font-medium text-primary-light">{plan.highlight}</p>
                    )}
                  </RevealOnScroll>
                </div>
                
                <div className="mb-8 flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <RevealOnScroll key={`feature-${idx}`} delay={400 + (idx * 100)}>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      </RevealOnScroll>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <RevealOnScroll key={`not-included-${idx}`} delay={400 + (plan.features.length * 100) + (idx * 100)}>
                        <li className="flex items-start opacity-50">
                          <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                      </RevealOnScroll>
                    ))}
                  </ul>
                </div>

                <RevealOnScroll delay={400}>
                  <Link to="/register" className={`w-full py-4 rounded-xl font-bold transition-all duration-300 text-center block ${plan.popular ? 'bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50' : 'bg-gradient-to-br from-dark-surface/80 to-dark-border/80 backdrop-blur-sm hover:bg-dark-border text-white border-2 border-dark-border hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20'}`}>
                    {plan.cta}
                  </Link>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={400}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-dark rounded-lg border border-dark-border">
                  <p className="text-white font-semibold">Lifetime Access</p>
                  <p className="text-sm text-gray-400">to all course materials</p>
              </div>
              <div className="p-4 bg-dark rounded-lg border border-dark-border">
                  <p className="text-white font-semibold">30-Day Guarantee</p>
                  <p className="text-sm text-gray-400">money-back on all plans</p>
              </div>
              <div className="p-4 bg-dark rounded-lg border border-dark-border">
                  <p className="text-white font-semibold">2,000+ Students</p>
                  <p className="text-sm text-gray-400">learning with Valura Club</p>
              </div>
              <div className="p-4 bg-dark rounded-lg border border-dark-border">
                  <p className="text-white font-semibold">40% Salary Increase</p>
                  <p className="text-sm text-gray-400">average within 6 months</p>
              </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Pricing;
