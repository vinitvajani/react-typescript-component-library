import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# DataTable Component

A powerful, generic data table component with sorting, selection, and responsive design.

## Features
- **Type Safety**: Full TypeScript support with generic data types
- **Sorting**: Click column headers to sort data
- **Selection**: Checkbox selection with "select all" functionality  
- **Responsive**: Adapts to different screen sizes
- **Loading States**: Built-in loading and empty state handling
- **Customizable**: Custom render functions for complex cell content
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Theming**: Full dark mode support

## API
- \`data\`: T[] - Array of data objects to display
- \`columns\`: Column<T>[] - Column definitions with headers and render functions
- \`loading\`: boolean - Show loading state
- \`selectable\`: boolean - Enable row selection
- \`emptyMessage\`: string - Message shown when no data
        `,
      },
    },
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Show loading spinner overlay',
    },
    selectable: {
      control: 'boolean',
      description: 'Enable row selection with checkboxes',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message displayed when data array is empty',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample user data
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'away' | 'offline';
  department: string;
  lastLogin: string;
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com', 
    role: 'Senior Developer',
    status: 'active',
    department: 'Engineering',
    lastLogin: '2 hours ago',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'Product Manager', 
    status: 'active',
    department: 'Product',
    lastLogin: '1 day ago',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    role: 'UI Designer',
    status: 'away',
    department: 'Design', 
    lastLogin: '3 days ago',
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@company.com',
    role: 'DevOps Engineer',
    status: 'offline',
    department: 'Engineering',
    lastLogin: '1 week ago',
  },
];

const userColumns = [
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
    key: 'department' as keyof User,
    header: 'Department',
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

// Default table
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic data table showing user information with sortable columns.',
      },
    },
  },
};

// With row selection
export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with row selection enabled. Click checkboxes to select rows.',
      },
    },
  },
};

// Loading state
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
        story: 'Data table in loading state with spinner overlay.',
      },
    },
  },
};

// Empty state
export const Empty: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: "No users found. Try adjusting your search criteria or add new users to get started.",
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty data table with custom message.',
      },
    },
  },
};

// Simple task table example
interface Task {
  id: string;
  task: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  status: 'Todo' | 'In Progress' | 'Done';
}

const sampleTasks: Task[] = [
  { id: '1', task: 'Design homepage mockup', priority: 'High', assignee: 'Sarah', status: 'In Progress' },
  { id: '2', task: 'Implement user authentication', priority: 'High', assignee: 'Michael', status: 'Todo' },
  { id: '3', task: 'Write API documentation', priority: 'Medium', assignee: 'Emily', status: 'Done' },
  { id: '4', task: 'Set up monitoring', priority: 'Low', assignee: 'David', status: 'Todo' },
];

const taskColumns = [
  {
    key: 'task' as keyof Task,
    header: 'Task',
    sortable: true,
  },
  {
    key: 'priority' as keyof Task,
    header: 'Priority',
    sortable: true,
  },
  {
    key: 'assignee' as keyof Task,
    header: 'Assignee',
  },
  {
    key: 'status' as keyof Task,
    header: 'Status',
    align: 'right' as const,
  },
];

export const TaskTable: Story = {
  args: {
    data: sampleTasks,
    columns: taskColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a task management table with different data structure.',
      },
    },
  },
};