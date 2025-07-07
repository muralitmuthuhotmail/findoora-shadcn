# Development Guidelines

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Code Standards](#code-standards)
6. [Component Development](#component-development)
7. [Testing Guidelines](#testing-guidelines)
8. [Git Workflow](#git-workflow)
9. [Performance Guidelines](#performance-guidelines)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)

## Project Overview

This is a monorepo built with:
- **Framework**: Next.js 15+ with TypeScript
- **Build System**: Turbo for monorepo management
- **Package Manager**: pnpm
- **UI Library**: shadcn/ui components
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10.12.4

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start specific app
pnpm dev:web
```

### Environment Setup

1. Copy `.env.example` to `.env.local` (if applicable)
2. Configure environment variables
3. Run `pnpm dev` to start development

## Project Structure

```
findoora-shadcn/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/               # App router pages
│       ├── components/        # App-specific components
│       └── public/           # Static assets
├── packages/
│   ├── ui/                   # Shared UI components
│   ├── eslint-config/        # Shared ESLint configuration
│   └── typescript-config/    # Shared TypeScript configuration
└── package.json              # Root package.json
```

### Key Directories

- **`apps/web/app/`**: Contains Next.js App Router pages and layouts. These should leverage components from `apps/web/pages/`, include relevant metadata, and implement SEO optimizations, primarily targeting server-side rendering (SSR). Most logic should be handled by page components, and only content that requires SSR should be rendered on the server.
- **`apps/web/components/`**: Contains application-specific React components. Components should be primarily driven by props, with hooks used only for internal logic. Organize components into nested folders based on their purpose or functionality.
- **`apps/web/pages/`**: Contains Next.js page components that compose UI using components from `apps/web/components/`. Hooks can be used here as needed. If a hook grows large or is reused, move it to the `apps/web/hooks/` directory. Nested folders can be created for different page groups or features.
- **`apps/web/hooks/`**: Contains custom React hooks used across the application. Place reusable or complex hooks here to keep code organized and maintainable. Structure this folder with subdirectories if needed, based on hook purpose or feature area.
- **`packages/ui/src/components/`**: Contains reusable UI components organized into two main categories:
    - **`ui/`**: Atomic components and foundational design system elements, primarily sourced from shadcn/ui
    - **`blocks/`**: Purpose-specific component blocks designed to accept content via props for common UI patterns
- **`packages/ui/src/styles/`**: Global styles, themes, and design system configurations

## Development Workflow

### Running the Development Server

```bash
# Run all apps in development
pnpm dev

# Run specific app
pnpm dev:web

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Format code
pnpm format
```

### Adding New Dependencies

```bash
# Add to root workspace
pnpm add <package-name>

# Add to specific workspace
pnpm add <package-name> --filter=web
pnpm add <package-name> --filter=@workspace/ui
```

## Code Standards

### TypeScript

- Use strict TypeScript configuration
- Always define proper types/interfaces
- Avoid `any` type - use `unknown` if necessary
- Use type-only imports when possible

```typescript
// Good
import type { ComponentProps } from 'react'
import { Button } from '@workspace/ui'

interface UserProps {
  id: string
  name: string
  email: string
}

// Avoid
import { ComponentProps } from 'react'
const user: any = { ... }
```

### File Naming

- **Components**: kebab-case (`user-profile.tsx`)
- **Utilities**: kebab-case (`format-date.ts`)
- **Pages**: kebab-case (`user-profile/page.tsx`)
- **Types**: PascalCase with `.types.ts` suffix

### Import Organization

```typescript
// 1. React/Next.js imports
import React from 'react'
import { NextPage } from 'next'

// 2. External libraries
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// 3. Internal packages
import { Button, Card } from '@workspace/ui'

// 4. Relative imports
import { UserCard } from './UserCard'
import type { User } from '../types'
```

### ESLint & Prettier

- Follow the configured ESLint rules
- Use Prettier for code formatting
- Run `pnpm lint:fix` to auto-fix issues
- Run `pnpm format` before committing

## Component Development

### UI Components (`packages/ui`)

- Use shadcn/ui patterns and conventions
- Include proper TypeScript types
- Support theme variants
- Include JSDoc comments for public APIs

```typescript
import type { VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * The size variant of the button
   */
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
```

### App Components (`apps/web/components`)

- Create components in appropriate subdirectories
- Use the `components/blocks/` for reusable sections
- Use the `components/layout/` for layout components
- Use the `components/pages/` for page-specific components

### Animation Guidelines

- Use Framer Motion for complex animations
- Keep animations subtle and purposeful
- Consider reduced motion preferences
- Use consistent easing and duration

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

## Testing Guidelines

### Unit Testing

- Write tests for utility functions
- Test component behavior, not implementation
- Use meaningful test descriptions
- Mock external dependencies

### Integration Testing

- Test user workflows
- Test API integrations
- Test component interactions

### Testing Commands

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Git Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `chore/description` - Maintenance tasks
- `docs/description` - Documentation updates

### Commit Messages

Follow conventional commits:

```
type(scope): description

feat(ui): add new Button component
fix(web): resolve navigation issue
docs(readme): update installation guide
chore(deps): update dependencies
```

### Pull Request Process

1. Create feature branch from `main`
2. Make changes and commit
3. Run tests and linting
4. Create pull request
5. Request code review
6. Merge after approval

## Performance Guidelines

### Next.js Best Practices

- Use `next/image` for optimized images
- Implement proper loading states
- Use dynamic imports for code splitting
- Optimize bundle size with proper imports

```typescript
// Good - tree shaking friendly
import { Button } from '@workspace/ui'

// Avoid - imports entire library
import * as UI from '@workspace/ui'
```

### Component Performance

- Use `React.memo()` for expensive components
- Optimize re-renders with `useCallback` and `useMemo`
- Avoid inline objects and functions in JSX
- Use proper dependency arrays in hooks

## Deployment

### Build Process

```bash
# Build for production
pnpm build

# Type check
pnpm typecheck

# Lint check
pnpm lint
```

### Environment Variables

- Never commit sensitive data
- Use `.env.local` for local development
- Document required environment variables
- Use proper naming conventions (`NEXT_PUBLIC_` for client-side)

## Troubleshooting

### Common Issues

**pnpm install fails**
```bash
# Clear cache and reinstall
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**TypeScript errors**
```bash
# Clean and rebuild
pnpm clean
pnpm build
```

**Turbo cache issues**
```bash
# Clear turbo cache
pnpm turbo clean
```

### Getting Help

1. Check existing documentation
2. Search for similar issues in the codebase
3. Ask team members
4. Create detailed issue reports

## Best Practices Summary

- ✅ Use TypeScript strictly
- ✅ Follow the established folder structure
- ✅ Write meaningful commit messages
- ✅ Test your changes
- ✅ Keep components small and focused
- ✅ Use semantic HTML
- ✅ Optimize for accessibility
- ✅ Consider performance implications
- ✅ Document complex logic
- ✅ Use consistent naming conventions

---

*Last updated: January 2025*