# Contributing to React TypeScript Component Library

Thank you for your interest in contributing to this component library! This document provides guidelines and information for contributors.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-component-library.git
   cd react-component-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Code Style and Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all component props
- Use generic types where appropriate (especially for DataTable)
- Prefer type inference over explicit types when obvious

### React
- Use functional components with hooks
- Follow React best practices for performance
- Use proper key props for list items
- Handle edge cases and error states

### Styling
- Use TailwindCSS utility classes
- Follow the existing color scheme and spacing
- Ensure dark mode compatibility
- Maintain responsive design principles

### Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain proper focus management
- Test with screen readers when possible

## Component Guidelines

### InputField
- Support all variants (filled, outlined, ghost)
- Include proper validation states
- Handle loading states appropriately
- Maintain consistent sizing across variants

### DataTable
- Ensure type safety with TypeScript generics
- Support sorting, selection, and custom rendering
- Handle empty and loading states gracefully
- Maintain responsive design

## Testing

- Write unit tests for component functionality
- Test accessibility features
- Verify responsive behavior
- Test dark mode compatibility

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Add tests if applicable
   - Update documentation as needed

3. **Commit your changes**
   ```bash
   git commit -m "feat: add your descriptive commit message"
   ```

4. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Commit Message Format

Use conventional commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for test updates

## Questions and Support

If you have questions about contributing, please:
1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Be specific about what you're trying to achieve

Thank you for contributing to making this component library better!