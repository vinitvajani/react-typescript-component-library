import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../components/DataTable/DataTable';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'away' | 'offline';
  lastLogin: string;
  department: string;
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

const columns = [
  {
    key: 'name' as keyof User,
    header: 'Name',
    sortable: true,
  },
  {
    key: 'email' as keyof User,
    header: 'Email',
    sortable: true,
  },
  {
    key: 'role' as keyof User,
    header: 'Role',
  },
  {
    key: 'status' as keyof User,
    header: 'Status',
  },
  {
    key: 'lastLogin' as keyof User,
    header: 'Last Login',
    align: 'right' as const,
  },
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A powerful, generic data table component with sorting, selection, and responsive design.',
      },
    },
  },
  argTypes: {
    loading: {
      control: 'boolean',
    },
    selectable: {
      control: 'boolean',
    },
    sortable: {
      control: 'boolean',
    },
    emptyMessage: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: columns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: sampleUsers,
    columns: columns,
    loading: true,
    selectable: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
    emptyMessage: "No users found. Try adjusting your search criteria.",
  },
};

export const SimpleTable: Story = {
  args: {
    data: [
      { id: '1', task: 'Design homepage mockup', priority: 'High', assignee: 'Sarah' },
      { id: '2', task: 'Implement user auth', priority: 'Medium', assignee: 'Michael' },
      { id: '3', task: 'Write documentation', priority: 'Low', assignee: 'Emily' },
    ],
    columns: [
      {
        key: 'task' as keyof any,
        header: 'Task',
        render: (value: string) => <span className="font-medium text-gray-900 dark:text-white">{value}</span>
      },
      {
        key: 'priority' as keyof any,
        header: 'Priority',
        render: (value: string) => (
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
        key: 'assignee' as keyof any,
        header: 'Assignee',
        render: (value: string) => <span className="text-gray-600 dark:text-gray-300">{value}</span>
      },
    ],
  },
};