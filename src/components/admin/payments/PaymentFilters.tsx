import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface PaymentFilterState {
  status: string;
  method: string;
  dateRange: string;
}

interface PaymentFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: PaymentFilterState) => void;
}

const PaymentFilters: React.FC<PaymentFiltersProps> = ({ isOpen, onClose, onApply }) => {
  const [status, setStatus] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [dateRange, setDateRange] = useState<string>('');

  const handleApply = () => {
    onApply({ status, method, dateRange });
    onClose();
  };

  const handleReset = () => {
    setStatus('');
    setMethod('');
    setDateRange('');
    onApply({ status: '', method: '', dateRange: '' });
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
                onClick={handleReset}
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
            {/* Status Filter */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Status</h3>
              <div className="space-y-2">
                {['Completed', 'Pending', 'Failed', 'Refunded'].map((s) => (
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

            {/* Payment Method Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Payment Method</h3>
              <div className="space-y-2">
                {['Credit Card', 'PayPal', 'Bank Transfer'].map((m) => (
                  <label key={m} className="flex items-center group cursor-pointer">
                    <input 
                      type="radio" 
                      name="method" 
                      className="bg-dark border-gray-600 text-primary focus:ring-primary"
                      checked={method === m}
                      onChange={() => setMethod(m)}
                    />
                    <span className="ml-2 text-sm text-gray-300 group-hover:text-white">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Range Filter */}
            <div className="border-t border-dark-border pt-6">
              <h3 className="text-sm font-medium text-white mb-3">Date Range</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Last 7 days', value: '7d' },
                  { label: 'Last 30 days', value: '30d' },
                  { label: 'Last 3 months', value: '3m' },
                  { label: 'Last year', value: '1y' }
                ].map((period) => (
                  <button 
                    key={period.label}
                    onClick={() => setDateRange(period.value)}
                    className={`px-3 py-2 rounded-lg text-xs border ${
                      dateRange === period.value 
                        ? 'bg-primary/10 text-primary border-primary' 
                        : 'bg-gray-800 text-gray-300 border-transparent hover:border-gray-600'
                    }`}
                  >
                    {period.label}
                  </button>
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

export default PaymentFilters;
