# agriqon DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 2 · Components: 1
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: yes · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![agriqon Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a warm, approachable feel. The light background emphasizes content clarity. Typography uses **DM Sans** throughout — a technical, developer-focused choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#cc7333** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| muted | `#f3f1ed` | surface | Card and panel backgrounds |
| foreground | `#222a26` | text-primary | Headings and body text |
| muted-foreground | `#677e73` | text-muted | Captions, placeholders, secondary info |
| badge-text | `#c5c1b9` | text-muted | Captions, placeholders, secondary info |
| muted-foreground | `#8fa396` | text-muted | Captions, placeholders, secondary info |
| border | `#2b3b33` | border | Dividers, card borders, outlines |
| accent | `#cc7333` | accent | CTAs, links, focus rings, active states |
| accent | `#cb824d` | accent | CTAs, links, focus rings, active states |
| sidebar-primary | `#1d4ed8` | accent | CTAs, links, focus rings, active states |
| destructive | `#ef4343` | danger | Error states, destructive actions |
| primary | `#2e6047` | success | Success states, positive indicators |
| sidebar-ring | `#3b82f6` | info | Informational highlights |
| border | `#dce5df` | unknown | Palette color |
| sidebar-border | `#e5e7eb` | unknown | Palette color |
| sidebar-primary | `#18181b` | unknown | Palette color |
| unknown | `#9ca3af` | unknown | Palette color |
| primary | `#4db377` | unknown | Palette color |
| sidebar-foreground | `#3f3f46` | unknown | Palette color |
| destructive | `#cf3030` | unknown | Palette color |

### Dark Mode Token Mapping

| Variable | Light | Dark |
|---|---|---|
| `--background` | `40 33% 98%` | `150 15% 8%` |
| `--foreground` | `150 10% 15%` | `40 33% 95%` |
| `--card` | `0 0% 100%` | `150 15% 12%` |
| `--card-foreground` | `150 10% 15%` | `40 33% 95%` |
| `--popover` | `0 0% 100%` | `150 15% 12%` |
| `--popover-foreground` | `150 10% 15%` | `40 33% 95%` |
| `--primary` | `150 35% 28%` | `145 40% 50%` |
| `--primary-foreground` | `40 33% 98%` | `150 15% 8%` |
| `--secondary` | `140 20% 94%` | `150 15% 18%` |
| `--secondary-foreground` | `150 35% 28%` | `40 33% 95%` |
| `--muted` | `40 20% 94%` | `150 15% 18%` |
| `--muted-foreground` | `150 10% 45%` | `140 10% 60%` |
| `--accent` | `25 60% 50%` | `25 55% 55%` |
| `--accent-foreground` | `40 33% 98%` | `150 15% 8%` |
| `--destructive` | `0 84% 60%` | `0 62% 50%` |
| `--destructive-foreground` | `40 33% 98%` | `40 33% 95%` |
| `--border` | `140 15% 88%` | `150 15% 20%` |
| `--input` | `140 15% 88%` | `150 15% 20%` |
| `--ring` | `150 35% 28%` | `145 40% 50%` |
| `--sidebar-background` | `0 0% 98%` | `240 5.9% 10%` |

### CSS Variable Tokens

```css
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--background: 40 33% 98%;
--foreground: 150 10% 15%;
--card: 0 0% 100%;
--card-foreground: 150 10% 15%;
--popover: 0 0% 100%;
--popover-foreground: 150 10% 15%;
--primary: 150 35% 28%;
--primary-foreground: 40 33% 98%;
--secondary: 140 20% 94%;
--secondary-foreground: 150 35% 28%;
--muted: 40 20% 94%;
--muted-foreground: 150 10% 45%;
--accent: 25 60% 50%;
--accent-foreground: 40 33% 98%;
--destructive: 0 84% 60%;
--destructive-foreground: 40 33% 98%;
```


---

## 3. Typography Rules

**Font Stack:**
- **DM Sans** — Heading 1, Heading 2, Heading 3
- **SFMono-Regular** — Body, Caption, Code

**Font Sources:**

```css
@font-face {
  font-family: "CameraPlainVariable";
  src: url("https://cdn.gpteng.co/mcp-widgets/v1/fonts/CameraPlainVariable.woff2") format("woff2");
  font-weight: 100;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | DM Sans | 4.5rem | 700 |
| Heading 2 | DM Sans | 3.75rem | 700 |
| Heading 3 | DM Sans | 3rem | 700 |
| Body | SFMono-Regular | .875rem | 400 |
| Caption | SFMono-Regular | 1.25rem | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Use **DM Sans** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Data Input (1)

**Button** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32
- **Border radius:** 0px 6px 6px 0px, 1rem, 1.5rem, 2px, inherit, .75rem, 6px, 6px 0px 0px 6px, 8px, 10px, 12px, 16px, 24px
- **Max content width:** 80rem

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `var(--badge-shadow)`

### Floating — dropdowns, popovers, modals

- `rgba(0, 0, 0, 0.88) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.08) 0px 4px 4px -2px, rgba(0, 0, 0, 0.08) 0px 8px 8px -4px, rgba(0, 0, 0, 0.08) 0px 16px 16px -8px`

### Z-Index Scale

`0, 1, 10, 20, 40, 50, 100, 1000000`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes bounce`
- `@keyframes pulse`
- `@keyframes spin`
- `@keyframes enter`
- `@keyframes exit`
- `@keyframes accordion-up`
- `@keyframes accordion-down`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#cc7333` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Use **DM Sans** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 0px 6px 6px 0px, 1rem, 1.5rem, 2px, inherit
- Reuse existing components from Section 4 before creating new ones
- Always use CSS variables for colors — never hardcode hex
- Test both light and dark modes for contrast

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use DM Sans consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 640px | css |
| md | 768px | css |
| lg | 1024px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f3f1ed
Border: 1px solid #2b3b33
Radius: 6px
Padding: 16px
Font: DM Sans
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #cc7333, text white
Ghost: bg transparent, border #2b3b33
Padding: 8px 16px
Radius: 6px
Hover: opacity 0.9 or lighter shade
Focus: ring with #cc7333
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 80rem, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f3f1ed
Label: #677e73 (muted, 12px, uppercase)
Value: #222a26 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #2b3b33
Focus: border-color #cc7333
Label: #677e73 12px
Spacing: 16px between fields
Radius: 6px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: DM Sans, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
