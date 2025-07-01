# Hero Section Components Refactoring

## Overview

This refactoring introduces a common layout system and isolates core components for better reusability, maintainability, and consistency across the hero sections.

## Architecture

### 1. Common Layout System (`/components/layout/`)

#### `SectionLayout`

A flexible section wrapper component with these features:

- **Variants**: `fullscreen`, `contained`, `compact`
- **Spacing**: `tight`, `normal`, `loose`
- **Alignment**: `left`, `center`, `right`
- **Background**: `transparent`, `card`, `muted`

#### `SectionHeader`

Standardized section header with title and optional subtitle:

- Responsive typography classes
- Configurable alignment
- Consistent spacing

#### `SectionContent`

Content wrapper with max-width controls:

- Max width options: `sm`, `md`, `lg`, `xl`, `2xl`, `full`
- Automatic centering

#### `SectionGrid`

Grid layout for content sections:

- Responsive column counts (1-4)
- Configurable gap sizes

#### `SectionTwoColumn`

Two-column layout with sidebar:

- Configurable sidebar position
- Responsive design

### 2. Core Components (`/components/blocks/core/`)

#### Hero Core (`hero-core.tsx`)

- **`AnimatedTitle`**: Word-by-word animation with motion
- **`AnimatedDescription`**: Fade-in description text
- **`HeroCTA`**: Call-to-action buttons with primary/secondary actions
- **`HeroMedia`**: Media container with animation

#### FAQ Core (`faq-core.tsx`)

- **`FAQList`**: Accordion-based FAQ list
- **`DEFAULT_FAQ_DATA`**: Default FAQ content
- Support for single/multiple accordion types

#### Pricing Core (`pricing-core.tsx`)

- **`PricingBillingToggle`**: Monthly/yearly billing toggle
- **`PricingCard`**: Individual pricing plan card
- **`PricingGrid`**: Grid of pricing cards
- **`usePricing`**: Hook for pricing state management
- **`DEFAULT_PRICING_PLANS`**: Default pricing data

#### Testimonial Core (`testimonial-core.tsx`)

- **`TestimonialCard`**: Individual testimonial card
- **`TestimonialGrid`**: Grid of testimonials with animations
- **`StarRating`**: Star rating component
- **`DEFAULT_TESTIMONIALS`**: Default testimonial data

#### Feature Core (`feature-core.tsx`)

- **`FeatureCard`**: Feature card with optional glowing effect
- **`FeatureGrid`**: Complex grid with custom positioning
- **`SimpleFeatureGrid`**: Simple responsive grid
- **`DEFAULT_GLOW_PROPS`**: Default glowing effect configuration

## Benefits

### 1. **Consistency**

- Unified spacing system across all sections
- Consistent typography and layout patterns
- Standardized component APIs

### 2. **Reusability**

- Core components can be used in different contexts
- Layout components work with any content
- Easy to create new sections using existing patterns

### 3. **Maintainability**

- Single source of truth for layout logic
- Easier to update styling across all sections
- Clear separation of concerns

### 4. **Flexibility**

- Components accept configuration props
- Easy to customize appearance and behavior
- Support for different layout variants

## Usage Examples

### Creating a New Section

```tsx
import {
  SectionLayout,
  SectionHeader,
  SectionContent,
} from "@/components/layout";

const MySection = () => (
  <SectionLayout variant="contained" spacing="normal" align="center">
    <SectionContent maxWidth="2xl">
      <SectionHeader
        title="My Section Title"
        subtitle="Optional subtitle text"
      />
      {/* Your content here */}
    </SectionContent>
  </SectionLayout>
);
```

### Using Core Components

```tsx
import {
  PricingBillingToggle,
  PricingGrid,
  usePricing,
} from "@/components/blocks/core";

const MyPricing = () => {
  const { selectedBillingPeriod, setSelectedBillingPeriod } = usePricing();

  return (
    <div>
      <PricingBillingToggle
        selectedPeriod={selectedBillingPeriod}
        onPeriodChange={setSelectedBillingPeriod}
      />
      <PricingGrid
        plans={myCustomPlans}
        selectedPeriod={selectedBillingPeriod}
        onGetStarted={handleGetStarted}
      />
    </div>
  );
};
```

## Migration Summary

### Before

- Each section had its own layout logic
- Duplicate code across components
- Inconsistent spacing and styling
- Hard to maintain and update

### After

- Common layout system with `SectionLayout`
- Isolated core components with clear APIs
- Consistent design patterns
- Easy to maintain and extend

## File Structure

```
components/
├── layout/
│   ├── section-layout.tsx    # Common layout components
│   └── index.ts             # Layout exports
├── blocks/
│   ├── core/
│   │   ├── hero-core.tsx    # Hero components
│   │   ├── faq-core.tsx     # FAQ components
│   │   ├── pricing-core.tsx # Pricing components
│   │   ├── testimonial-core.tsx # Testimonial components
│   │   ├── feature-core.tsx # Feature components
│   │   └── index.ts         # Core exports
│   └── hero/
│       ├── hero-section.tsx # Refactored using core
│       ├── faq.tsx          # Refactored using core
│       ├── pricing.tsx      # Refactored using core
│       ├── testimonial.tsx  # Refactored using core
│       └── glowing-effect-demo.tsx # Refactored using core
```

This architecture provides a solid foundation for building consistent, maintainable, and reusable section components while maintaining the flexibility to customize as needed.
