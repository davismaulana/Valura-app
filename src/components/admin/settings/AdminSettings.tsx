import { useState } from 'react';
import { 
  UserCircleIcon, 
  ShieldCheckIcon, 
  BellIcon, 
  GlobeAltIcon,
  CreditCardIcon,
  SwatchIcon
} from '@heroicons/react/24/outline';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'General', icon: GlobeAltIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'billing', name: 'Billing', icon: CreditCardIcon },
    { id: 'appearance', name: 'Appearance', icon: SwatchIcon },
    { id: 'team', name: 'Team Members', icon: UserCircleIcon },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your platform configuration</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${activeTab === tab.id 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                  }
                `}
              >
                <tab.icon className={`mr-3 h-5 w-5 ${activeTab === tab.id ? 'text-primary' : 'text-gray-500'}`} />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-dark-surface border border-dark-border rounded-xl p-6 lg:p-8">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white mb-4">Platform Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Platform Name</label>
                    <input type="text" defaultValue="Valura Club" className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Support Email</label>
                    <input type="email" defaultValue="support@valura.ai" className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea rows={4} defaultValue="The premier platform for AI education." className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary" />
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-dark-border">
                <h2 className="text-lg font-bold text-white mb-4">Localization</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
                    <select className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary">
                      <option>English (US)</option>
                      <option>French (FR)</option>
                      <option>Spanish (ES)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Timezone</label>
                    <select className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary">
                      <option>UTC-05:00 (Eastern Time)</option>
                      <option>UTC+00:00 (London)</option>
                      <option>UTC+01:00 (Paris)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white mb-4">Authentication</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-dark border border-dark-border">
                    <div>
                      <h3 className="text-sm font-medium text-white">Two-Factor Authentication (2FA)</h3>
                      <p className="text-xs text-gray-500">Require 2FA for all admin accounts</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-dark border border-dark-border">
                    <div>
                      <h3 className="text-sm font-medium text-white">Password Expiry</h3>
                      <p className="text-xs text-gray-500">Force password reset every 90 days</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white mb-4">Email Notifications</h2>
                <div className="space-y-4">
                  {[
                    'New user registration',
                    'Course enrollment',
                    'Payment successful',
                    'New support ticket',
                    'System alerts'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-dark-border last:border-0">
                      <span className="text-sm text-gray-300">{item}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={index < 3} />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {['billing', 'appearance', 'team'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="p-4 rounded-full bg-white/5 mb-4">
                <SwatchIcon className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-white">Coming Soon</h3>
              <p className="text-gray-400 mt-2">This section is currently under development.</p>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-8 pt-6 border-t border-dark-border flex justify-end">
            <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-lg shadow-primary/20">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
