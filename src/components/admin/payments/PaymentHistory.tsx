import { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import PaymentTable from './PaymentTable';
import PaymentFilters, { type PaymentFilterState } from './PaymentFilters';

const PaymentHistory = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<PaymentFilterState>({
    status: '',
    method: '',
    dateRange: ''
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Payment History</h1>
          <nav className="flex text-sm text-gray-400 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-white">Payments</span>
          </nav>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-dark-surface p-4 rounded-xl border border-dark-border flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-3 w-full md:w-auto flex-1">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
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
            {(filters.status || filters.method || filters.dateRange) && (
              <span className="ml-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {(filters.status ? 1 : 0) + (filters.method ? 1 : 0) + (filters.dateRange ? 1 : 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative min-h-[500px]">
        <PaymentTable searchQuery={searchQuery} filters={filters} />
        
        {/* Filter Sidebar Overlay */}
        <PaymentFilters 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)} 
          onApply={setFilters}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;
