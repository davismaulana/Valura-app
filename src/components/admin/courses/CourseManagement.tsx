import { useState } from 'react';
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  TableCellsIcon,
  Squares2X2Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import CourseList from './CourseList';
import CourseFilters, { type CourseFilterState } from './CourseFilters';

const CourseManagement = () => {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<CourseFilterState>({
    categories: [],
    levels: [],
    status: ''
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Course Management</h1>
          <nav className="flex text-sm text-gray-400 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-white">Courses</span>
          </nav>
        </div>
        <button className="flex items-center px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-lg shadow-primary/20">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Course
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-dark-surface p-4 rounded-xl border border-dark-border flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-3 w-full md:w-auto flex-1">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark border border-dark-border rounded-lg pl-10 pr-10 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            )}
          </div>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center px-4 py-2 rounded-lg border border-dark-border text-gray-300 hover:bg-gray-800 transition-colors relative"
          >
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filters
            {(filters.categories.length > 0 || filters.levels.length > 0 || filters.status) && (
              <span className="ml-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {(filters.categories.length > 0 ? 1 : 0) + (filters.levels.length > 0 ? 1 : 0) + (filters.status ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center bg-dark border border-dark-border rounded-lg p-1">
          <button 
            onClick={() => setViewMode('table')}
            className={`p-2 rounded-md transition-colors ${viewMode === 'table' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <TableCellsIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <Squares2X2Icon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative min-h-[500px]">
        <CourseList viewMode={viewMode} searchQuery={searchQuery} filters={filters} />
        
        {/* Filter Sidebar Overlay */}
        <CourseFilters 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)} 
          onApply={setFilters}
        />
      </div>
    </div>
  );
};

export default CourseManagement;
