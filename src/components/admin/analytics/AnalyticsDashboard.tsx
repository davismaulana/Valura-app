import { 
  ArrowDownIcon, 
  ArrowUpIcon,
  CurrencyDollarIcon,
  UsersIcon,
  AcademicCapIcon,
  ClockIcon
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
  PieChart,
  Pie,
  Cell
} from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
];

const engagementData = [
  { name: 'Video', value: 400 },
  { name: 'Quiz', value: 300 },
  { name: 'Assignment', value: 300 },
  { name: 'Forum', value: 200 },
];

const COLORS = ['#8B5A6F', '#6D4558', '#A67B8F', '#4A303C'];

const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-gray-400 mt-1">Detailed insights into your platform's performance</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-dark-surface border-dark-border text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up', icon: CurrencyDollarIcon, color: 'text-green-400' },
          { title: 'Active Students', value: '2,345', change: '+15.2%', trend: 'up', icon: UsersIcon, color: 'text-blue-400' },
          { title: 'Course Completion', value: '68%', change: '-2.4%', trend: 'down', icon: AcademicCapIcon, color: 'text-purple-400' },
          { title: 'Avg. Watch Time', value: '45m', change: '+5.4%', trend: 'up', icon: ClockIcon, color: 'text-orange-400' },
        ].map((stat, index) => (
          <div key={index} className="bg-dark-surface border border-dark-border rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <h3 className="mt-2 text-3xl font-bold text-white">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg bg-white/5`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              {stat.trend === 'up' ? (
                <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={`font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Revenue Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5A6F" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5A6F" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2228" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1215', borderColor: '#2D2228', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#8B5A6F" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">User Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2228" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1215', borderColor: '#2D2228', color: '#fff' }}
                  cursor={{ fill: '#2D2228', opacity: 0.4 }}
                />
                <Bar dataKey="users" fill="#6D4558" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Distribution */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Engagement Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {engagementData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1215', borderColor: '#2D2228', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {engagementData.map((entry, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span className="text-sm text-gray-400">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Courses */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Top Performing Courses</h3>
          <div className="space-y-4">
            {[
              { name: 'Advanced AI Patterns', students: 1234, rating: 4.8, revenue: '$12,340' },
              { name: 'React Performance', students: 856, rating: 4.9, revenue: '$8,560' },
              { name: 'Full Stack Web', students: 2341, rating: 4.7, revenue: '$23,410' },
              { name: 'Python for Data Science', students: 1567, rating: 4.6, revenue: '$15,670' },
              { name: 'UI/UX Design Principles', students: 987, rating: 4.8, revenue: '$9,870' },
            ].map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{course.name}</p>
                    <p className="text-xs text-gray-500">{course.students} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{course.revenue}</p>
                  <p className="text-xs text-yellow-500 flex items-center justify-end gap-1">
                    ★ {course.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
