import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface FilterState {
  roles: string[];
  status: string;
  progressMin: number;
  joinDateStart: string;
  joinDateEnd: string;
}

interface UserFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
}

const UserFilters: React.FC<UserFiltersProps> = ({ isOpen, onClose, onApply }) => {
  const [roles, setRoles] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('');
  const [progressMin, setProgressMin] = useState<number>(0);
  const [joinDateStart, setJoinDateStart] = useState<string>('');
  const [joinDateEnd, setJoinDateEnd] = useState<string>('');

  const handleRoleChange = (role: string) => {
    setRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleApply = () => {
    onApply({ roles, status, progressMin, joinDateStart, joinDateEnd });
    onClose();
  };

  const handleReset = () => {
    setRoles([]);
    setStatus('');
    setProgressMin(0);
    setJoinDateStart('');
    setJoinDateEnd('');
    onApply({ roles: [], status: '', progressMin: 0, joinDateStart: '', joinDateEnd: '' });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-dark-surface border-l border-dark-border shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-dark-border">
            <h2 className="text-lg font-bold text-white">Filters</h2>
            <div className="flex items-center gap-4">
              <button 
                className="text-sm text-primary hover:text-primary-light"
                onClick={() => {
                  setRoles([]);
                  setStatus('');
                  setProgressMin(0);
                  setJoinDateStart('');
                  setJoinDateEnd('');
                }}
              >
                Clear All
              </button>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Role Filter */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Role</h3>
              <div className="space-y-2">
                {['Student', 'Instructor', 'Admin'].map((role) => (
                  <label key={role} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                        checked={roles.includes(role)}
                        onChange={() => handleRoleChange(role)}
                      />
                      <span className="ml-2 text-sm text-gray-300 group-hover:text-white">{role}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Status</h3>
              <div className="space-y-2">
                {['Active', 'Inactive', 'Suspended'].map((s) => (
                  <label key={s} className="flex items-center group cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="bg-dark border-gray-600 text-primary focus:ring-primary"
                      checked={status === s}
                      onChange={() => setStatus(s)}
                    />
                    <span className="ml-2 text-sm text-gray-300 group-hover:text-white">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Join Date Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Join Date</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: 'Last 7 days', days: 7 },
                  { label: 'Last 30 days', days: 30 },
                  { label: 'Last 3 months', days: 90 },
                  { label: 'Last year', days: 365 }
                ].map((period) => (
                  <button 
                    key={period.label}
                    onClick={() => {
                      const date = new Date();
                      date.setDate(date.getDate() - period.days);
                      setJoinDateStart(date.toISOString().split('T')[0]);
                      setJoinDateEnd(new Date().toISOString().split('T')[0]);
                    }}
                    className="px-3 py-2 rounded-lg bg-gray-800 text-xs text-gray-300 hover:bg-gray-700 border border-transparent hover:border-gray-600"
                  >
                    {period.label}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-xs text-gray-500 block mb-1">From</label>
                  <input 
                    type="date" 
                    value={joinDateStart}
                    onChange={(e) => setJoinDateStart(e.target.value)}
                    className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary" 
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">To</label>
                  <input 
                    type="date" 
                    value={joinDateEnd}
                    onChange={(e) => setJoinDateEnd(e.target.value)}
                    className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary" 
                  />
                </div>
              </div>
            </div>

            {/* Progress Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Course Progress (Min: {progressMin}%)</h3>
              <div className="px-2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progressMin}
                  onChange={(e) => setProgressMin(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" 
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-dark-border bg-dark-surface space-y-3">
            <button 
              onClick={handleApply}
              className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-lg shadow-primary/20"
            >
              Apply Filters
            </button>
            <button 
              onClick={handleReset}
              className="w-full py-2.5 rounded-lg border border-dark-border text-gray-300 hover:bg-gray-800 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFilters;
