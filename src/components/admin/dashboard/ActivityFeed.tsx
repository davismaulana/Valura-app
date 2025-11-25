
import { 
  UserPlusIcon, 
  AcademicCapIcon, 
  CheckCircleIcon, 
  CurrencyDollarIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const activities = [
  {
    id: 1,
    type: 'registration',
    user: 'Sarah Wilson',
    action: 'registered as a new student',
    time: '5 minutes ago',
    icon: UserPlusIcon,
    color: 'text-blue-400 bg-blue-400/10',
  },
  {
    id: 2,
    type: 'enrollment',
    user: 'Michael Chen',
    action: 'enrolled in "Advanced AI Patterns"',
    time: '2 hours ago',
    icon: AcademicCapIcon,
    color: 'text-primary bg-primary/10',
  },
  {
    id: 3,
    type: 'payment',
    user: 'Emma Davis',
    action: 'purchased "Full Stack AI Course"',
    time: '4 hours ago',
    icon: CurrencyDollarIcon,
    color: 'text-green-400 bg-green-400/10',
  },
  {
    id: 4,
    type: 'completion',
    user: 'James Rodriguez',
    action: 'completed "Python Basics"',
    time: 'Yesterday',
    icon: CheckCircleIcon,
    color: 'text-yellow-400 bg-yellow-400/10',
  },
  {
    id: 5,
    type: 'alert',
    user: 'System',
    action: 'High server load detected',
    time: 'Yesterday',
    icon: ExclamationCircleIcon,
    color: 'text-red-400 bg-red-400/10',
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-dark-surface rounded-xl border border-dark-border shadow-sm h-full">
      <div className="p-6 border-b border-dark-border flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        <button className="text-sm text-primary hover:text-primary-light">View All</button>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-dark-border"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-dark-surface ${activity.color}`}>
                        <activity.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-300">
                          <span className="font-medium text-white">{activity.user}</span>{' '}
                          {activity.action}
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
