# Logo Component

A highly customizable, reusable, and accessible Logo component built with React, TypeScript, and Tailwind CSS. This component offers extensive customization options while maintaining excellent performance and type safety.

## Features

✨ **Highly Customizable**: Multiple size variants, icon styles, shapes, and orientations  
🎨 **Theming Support**: Works seamlessly with your design system colors  
♿ **Accessible**: Built-in ARIA attributes and keyboard navigation support  
🔗 **Flexible Rendering**: Can render as a div, button, or link  
📱 **Responsive**: Responsive text sizing and adaptive layouts  
⚡ **Performance Optimized**: Minimal re-renders and efficient styling  
🎯 **Type Safe**: Full TypeScript support with comprehensive prop types

## Installation

The Logo component is part of your component library. Import it where needed:

```tsx
import { Logo } from "./components/logo";
```

## Basic Usage

```tsx
// Simple logo with default settings
<Logo />

// Custom text
<Logo text="My Company" />

// Icon only
<Logo hideText aria-label="My Company Logo" />
```

## Props

### Core Props

| Prop          | Type                                   | Default           | Description                                     |
| ------------- | -------------------------------------- | ----------------- | ----------------------------------------------- |
| `text`        | `string`                               | `"Findoora Inc."` | The text to display alongside the icon          |
| `hideText`    | `boolean`                              | `false`           | Whether to hide the text and show only the icon |
| `size`        | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"sm"`            | Size variant of the logo                        |
| `orientation` | `"horizontal" \| "vertical"`           | `"horizontal"`    | Layout orientation                              |
| `interactive` | `boolean`                              | `false`           | Whether to show hover effects                   |

### Styling Props

| Prop             | Type                                                             | Default     | Description                                   |
| ---------------- | ---------------------------------------------------------------- | ----------- | --------------------------------------------- |
| `iconVariant`    | `"default" \| "secondary" \| "outline" \| "ghost" \| "gradient"` | `"default"` | Visual style of the icon container            |
| `iconShape`      | `"square" \| "rounded" \| "circle"`                              | `"square"`  | Shape of the icon container                   |
| `textWeight`     | `"normal" \| "medium" \| "semibold" \| "bold"`                   | `"medium"`  | Font weight of the text                       |
| `customIconSize` | `string \| number`                                               | -           | Custom icon size (overrides size variant)     |
| `iconClassName`  | `string`                                                         | -           | Additional CSS classes for the icon container |
| `textClassName`  | `string`                                                         | -           | Additional CSS classes for the text           |
| `className`      | `string`                                                         | -           | Additional CSS classes for the root element   |

### Icon Props

| Prop   | Type                                | Default              | Description               |
| ------ | ----------------------------------- | -------------------- | ------------------------- |
| `icon` | `LucideIcon \| React.ComponentType` | `GalleryVerticalEnd` | The icon component to use |

### Link Props

| Prop     | Type      | Default | Description                                       |
| -------- | --------- | ------- | ------------------------------------------------- |
| `asLink` | `boolean` | `false` | Whether to render as a link                       |
| `href`   | `string`  | `"#"`   | URL for the link (when asLink is true)            |
| `target` | `string`  | -       | Link target attribute                             |
| `rel`    | `string`  | -       | Link rel attribute (auto-sets for external links) |

### Accessibility Props

| Prop         | Type     | Default | Description                         |
| ------------ | -------- | ------- | ----------------------------------- |
| `aria-label` | `string` | -       | Accessible label for screen readers |

## Size Variants

The component offers 5 size variants, each with optimized proportions:

```tsx
<Logo size="xs" text="Extra Small" />  // Compact size for tight spaces
<Logo size="sm" text="Small" />        // Default size for most use cases
<Logo size="md" text="Medium" />       // Larger for headers
<Logo size="lg" text="Large" />        // Prominent display
<Logo size="xl" text="Extra Large" />  // Hero sections, loading screens
```

## Icon Variants

Choose from different visual styles:

```tsx
<Logo iconVariant="default" />    // Primary brand colors
<Logo iconVariant="secondary" />  // Secondary colors
<Logo iconVariant="outline" />    // Outlined style
<Logo iconVariant="ghost" />      // Transparent background
<Logo iconVariant="gradient" />   // Gradient background
```

## Icon Shapes

Customize the icon container shape:

```tsx
<Logo iconShape="square" />   // Square corners
<Logo iconShape="rounded" />  // Rounded corners
<Logo iconShape="circle" />   // Circular shape
```

## Custom Icons

Use any Lucide React icon or custom component:

```tsx
import { Heart, Star, Rocket } from "lucide-react";

<Logo icon={Heart} text="Loved Brand" />
<Logo icon={Star} text="Star Company" />
<Logo icon={Rocket} text="Fast Startup" />
```

## Orientations

Control the layout direction:

```tsx
<Logo orientation="horizontal" />  // Icon and text side by side
<Logo orientation="vertical" />    // Icon above text
```

## Interactive States

Add hover effects and click handlers:

```tsx
// Interactive with hover effects
<Logo interactive onClick={() => console.log('Logo clicked')} />

// As a link
<Logo asLink href="/" />

// External link (automatically adds rel="noopener noreferrer")
<Logo asLink href="https://example.com" target="_blank" />
```

## Common Use Cases

### Header Logo

```tsx
<Logo
  text="My Brand"
  size="md"
  asLink
  href="/"
  iconVariant="gradient"
  textWeight="semibold"
/>
```

### Sidebar Logo (Collapsed)

```tsx
<Logo
  hideText
  size="sm"
  iconShape="rounded"
  aria-label="My Brand Dashboard"
  interactive
  onClick={handleSidebarToggle}
/>
```

### Loading Screen Logo

```tsx
<Logo
  text="My Brand"
  size="xl"
  orientation="vertical"
  iconVariant="gradient"
  iconShape="circle"
  textWeight="bold"
/>
```

### Footer Logo

```tsx
<Logo
  text="My Brand"
  size="sm"
  iconVariant="ghost"
  textClassName="text-gray-300"
  iconClassName="text-gray-300"
/>
```

## Accessibility

The Logo component includes several accessibility features:

- **ARIA Labels**: Automatic aria-label for icon-only logos
- **Keyboard Navigation**: Proper tabIndex for interactive logos
- **Semantic HTML**: Uses appropriate HTML elements (div, a, button)
- **Screen Reader Support**: Proper text alternatives and hidden decorative elements

```tsx
// Icon-only logo with proper accessibility
<Logo hideText aria-label="Navigate to homepage" asLink href="/" />
```

## Styling and Customization

### Custom Colors

```tsx
<Logo
  text="Custom Brand"
  className="text-blue-600"
  iconClassName="bg-blue-100 text-blue-600 border border-blue-200"
  textClassName="font-bold"
/>
```

### Custom Sizes

```tsx
<Logo
  text="Large Custom Logo"
  customIconSize="4rem"
  textClassName="text-purple-600 font-extrabold text-2xl"
  iconClassName="bg-purple-100 text-purple-600"
/>
```

### Responsive Design

The component includes responsive text sizing by default:

```tsx
// Will be text-base on mobile, text-lg on larger screens
<Logo size="sm" />
```

## Performance Considerations

- **Minimal Re-renders**: Uses React.forwardRef and proper prop handling
- **Efficient Styling**: CSS classes are computed once and memoized
- **Tree Shaking**: Only imports used icons from Lucide React
- **Type Safety**: Full TypeScript support prevents runtime errors

## Browser Support

The Logo component works in all modern browsers and includes:

- CSS Grid and Flexbox support
- CSS Custom Properties (CSS Variables)
- Modern CSS features (backdrop-filter, etc.)

## Migration Guide

If upgrading from an older version:

```tsx
// Old API (still supported)
<Logo iconSize="2rem" size="lg" />

// New API (recommended)
<Logo customIconSize="2rem" size="lg" />
```

## Contributing

When contributing to this component:

1. Maintain backward compatibility
2. Add comprehensive TypeScript types
3. Include accessibility considerations
4. Test with screen readers
5. Update this documentation

## Examples

See `logo-examples.tsx` for comprehensive usage examples and real-world implementations.
