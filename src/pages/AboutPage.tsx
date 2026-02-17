import { Github, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="dogwood-prose">
      <h1>About</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Dogwood is an open-source demonstration of what a world-class
        government design system could look like for the Commonwealth of Virginia.
      </p>

      <h2>Why This Exists</h2>
      <p>
        Virginia has over 80 state agencies, and most of their digital teams are
        building from scratch — choosing frameworks, designing components, solving
        accessibility problems that have already been solved elsewhere.
      </p>
      <p>
        Dogwood gives every agency a high-quality starting point. Production-ready
        components, thoughtful patterns, and full-page templates that are accessible,
        responsive, and well-crafted out of the box — so teams can focus on serving
        citizens instead of reinventing infrastructure.
      </p>

      <h2>Built By Studio Pimmit</h2>
      <p>
        This project was built by{' '}
        <a href="https://studiopimmit.com" target="_blank" rel="noopener noreferrer">
          Studio Pimmit
        </a>
        , an AI-first design and development consultancy based in Virginia. We believe in
        demonstrating capability through craft, and this design system is our proof of
        what's possible.
      </p>

      <h2>Inspired By</h2>
      <ul style={{ color: 'var(--color-text-secondary)' }}>
        <li>
          <a href="https://designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">
            U.S. Web Design System (USWDS)
          </a>{' '}
          — The federal standard for accessible, mobile-friendly government websites
        </li>
        <li>
          <a href="https://m3.material.io/" target="_blank" rel="noopener noreferrer">
            Material Design 3
          </a>{' '}
          — Google's token-driven design system with dynamic theming
        </li>
        <li>
          <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
            shadcn/ui
          </a>{' '}
          — Component architecture and developer experience model
        </li>
      </ul>

      <h2>Open Source</h2>
      <p>
        This project is MIT licensed. Use it, fork it, build on it. If you're a state
        or local government looking to build a design system, we'd love to help.
      </p>

      <div className="flex gap-3 mt-6">
        <a
          href="https://github.com/iyervish/dogwood-design-system"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium no-underline border transition-colors"
          style={{
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          <Github size={16} />
          View on GitHub
        </a>
        <a
          href="https://studiopimmit.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-primary-foreground)',
          }}
        >
          <ExternalLink size={16} />
          Work with us
        </a>
      </div>
    </div>
  );
}
