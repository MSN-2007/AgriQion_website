# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Duration 200** | unknown | 5× | `.duration-200`, `.font-medium`, `.relative` |
| **Flex** | card | 5× | `.flex`, `.gap-3`, `.items-start` |
| **Text Primary Foreground/90** | unknown | 5× | `.text-primary-foreground/90` |
| **Relative** | unknown | 4× | `.relative` |
| **Bg Secondary/50** | unknown | 4× | `.bg-secondary/50`, `.border`, `.border-border/50` |
| **Text Muted Foreground** | unknown | 4× | `.text-muted-foreground`, `.text-sm` |
| **Font Medium** | unknown | 4× | `.font-medium`, `.text-foreground`, `.text-lg` |
| **Bg Background** | unknown | 4× | `.bg-background`, `.border`, `.border-border` |
| **Bg Primary/10** | card | 4× | `.bg-primary/10`, `.flex`, `.group-hover:bg-primary/20` |
| **Font Heading** | unknown | 4× | `.font-heading`, `.font-medium`, `.mb-2` |
| **Leading Relaxed** | unknown | 4× | `.leading-relaxed`, `.text-muted-foreground`, `.text-sm` |
| **Max W 7xl** | unknown | 3× | `.max-w-7xl`, `.mx-auto`, `.px-4` |
| **Top 4** | unknown | 3× | `.-top-4`, `.absolute`, `.font-bold` |
| **Pt 12** | unknown | 3× | `.pt-12` |
| **Font Heading** | unknown | 3× | `.font-heading`, `.font-medium`, `.mb-3` |
| **Leading Relaxed** | unknown | 3× | `.leading-relaxed`, `.text-muted-foreground` |
| **Border B** | card | 3× | `.border-b`, `.border-primary-foreground/10`, `.flex` |
| **Text Primary Foreground/70** | unknown | 3× | `.text-primary-foreground/70` |
| **Font Heading** | unknown | 3× | `.font-heading`, `.font-medium`, `.text-2xl` |

## Cards

### Flex

**Instances found:** 5

**CSS classes:** `.flex` `.gap-3` `.items-start`

**HTML structure:**

```html
<li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5 text-accent mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-primary-foreground/90">Designed for Indian field conditions</span></li>
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f3f1ed;
  border: 1px solid #2b3b33;
  border-radius: 6px;
  padding: 8px;
}```

### Bg Primary/10

**Instances found:** 4

**CSS classes:** `.bg-primary/10` `.flex` `.group-hover:bg-primary/20` `.h-12` `.items-center` `.justify-center`

**HTML structure:**

```html
<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-6 w-6 text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
```

**Base styles (from design tokens):**

```css
.bg-primary/10 {
  background: #f3f1ed;
  border: 1px solid #2b3b33;
  border-radius: 6px;
  padding: 8px;
}```

### Border B

**Instances found:** 3

**CSS classes:** `.border-b` `.border-primary-foreground/10` `.flex` `.items-center` `.justify-between` `.last:border-0`

**HTML structure:**

```html
<div class="flex justify-between items-center py-4 border-b border-primary-foreground/10 last:border-0"><span class="text-primary-foreground/70">Farms Automated</span><span class="text-2xl font-heading font-medium">500+</span></div>
```

**Base styles (from design tokens):**

```css
.border-b {
  background: #f3f1ed;
  border: 1px solid #2b3b33;
  border-radius: 6px;
  padding: 8px;
}```

## Other Components

### Duration 200

**Instances found:** 5

**CSS classes:** `.duration-200` `.font-medium` `.relative` `.text-muted-foreground` `.text-sm` `.transition-colors`

**HTML structure:**

```html
<a class="text-sm font-medium transition-colors duration-200 relative text-muted-foreground hover:text-foreground" href="/solutions">Solutions</a>
```

**Base styles (from design tokens):**

```css
.duration-200 {
  background: #f3f1ed;
  padding: 4px;
}```

### Text Primary Foreground/90

**Instances found:** 5

**CSS classes:** `.text-primary-foreground/90`

**HTML structure:**

```html
<span class="text-primary-foreground/90">Designed for Indian field conditions</span>
```

**Base styles (from design tokens):**

```css
.text-primary-foreground/90 {
  background: #f3f1ed;
  padding: 4px;
}```

### Relative

**Instances found:** 4

**CSS classes:** `.relative`

**HTML structure:**

```html
<div class="relative"><div class="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div><div class="relative bg-card rounded-2xl shadow-card-hover p-8 border border-border"><div class="grid grid-cols-2 gap-4"><div class="bg-secondary/50 rounded-xl p-4 border border-border/50" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-primary mb-3"><path d="M
```

**Base styles (from design tokens):**

```css
.relative {
  background: #f3f1ed;
  padding: 4px;
}```

### Bg Secondary/50

**Instances found:** 4

**CSS classes:** `.bg-secondary/50` `.border` `.border-border/50` `.p-4` `.rounded-xl`

**HTML structure:**

```html
<div class="bg-secondary/50 rounded-xl p-4 border border-border/50" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-primary mb-3"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.
```

**Base styles (from design tokens):**

```css
.bg-secondary/50 {
  background: #f3f1ed;
  padding: 4px;
}```

### Text Muted Foreground

**Instances found:** 4

**CSS classes:** `.text-muted-foreground` `.text-sm`

**HTML structure:**

```html
<p class="text-sm text-muted-foreground">Smart Irrigation</p>
```

**Base styles (from design tokens):**

```css
.text-muted-foreground {
  background: #f3f1ed;
  padding: 4px;
}```

### Font Medium

**Instances found:** 4

**CSS classes:** `.font-medium` `.text-foreground` `.text-lg`

**HTML structure:**

```html
<p class="text-lg font-medium text-foreground">Active</p>
```

**Base styles (from design tokens):**

```css
.font-medium {
  background: #f3f1ed;
  padding: 4px;
}```

### Bg Background

**Instances found:** 4

**CSS classes:** `.bg-background` `.border` `.border-border` `.duration-300` `.group` `.p-6`

**HTML structure:**

```html
<div class="group bg-background rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300" style="opacity: 0; transform: translateY(30px);"><div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-6 w-6 text-primary"><circle cx="12" cy="12" r="10"></circle><polyl
```

**Base styles (from design tokens):**

```css
.bg-background {
  background: #f3f1ed;
  padding: 4px;
}```

### Font Heading

**Instances found:** 4

**CSS classes:** `.font-heading` `.font-medium` `.mb-2` `.text-foreground` `.text-lg`

**HTML structure:**

```html
<h3 class="text-lg font-heading font-medium text-foreground mb-2">Manual Pump Operation</h3>
```

**Base styles (from design tokens):**

```css
.font-heading {
  background: #f3f1ed;
  padding: 4px;
}```

### Leading Relaxed

**Instances found:** 4

**CSS classes:** `.leading-relaxed` `.text-muted-foreground` `.text-sm`

**HTML structure:**

```html
<p class="text-muted-foreground text-sm leading-relaxed">Eliminate late-night trips to the field for pump control.</p>
```

**Base styles (from design tokens):**

```css
.leading-relaxed {
  background: #f3f1ed;
  padding: 4px;
}```

### Max W 7xl

**Instances found:** 3

**CSS classes:** `.max-w-7xl` `.mx-auto` `.px-4`

**HTML structure:**

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16" style="opacity: 0; transform: translateY(40px);"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-foreground mb-4">Problems We Solve</h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto">Real challenges faced by farmers every d…</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><div class="group bg-background rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300" style="opacity: 0; transform: translateY(30px)
```

**Base styles (from design tokens):**

```css
.max-w-7xl {
  background: #f3f1ed;
  padding: 4px;
}```

### Top 4

**Instances found:** 3

**CSS classes:** `.-top-4` `.absolute` `.font-bold` `.font-heading` `.left-0` `.text-7xl`

**HTML structure:**

```html
<div class="text-7xl font-heading font-bold text-primary/10 absolute -top-4 left-0">01</div>
```

**Base styles (from design tokens):**

```css
.-top-4 {
  background: #f3f1ed;
  padding: 4px;
}```

### Pt 12

**Instances found:** 3

**CSS classes:** `.pt-12`

**HTML structure:**

```html
<div class="pt-12"><h3 class="text-xl font-heading font-medium text-foreground mb-3">Standard Base Devices</h3><p class="text-muted-foreground leading-relaxed">Reliable, field-tested hardware designed…</p></div>
```

**Base styles (from design tokens):**

```css
.pt-12 {
  background: #f3f1ed;
  padding: 4px;
}```

### Font Heading

**Instances found:** 3

**CSS classes:** `.font-heading` `.font-medium` `.mb-3` `.text-foreground` `.text-xl`

**HTML structure:**

```html
<h3 class="text-xl font-heading font-medium text-foreground mb-3">Standard Base Devices</h3>
```

**Base styles (from design tokens):**

```css
.font-heading {
  background: #f3f1ed;
  padding: 4px;
}```

### Leading Relaxed

**Instances found:** 3

**CSS classes:** `.leading-relaxed` `.text-muted-foreground`

**HTML structure:**

```html
<p class="text-muted-foreground leading-relaxed">Reliable, field-tested hardware designed for Indian conditions.</p>
```

**Base styles (from design tokens):**

```css
.leading-relaxed {
  background: #f3f1ed;
  padding: 4px;
}```

### Text Primary Foreground/70

**Instances found:** 3

**CSS classes:** `.text-primary-foreground/70`

**HTML structure:**

```html
<span class="text-primary-foreground/70">Farms Automated</span>
```

**Base styles (from design tokens):**

```css
.text-primary-foreground/70 {
  background: #f3f1ed;
  padding: 4px;
}```

### Font Heading

**Instances found:** 3

**CSS classes:** `.font-heading` `.font-medium` `.text-2xl`

**HTML structure:**

```html
<span class="text-2xl font-heading font-medium">500+</span>
```

**Base styles (from design tokens):**

```css
.font-heading {
  background: #f3f1ed;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#2b3b33` for all dividers within components
- Use `#cc7333` for all interactive/active states

