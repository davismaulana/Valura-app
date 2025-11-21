
import { RevealOnScroll } from './RevealOnScroll';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="text-xl font-bold text-white tracking-wider mb-4 inline-block">
                VALURA <span className="text-primary">CLUB</span>
              </a>
              <p className="text-gray-400 max-w-xs">
                Empowering the next generation of AI leaders with practical skills and industry-recognized certifications.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#curriculum" className="text-gray-400 hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Valura Club. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* Social Icons could go here */}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
