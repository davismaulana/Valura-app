
import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/70 transition-opacity" onClick={onClose} />

        {/* Modal Panel */}
        <div className="relative transform overflow-hidden rounded-2xl bg-dark-surface text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-dark-border">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border">
            <h3 className="text-lg font-bold text-white">Add New User</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
            <form className="space-y-8">
              {/* Basic Info */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-primary uppercase tracking-wider">Basic Information</h4>
                
                {/* Photo Upload */}
                <div className="flex items-center gap-6">
                  <div className="h-24 w-24 rounded-full bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center text-gray-500">
                    <PhotoIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <button type="button" className="px-4 py-2 rounded-lg bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors border border-dark-border">
                      Upload Photo
                    </button>
                    <p className="mt-2 text-xs text-gray-500">JPG, PNG up to 5MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter first name" className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter last name" className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="user@example.com" className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:ring-primary focus:border-primary" />
                </div>
              </div>

              {/* Account Settings */}
              <div className="space-y-4 pt-4 border-t border-dark-border">
                <h4 className="text-sm font-medium text-primary uppercase tracking-wider">Account Settings</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Role <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="cursor-pointer">
                      <input type="radio" name="role" className="peer sr-only" defaultChecked />
                      <div className="rounded-lg border border-dark-border bg-dark p-3 hover:bg-white/5 peer-checked:border-primary peer-checked:bg-primary/10 transition-all">
                        <div className="font-medium text-white">Student</div>
                        <div className="text-xs text-gray-500 mt-1">Can access courses</div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="role" className="peer sr-only" />
                      <div className="rounded-lg border border-dark-border bg-dark p-3 hover:bg-white/5 peer-checked:border-primary peer-checked:bg-primary/10 transition-all">
                        <div className="font-medium text-white">Instructor</div>
                        <div className="text-xs text-gray-500 mt-1">Can manage courses</div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="role" className="peer sr-only" />
                      <div className="rounded-lg border border-dark-border bg-dark p-3 hover:bg-white/5 peer-checked:border-primary peer-checked:bg-primary/10 transition-all">
                        <div className="font-medium text-white">Admin</div>
                        <div className="text-xs text-gray-500 mt-1">Full access</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="password" className="bg-dark border-gray-600 text-primary focus:ring-primary" defaultChecked />
                      <span className="ml-2 text-sm text-gray-300">Auto-generate password</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="password" className="bg-dark border-gray-600 text-primary focus:ring-primary" />
                      <span className="ml-2 text-sm text-gray-300">Set custom password</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-dark-border">
                  <div>
                    <div className="text-sm font-medium text-white">Send Welcome Email</div>
                    <div className="text-xs text-gray-500">User will receive login credentials</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-dark-border bg-gray-800/30 flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-lg shadow-primary/20">
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
