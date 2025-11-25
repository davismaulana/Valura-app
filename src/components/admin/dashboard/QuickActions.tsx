
import { 
  PlusIcon, 
  UserPlusIcon, 
  MegaphoneIcon, 
  ArrowUpTrayIcon, 
  DocumentArrowDownIcon 
} from '@heroicons/react/24/outline';

const actions = [
  {
    name: 'Create Course',
    description: 'Start a new course draft',
    icon: PlusIcon,
    color: 'bg-primary',
    hover: 'hover:bg-primary-hover',
  },
  {
    name: 'Add User',
    description: 'Register a new student or admin',
    icon: UserPlusIcon,
    color: 'bg-blue-500',
    hover: 'hover:bg-blue-600',
  },
  {
    name: 'Announcement',
    description: 'Send update to all users',
    icon: MegaphoneIcon,
    color: 'bg-secondary',
    hover: 'hover:bg-secondary-hover',
  },
  {
    name: 'Upload Content',
    description: 'Add videos or documents',
    icon: ArrowUpTrayIcon,
    color: 'bg-green-500',
    hover: 'hover:bg-green-600',
  },
  {
    name: 'Export Reports',
    description: 'Download analytics data',
    icon: DocumentArrowDownIcon,
    color: 'bg-orange-500',
    hover: 'hover:bg-orange-600',
  },
];

const QuickActions = () => {
  return (
    <div className="bg-dark-surface rounded-xl border border-dark-border shadow-sm">
      <div className="p-6 border-b border-dark-border">
        <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-dark-border hover:bg-white/10 transition-all duration-200 group"
          >
            <div className={`h-12 w-12 rounded-full ${action.color} flex items-center justify-center text-white shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-white">{action.name}</span>
            <span className="text-xs text-gray-400 mt-1 text-center">{action.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
