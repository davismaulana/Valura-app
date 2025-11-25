import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayCircleIcon, 
  ClockIcon, 
  AcademicCapIcon, 
  FireIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';
import { RevealOnScroll } from '../RevealOnScroll';
import type { Activity, Deadline } from '../../types';

const DashboardHome = () => {
  // Mock Data
  const stats = [
    { name: 'Total Hours Learned', value: '12.5', icon: ClockIcon, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Courses in Progress', value: '2', icon: PlayCircleIcon, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { name: 'Completed Courses', value: '1', icon: CheckCircleIcon, color: 'text-green-400', bg: 'bg-green-500/10' },
    { name: 'Certificates Earned', value: '1', icon: AcademicCapIcon, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  ];

  const recentActivity: Activity[] = [
    {
      id: '1',
      type: 'video',
      title: 'Introduction to Neural Networks',
      courseTitle: 'Deep Learning Fundamentals',
      timestamp: '2 hours ago',
      progress: 100,
    },
    {
      id: '2',
      type: 'quiz',
      title: 'Python Basics Quiz',
      courseTitle: 'Python for AI',
      timestamp: 'Yesterday',
      progress: 85,
    }
  ];

  const deadlines: Deadline[] = [
    {
      id: '1',
      title: 'Neural Networks Assignment',
      courseTitle: 'Deep Learning Fundamentals',
      dueDate: 'Due Tomorrow',
      type: 'assignment',
      isOverdue: false,
    },
    {
      id: '2',
      title: 'Data Structures Quiz',
      courseTitle: 'Computer Science 101',
      dueDate: 'Overdue by 2 days',
      type: 'quiz',
      isOverdue: true,
    }
  ];

  const nextLesson = {
    title: 'Backpropagation Explained',
    course: 'Deep Learning Fundamentals',
    duration: '15 min',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=300&h=200'
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Section */}
      <RevealOnScroll>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 border border-white/10 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John! 👋</h1>
              <p className="text-gray-300 max-w-xl">
                You're on a 5-day learning streak! Keep it up to earn the "Dedicated Learner" badge.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link 
                  to="/dashboard/materials/1"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium transition-all hover:scale-105 shadow-lg shadow-primary/20"
                >
                  <PlayCircleIcon className="h-5 w-5 mr-2" />
                  Continue: {nextLesson.course}
                </Link>
              </div>
            </div>
            
            {/* Next Lesson Card */}
            <Link to="/dashboard/materials/1" className="hidden md:block bg-dark-surface/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-80 hover:bg-dark-surface/80 transition-colors cursor-pointer group">
              <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Up Next</p>
              <div className="flex gap-3">
                <img src={nextLesson.thumbnail} alt="Thumbnail" className="w-20 h-14 object-cover rounded-lg" />
                <div>
                  <h4 className="text-sm font-medium text-white line-clamp-1 group-hover:text-primary transition-colors">{nextLesson.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{nextLesson.duration} • Video</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </RevealOnScroll>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <RevealOnScroll key={stat.name} delay={index * 50}>
            <div className="bg-dark-surface p-5 rounded-2xl border border-dark-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg h-full flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.name}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Activity */}
          <RevealOnScroll delay={200}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              <Link to="/dashboard/history" className="text-sm text-primary hover:text-primary-light">View All</Link>
            </div>
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div key={item.id} className="bg-dark-surface p-4 rounded-xl border border-dark-border hover:border-primary/30 transition-colors flex items-center gap-4 group">
                  <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                    {item.type === 'video' ? <PlayCircleIcon className="h-6 w-6" /> : <AcademicCapIcon className="h-6 w-6" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.courseTitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block mb-1">{item.timestamp}</span>
                    {item.progress && (
                      <div className="w-20 h-1.5 bg-gray-700 rounded-full overflow-hidden ml-auto">
                        <div className="h-full bg-green-500" style={{ width: `${item.progress}%` }}></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Recommended Module */}
          <RevealOnScroll delay={300}>
            <h2 className="text-xl font-bold text-white mb-4">Recommended for You</h2>
            <div className="bg-dark-surface rounded-2xl border border-dark-border overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative h-48 sm:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Course" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center sm:hidden">
                  <PlayCircleIcon className="h-12 w-12 text-white/80" />
                </div>
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400">Intermediate</span>
                  <span className="text-xs text-gray-400">• 4h 30m</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Advanced Computer Vision</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  Master object detection, segmentation, and facial recognition using state-of-the-art deep learning models.
                </p>
                <Link to="/dashboard/materials/recommended" className="self-start px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10">
                  View Course
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Deadlines Widget */}
          <RevealOnScroll delay={400}>
            <div className="bg-dark-surface rounded-2xl border border-dark-border p-5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <FireIcon className="h-5 w-5 text-orange-500 mr-2" />
                Upcoming Deadlines
              </h3>
              <div className="space-y-4">
                {deadlines.map((deadline) => (
                  <div key={deadline.id} className="flex gap-3 items-start">
                    <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${deadline.isOverdue ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                    <div>
                      <h4 className="text-sm font-medium text-white leading-tight">{deadline.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{deadline.courseTitle}</p>
                      <p className={`text-xs font-medium mt-1 ${deadline.isOverdue ? 'text-red-400' : 'text-yellow-400'}`}>
                        {deadline.dueDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => alert('Calendar feature coming soon!')}
                className="w-full mt-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors border-t border-white/5"
              >
                View Calendar
              </button>
            </div>
          </RevealOnScroll>

          {/* Quick Actions */}
          <RevealOnScroll delay={500}>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 rounded-2xl border border-primary/20 p-5">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-white transition-colors flex items-center justify-between group">
                  <span>Browse Catalog</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-white transition-colors flex items-center justify-between group">
                  <span>Join Community</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-white transition-colors flex items-center justify-between group">
                  <span>Contact Support</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

// Helper component for icons (if needed)
function CheckCircleIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

export default DashboardHome;

