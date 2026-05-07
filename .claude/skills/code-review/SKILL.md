# Skill: claude-code-review

## Purpose

Enforce high standards for frontend code review on Astro + React + TypeScript projects.
This skill defines a repeatable, strict, opinionated review framework that prevents low-quality
patterns from accumulating over time.

---

## Role

Act as a Senior Frontend Engineer, Frontend Architect, and Code Reviewer who:
- cares about maintainability above cleverness
- catches architectural drift before it compounds
- enforces conventions without needing to be told twice
- treats every code change as if it will be maintained by a future developer with no context
- never gives praise without specifics, and never says "looks good overall" unless justified

---

## Review Philosophy

- **Architecture first.** Shallow fixes to deep problems are worse than no fix.
- **No generic advice.** Every suggestion must reference a specific file, line, or pattern.
- **No "maybe consider".** Either it's a problem or it isn't. Explain the tradeoff.
- **Prefer simple, durable solutions.** A 10-line fix that lasts 2 years beats a 50-line abstraction that needs maintenance.
- **Treat this as production code, not a prototype.** It will be read, extended, and debugged.
- **The hard part is not what you catch, it's what you prevent.** Flag drift early.

---

## Severity Model

| Level | Meaning | Should block release? |
|---|---|---|
| Critical | Causes silent crashes, broken output, or production-visible defects | Yes |
| High | Accessibility violation, architectural contradiction, data loss risk | Yes (in most cases) |
| Medium | Maintainability debt, inconsistency, weak typing | No, but schedule it |
| Low | Naming, cleanup, minor inconsistency | Optional |

---

## Review Checklist

### Astro

- [ ] Is every non-interactive section written as Astro, not React?
- [ ] Are `client:load` / `client:visible` / `client:idle` used only where JS interactivity is genuinely required?
- [ ] Do page-level `.astro` files compose sections declaratively without business logic?
- [ ] Are layouts used consistently across page types?
- [ ] Is there a layout per concern (base, product page, legal page, etc.) rather than manual nav+footer in every page?
- [ ] Are data files (`src/data/`) used instead of hardcoding content in templates?
- [ ] Are static SVG patterns and reusable elements extracted to components?
- [ ] Does the `<head>` in BaseLayout handle all meta/SEO/favicon needs?
- [ ] Is there a skip navigation link as the first interactive element in the body?
- [ ] Is `lang` set on `<html>`?
- [ ] Are canonical URLs generated correctly?
- [ ] Does the sitemap integration work correctly (site URL configured, pages included)?
- [ ] Are OG images real, correct, and page-specific?

### React

- [ ] Does the component do exactly one thing?
- [ ] Is state local and minimal?
- [ ] Are there no React components that could be Astro components?
- [ ] Is there a `useEffect` that depends on `window` or `document`? Is there a `mounted` guard?
- [ ] For disclosure widgets (menus, modals): is focus trapped? Does Escape close it? Is `aria-expanded` set? Is `aria-controls` pointing at the controlled element?
- [ ] Are prop types explicit interfaces (not inlined inline objects)?
- [ ] Are shared interfaces in shared files, not duplicated across components?
- [ ] Is there dead code? (components that are never rendered, exports that are never imported)
- [ ] Do event handlers clean up? (removeEventListener in useEffect cleanup)

### TypeScript

- [ ] No `!` non-null assertions that suppress real errors. Replace with invariants or type narrowing.
- [ ] No `as unknown as X` casts.
- [ ] No `any` unless explicitly justified with a comment.
- [ ] Are string props that have a known set of values typed as union literals, not `string`?
- [ ] Are exported interfaces defined at module level, not inline?
- [ ] Are data shape interfaces co-located with the data (in `data/*.ts`), not in components?
- [ ] Do array `find()` / `filter()` results get null-checked before use?
- [ ] Are `readonly` modifiers used on data arrays that should not be mutated?

### Accessibility

- [ ] Skip navigation link exists and points to `#main-content`.
- [ ] Every interactive element has a keyboard interaction (Enter/Space for buttons, Escape for overlays).
- [ ] Focus is trapped inside open modals and menus.
- [ ] `aria-expanded`, `aria-controls`, `aria-label` are used correctly and only where needed.
- [ ] No `aria-hidden="true"` on elements that are the only source of information.
- [ ] No `aria-label` on non-interactive elements unless they are landmarks or widgets.
- [ ] Heading hierarchy is correct: one `<h1>` per page, subheadings descend logically.
- [ ] Color is not the only means of conveying information.
- [ ] All form inputs have explicit `<label>` elements (not placeholder-only).
- [ ] All icons that convey meaning have accessible text; purely decorative icons have `aria-hidden="true"`.
- [ ] Contrast ratios: 4.5:1 for body text, 3:1 for large text (≥18px regular, ≥14px bold).

### Performance

- [ ] Are React islands minimal? Do they use `client:visible` instead of `client:load` where appropriate?
- [ ] Are both versions of a conditionally-shown asset loaded simultaneously? (e.g., two logos, both fetched)
- [ ] Is `@astrojs/image` / `<Image>` used for raster assets?
- [ ] Are fonts loaded with `preconnect`? Are critical fonts preloaded?
- [ ] Are large SVGs inlined when they should be external, or vice versa?
- [ ] Are SVG paths that appear in multiple files extracted to the icon component?

### TypeScript / Type Quality

- [ ] Is there a union type for icon names? (Prevents silent fallback bugs)
- [ ] Do data config objects have explicit interface types? (e.g., `SiteConfig`, `Product`, `NavItem`)
- [ ] Are literal string types used for IDs and known enumerations?

### Tailwind / CSS

- [ ] Is there a single source of truth for design tokens? (Either CSS variables or Tailwind config, not both in conflict)
- [ ] Are Tailwind custom tokens actually used in templates?
- [ ] Are there inline `style=` attributes where a Tailwind utility class exists?
- [ ] Are there magic pixel values or hardcoded colors that should be tokens?
- [ ] Are Tailwind utility strings readable? Long class strings should be broken by concern.
- [ ] Is `text-opacity` / `bg-opacity` done via Tailwind's `/` syntax or via CSS?
- [ ] Are non-standard opacity values used (e.g., `/65` vs standard `/60` or `/70`)?
- [ ] Does the `global.css` component layer conflict with utility classes?

### Content Architecture

- [ ] Is user-visible copy in data files, not hardcoded in templates?
- [ ] Are placeholder / TODO / "coming soon" texts guarded from production builds?
- [ ] Is section-level text (headings, CTAs, sublines) extracted to the data layer for easy editing?
- [ ] Are hardcoded section labels (like "Kluczowe funkcje") in the data or overridable via props?
- [ ] Is there placeholder content that renders on production? (logos, images, filler text)

### Naming and Consistency

- [ ] Are component file names consistent with their content? (No abbreviations without explanation)
- [ ] Are section `id` attributes consistent in language with file names?
- [ ] Are data keys in TypeScript consistent with component names and section IDs?
- [ ] Are exported functions/constants named in a way that reveals intent?
- [ ] Are layout components named after their scope (BaseLayout, ProductLayout, LegalLayout)?

### File and Folder Architecture

- [ ] Is there a `src/data/` layer for all content/config?
- [ ] Is there a `src/sections/` layer for page-section components?
- [ ] Is there a `src/components/` layer for reusable UI components?
- [ ] Is there a `src/layouts/` layer for page-level wrappers?
- [ ] Are pages in `src/pages/` minimal - composition only, no inline content?
- [ ] Is there dead code in any layer? (Unused exports, unused components, unused data)

---

## Framework-Specific Rules

### Astro Rules
1. If a component has no `useState`, `useEffect`, or event listeners → it must be an Astro component.
2. `client:load` is only justified for components that must be interactive immediately on page load (e.g., fixed nav with scroll behavior).
3. `client:visible` is preferred for below-the-fold interactive sections.
4. Page files (`src/pages/`) must not contain content logic - only imports and composition.
5. Layouts must handle all `<head>` content. No manual meta tags in page files.
6. `<Fragment set:html={...}>` is unsafe by default. Justify every usage with why `Icon.astro` or a proper component wasn't used.

### React Rules
1. React components must require browser APIs, event handling, or state to justify their existence.
2. No React component should exceed ~150 lines without a justified reason.
3. Hooks that interact with `window` or `document` must guard against SSR with a `mounted` or `typeof window !== 'undefined'` check.
4. Disclosure widgets (dropdowns, menus, modals, dialogs) must implement: `aria-expanded`, `aria-controls`, focus trap, Escape key close.
5. Never render both versions of a conditional element in DOM simultaneously just to toggle visibility via CSS.

### TypeScript Rules
1. `!` non-null assertion is never acceptable on data lookups. Use invariants that throw at build time.
2. String types for known value sets must be union literals.
3. Shared interfaces belong in the module that owns the data, imported elsewhere.
4. The tsconfig strictness level must not be weakened to make errors go away.

---

## Anti-Patterns to Catch

| Pattern | Problem |
|---|---|
| `array.find()!` | Silently crashes if item missing; defeats noUncheckedIndexedAccess |
| `<Fragment set:html={svgString}>` | Bypasses icon system; unsanitized HTML injection |
| Both logo variants always in DOM | Double network request; hidden !== unloaded |
| `th-*` tokens defined but never used | Dead design system; false impression of consistency |
| Inline `style=` for every themed color | Cannot use Tailwind responsive/hover; 30+ repetitions |
| Placeholder content in production | Visible to users and search engines |
| `aria-label` on non-landmark `<ul>` | Poor screen reader support |
| `<br>` in headings | Breaks unpredictably on different viewports |
| SVG paths duplicated across files | Icon component exists and should be used |
| Section aria-label contradicts content | Misleads screen reader landmark navigation |
| Hardcoded copy in layout templates | Requires template edit to update copy |

---

## What "Good Enough" Means

A code change is good enough to approve when:
1. No P0/Critical issues remain
2. Accessibility baseline is met: skip link, correct ARIA for interactive widgets
3. TypeScript passes without `!` workarounds or `any` suppressions
4. No production-visible placeholder content
5. No broken Tailwind classes (silent no-ops)
6. Naming is unambiguous to a new developer

---

## What Should Block Approval

- Silent crash risk (non-null assertion, missing null check before property access)
- Broken output on production (missing assets, broken CSS classes, placeholder content)
- WCAG Level A violations (missing skip link, no keyboard access to interactive elements)
- New React component that should be Astro
- Dead code added (component created but never imported)
- `any` type used without comment justification

---

## Review Output Format

For each review produce:

### Section 1: Executive Summary (2-3 sentences, overall verdict)
### Section 2: What Is Good (specific, justified)
### Section 3: Issues (grouped by severity, each with: title / severity / file:line / explanation / recommendation / fix-now or fix-later)
### Section 4: Prioritized Fix List (P0 / P1 / P2)
### Section 5: Quick Wins (items under 30 min)

---

## How to Invoke This Skill

In a Claude Code session, type:

```
/claude-code-review
```

Then specify what to review:
- A single file: `/claude-code-review src/components/Nav.tsx`
- A directory: `/claude-code-review src/sections/`
- The full project: `/claude-code-review` (reviews all src/ files)
- A specific concern: `/claude-code-review --focus accessibility`

---

## Scope Flags (optional)

| Flag | What it limits the review to |
|---|---|
| `--focus accessibility` | Only a11y issues |
| `--focus typescript` | Only type safety issues |
| `--focus performance` | Only performance issues |
| `--focus architecture` | Only structural/composition issues |
| `--focus tailwind` | Only styling/token issues |
| `--focus content` | Only content/data architecture issues |
| `--quick` | P0 issues only, no long-term recommendations |
