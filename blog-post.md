# Building a Design System for an Entire State

I've been thinking a lot about what happens when 80 state agencies all need digital services and none of them share a common design language. Each one hires its own vendor, picks its own component library, builds its own buttons. The result is predictable: inconsistent experiences for citizens, duplicated effort across teams, and accessibility that ranges from "pretty good" to "nonexistent."

That's the problem Dogwood is trying to solve.

---

## What Dogwood Actually Is

Dogwood is a design system for the Commonwealth of Virginia. Not a starter kit. Not a Figma file with aspirational spacing tokens. It's 22 production-ready components, 7 design patterns, and 5 full-page government templates—all built in React and TypeScript, all WCAG 2.1 AA compliant out of the box.

The name comes from Virginia's state flower. And that's not just branding—it's a design decision that runs through the entire system.

---

## Naming Colors After the Land

Most design systems name their colors something like `blue-600` or `primary-dark`. Functional, forgettable. Dogwood takes a different approach: every color family is named after Virginia geography.

- **Blue Ridge** — deep navy tones, inspired by the mountains. Used for primary brand and authority.
- **Chesapeake** — teal, drawn from the bay. Used for information and interactive states.
- **Shenandoah** — forest green, from the valley. Used for success states.
- **Cardinal** — red, from the state bird. Used for errors.
- **Dogwood** — warm gold, from the flower itself. Used for accents and warnings.
- **Piedmont** — earthy brown, from the clay-rich region. A warm neutral alternative.
- **Slate** — blue-gray. The workhorse for text, borders, and backgrounds.

Each family has 11 tonal stops, from 50 to 950. That's 77 color variables before you even get to semantic mapping.

It might seem like a small thing, but naming matters. When a developer writes `--blue-ridge-600`, they're referencing something with identity. It's not a generic system that could belong to any state or any company. It belongs to Virginia. And for citizens interacting with these services, there's something grounding about that—even if they never see the variable names.

---

## Three Layers of Intention

Here's where the architecture gets interesting.

Dogwood doesn't just have colors. It has a **token pipeline** with three distinct layers, each adding a level of meaning.

**Layer 1: System tokens.** These are the raw values. `--blue-ridge-600: #486581`. No meaning attached yet—just a color with a name.

**Layer 2: Theme tokens.** This is where colors gain purpose. `--color-primary: var(--blue-ridge-600)`. Now that navy blue *means* something. It's the primary action color. It's what buttons use. And critically, this mapping can change. Swap the pointer, and the entire system re-skins without touching a single component.

**Layer 3: Component tokens.** This is what components actually consume. A `Button` doesn't know about Blue Ridge. It knows about `--color-primary`. An `Alert` doesn't know about Cardinal. It knows about `--color-error`.

The insulation between layers is the whole point. Change your geography palette? Only the theme layer updates. Switch from light to dark mode? Same—just the theme layer. Redesign a button? Only the component layer moves.

I've seen plenty of design systems that flatten all of this into one layer and call it done. It works until you need a second theme, or a white-label variant, or dark mode. Then you're refactoring everything. Dogwood's three-layer approach borrows from Material Design 3's token architecture, and it pays off immediately—light and dark mode are just two sets of theme-layer mappings over the same system tokens.

---

## Components That Actually Ship

It's easy to build a design system that looks great in Storybook and falls apart in production. Dogwood's components are built with the assumption that they'll land in real government applications, maintained by teams with varying levels of frontend expertise.

Every component uses `React.forwardRef` for ref forwarding. Every component has typed props with TypeScript strict mode. Every interactive element has keyboard navigation and ARIA attributes baked in—not as an afterthought, but as the starting point.

The lineup covers the essentials: Button, Input, Select, Checkbox, Radio, TextArea, Search, Alert, Badge, Banner, Tooltip, Card, Table, Accordion, Modal, Breadcrumb, Pagination, Tabs, StepIndicator, SideNavigation. Plus two government-specific components: a `GovBanner` (the official Commonwealth identifier strip) and a structured `Footer`.

Nothing exotic. That's deliberate. A government design system doesn't need novelty. It needs reliability across 80 agencies with different tech stacks, different team sizes, and different levels of design maturity.

---

## Templates Over Demos

Most design systems show you a button in isolation and wish you luck. Dogwood ships five full-page templates that demonstrate how components compose into real government services:

- An agency homepage
- A DMV portal
- A benefit application flow
- A news and announcements layout
- A State Corporation Commission (SCC) portal

The SCC Portal is the most fully realized. It has entity search, certificate verification, fee payment, property lookup—the kind of boring-but-critical workflows that state government actually runs on. It's built entirely from Dogwood components: GovBanner, Button, Input, Card, Tabs, RadioGroup, Accordion.

These templates do two things. First, they prove the system works at page scale, not just component scale. Second, they give agencies a starting point that's closer to "done" than "blank canvas." For a team that might not have a dedicated designer, that's the difference between launching something good and launching something that looks like a 2008 SharePoint page.

---

## The Styling Bet

Dogwood makes an interesting technical choice: it uses **CSS custom properties for all theming**, even though Tailwind CSS is in the stack. Tailwind handles utility classes—margins, padding, layout. But every color, every font, every shadow, every radius runs through CSS variables defined in a central `tokens.css` file.

This means theme switching happens at runtime. No rebuilds, no CSS-in-JS overhead, no class swapping on individual elements. Add `.dark` to the document root and 100+ variables remap simultaneously. The approach is simple, performant, and works with server-side rendering without hydration mismatches.

Even text selection is styled through the system:

```css
.dogwood ::selection {
  background-color: var(--dogwood-200);
  color: var(--blue-ridge-950);
}
```

That level of detail—where even highlighting text feels intentional—is what separates a design system from a component library.

---

## Typography With Intent

Three typefaces, each chosen for a reason:

- **Merriweather** (serif) for headings. It conveys trust and permanence—qualities you want in government communication.
- **Source Sans 3** (sans-serif) for body text. It's the same family used by the U.S. Web Design System, which means it's been battle-tested for readability at government scale.
- **JetBrains Mono** for code. Ligature support makes technical documentation easier to scan.

The type scale has 11 levels, from a 3rem display size down to 0.75rem captions. Everything sits on an 8px spacing grid with 16 tokens. Consistent vertical rhythm without overthinking it.

---

## What I Think Makes This Work

I've looked at a lot of design systems. The ones that succeed long-term share a few traits: they're opinionated enough to enforce consistency, flexible enough to handle edge cases, and simple enough that teams actually adopt them.

Dogwood hits those marks. The Virginia naming convention gives it an identity that generic systems lack. The three-layer token architecture gives it flexibility without complexity. The government templates give agencies something concrete to start from. And the accessibility-first approach means teams don't have to bolt on compliance after the fact.

The harder question is adoption. A design system is only as good as its uptake. Virginia has 80+ agencies, each with its own procurement process, its own technical constraints, its own inertia. Building Dogwood is the easier part. Getting it into production across the Commonwealth—that's the real work.

But the foundation is solid. And for any state or municipality watching from the sidelines, wondering whether it's worth building a shared design system instead of letting every agency fend for itself: look at what Virginia is doing. The math isn't complicated. Build it once, build it well, and let 80 teams ship faster.

---

*Dogwood is open source under the MIT license. Built by [Studio Pimmit](https://studiopimmit.com).*
