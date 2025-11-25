
import { UserCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { RevealOnScroll } from '../RevealOnScroll';

const Profile = () => {
  const user = {
    name: 'John Doe',
    role: 'Premium Member',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    bio: 'Passionate learner and entrepreneur. Excited to be part of the Valura Club community and grow my skills.',
    joinDate: 'September 2023',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <RevealOnScroll>
        {/* Profile Header Card */}
        <div className="bg-dark-surface rounded-3xl border border-dark-border overflow-hidden shadow-2xl">
          {/* Cover Image */}
          <div className="h-48 w-full bg-gradient-to-r from-primary via-secondary to-dark relative">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="px-8 pb-8">
            <div className="relative flex flex-col md:flex-row items-end -mt-12 mb-6">
              {/* Avatar & Photo Edit */}
              <div className="relative group">
                <div className="h-32 w-32 rounded-3xl border-4 border-dark-surface overflow-hidden shadow-xl bg-dark-surface">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-dark-surface/90 backdrop-blur-sm rounded-xl text-white hover:text-primary border border-white/10 shadow-lg transition-all hover:scale-110 group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-2">
                  <PencilSquareIcon className="h-5 w-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
                <p className="text-primary-light font-medium text-lg">{user.role}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 md:mt-0">
                <button className="px-6 py-3 bg-dark border border-dark-border hover:border-primary/50 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-primary/10 flex items-center font-medium group">
                  <PencilSquareIcon className="h-5 w-5 mr-2 text-gray-400 group-hover:text-primary transition-colors" />
                  Edit Profile
                </button>
                <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20 font-medium">
                  Share Profile
                </button>
              </div>
            </div>

            {/* Quick Stats/Badges Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-white/5">
              <div className="p-4 rounded-2xl bg-dark/50 border border-white/5 flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <UserCircleIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Member Since</p>
                  <p className="font-semibold text-white">{user.joinDate}</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-dark/50 border border-white/5 flex items-center space-x-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="font-semibold text-white">New York</p>
                </div>
              </div>
              {/* Add more stats if needed */}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: About & Contact */}
        <div className="lg:col-span-1 space-y-6">
          <RevealOnScroll delay={200}>
            <div className="bg-dark-surface p-6 rounded-3xl border border-dark-border shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-1 h-6 bg-primary rounded-full mr-3"></span>
                About Me
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {user.bio}
              </p>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center group hover:border-primary/30 transition-colors">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3 group-hover:text-primary transition-colors" />
                  <span className="text-sm text-gray-300">{user.email}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center group hover:border-primary/30 transition-colors">
                  <PhoneIcon className="h-5 w-5 text-gray-400 mr-3 group-hover:text-primary transition-colors" />
                  <span className="text-sm text-gray-300">{user.phone}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: Settings Form */}
        <div className="lg:col-span-2">
          <RevealOnScroll delay={300}>
            <div className="bg-dark-surface p-8 rounded-3xl border border-dark-border shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-secondary rounded-full mr-3"></span>
                Account Settings
              </h3>
              
              <div className="space-y-4">
                {/* Setting Item 1 */}
                <div className="group p-4 rounded-2xl bg-dark/30 border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-primary transition-colors">Email Notifications</h4>
                      <p className="text-sm text-gray-400">Receive updates about new modules</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-12 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                {/* Setting Item 2 */}
                <div className="group p-4 rounded-2xl bg-dark/30 border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-primary transition-colors">Public Profile</h4>
                      <p className="text-sm text-gray-400">Visible to community members</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-12 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                {/* Setting Item 3 */}
                <div className="group p-4 rounded-2xl bg-dark/30 border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-primary transition-colors">Two-Factor Auth</h4>
                      <p className="text-sm text-gray-400">Secure your account</p>
                    </div>
                    <button className="px-4 py-2 bg-white/5 hover:bg-primary text-white text-sm font-medium rounded-lg transition-colors border border-white/10 hover:border-primary">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Profile;
