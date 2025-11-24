import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problems', 'solutions', 'features', 'curriculum', 'community'];
      
      // Handle scroll border
      setIsScrolled(window.scrollY > 0);
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Beranda' },
    { id: 'problems', label: 'Tantangan' },
    { id: 'solutions', label: 'Solusi' },
    { id: 'features', label: 'Keunggulan' },
    { id: 'curriculum', label: 'Kurikulum' },
    { id: 'community', label: 'Komunitas' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-dark-border' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="text-xl font-bold text-white tracking-wider">
              VALURA <span className="text-primary">CLUB</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3 py-2 text-sm font-semibold transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>
              ))}
              <Link to="/register" className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105">Gabung Sekarang</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
