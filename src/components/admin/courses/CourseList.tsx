import { useState, useMemo } from 'react';
import { 
  UsersIcon, 
  ClockIcon, 
  StarIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline';
import { type CourseFilterState } from './CourseFilters';

interface CourseListProps {
  viewMode: 'grid' | 'table';
  searchQuery: string;
  filters?: CourseFilterState;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  students: number;
  rating: number;
  duration: string;
  status: 'Published' | 'Draft' | 'Archived';
  price: string;
  image: string;
  lastUpdated: string;
}

const initialCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced AI Patterns',
    instructor: 'Dr. Sarah Smith',
    category: 'Data Science',
    level: 'Advanced',
    students: 1234,
    rating: 4.8,
    duration: '12h 30m',
    status: 'Published',
    price: '$99.99',
    image: 'https://placehold.co/600x400/1a1215/8B5A6F?text=AI+Patterns',
    lastUpdated: '2 days ago'
  },
  {
    id: 2,
    title: 'React Performance Masterclass',
    instructor: 'John Doe',
    category: 'Development',
    level: 'Advanced',
    students: 856,
    rating: 4.9,
    duration: '8h 45m',
    status: 'Draft',
    price: '$79.99',
    image: 'https://placehold.co/600x400/1a1215/6D4558?text=React+Perf',
    lastUpdated: '5 hours ago'
  },
  {
    id: 3,
    title: 'Full Stack Modern Web',
    instructor: 'Mike Johnson',
    category: 'Development',
    level: 'Intermediate',
    students: 2341,
    rating: 4.7,
    duration: '24h 15m',
    status: 'Published',
    price: '$129.99',
    image: 'https://placehold.co/600x400/1a1215/A67B8F?text=Full+Stack',
    lastUpdated: '1 week ago'
  },
  {
    id: 4,
    title: 'UI/UX Design Principles',
    instructor: 'Emily Davis',
    category: 'Design',
    level: 'Beginner',
    students: 5432,
    rating: 4.6,
    duration: '6h 20m',
    status: 'Published',
    price: '$49.99',
    image: 'https://placehold.co/600x400/1a1215/8B5A6F?text=UI+UX',
    lastUpdated: '3 days ago'
  },
  {
    id: 5,
    title: 'Business Strategy 101',
    instructor: 'Robert Wilson',
    category: 'Business',
    level: 'Beginner',
    students: 120,
    rating: 4.5,
    duration: '4h 15m',
    status: 'Archived',
    price: '$39.99',
    image: 'https://placehold.co/600x400/1a1215/6D4558?text=Business',
    lastUpdated: '1 month ago'
  }
];

const CourseList = ({ viewMode, searchQuery, filters }: CourseListProps) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Course; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);

  // Filter and Sort Logic
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
      );
    }

    // Filters
    if (filters) {
      if (filters.categories.length > 0) {
        result = result.filter(course => filters.categories.includes(course.category));
      }
      if (filters.levels.length > 0) {
        result = result.filter(course => filters.levels.includes(course.level));
      }
      if (filters.status) {
        result = result.filter(course => course.status === filters.status);
      }
    }

    // Sort
    if (sortConfig) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [courses, searchQuery, filters, sortConfig]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof Course) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleSelectAll = () => {
    if (selectedCourses.length === paginatedCourses.length) {
      setSelectedCourses([]);
    } else {
      setSelectedCourses(paginatedCourses.map(c => c.id));
    }
  };

  const toggleSelectCourse = (id: number) => {
    setSelectedCourses(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(prev => prev.filter(c => c.id !== id));
    }
  };

  if (viewMode === 'grid') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map((course) => (
            <div key={course.id} className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden hover:border-primary/30 transition-all group">
              <div className="relative h-48 bg-gray-800">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                    course.status === 'Published' 
                      ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                      : course.status === 'Draft'
                      ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                      : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                   <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm border border-white/10">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{course.instructor}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center" title="Students">
                    <UsersIcon className="h-4 w-4 mr-1.5" />
                    {course.students}
                  </div>
                  <div className="flex items-center" title="Duration">
                    <ClockIcon className="h-4 w-4 mr-1.5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-yellow-400" title="Rating">
                    <StarIcon className="h-4 w-4 mr-1.5 fill-current" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <span className="text-lg font-bold text-white">{course.price}</span>
                  <div className="flex gap-2">
                    <button onClick={() => alert('View course')} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                      <EyeIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => alert('Edit course')} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDelete(course.id)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-red-400 transition-colors">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-dark-border pt-4">
          <div className="text-sm text-gray-400">
            Showing <span className="font-medium text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium text-white">{Math.min(currentPage * itemsPerPage, filteredCourses.length)}</span> of <span className="font-medium text-white">{filteredCourses.length}</span> results
          </div>
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
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-dark-border text-xs uppercase text-gray-400">
                <th className="p-4 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                    checked={selectedCourses.length === paginatedCourses.length && paginatedCourses.length > 0}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('title')}>
                  <div className="flex items-center gap-1">Course <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('category')}>
                  <div className="flex items-center gap-1">Category <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('instructor')}>
                  <div className="flex items-center gap-1">Instructor <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('status')}>
                  <div className="flex items-center gap-1">Status <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('students')}>
                  <div className="flex items-center gap-1">Students <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium cursor-pointer hover:text-white" onClick={() => handleSort('rating')}>
                  <div className="flex items-center gap-1">Rating <ArrowsUpDownIcon className="h-4 w-4" /></div>
                </th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              {paginatedCourses.map((course) => (
                <tr key={course.id} className="hover:bg-primary/5 transition-colors group">
                  <td className="p-4">
                    <input 
                      type="checkbox" 
                      className="rounded bg-dark border-gray-600 text-primary focus:ring-primary"
                      checked={selectedCourses.includes(course.id)}
                      onChange={() => toggleSelectCourse(course.id)}
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-16 rounded bg-gray-800 overflow-hidden">
                        <img src={course.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{course.title}</div>
                        <div className="text-xs text-gray-500">{course.level} • {course.duration}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{course.category}</td>
                  <td className="p-4 text-sm text-gray-300">{course.instructor}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      course.status === 'Published' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : course.status === 'Draft'
                        ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{course.students}</td>
                  <td className="p-4">
                    <div className="flex items-center text-yellow-400 text-sm">
                      <StarIcon className="h-4 w-4 mr-1 fill-current" />
                      {course.rating}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => alert('View course')} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="View">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button onClick={() => alert('Edit course')} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Edit">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDelete(course.id)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400 transition-colors" title="Delete">
                        <TrashIcon className="h-4 w-4" />
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
          Showing <span className="font-medium text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium text-white">{Math.min(currentPage * itemsPerPage, filteredCourses.length)}</span> of <span className="font-medium text-white">{filteredCourses.length}</span> results
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

export default CourseList;
