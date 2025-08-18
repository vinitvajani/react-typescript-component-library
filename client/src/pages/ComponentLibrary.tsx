import React, { useState } from 'react';
import { InputField } from '@/components/InputField/InputField';
import { DataTable } from '@/components/DataTable/DataTable';
import { Column } from '@/components/DataTable/types';
import { useTheme } from '@/components/ThemeProvider/ThemeProvider';
import { Moon, Sun, Github, ExternalLink, Layers } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'away' | 'offline';
  lastLogin: string;
  department: string;
  avatar: string;
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Senior Developer',
    status: 'active',
    lastLogin: '2 hours ago',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b81b38aa?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'Product Manager',
    status: 'active',
    lastLogin: '1 day ago',
    department: 'Product',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    role: 'UI Designer',
    status: 'away',
    lastLogin: '3 days ago',
    department: 'Design',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@company.com',
    role: 'DevOps Engineer',
    status: 'offline',
    lastLogin: '1 week ago',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    email: 'jessica.taylor@company.com',
    role: 'Marketing Manager',
    status: 'active',
    lastLogin: '5 minutes ago',
    department: 'Marketing',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
  }
];

export default function ComponentLibrary() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'inputfield' | 'datatable'>('inputfield');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [tableLoading, setTableLoading] = useState(false);

  // InputField demo states
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const columns: Column<User>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center" data-testid={`user-name-${row.id}`}>
          <img 
            src={row.avatar} 
            alt={row.name} 
            className="h-10 w-10 rounded-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(row.name)}&background=1976d2&color=fff`;
            }}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">{row.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{row.department}</div>
          </div>
        </div>
      )
    },
    {
      key: 'email',
      header: 'Email',
      sortable: true,
      render: (value) => (
        <div className="text-sm text-gray-900 dark:text-white">{value}</div>
      )
    },
    {
      key: 'role',
      header: 'Role',
      render: (value) => {
        const colors = {
          'Senior Developer': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
          'Product Manager': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
          'UI Designer': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300',
          'DevOps Engineer': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
          'Marketing Manager': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
        };
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[value as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
            {value}
          </span>
        );
      }
    },
    {
      key: 'status',
      header: 'Status',
      render: (value) => {
        const statusConfig = {
          active: { color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300', dot: 'bg-green-400' },
          away: { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300', dot: 'bg-yellow-400' },
          offline: { color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300', dot: 'bg-red-400' },
        };
        
        const config = statusConfig[value as keyof typeof statusConfig];
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
            <span className={`w-1.5 h-1.5 mr-1.5 ${config.dot} rounded-full`}></span>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        );
      }
    },
    {
      key: 'lastLogin',
      header: 'Last Login',
      render: (value) => (
        <span className="text-sm text-gray-500 dark:text-gray-400">{value}</span>
      )
    }
  ];

  const handleLoadingDemo = () => {
    setTableLoading(true);
    setTimeout(() => setTableLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Layers className="text-white w-4 h-4" />
                </div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Component Library</h1>
              </div>
              <span className="text-sm bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full font-medium">v1.0.0</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                data-testid="theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">GitHub</span>
              </a>
              
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>View Storybook</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button 
                onClick={() => setActiveTab('inputfield')}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'inputfield'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                data-testid="inputfield-tab"
              >
                InputField Component
              </button>
              <button 
                onClick={() => setActiveTab('datatable')}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'datatable'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                data-testid="datatable-tab"
              >
                DataTable Component
              </button>
            </nav>
          </div>
        </div>

        {/* InputField Section */}
        {activeTab === 'inputfield' && (
          <div data-testid="inputfield-section">
            
            {/* Component Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">InputField</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">A flexible input component with multiple variants, sizes, and interactive states.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">Stable</span>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">TypeScript</span>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Variants</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Sizes</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">States</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">A11y</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ready</div>
                </div>
              </div>
            </div>

            {/* Live Examples Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              
              {/* Variants Showcase */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Variants</h3>
                <div className="space-y-6">
                  
                  <InputField
                    variant="filled"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    clearable
                    onClear={() => setEmailValue('')}
                    helperText="Filled variant with clear button"
                  />
                  
                  <InputField
                    variant="outlined"
                    label="Username"
                    placeholder="Choose username"
                    helperText="Outlined variant"
                  />
                  
                  <InputField
                    variant="ghost"
                    label="Search"
                    placeholder="Search components..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    helperText="Ghost variant (minimal styling)"
                  />
                </div>
              </div>

              {/* Sizes & States */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sizes & States</h3>
                <div className="space-y-6">
                  
                  <InputField
                    size="sm"
                    label="Small (sm)"
                    placeholder="Small input"
                  />
                  
                  <InputField
                    size="md"
                    label="Medium (md) - Default"
                    placeholder="Medium input"
                  />
                  
                  <InputField
                    size="lg"
                    label="Large (lg)"
                    placeholder="Large input"
                  />
                </div>
              </div>

              {/* Password & Special Features */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Special Features</h3>
                <div className="space-y-6">
                  
                  <InputField
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    helperText="Password field with visibility toggle"
                  />
                  
                  <InputField
                    label="Loading State"
                    placeholder="Processing..."
                    loading
                    disabled
                    helperText="Loading state with spinner"
                  />
                </div>
              </div>

              {/* Error & Validation States */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Validation States</h3>
                <div className="space-y-6">
                  
                  <InputField
                    type="email"
                    label="Email"
                    value="invalid-email"
                    invalid
                    errorMessage="Please enter a valid email address"
                  />
                  
                  <InputField
                    label="Username"
                    value="john_doe"
                    helperText="Username is available"
                  />
                  
                  <InputField
                    label="Disabled Field"
                    value="Cannot edit this"
                    disabled
                    helperText="This field is disabled"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DataTable Section */}
        {activeTab === 'datatable' && (
          <div data-testid="datatable-section">
            
            {/* Component Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">DataTable</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">A powerful data table component with sorting, selection, and responsive design.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">Stable</span>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">Generic</span>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Data Types</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">✓</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Sortable</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">□</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Selectable</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-500">📱</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Responsive</div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLoadingDemo}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  data-testid="loading-demo-button"
                >
                  Demo Loading State
                </button>
              </div>
              {selectedUsers.length > 0 && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
                </div>
              )}
            </div>

            {/* Live DataTable */}
            <DataTable
              data={sampleUsers}
              columns={columns}
              loading={tableLoading}
              selectable
              onRowSelect={setSelectedUsers}
              className="mb-8"
            />

            {/* Empty State Demo */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Empty State</h3>
              <DataTable
                data={[]}
                columns={columns}
                selectable
                emptyMessage="No users found. Get started by adding your first user to the system."
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 rounded-xl">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-primary-500 rounded-md flex items-center justify-center">
                    <Layers className="text-white w-3 h-3" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Component Library</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Production-ready React components built with TypeScript and TailwindCSS.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Storybook</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">GitHub</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">NPM Package</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Issues</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Discussions</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Contributing</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Changelog</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 Component Library. Built with ❤️ for developers.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
