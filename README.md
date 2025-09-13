## Description

Here's a complete implementation of toggle switches for a Next.js application.

## Installation

The Switch component is located in the components/ui/switch directory. To use it, import it in your target file:

```tsx
import { Switch } from "@/components/ui/Switch";
```

## Usage

```tsx
// Basic usage
<Switch />

// Disabled switch
<Switch disabled />

// Switch checked by default
<Switch defaultChecked />

// Disabled and checked by default
<Switch disabled defaultChecked />
```

## Props

| prop           | description                              |
| :------------- | :--------------------------------------- |
| disabled       | Whether the switch is disabled           |
| defaultChecked | Whether the switch is checked by default |
| checked        | Controlled checked state                 |
