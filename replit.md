# React TypeScript Component Library

## Overview

This is a production-ready React TypeScript component library featuring InputField and DataTable components with comprehensive Storybook documentation. The project is designed as a full-stack application with both frontend component development and backend API capabilities, though the current focus is on the component library aspect.

The library provides two main components:
- **InputField**: A flexible input component with multiple variants (filled, outlined, ghost), sizes (sm, md, lg), and interactive states including password toggle and clear functionality
- **DataTable**: A generic, type-safe table component with sorting, row selection, loading states, and responsive design

Both components are built with accessibility in mind, support dark mode, and include comprehensive Storybook documentation for development and testing.

## User Preferences

Preferred communication style: Simple, everyday language.
Deployment target: GitHub for job application submission (frontend engineer position)
Project should look authentic and professionally built, not AI-generated

## System Architecture

### Frontend Architecture
The frontend follows a modern React architecture with TypeScript for type safety:

- **Component Structure**: Components are organized in dedicated folders with separate type definitions and implementation files
- **Styling**: Uses TailwindCSS with CSS variables for theming, supporting both light and dark modes
- **State Management**: React hooks for local state, React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Type Safety**: Full TypeScript implementation with proper interfaces for all components

### UI Component System
Built on top of Radix UI primitives with custom styling:

- **Base Components**: Extensive collection of shadcn/ui components in the `components/ui` directory
- **Custom Components**: InputField and DataTable as feature-rich, reusable components
- **Theme System**: CSS variables-based theming with light/dark mode support via ThemeProvider
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support throughout

### Development Tools
- **Storybook**: Comprehensive component documentation and testing environment with addon support
- **TypeScript**: Strict type checking with path aliases for clean imports
- **Vite**: Fast build tool and development server with React plugin
- **ESM**: Modern ES module system throughout the codebase

### Backend Architecture
Express.js server with TypeScript:

- **API Structure**: RESTful API design with route registration system
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development**: Vite integration for seamless full-stack development

### Database Design
Drizzle ORM with PostgreSQL schema:

- **Schema Definition**: User table with UUID primary keys
- **Type Generation**: Automatic TypeScript type generation from schema
- **Validation**: Zod integration for runtime validation
- **Migrations**: Drizzle Kit for database migrations

## External Dependencies

### Core Frontend Technologies
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Full type safety across the application
- **TailwindCSS**: Utility-first CSS framework with custom configuration
- **Vite**: Build tool and development server

### UI and Component Libraries
- **Radix UI**: Accessible, unstyled component primitives for complex UI components
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants
- **Embla Carousel**: Carousel/slider functionality

### Development and Documentation
- **Storybook**: Component documentation and development environment
- **React Query (@tanstack/react-query)**: Server state management
- **React Hook Form**: Form state management with validation

### Backend Technologies
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe SQL ORM
- **Zod**: Runtime type validation
- **PostgreSQL**: Database (via Neon serverless)

### Build and Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development server

### Utilities and Helpers
- **clsx & tailwind-merge**: Conditional className utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing library