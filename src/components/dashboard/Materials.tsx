import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayCircleIcon, 
  LockClosedIcon, 
  CheckCircleIcon,
  ClockIcon,
  ArrowsUpDownIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid';
import { RevealOnScroll } from '../RevealOnScroll';
import type { Course } from '../../types';

const CourseList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Mock Data
  const courses: Course[] = [
    {
      id: '1',
      title: 'Deep Learning Fundamentals',
      description: 'Understanding the core concepts and history of Artificial Intelligence.',
      thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=400',
      instructor: { name: 'Dr. Sarah Smith', avatar: '' },
      duration: '12h 30m',
      level: 'Beginner',
      modulesCount: 12,
      progress: 45,
      status: 'in-progress',
      lastAccessed: '2023-11-24'
    },
    {
      id: '2',
      title: 'Advanced Computer Vision',
      description: 'Master object detection, segmentation, and facial recognition.',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400',
      instructor: { name: 'Prof. Alan Turing', avatar: '' },
      duration: '15h 45m',
      level: 'Advanced',
      modulesCount: 15,
      progress: 0,
      status: 'not-started',
    },
    {
      id: '3',
      title: 'Natural Language Processing',
      description: 'Build chatbots and language models with Python.',
      thumbnail: 'https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=600&h=400',
      instructor: { name: 'Jane Doe', avatar: '' },
      duration: '10h 15m',
      level: 'Intermediate',
      modulesCount: 10,
      progress: 100,
      status: 'completed',
      lastAccessed: '2023-10-15'
    },
    {
      id: '4',
      title: 'Reinforcement Learning',
      description: 'Train agents to play games and solve complex problems.',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400',
      instructor: { name: 'John Smith', avatar: '' },
      duration: '18h 00m',
      level: 'Advanced',
      modulesCount: 18,
      progress: 10,
      status: 'in-progress',
      lastAccessed: '2023-11-20'
    }
  ];

  // Filter and Sort Logic
  const filteredCourses = courses.filter(course => {
    const matchesTab = activeTab === 'all' || course.status === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'progress') return b.progress - a.progress;
    if (sortBy === 'alphabetical') return a.title.localeCompare(b.title);
    // Default to recent (mock logic)
    return 0;
  });

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <RevealOnScroll>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
            <p className="text-gray-400">Manage your learning journey and track your progress.</p>
          </div>
        </RevealOnScroll>
        
        {/* Controls */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-dark-surface border border-dark-border rounded-xl pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <ArrowsUpDownIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-48 bg-dark-surface border border-dark-border rounded-xl pl-10 pr-8 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="recent">Recently Accessed</option>
                <option value="progress">Progress (High to Low)</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Filter Tabs */}
      <RevealOnScroll delay={150}>
        <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'in-progress', label: 'In Progress' },
            { id: 'completed', label: 'Completed' },
            { id: 'not-started', label: 'Not Started' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeTab === tab.id 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                  : 'bg-dark-surface text-gray-400 border-dark-border hover:text-white hover:border-gray-600'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <RevealOnScroll key={course.id} delay={index * 100}>
            <div 
              className={`
                group relative bg-dark-surface rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                ${course.status === 'not-started'
                  ? 'border-dark-border hover:border-gray-600' 
                  : 'border-dark-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2'
                }
              `}
            >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {course.status === 'completed' ? (
                  <span className="bg-green-500/20 backdrop-blur-sm text-green-400 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-green-500/20">
                    <CheckCircleIcon className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                ) : course.status === 'in-progress' ? (
                  <span className="bg-primary/20 backdrop-blur-sm text-primary-light px-3 py-1 rounded-full text-xs font-medium flex items-center border border-primary/20">
                    <PlayCircleIcon className="h-3 w-3 mr-1" />
                    In Progress
                  </span>
                ) : (
                  <span className="bg-gray-500/20 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-gray-500/20">
                    <LockClosedIcon className="h-3 w-3 mr-1" />
                    Not Started
                  </span>
                )}
              </div>

              {/* Progress Bar Overlay */}
              {course.status !== 'not-started' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div 
                    className={`h-full ${course.status === 'completed' ? 'bg-green-500' : 'bg-primary'}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  course.level === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                  course.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-purple-500/10 text-purple-400'
                }`}>
                  {course.level}
                </span>
                <span className="text-xs text-gray-500 flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {course.duration}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pt-4 border-t border-white/5">
                <span className="flex items-center">
                  <span className="text-white font-medium mr-1">{course.modulesCount}</span> Modules
                </span>
                {course.status === 'in-progress' && (
                  <span className="text-primary-light">{course.progress}% Complete</span>
                )}
              </div>

              <Link 
                to={`/dashboard/materials/${course.id}`}
                className={`
                  block w-full py-3 rounded-xl font-medium text-center transition-all shadow-lg 
                  ${course.status === 'completed' 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-primary hover:bg-primary-hover text-white shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]'
                  }
                `}
              >
                {course.status === 'completed' ? 'Review Course' : course.status === 'in-progress' ? 'Continue Learning' : 'Start Course'}
              </Link>
            </div>
          </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
