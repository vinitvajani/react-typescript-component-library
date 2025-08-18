import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InputField } from '../components/InputField/InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# InputField Component

A flexible input component with multiple variants, sizes, and interactive states. Built with React, TypeScript, and TailwindCSS.

## Features

- **3 Variants**: filled, outlined, ghost
- **3 Sizes**: sm, md, lg  
- **Multiple States**: disabled, invalid, loading
- **Special Features**: password toggle, clear button
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Dark Mode**: Full light/dark mode support

## Anatomy

The InputField component consists of:
- Label (optional)
- Input field with variant styling
- Right-side icons (password toggle, clear button, loading spinner)
- Helper text or error message
- Proper focus and hover states

## Best Practices

**Do:**
- Use clear, descriptive labels
- Provide helpful error messages
- Use appropriate input types
- Consider the clearable prop for search fields

**Don't:**
- Use placeholder text as the only label
- Make error messages too technical
- Override disabled state styling inconsistently
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
      description: 'Whether the input is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input is in an invalid state',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the input is in a loading state',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when input value changes',
    },
    onClear: {
      action: 'cleared',
      description: 'Callback fired when clear button is clicked',
    },
  },
  args: {
    onChange: action('onChange'),
    onClear: action('onClear'),
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    placeholder: 'Enter username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
};

// Variants
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
        story: 'Filled variant with background color and focus effects.',
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined variant with border styling - the default variant.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Notes',
    placeholder: 'Add your notes here...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost variant with minimal styling, only bottom border.',
      },
    },
  },
};

// Sizes
export const SmallSize: Story = {
  args: {
    size: 'sm',
    label: 'Code',
    placeholder: 'Enter code',
    type: 'text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size variant for compact layouts.',
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size variant - the default size.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    label: 'Title',
    placeholder: 'Enter title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size variant for prominent form fields.',
      },
    },
  },
};

// States
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
    helperText: 'This field cannot be edited',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction and applies muted styling.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Invalid state with error styling and message.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Loading state with spinner and disabled interaction.',
      },
    },
  },
};

// Special Features
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Click the eye icon to toggle visibility',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password field with visibility toggle functionality.',
      },
    },
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search Query',
    placeholder: 'Type to search...',
    clearable: true,
    helperText: 'Clear button appears when you type',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with clear button that appears when there is content.',
      },
    },
  },
};

export const PasswordWithClear: Story = {
  args: {
    label: 'New Password',
    placeholder: 'Create a strong password',
    type: 'password',
    clearable: true,
    helperText: 'Both clear and password toggle are available',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password field that also supports clearing - both icons are shown.',
      },
    },
  },
};

// Real-world Examples
export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        variant="outlined"
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        variant="outlined"
        helperText="Forgot your password?"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of InputField components used in a login form.',
      },
    },
  },
};

export const ProfileForm: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <InputField
        label="Full Name"
        value="John Doe"
        variant="filled"
        size="lg"
      />
      <InputField
        label="Email"
        value="john.doe@example.com"
        type="email"
        variant="filled"
        disabled
        helperText="Email cannot be changed"
      />
      <InputField
        label="Bio"
        placeholder="Tell us about yourself..."
        variant="ghost"
        clearable
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of different InputField variants in a profile form.',
      },
    },
  },
};

// Accessibility Story
export const AccessibilityDemo: Story = {
  args: {
    label: 'Accessible Input',
    placeholder: 'Try keyboard navigation',
    helperText: 'This input follows accessibility best practices',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Features

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **ARIA Labels**: Proper labeling for screen readers
- **Error Announcements**: Invalid states are announced to assistive technology
- **Focus States**: Clear visual focus indicators
- **Color Contrast**: Meets WCAG contrast requirements

Try navigating with:
- **Tab** to focus
- **Escape** to clear (when clearable)
- **Space** to toggle password visibility
        `,
      },
    },
  },
};
