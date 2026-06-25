# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 1 | default, hover, focus |
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: background-color 0.2s, transform 0.1s;
transition: all;
transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `Dismiss`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On hover:**

```css
/* background-color: rgba(0, 0, 0, 0) → */ background-color: rgba(255, 255, 255, 0.04);
```

**On focus:**

```css
/* outline: rgb(197, 193, 185) none 3px → */ outline: rgb(87, 94, 207) solid 2px;
/* outline-color: rgb(197, 193, 185) → */ outline-color: rgb(87, 94, 207);
```

**Transition:** `background-color 0.2s, transform 0.1s`

## Link Interactions

### Link 1 — `a`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On focus:**

```css
/* outline: rgb(34, 42, 38) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(34, 42, 38) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Link 2 — `Home`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On focus:**

```css
/* outline: rgb(46, 96, 71) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(46, 96, 71) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1)`

### Link 3 — `Solutions`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On hover:**

```css
/* color: rgb(103, 126, 115) → */ color: rgb(34, 42, 38);
/* outline: rgb(103, 126, 115) none 3px → */ outline: rgb(34, 42, 38) none 3px;
/* outline-color: rgb(103, 126, 115) → */ outline-color: rgb(34, 42, 38);
```

**On focus:**

```css
/* outline: rgb(103, 126, 115) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(103, 126, 115) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1)`

## Interaction Rules

- Accent color `#cc7333` is used for focus rings, active states, and hover highlights
- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.2s`, `0.1s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

