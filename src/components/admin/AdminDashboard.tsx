
import { 
  UsersIcon, 
  BookOpenIcon, 
  AcademicCapIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import StatCard from './dashboard/StatCard';
import ActivityFeed from './dashboard/ActivityFeed';
import QuickActions from './dashboard/QuickActions';

const data = [
  { name: 'Mon', users: 4000, revenue: 2400 },
  { name: 'Tue', users: 3000, revenue: 1398 },
  { name: 'Wed', users: 2000, revenue: 9800 },
  { name: 'Thu', users: 2780, revenue: 3908 },
  { name: 'Fri', users: 1890, revenue: 4800 },
  { name: 'Sat', users: 2390, revenue: 3800 },
  { name: 'Sun', users: 3490, revenue: 4300 },
];

const courseData = [
  { name: 'AI Basics', students: 120 },
  { name: 'React Pro', students: 98 },
  { name: 'Python Master', students: 86 },
  { name: 'Data Science', students: 99 },
  { name: 'UI/UX Design', students: 85 },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <div className="flex gap-3">
          <select className="bg-dark-surface border-dark-border text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="12,345"
          change="12%"
          changeType="increase"
          icon={UsersIcon}
          color="text-blue-500"
        />
        <StatCard
          title="Active Courses"
          value="48"
          change="4"
          changeType="increase"
          icon={BookOpenIcon}
          color="text-primary"
        />
        <StatCard
          title="Total Enrollments"
          value="1,234"
          change="8%"
          changeType="increase"
          icon={AcademicCapIcon}
          color="text-secondary"
        />
        <StatCard
          title="Total Revenue"
          value="$45,678"
          change="2.4%"
          changeType="decrease"
          icon={CurrencyDollarIcon}
          color="text-green-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-dark-surface rounded-xl border border-dark-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue & User Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5A6F" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5A6F" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6D4558" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6D4558" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2228" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1215', borderColor: '#2D2228', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Area type="monotone" dataKey="users" stroke="#8B5A6F" fillOpacity={1} fill="url(#colorUsers)" />
                <Area type="monotone" dataKey="revenue" stroke="#6D4558" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Chart */}
        <div className="bg-dark-surface rounded-xl border border-dark-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-white mb-6">Top Courses</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2228" horizontal={false} />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="name" type="category" width={100} stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1215', borderColor: '#2D2228', color: '#fff' }}
                  cursor={{ fill: '#2D2228', opacity: 0.4 }}
                />
                <Bar dataKey="students" fill="#8B5A6F" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
