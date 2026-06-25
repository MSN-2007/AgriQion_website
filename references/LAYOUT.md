# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.min-h-screen.flex` | column | — | — | — | 3 |
| `section.relative.min-h-[90vh]` | row | — | center | — | 2 |
| `nav.flex.items-center` | row | space-between | center | — | 4 |
| `div.hidden.lg:flex` | row | — | center | 12px | 2 |
| `a.inline-flex.items-center` | row | center | center | 8px | 1 |
| `div.flex.flex-col` | row | — | — | 16px | 2 |
| `a.inline-flex.items-center` | row | center | center | 8px | 1 |
| `div.flex.justify-between` | row | space-between | center | — | 2 |
| `div.flex.justify-between` | row | space-between | center | — | 2 |
| `div.flex.justify-between` | row | space-between | center | — | 2 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.grid.grid-cols-1` | `268px 268px 268px 268px` | 48px | 3 |
| `div.grid.lg:grid-cols-2` | `568px 568px` | 80px | 2 |
| `div.grid.sm:grid-cols-2` | `286px 286px 286px 286px` | 24px | 4 |
| `div.grid.md:grid-cols-3` | `373.328px 373.328px 373.344px` | 48px | 3 |
| `div.grid.lg:grid-cols-2` | `568px 568px` | 80px | 2 |
| `div.grid.grid-cols-2` | `243px 243px` | 16px | 4 |

## Structural Containers

### `<header>` (`header.fixed.top-0`)

```
display:          block
padding:          20px 0px
children:         1
```

### `<main>` (`main.flex-1.pt-20`)

```
display:          block
padding:          80px 0px 0px
children:         5
```

### `<footer>` (`footer.bg-primary.text-primary-foreground`)

```
display:          block
padding:          64px 0px
children:         1
```

### `<section>` (`section.relative.min-h-[90vh]`)

```
display:          flex
flex-direction:   row
justify-content:  —
align-items:      center
children:         2
```

### `<section>` (`section.py-20.lg:py-32`)

```
display:          block
padding:          128px 0px
children:         1
```

### `<section>` (`section.py-20.lg:py-32`)

```
display:          block
padding:          128px 0px
children:         1
```

### `<section>` (`section.py-20.lg:py-32`)

```
display:          block
padding:          128px 0px
children:         1
```

### `<section>` (`section.py-20.lg:py-32`)

```
display:          block
padding:          128px 0px
children:         1
```

### `<nav>` (`nav.flex.items-center`)

```
display:          flex
flex-direction:   row
justify-content:  space-between
align-items:      center
children:         4
```

## Layout Rules

- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

