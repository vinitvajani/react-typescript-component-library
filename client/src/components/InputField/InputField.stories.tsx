import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# InputField Component

A flexible input component with multiple variants, sizes, and interactive states.

## Features
- **3 Variants**: filled, outlined, ghost
- **3 Sizes**: sm, md, lg  
- **Interactive States**: disabled, invalid, loading
- **Special Features**: password toggle, clearable input
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Theming**: Full dark mode support

## API
- \`variant\`: 'filled' | 'outlined' | 'ghost' - Visual style of the input
- \`size\`: 'sm' | 'md' | 'lg' - Size of the input field
- \`type\`: 'text' | 'email' | 'password' | 'number' - Input type
- \`disabled\`: boolean - Disable the input
- \`invalid\`: boolean - Show error state
- \`loading\`: boolean - Show loading spinner
- \`clearable\`: boolean - Show clear button
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant of the input field',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'HTML input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input field',
    },
    invalid: {
      control: 'boolean',
      description: 'Show error/invalid state',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default example
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input field with email type and placeholder text.',
      },
    },
  },
};

// Filled variant
export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Search',
    placeholder: 'Search components...',
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled variant with a background color and clearable functionality.',
      },
    },
  },
};

// Outlined variant  
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    helperText: 'This will be displayed on your profile',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined variant with border styling and helper text.',
      },
    },
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Notes',
    placeholder: 'Add your notes here...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost variant with minimal styling, perfect for subtle inputs.',
      },
    },
  },
};

// Size variations
export const SmallSize: Story = {
  args: {
    size: 'sm',
    label: 'Verification Code',
    placeholder: 'Enter 6-digit code',
    type: 'number',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size input, perfect for codes or short inputs.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    label: 'Article Title',
    placeholder: 'Enter a compelling title...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size input for prominent form fields.',
      },
    },
  },
};

// Password input with toggle
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input with visibility toggle. Click the eye icon to show/hide password.',
      },
    },
  },
};

// Invalid state
export const Invalid: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input in invalid state with error message and styling.',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    label: 'Username',
    placeholder: 'Checking availability...',
    loading: true,
    disabled: true,
    helperText: 'Validating username availability',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with spinner, typically used during validation or processing.',
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Account ID',
    value: 'USR-2024-001',
    disabled: true,
    helperText: 'This field cannot be edited',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input field that cannot be interacted with.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    label: 'Try me!',
    placeholder: 'Type something and clear it...',
    clearable: true,
    helperText: 'This input has all interactive features enabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive example. Type text and use the clear button.',
      },
    },
  },
};