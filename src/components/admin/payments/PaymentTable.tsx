import { useState, useMemo } from 'react';
import { 
  EyeIcon, 
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline';
import { type PaymentFilterState } from './PaymentFilters';

interface PaymentTableProps {
  searchQuery: string;
  filters?: PaymentFilterState;
}

interface Payment {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  item: string;
  amount: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed' | 'Refunded';
  method: string;
}

const initialPayments: Payment[] = [
  {
    id: 'TRX-987654',
    user: { name: 'Alice Johnson', email: 'alice@example.com', avatar: 'AJ' },
    item: 'Advanced AI Patterns',
    amount: '$99.99',
    date: '2023-11-24',
    status: 'Completed',
    method: 'Credit Card'
  },
  {
    id: 'TRX-987655',
    user: { name: 'Bob Smith', email: 'bob@example.com', avatar: 'BS' },
    item: 'React Performance Masterclass',
    amount: '$79.99',
    date: '2023-11-23',
    status: 'Pending',
    method: 'PayPal'
  },
  {
    id: 'TRX-987656',
    user: { name: 'Charlie Brown', email: 'charlie@example.com', avatar: 'CB' },
    item: 'Full Stack Modern Web',
    amount: '$129.99',
    date: '2023-11-22',
    status: 'Failed',
    method: 'Credit Card'
  },
  {
    id: 'TRX-987657',
    user: { name: 'Diana Prince', email: 'diana@example.com', avatar: 'DP' },
    item: 'UI/UX Design Principles',
    amount: '$49.99',
    date: '2023-11-21',
    status: 'Refunded',
    method: 'Credit Card'
  },
  {
    id: 'TRX-987658',
    user: { name: 'Evan Wright', email: 'evan@example.com', avatar: 'EW' },
    item: 'Business Strategy 101',
    amount: '$39.99',
    date: '2023-11-20',
    status: 'Completed',
    method: 'PayPal'
  }
];

const PaymentTable = ({ searchQuery, filters }: PaymentTableProps) => {
  const [payments] = useState<Payment[]>(initialPayments);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Payment | 'user.name'; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter and Sort Logic
  const filteredPayments = useMemo(() => {
    let result = [...payments];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(payment => 
        payment.id.toLowerCase().includes(query) ||
        payment.user.name.toLowerCase().includes(query) ||
        payment.user.email.toLowerCase().includes(query) ||
        payment.item.toLowerCase().includes(query)
      );
    }

    // Filters
    if (filters) {
      if (filters.status) {
        result = result.filter(payment => payment.status === filters.status);
      }
      if (filters.method) {
        result = result.filter(payment => payment.method === filters.method);
      }
      // Date range logic would go here
    }

    // Sort
    if (sortConfig) {
      result.sort((a, b) => {
        let aValue: any = a[sortConfig.key as keyof Payment];
        let bValue: any = b[sortConfig.key as keyof Payment];

        if (sortConfig.key === 'user.name') {
          aValue = a.user.name;
          bValue = b.user.name;
        }

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [payments, searchQuery, filters, sortConfig]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof Payment | 'user.name') => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="space-y-4">
      <div className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-dark-border text-xs uppercase text-gray-400">
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('id')}>
                  <div className="flex items-center gap-1">Transaction ID <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('user.name')}>
                  <div className="flex items-center gap-1">User <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('item')}>
                  <div className="flex items-center gap-1">Item <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('amount')}>
                  <div className="flex items-center gap-1">Amount <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-1">Date <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('status')}>
                  <div className="flex items-center gap-1">Status <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              {paginatedPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-primary/5 transition-colors group">
                  <td className="p-4 text-sm font-mono text-gray-300">{payment.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                        {payment.user.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{payment.user.name}</div>
                        <div className="text-xs text-gray-500">{payment.user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{payment.item}</td>
                  <td className="p-4 text-sm font-bold text-white">{payment.amount}</td>
                  <td className="p-4 text-sm text-gray-400">{payment.date}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      payment.status === 'Completed' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : payment.status === 'Pending'
                        ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        : payment.status === 'Failed'
                        ? 'bg-red-500/10 text-red-400 border-red-500/20'
                        : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => alert('View Invoice')} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="View Invoice">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button onClick={() => alert('Refund')} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Refund">
                        <ArrowPathIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          Showing <span className="font-medium text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium text-white">{Math.min(currentPage * itemsPerPage, filteredPayments.length)}</span> of <span className="font-medium text-white">{filteredPayments.length}</span> results
        </div>
        <div className="flex items-center gap-4">
          <select 
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="bg-dark border border-dark-border rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-primary"
          >
            <option value={10}>10 per page</option>
            <option value={25}>25 per page</option>
            <option value={50}>50 per page</option>
          </select>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-dark-border text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-dark-border text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
