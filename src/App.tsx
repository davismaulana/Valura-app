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
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './components/dashboard/DashboardHome';
import Profile from './components/dashboard/Profile';
import Materials from './components/dashboard/Materials';
import VideoPlayer from './components/dashboard/VideoPlayer';
import QuizList from './components/dashboard/quiz/QuizList';
import QuizInterface from './components/dashboard/quiz/QuizInterface';
import QuizResults from './components/dashboard/quiz/QuizResults';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/users/UserManagement';
import CourseManagement from './components/admin/courses/CourseManagement';
import PaymentHistory from './components/admin/payments/PaymentHistory';
import AdminSettings from './components/admin/settings/AdminSettings';

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
          
          {/* Dashboard Routes */}
          <Route path="/lms" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="materials" element={<Materials />} />
            <Route path="materials/:id" element={<VideoPlayer />} />
            <Route path="quizzes" element={<QuizList />} />
            <Route path="quizzes/:id" element={<QuizInterface />} />
            <Route path="quizzes/:id/results" element={<QuizResults />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="courses" element={<CourseManagement />} />
            <Route path="payments" element={<PaymentHistory />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
