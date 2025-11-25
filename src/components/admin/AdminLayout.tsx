import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Mock Admin Access Control
  useEffect(() => {
    // In a real app, check for admin role/token here
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      // For demo purposes, we'll just log it, but in production:
      // navigate('/login');
      console.log('Access Control: User is not admin (Mock check)');
    }
  }, [navigate]);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: HomeIcon },
    { name: 'Users', href: '/admin/users', icon: UsersIcon },
    { name: 'Courses', href: '/admin/courses', icon: BookOpenIcon },
    { name: 'Payment History', href: '/admin/payments', icon: ChartBarIcon },
    { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
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
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-bold text-white">V</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Valura Admin
              </span>
            </div>
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
              const isActive = item.href === '/admin'
                ? location.pathname === '/admin'
                : location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-all duration-200 group
                    ${isActive 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border-transparent'
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

          {/* Admin Profile & Logout */}
          <div className="p-4 border-t border-dark-border">
            <div className="flex items-center p-3 rounded-lg bg-white/5 mb-3 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                AD
              </div>
              <div className="ml-3 min-w-0">
                <p className="text-sm font-medium text-white group-hover:text-primary transition-colors truncate">Admin User</p>
                <p className="text-xs text-gray-400 truncate">admin@valura.ai</p>
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
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-dark-border bg-dark-surface">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 hover:text-white p-2 -ml-2 mr-4"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            {/* Global Search - Removed as per request */}
            <div className="hidden md:flex relative max-w-md w-96">
              {/* Search removed */}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white relative">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-dark-surface"></span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-dark">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
