# Visual Guide - UI Walkthrough

## Interface Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   xai.talent                                                    │
│   ─────────                                                     │
│                                                                 │
│   Try names, skills, research areas, or organizations. You     │
│   can also look for exact phrases (like "large language        │
│   models") and prefix matches (such as deepmind*).             │
│                                                                 │
│   Filter by specific attributes like @company:Google           │
│   DeepMind, @location:"San Francisco", and                     │
│   @publications:>5.                                            │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │ 🔍 transformer                                           │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
│   ☑️ Show all organizations   [Filter by company...]          │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │ Found 14 results (0.43 ms)                              │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
│   Ashish Vaswani                                               │
│   Principal Research Scientist at Google DeepMind              │
│   Google DeepMind | Mountain View, California, United States  │
│   Co-author of the groundbreaking "Attention Is All You Need"│
│   paper that introduced the Transformer architecture...        │
│   📚 45 publications  📄 12 patents                           │
│   🔗 LinkedIn  🎓 Scholar  💻 GitHub  🌐 Website              │
│   ──────────────────────────────────────────────────────────   │
│                                                                 │
│   Jakob Uszkoreit                                              │
│   Staff Research Scientist at Google DeepMind                  │
│   Google DeepMind | Zurich, Switzerland                       │
│   Working on large language models and their applications...  │
│   📚 38 publications                                          │
│   🔗 LinkedIn  🎓 Scholar  🌐 Website                         │
│   ──────────────────────────────────────────────────────────   │
│                                                                 │
│   (More results...)                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Color Scheme

### Primary Colors
- **Background**: `#FFFFFF` (Pure White)
- **Text**: `#111827` (Near Black)
- **Accent**: `#3B82F6` (Blue-500)

### Secondary Colors
- **Gray Text**: `#6B7280` (Gray-500)
- **Borders**: `#E5E7EB` (Gray-200)
- **Success**: `#10B981` (Green-500) - for result counter
- **Success BG**: `#D1FAE5` (Green-50) - for result counter background

## Typography Hierarchy

### Level 1: Page Title
```css
font-size: 2.25rem (36px)
font-weight: bold
color: #111827
letter-spacing: tight
```
Example: **xai.talent**

### Level 2: Researcher Name
```css
font-size: 1.25rem (20px)
font-weight: bold
color: #111827
margin-bottom: 0.25rem
```
Example: **Ashish Vaswani**

### Level 3: Job Title
```css
font-size: 1rem (16px)
font-weight: normal
color: #374151
margin-bottom: 0.5rem
```
Example: Principal Research Scientist at Google DeepMind

### Level 4: Metadata
```css
font-size: 0.875rem (14px)
font-weight: normal
color: #6B7280
```
Example: Google DeepMind | Mountain View, California

### Level 5: Body Text
```css
font-size: 0.875rem (14px)
line-height: 1.5
color: #374151
```
Example: Description paragraphs

### Level 6: Links
```css
font-size: 0.875rem (14px)
color: #3B82F6
text-decoration: underline (on hover)
```
Example: 🔗 LinkedIn

## Spacing System

### Vertical Spacing
- Between sections: `2rem (32px)`
- Between elements in section: `1rem (16px)`
- Between text lines: `0.5rem (8px)`
- Between researchers: `2rem (32px)` with border

### Horizontal Spacing
- Page padding: `1.5rem (24px)`
- Max width: `56rem (896px)`
- Element gaps: `0.75rem (12px)`

## Interactive Elements

### Search Input
```
┌─────────────────────────────────────┐
│ 🔍 transformer                      │
└─────────────────────────────────────┘

States:
- Default: border-gray-300
- Focus: ring-2 ring-blue-500
- Hover: (no change)
```

### Checkbox
```
☑️ Show all organizations

States:
- Unchecked: ☐ white with gray border
- Checked: ☑️ blue background
- Focus: ring-2 ring-blue-500
```

### Links
```
🔗 LinkedIn

States:
- Default: blue text, no underline
- Hover: blue text, underlined
- Active: darker blue
- Visited: same as default
```

## Result Card Anatomy

```
┌───────────────────────────────────────────────────────────┐
│ Name (Level 2)                                            │
│ Title (Level 3)                                           │
│ Company | Location (Level 4)                              │
│                                                           │
│ About paragraph... (Level 5)                             │
│                                                           │
│ Current role... (Level 5, italic)                        │
│                                                           │
│ 📚 Publications  📄 Patents (Level 4)                    │
│                                                           │
│ 🔗 Link  🎓 Link  💻 Link  🌐 Link (Level 6)            │
└───────────────────────────────────────────────────────────┘
│  ← 1px border-gray-200
```

## Loading States

### Spinner
```
    ○
   ╱ ╲
  ○   ○
   ╲ ╱
    ○

- Size: 2rem (32px)
- Color: #3B82F6 (blue-600)
- Animation: rotate 1s linear infinite
- Position: centered in viewport
```

### Empty State
```
No researchers found. Try a different search query.

- Text color: #6B7280 (gray-500)
- Size: 1rem (16px)
- Position: centered with 5rem top/bottom padding
```

## Result Counter Banner

```
┌─────────────────────────────────────────────┐
│ Found 14 results (0.43 ms)                  │
└─────────────────────────────────────────────┘

- Background: #D1FAE5 (green-50)
- Border: 1px #A7F3D0 (green-200)
- Text: #065F46 (green-800)
- Padding: 0.625rem 1rem (10px 16px)
- Font: 0.875rem (14px) medium
- Border radius: 0.25rem (4px)
```

## Responsive Breakpoints

### Desktop (default)
- Max width: 896px
- Padding: 24px
- All features visible

### Tablet (768px - 1023px)
- Max width: 90%
- Padding: 20px
- Same layout, narrower

### Mobile (< 768px)
- Max width: 100%
- Padding: 16px
- Stack filter inputs vertically
- Links may wrap

## Micro-interactions

### Type-ahead Search
- Debounce: 300ms
- Shows loading spinner during search
- Updates result counter on completion

### Hover Effects
- Links: underline appears
- Checkbox: slight scale (1.05)
- Input focus: blue ring appears

### Transitions
- All transitions: 150ms ease-in-out
- Color changes, underlines, borders

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Links have 4.5:1 contrast ratio minimum

### Focus States
- All interactive elements have visible focus rings
- Blue ring: 2px solid #3B82F6

### Keyboard Navigation
- Tab through all interactive elements
- Enter to trigger search
- Space to toggle checkbox

### Screen Readers
- Semantic HTML (header, main, nav)
- ARIA labels on icons
- Alt text on images (if any)

## Print Styles

When printed:
- Remove search box
- Show all results (no truncation)
- Black and white (links still visible)
- Page breaks between researchers

---

This design prioritizes **readability, scannability, and speed** while maintaining a professional, academic aesthetic suitable for a researcher database.
