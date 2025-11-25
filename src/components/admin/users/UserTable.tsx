import { useState, useMemo } from 'react';
import { 
  EllipsisVerticalIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon, 
  KeyIcon, 
  EnvelopeIcon,
  NoSymbolIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';

interface UserTableProps {
  viewMode: 'table' | 'grid';
  searchQuery: string;
  filters?: {
    roles: string[];
    status: string;
    progressMin: number;
    joinDateStart: string;
    joinDateEnd: string;
  };
}

// Mock Data
const initialUsers = [
  { id: 'USR-00123', name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active', courses: 5, joinDate: 'Nov 12, 2023', lastActive: '2 hours ago', progress: 67, photo: null },
  { id: 'USR-00124', name: 'Jane Smith', email: 'jane@example.com', role: 'Instructor', status: 'Active', courses: 2, joinDate: 'Oct 25, 2023', lastActive: '5 mins ago', progress: 100, photo: null },
  { id: 'USR-00125', name: 'Mike Johnson', email: 'mike@example.com', role: 'Admin', status: 'Inactive', courses: 0, joinDate: 'Sep 10, 2023', lastActive: '30 days ago', progress: 0, photo: null },
  { id: 'USR-00126', name: 'Sarah Williams', email: 'sarah@example.com', role: 'Student', status: 'Active', courses: 3, joinDate: 'Dec 01, 2023', lastActive: '1 day ago', progress: 45, photo: null },
  { id: 'USR-00127', name: 'David Brown', email: 'david@example.com', role: 'Student', status: 'Suspended', courses: 1, joinDate: 'Jan 15, 2024', lastActive: '1 week ago', progress: 12, photo: null },
  { id: 'USR-00128', name: 'Emily Davis', email: 'emily@example.com', role: 'Instructor', status: 'Active', courses: 4, joinDate: 'Feb 20, 2024', lastActive: '3 hours ago', progress: 88, photo: null },
  { id: 'USR-00129', name: 'James Wilson', email: 'james@example.com', role: 'Student', status: 'Active', courses: 6, joinDate: 'Mar 05, 2024', lastActive: '10 mins ago', progress: 75, photo: null },
  { id: 'USR-00130', name: 'Linda Martinez', email: 'linda@example.com', role: 'Student', status: 'Inactive', courses: 2, joinDate: 'Apr 12, 2024', lastActive: '2 months ago', progress: 30, photo: null },
  { id: 'USR-00131', name: 'Robert Taylor', email: 'robert@example.com', role: 'Admin', status: 'Active', courses: 0, joinDate: 'May 22, 2024', lastActive: '1 hour ago', progress: 0, photo: null },
  { id: 'USR-00132', name: 'Patricia Anderson', email: 'patricia@example.com', role: 'Student', status: 'Active', courses: 4, joinDate: 'Jun 30, 2024', lastActive: '4 days ago', progress: 55, photo: null },
  { id: 'USR-00133', name: 'Michael Thomas', email: 'michael@example.com', role: 'Instructor', status: 'Active', courses: 3, joinDate: 'Jul 18, 2024', lastActive: '20 mins ago', progress: 92, photo: null },
  { id: 'USR-00134', name: 'Jennifer Jackson', email: 'jennifer@example.com', role: 'Student', status: 'Active', courses: 5, joinDate: 'Aug 09, 2024', lastActive: '1 week ago', progress: 60, photo: null },
];

const UserTable = ({ viewMode, searchQuery, filters }: UserTableProps) => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter Users
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      // Search Filter
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.toLowerCase().includes(searchQuery.toLowerCase());

      // Role Filter
      const matchesRole = !filters?.roles.length || filters.roles.includes(user.role);

      // Status Filter
      const matchesStatus = !filters?.status || user.status === filters.status;

      // Progress Filter
      const matchesProgress = !filters?.progressMin || user.progress >= filters.progressMin;

      // Date Filter
      let matchesDate = true;
      if (filters?.joinDateStart || filters?.joinDateEnd) {
        const userDate = new Date(user.joinDate);
        if (filters.joinDateStart) {
          matchesDate = matchesDate && userDate >= new Date(filters.joinDateStart);
        }
        if (filters.joinDateEnd) {
          // Add 1 day to include the end date fully
          const endDate = new Date(filters.joinDateEnd);
          endDate.setDate(endDate.getDate() + 1);
          matchesDate = matchesDate && userDate < endDate;
        }
      }

      return matchesSearch && matchesRole && matchesStatus && matchesProgress && matchesDate;
    });
  }, [users, searchQuery, filters]);

  // Sort Users
  const sortedUsers = useMemo(() => {
    let sortableUsers = [...filteredUsers];
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        // @ts-ignore
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        // @ts-ignore
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [filteredUsers, sortConfig]);

  // Paginate Users
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  const toggleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map(u => u.id));
    }
  };

  const toggleSelectUser = (id: string) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(u => u !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleAction = (action: string, userName: string) => {
    alert(`${action} action triggered for ${userName}`);
  };

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {paginatedUsers.map((user) => (
          <div key={user.id} className="bg-dark-surface border border-dark-border rounded-xl p-4 hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{user.name}</h3>
                  <p className="text-xs text-gray-400">{user.role}</p>
                </div>
              </div>
              <div className="relative group/card-actions">
                <button className="text-gray-400 hover:text-white">
                  <EllipsisVerticalIcon className="h-5 w-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-dark-surface border border-dark-border rounded-lg shadow-xl opacity-0 invisible group-hover/card-actions:opacity-100 group-hover/card-actions:visible transition-all z-50">
                  <div className="py-1">
                    <button onClick={() => handleAction('View', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      <EyeIcon className="h-4 w-4 mr-2" /> View Details
                    </button>
                    <button onClick={() => handleAction('Edit', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      <PencilIcon className="h-4 w-4 mr-2" /> Edit User
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300">
                      <TrashIcon className="h-4 w-4 mr-2" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Status</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  user.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-gray-700 text-gray-400'
                }`}>{user.status}</span>
              </div>
              <div className="flex justify-between">
                <span>Courses</span>
                <span className="text-white">{user.courses}</span>
              </div>
              <div className="flex justify-between">
                <span>Progress</span>
                <span className="text-white">{user.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-dark-border text-xs uppercase text-gray-400">
              <th className="p-4 w-12 sticky left-0 bg-dark-surface z-10">
                <input 
                  type="checkbox" 
                  checked={paginatedUsers.length > 0 && selectedUsers.length === paginatedUsers.length}
                  onChange={toggleSelectAll}
                  className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                />
              </th>
              <th className="p-4 font-medium">Photo</th>
              <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('id')}>
                <div className="flex items-center gap-1">User ID {sortConfig?.key === 'id' && (sortConfig.direction === 'asc' ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />)}</div>
              </th>
              <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('name')}>
                <div className="flex items-center gap-1">Full Name {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />)}</div>
              </th>
              <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('email')}>
                <div className="flex items-center gap-1">Email {sortConfig?.key === 'email' && (sortConfig.direction === 'asc' ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />)}</div>
              </th>
              <th className="p-4 font-medium">Role</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-center">Courses</th>
              <th className="p-4 font-medium">Join Date</th>
              <th className="p-4 font-medium">Last Active</th>
              <th className="p-4 font-medium">Progress</th>
              <th className="p-4 font-medium text-right sticky right-0 bg-gray-800/50 z-10">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border">
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-primary/5 transition-colors group">
                  <td className="p-4 sticky left-0 bg-dark-surface group-hover:bg-dark-surface z-10">
                    <input 
                      type="checkbox" 
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                      className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                    />
                  </td>
                  <td className="p-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                      {user.name.charAt(0)}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-300 font-mono group">
                    <div className="flex items-center gap-2">
                      {user.id}
                      <button 
                        onClick={() => navigator.clipboard.writeText(user.id)}
                        className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-white transition-opacity" 
                        title="Copy ID"
                      >
                        <DocumentDuplicateIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <button onClick={() => handleAction('View', user.name)} className="text-white font-medium hover:text-primary hover:underline text-left">
                      {user.name}
                    </button>
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                      {user.email}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      user.role === 'Student' ? 'bg-white/5 text-gray-300 border-dark-border' :
                      user.role === 'Instructor' ? 'bg-primary/10 text-primary border-primary/20' :
                      'bg-secondary/10 text-secondary border-secondary/20'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${user.status === 'Active' ? 'bg-green-600' : 'bg-gray-600'}`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${user.status === 'Active' ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs font-bold">
                      {user.courses}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400 whitespace-nowrap">{user.joinDate}</td>
                  <td className="p-4 text-sm text-gray-400 whitespace-nowrap">
                    <span className={`flex items-center gap-1.5 ${
                      user.lastActive.includes('mins') || user.lastActive.includes('hours') ? 'text-green-400' : 'text-gray-400'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        user.lastActive.includes('mins') || user.lastActive.includes('hours') ? 'bg-green-400' : 'bg-gray-500'
                      }`}></span>
                      {user.lastActive}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${user.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-400">{user.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right sticky right-0 bg-dark-surface group-hover:bg-dark-surface z-10">
                    <div className="relative group/actions">
                      <button className="p-1.5 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute right-0 mt-2 w-48 bg-dark-surface border border-dark-border rounded-lg shadow-xl opacity-0 invisible group-hover/actions:opacity-100 group-hover/actions:visible transition-all z-50">
                        <div className="py-1">
                          <button onClick={() => handleAction('View', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                            <EyeIcon className="h-4 w-4 mr-2" /> View Details
                          </button>
                          <button onClick={() => handleAction('Edit', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                            <PencilIcon className="h-4 w-4 mr-2" /> Edit User
                          </button>
                          <button onClick={() => handleAction('Reset Password', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                            <KeyIcon className="h-4 w-4 mr-2" /> Reset Password
                          </button>
                          <button onClick={() => handleAction('Send Email', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                            <EnvelopeIcon className="h-4 w-4 mr-2" /> Send Email
                          </button>
                          <div className="border-t border-gray-700 my-1"></div>
                          <button onClick={() => handleAction('Suspend', user.name)} className="flex items-center w-full px-4 py-2 text-sm text-orange-400 hover:bg-gray-700 hover:text-orange-300">
                            <NoSymbolIcon className="h-4 w-4 mr-2" /> Suspend
                          </button>
                          <button onClick={() => handleDelete(user.id)} className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300">
                            <TrashIcon className="h-4 w-4 mr-2" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="p-8 text-center text-gray-400">
                  No users found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination */}
      <div className="bg-dark-surface border-t border-dark-border p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          Showing <span className="text-white font-medium">{paginatedUsers.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, sortedUsers.length)}</span> of <span className="text-white font-medium">{sortedUsers.length}</span> users
        </div>
        <div className="flex items-center gap-2">
          <select 
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-dark border border-dark-border rounded-lg text-sm text-white p-2 focus:ring-primary focus:border-primary"
          >
            <option value={10}>10 per page</option>
            <option value={25}>25 per page</option>
            <option value={50}>50 per page</option>
          </select>
          <div className="flex gap-1">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border border-dark-border text-gray-400 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Simple logic to show first 5 pages or sliding window could be implemented
              // For now, just showing first few pages or current page context
              let pageNum = i + 1;
              if (totalPages > 5 && currentPage > 3) {
                pageNum = currentPage - 2 + i;
              }
              if (pageNum > totalPages) return null;

              return (
                <button 
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === pageNum 
                      ? 'bg-primary text-white border-primary' 
                      : 'border-dark-border text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-3 py-1 rounded-md border border-dark-border text-gray-400 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
