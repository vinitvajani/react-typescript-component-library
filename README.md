# React TypeScript Component Library

A modern, responsive component library built with React, TypeScript, and TailwindCSS. Features two production-ready components: InputField and DataTable.

## 🚀 Features

### InputField Component
- **Multiple Variants**: filled, outlined, and ghost styles
- **Flexible Sizing**: small, medium, and large options
- **Interactive States**: disabled, invalid, and loading states  
- **Advanced Features**: password visibility toggle and clearable input
- **Type Safety**: Full TypeScript support with proper interfaces
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Theming**: Complete light and dark mode compatibility

### DataTable Component
- **Type-Safe**: Generic TypeScript implementation for any data structure
- **Interactive Sorting**: Click column headers to sort data ascending/descending
- **Selection Support**: Single and multi-row selection with callbacks
- **Loading States**: Smooth skeleton loading animations
- **Empty States**: Customizable empty state messaging
- **Responsive Design**: Horizontal scroll for mobile compatibility
- **Custom Rendering**: Flexible cell content with render functions
- **Full Accessibility**: Keyboard navigation and screen reader optimized

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and developer experience
- **TailwindCSS** - Utility-first CSS with custom design system
- **Vite** - Fast development and optimized builds
- **Wouter** - Lightweight client-side routing

## 📦 Quick Start

```bash
# Clone this repository
git clone <your-repo-url>
cd react-component-library

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5000 to see the component demos
```

## 🎯 Component Documentation

### InputField

The InputField component provides a flexible, accessible input solution with multiple visual variants and interactive states.

```tsx
import { InputField } from './components/InputField/InputField';

// Basic usage
<InputField 
  label="Email Address"
  placeholder="Enter your email"
  type="email"
/>

// With advanced features
<InputField 
  variant="filled"
  size="lg"
  label="Password"
  type="password"
  clearable
  loading={isValidating}
  helperText="Must be at least 8 characters"
/>
```

### DataTable

A generic, type-safe table component that works with any data structure.

```tsx
import { DataTable } from './components/DataTable/DataTable';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { 
    key: 'status', 
    header: 'Status', 
    render: (value) => <StatusBadge status={value} /> 
  }
];

<DataTable 
  data={users}
  columns={columns}
  selectable
  onRowSelect={(selected) => setSelectedUsers(selected)}
/>
```

## 🏗️ Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── InputField/
│   │   │   ├── DataTable/
│   │   │   └── ThemeProvider/
│   │   ├── pages/         # Application pages
│   │   └── lib/           # Utility functions
├── server/                # Backend API
└── shared/                # Shared types and schemas
```

## 🎨 Design Decisions

### Component Architecture
- **Composition over Configuration**: Components are designed to be composable and flexible
- **TypeScript First**: Full type safety with proper interfaces and generics
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized rendering with proper React patterns

### Styling Approach  
- **TailwindCSS**: Utility-first CSS for rapid development
- **CSS Variables**: Theme-aware color system supporting light/dark modes
- **Responsive Design**: Mobile-first approach with breakpoint considerations

## 🧪 Testing Approach

The component library includes comprehensive testing coverage:
- Unit tests for individual components
- Integration tests for user interactions  
- Accessibility testing with automated tools
- Visual regression testing for design consistency

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions) 
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Development

This project was built with modern development practices in mind:

1. **TypeScript** for type safety and better developer experience
2. **Component-driven development** for better maintainability  
3. **Accessibility-first** approach following WCAG guidelines
4. **Responsive design** principles for cross-device compatibility
5. **Performance optimization** through proper React patterns

## 📄 License

MIT License - feel free to use this component library in your projects.
