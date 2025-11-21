import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const faqs = [
  {
    question: "Do I need prior programming experience?",
    answer: "No! Our course starts from zero. We teach Python fundamentals in the first module. Most of our students come from non-technical backgrounds."
  },
  {
    question: "How long does the course take?",
    answer: "The core curriculum is 8 weeks at 8-10 hours per week. However, you have lifetime access, so you can go at your own pace. Many students complete it in 6 weeks."
  },
  {
    question: "What if I don't get a job after completing the course?",
    answer: "Our Elite plan includes a 6-month job guarantee. If you don't land an AI role, we'll work with you for free until you do—or we'll refund 100% of your tuition."
  },
  {
    question: "Is this course suitable for beginners?",
    answer: "Absolutely! We designed Valura Club specifically for beginners and career changers. Our instructors break down complex concepts into digestible pieces."
  },
  {
    question: "Will I really get a verified certificate?",
    answer: "Yes! Your certificate is blockchain-verified and recognized by major tech companies. You can showcase it on LinkedIn, your resume, and portfolio."
  },
  {
    question: "Can I access the course materials forever?",
    answer: "Yes! All plans include lifetime access to course videos, code files, and project templates. New content is added monthly at no extra cost."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes! All plans come with a 30-day money-back guarantee. No questions asked. If the course isn't right for you, we'll refund you fully."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div className="border border-dark-border rounded-lg bg-dark-surface overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
