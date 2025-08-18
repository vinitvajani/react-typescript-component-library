import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with multiple variants, sizes, and interactive states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    clearable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Search',
    placeholder: 'Search components...',
    clearable: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Notes',
    placeholder: 'Add your notes here...',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    label: 'Code',
    placeholder: 'Enter code',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    label: 'Title',
    placeholder: 'Enter title',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Click the eye icon to toggle visibility',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
    type: 'email',
  },
};

export const Loading: Story = {
  args: {
    label: 'Processing',
    placeholder: 'Please wait...',
    loading: true,
    disabled: true,
    helperText: 'Validating your input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
    helperText: 'This field cannot be edited',
  },
};