
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
