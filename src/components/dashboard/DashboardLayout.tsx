import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  HomeIcon, 
  UserIcon, 
  BookOpenIcon, 
  AcademicCapIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: HomeIcon },
    { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
    { name: 'My Courses', href: '/dashboard/materials', icon: BookOpenIcon },
    { name: 'Quizzes', href: '/dashboard/quizzes', icon: AcademicCapIcon },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen bg-dark text-white flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 flex-shrink-0 bg-dark-surface border-r border-dark-border 
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="h-16 flex items-center px-6 border-b border-dark-border">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Valura Club
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="ml-auto lg:hidden text-gray-400 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-all duration-200 group
                    ${isActive 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  <item.icon 
                    className={`h-5 w-5 mr-3 ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-white'}`} 
                  />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-dark-border">
            <div className="flex items-center p-3 rounded-lg bg-white/5 mb-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">Member</p>
              </div>
            </div>
            <Link 
              to="/login"
              className="flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 flex items-center px-4 border-b border-dark-border bg-dark-surface">
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white p-2 -ml-2"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <span className="ml-4 text-lg font-semibold text-white">Dashboard</span>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
