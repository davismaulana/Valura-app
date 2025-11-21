

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
    <section id="pricing" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Plans for Every Learner</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your goals. All plans include lifetime access, course materials, and community support.
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
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  {plan.highlight && (
                     <p className="text-xs font-medium text-primary-light">{plan.highlight}</p>
                  )}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start opacity-50">
                      <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25' : 'bg-dark-surface hover:bg-dark-border text-white border border-dark-border hover:border-primary/50'}`}>
                  {plan.cta}
                </button>
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
