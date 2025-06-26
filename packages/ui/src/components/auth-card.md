# AuthCard Component

A reusable authentication card component that provides a consistent layout for authentication forms.

## Features

- Consistent styling for all authentication-related UI
- Centered title and description layout
- Flexible content area
- Customizable classes for header and content sections

## Usage

```tsx
import { AuthCard } from "@workspace/ui/components/auth-card";

function LoginForm() {
  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to your account to continue"
    >
      {/* Your form content goes here */}
      <form>{/* form fields */}</form>
    </AuthCard>
  );
}
```

## Props

| Prop               | Type              | Required | Description                                    |
| ------------------ | ----------------- | -------- | ---------------------------------------------- |
| `title`            | `string`          | Yes      | The main title displayed in the card header    |
| `description`      | `string`          | Yes      | The description text shown below the title     |
| `children`         | `React.ReactNode` | Yes      | The content to be rendered inside the card     |
| `className`        | `string`          | No       | Additional CSS classes for the card wrapper    |
| `headerClassName`  | `string`          | No       | Additional CSS classes for the header section  |
| `contentClassName` | `string`          | No       | Additional CSS classes for the content section |

## Examples

### Basic Usage

```tsx
<AuthCard title="Sign in" description="Enter your credentials">
  <LoginForm />
</AuthCard>
```

### With Custom Styling

```tsx
<AuthCard
  title="Create Account"
  description="Join us today"
  className="max-w-md mx-auto"
  contentClassName="space-y-4"
>
  <SignupForm />
</AuthCard>
```

### Success State

```tsx
<AuthCard
  title="Account Created"
  description="Welcome to our platform"
  contentClassName="text-center"
>
  <div className="space-y-4">
    <CheckIcon className="mx-auto h-12 w-12 text-green-500" />
    <Button>Continue</Button>
  </div>
</AuthCard>
```

## Migration from Card Components

The `AuthCard` replaces the common pattern of using `Card`, `CardHeader`, `CardTitle`, `CardDescription`, and `CardContent` in authentication forms.

### Before

```tsx
<Card>
  <CardHeader className="text-center">
    <CardTitle className="text-xl">Welcome back</CardTitle>
    <CardDescription>Sign in to your account to continue</CardDescription>
  </CardHeader>
  <CardContent>{/* content */}</CardContent>
</Card>
```

### After

```tsx
<AuthCard
  title="Welcome back"
  description="Sign in to your account to continue"
>
  {/* content */}
</AuthCard>
```
