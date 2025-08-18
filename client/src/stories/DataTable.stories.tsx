import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DataTable } from '../components/DataTable/DataTable';
import { Column } from '../components/DataTable/types';

// Sample data types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'away' | 'offline';
  lastLogin: string;
  department: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  featured: boolean;
}

// Sample data
const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Senior Developer',
    status: 'active',
    lastLogin: '2 hours ago',
    department: 'Engineering',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'Product Manager',
    status: 'active',
    lastLogin: '1 day ago',
    department: 'Product',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    role: 'UI Designer',
    status: 'away',
    lastLogin: '3 days ago',
    department: 'Design',
  },
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    stock: 45,
    featured: true,
  },
  {
    id: '2',
    name: 'Coffee Mug',
    category: 'Home & Kitchen',
    price: 12.99,
    stock: 120,
    featured: false,
  },
  {
    id: '3',
    name: 'Laptop Stand',
    category: 'Office',
    price: 89.99,
    stock: 23,
    featured: true,
  },
];

// Column definitions
const userColumns: Column<User>[] = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
    render: (value, row) => (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
          {row.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{row.department}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'email',
    header: 'Email',
    sortable: true,
    render: (value) => (
      <div className="text-sm text-gray-900 dark:text-white">{value}</div>
    ),
  },
  {
    key: 'role',
    header: 'Role',
    render: (value) => (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
        {value}
      </span>
    ),
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
    },
  },
  {
    key: 'lastLogin',
    header: 'Last Login',
    align: 'right',
    render: (value) => (
      <span className="text-sm text-gray-500 dark:text-gray-400">{value}</span>
    ),
  },
];

const productColumns: Column<Product>[] = [
  {
    key: 'name',
    header: 'Product Name',
    sortable: true,
    render: (value, row) => (
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          📦
        </div>
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{row.category}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'price',
    header: 'Price',
    sortable: true,
    align: 'right',
    render: (value) => (
      <span className="font-medium text-gray-900 dark:text-white">${value.toFixed(2)}</span>
    ),
  },
  {
    key: 'stock',
    header: 'Stock',
    sortable: true,
    align: 'center',
    render: (value) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        value > 50 ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
        value > 20 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      }`}>
        {value} units
      </span>
    ),
  },
  {
    key: 'featured',
    header: 'Featured',
    align: 'center',
    render: (value) => (
      <span className="text-lg">{value ? '⭐' : '—'}</span>
    ),
  },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# DataTable Component

A powerful, generic data table component with sorting, selection, and responsive design. Built with React, TypeScript, and TailwindCSS.

## Features

- **Generic Type Support**: Works with any data type using TypeScript generics
- **Column Sorting**: Click headers to sort ascending/descending
- **Row Selection**: Single and multiple row selection with callbacks
- **Loading States**: Built-in skeleton loading animation
- **Empty States**: Customizable empty state messages
- **Responsive Design**: Horizontal scroll on smaller screens
- **Accessibility**: Full keyboard navigation and screen reader support
- **Dark Mode**: Complete light/dark theme support

## Anatomy

The DataTable consists of:
- Header row with sortable columns
- Data rows with custom cell rendering
- Selection checkboxes (optional)
- Loading skeleton states
- Empty state placeholder
- Footer with selection counts

## Best Practices

**Do:**
- Use meaningful column headers
- Provide custom render functions for complex data
- Handle loading and empty states gracefully
- Use appropriate column alignment

**Don't:**
- Make tables too wide without horizontal scroll
- Use tables for simple lists (use regular lists instead)
- Ignore accessibility requirements
- Overload columns with too much information
        `,
      },
    },
  },
  argTypes: {
    data: {
      description: 'Array of data objects to display',
    },
    columns: {
      description: 'Column configuration array',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the table is in a loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected',
    },
    sortable: {
      control: 'boolean',
      description: 'Whether columns can be sorted (global override)',
    },
    emptyMessage: {
      control: 'text',
      description: 'Custom message for empty state',
    },
    onRowSelect: {
      action: 'rowsSelected',
      description: 'Callback when row selection changes',
    },
    onSort: {
      action: 'sorted',
      description: 'Callback when column sorting changes',
    },
  },
  args: {
    onRowSelect: action('onRowSelect'),
    onSort: action('onSort'),
  },
} satisfies Meta<typeof DataTable<any>>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with row selection enabled. Users can select individual rows or all rows.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    loading: true,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with skeleton animation while data is being fetched.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: "No users found. Try adjusting your search criteria.",
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom message when no data is available.',
      },
    },
  },
};

// Different Data Types
export const ProductsTable: Story = {
  args: {
    data: sampleProducts,
    columns: productColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with different data type (products) showing the generic nature of the component.',
      },
    },
  },
};

// Advanced Examples
export const CustomRendering: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        key: 'name',
        header: 'User Info',
        render: (value, row) => (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {row.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{row.email}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{row.department} • {row.role}</div>
            </div>
          </div>
        ),
      },
      {
        key: 'status',
        header: 'Status & Activity',
        render: (value, row) => (
          <div className="text-right">
            <div className="mb-1">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                value === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                value === 'away' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
              }`}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Last seen: {row.lastLogin}
            </div>
          </div>
        ),
        align: 'right',
      },
    ],
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with heavily customized cell rendering to show complex layouts.',
      },
    },
  },
};

export const MinimalTable: Story = {
  args: {
    data: [
      { id: '1', task: 'Design homepage mockup', priority: 'High', assignee: 'Sarah' },
      { id: '2', task: 'Implement user auth', priority: 'Medium', assignee: 'Michael' },
      { id: '3', task: 'Write documentation', priority: 'Low', assignee: 'Emily' },
    ],
    columns: [
      {
        key: 'task',
        header: 'Task',
        render: (value) => <span className="font-medium text-gray-900 dark:text-white">{value}</span>
      },
      {
        key: 'priority',
        header: 'Priority',
        render: (value) => (
          <span className={`px-2 py-1 text-xs rounded-full ${
            value === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' :
            value === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
          }`}>
            {value}
          </span>
        )
      },
      {
        key: 'assignee',
        header: 'Assignee',
        render: (value) => <span className="text-gray-600 dark:text-gray-300">{value}</span>
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table example for simple task management.',
      },
    },
  },
};

// Real-world Examples
export const UserManagement: Story = {
  render: () => {
    const extendedUsers = [
      ...sampleUsers,
      {
        id: '4',
        name: 'David Kim',
        email: 'david.kim@company.com',
        role: 'DevOps Engineer',
        status: 'offline' as const,
        lastLogin: '1 week ago',
        department: 'Engineering',
      },
      {
        id: '5',
        name: 'Jessica Taylor',
        email: 'jessica.taylor@company.com',
        role: 'Marketing Manager',
        status: 'active' as const,
        lastLogin: '5 minutes ago',
        department: 'Marketing',
      },
    ];

    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">User Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage your team members and their access permissions.</p>
        </div>
        
        <DataTable
          data={extendedUsers}
          columns={[
            ...userColumns,
            {
              key: 'id',
              header: 'Actions',
              align: 'right' as const,
              render: (value, row) => (
                <div className="flex items-center justify-end space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 text-sm">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200 text-sm">
                    Remove
                  </button>
                </div>
              ),
            },
          ]}
          selectable={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a user management interface with action buttons.',
      },
    },
  },
};

// Accessibility Story
export const AccessibilityDemo: Story = {
  args: {
    data: sampleUsers.slice(0, 2), // Fewer rows for focused testing
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Features

- **Keyboard Navigation**: Full keyboard support for table navigation
- **ARIA Labels**: Proper labeling for screen readers
- **Selection Announcements**: Row selection changes are announced
- **Sort Indicators**: Clear visual and semantic sort direction indicators
- **Focus Management**: Proper focus handling for interactive elements

Try navigating with:
- **Tab** to move between interactive elements
- **Space** to toggle checkboxes
- **Enter** to activate sort buttons
- **Escape** to clear selections (when implemented)

The table includes proper ARIA roles and properties for screen reader compatibility.
        `,
      },
    },
  },
};
