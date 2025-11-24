
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white tracking-wider">
              VALURA <span className="text-primary">CLUB</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Beranda</a>
              <a href="#problems" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Tantangan</a>
              <a href="#solutions" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Solusi</a>
              <a href="#features" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Keunggulan</a>
              <a href="#curriculum" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Kurikulum</a>
              <a href="#community" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Komunitas</a>
              <Link to="/register" className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105">Gabung Sekarang</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
