import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import SolutionOverview from './components/SolutionOverview';
import Features from './components/Features';
import ContentPillars from './components/ContentPillars';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Register from './components/Register';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <Features />
      <ContentPillars />
      <Curriculum />
      <Pricing />
      <Community />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
