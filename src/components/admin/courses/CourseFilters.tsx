import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface CourseFilterState {
  categories: string[];
  levels: string[];
  status: string;
}

interface CourseFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: CourseFilterState) => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({ isOpen, onClose, onApply }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('');

  const handleCategoryChange = (category: string) => {
    setCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleLevelChange = (level: string) => {
    setLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const handleApply = () => {
    onApply({ categories, levels, status });
    onClose();
  };

  const handleReset = () => {
    setCategories([]);
    setLevels([]);
    setStatus('');
    onApply({ categories: [], levels: [], status: '' });
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
                  setCategories([]);
                  setLevels([]);
                  setStatus('');
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
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Category</h3>
              <div className="space-y-2">
                {['Development', 'Design', 'Business', 'Marketing', 'Data Science'].map((category) => (
                  <label key={category} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                        checked={categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="ml-2 text-sm text-gray-300 group-hover:text-white">{category}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Level</h3>
              <div className="space-y-2">
                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <label key={level} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                        checked={levels.includes(level)}
                        onChange={() => handleLevelChange(level)}
                      />
                      <span className="ml-2 text-sm text-gray-300 group-hover:text-white">{level}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Status</h3>
              <div className="space-y-2">
                {['Published', 'Draft', 'Archived'].map((s) => (
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

export default CourseFilters;
