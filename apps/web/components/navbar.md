# Navbar Component

A highly customizable and professional navigation bar component built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Fully Customizable** - Configure logo, theme toggle, auth button, and styling
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- ♿ **Accessible** - Built with proper ARIA labels and semantic HTML
- 🚀 **Performance Optimized** - Uses React.memo and useCallback for optimal performance
- 🎯 **TypeScript Support** - Fully typed with comprehensive interfaces
- 🔗 **Next.js Integration** - Uses Next.js router for client-side navigation
- 🌙 **Theme Support** - Integrated theme toggle with shadcn/ui

## Basic Usage

```tsx
import Navbar from "@/components/navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Your page content */}
    </>
  );
}
```

## Props

### NavbarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `Partial<LogoProps> & { href?: string }` | `{}` | Logo configuration object |
| `showThemeToggle` | `boolean` | `true` | Whether to show the theme toggle button |
| `authButton` | `AuthButtonConfig` | `{}` | Authentication button configuration |
| `hasBlur` | `boolean` | `true` | Whether the navbar should have a blur background |
| `isSticky` | `boolean` | `true` | Whether the navbar should be sticky |
| `maxWidth` | `string` | `"7xl"` | Container max width |
| `padding` | `{ x?: string; y?: string }` | `{ x: "px-4", y: "py-3" }` | Custom padding |

### AuthButtonConfig

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `"Sign In"` | Button text |
| `href` | `string` | `"/auth/login"` | Navigation URL |
| `variant` | `ButtonVariant` | `"default"` | Button variant |
| `size` | `ButtonSize` | `"sm"` | Button size |

## Examples

### Basic Navbar
```tsx
<Navbar />
```

### Custom Logo
```tsx
<Navbar 
  logo={{
    text: "My App",
    href: "/dashboard",
    size: "md",
    iconVariant: "gradient"
  }}
/>
```

### Custom Auth Button
```tsx
<Navbar 
  authButton={{
    text: "Get Started",
    href: "/signup",
    variant: "outline",
    size: "lg"
  }}
/>
```

### Minimal Navbar (No Theme Toggle)
```tsx
<Navbar 
  showThemeToggle={false}
  authButton={{
    text: "Login",
    variant: "ghost"
  }}
/>
```

### Landing Page Style
```tsx
<Navbar 
  hasBlur={false}
  isSticky={false}
  padding={{ x: "px-6", y: "py-4" }}
  maxWidth="full"
  className="bg-transparent"
/>
```

### Dashboard Navigation
```tsx
<Navbar 
  logo={{
    text: "Dashboard",
    href: "/dashboard",
    hideText: false,
    size: "sm"
  }}
  authButton={{
    text: "Profile",
    href: "/profile",
    variant: "ghost"
  }}
  maxWidth="6xl"
/>
```

## Styling

The component uses Tailwind CSS classes and can be customized through:

1. **Props** - Use the built-in customization props
2. **className** - Pass custom classes to override styles
3. **CSS Variables** - Modify the design system tokens
4. **Component Modification** - Fork and modify the component directly

### Custom Styling Example
```tsx
<Navbar 
  className="border-b-2 border-primary shadow-lg"
  padding={{ x: "px-8", y: "py-5" }}
/>
```

## Accessibility

The component includes:
- Proper ARIA labels and roles
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly text

## Performance

- Uses `React.memo` to prevent unnecessary re-renders
- Implements `useCallback` for event handlers
- Optimized class name generation
- Minimal DOM structure

## Browser Support

Compatible with all modern browsers that support:
- ES2015+ JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties

## Dependencies

- Next.js 13+ (App Router)
- React 18+
- Tailwind CSS 3+
- shadcn/ui components
- Lucide React (for icons)
