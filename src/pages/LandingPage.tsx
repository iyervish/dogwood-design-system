import { Link } from 'react-router-dom';
import { ArrowRight, Github, Moon, Sun, Shield, Eye, Users, MapPin, Smartphone, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { colorFamilies } from '../tokens/colors';
import DogwoodLogo from '../components/DogwoodLogo';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// Virginia state outline SVG path (simplified)
const VirginiaOutline = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 800 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M120 180 L160 170 L200 160 L240 155 L280 150 L320 148 L360 145 L400 140 L440 138 L460 136 L480 160 L520 200 L560 240 L600 260 L640 280 L680 300 L720 340 L700 350 L660 360 L620 340 L580 320 L540 310 L500 300 L480 320 L460 340 L440 360 L420 370 L400 360 L380 340 L360 320 L340 310 L320 300 L300 290 L280 280 L260 270 L240 260 L220 250 L200 240 L180 230 L160 220 L140 210 L120 200 Z"
      fill="currentColor"
      opacity="0.04"
    />
  </svg>
);

// Derive display swatches from actual token data
const colorStrip = colorFamilies.map(family => ({
  name: family.name,
  colors: [
    family.scale[50],
    family.scale[200],
    family.scale[400],
    family.scale[500],
    family.scale[700],
    family.scale[950],
  ],
}));

const stats = [
  { value: '30', label: 'Components', sublabel: 'Production-ready' },
  { value: '7', label: 'Patterns', sublabel: 'Multi-component' },
  { value: '7', label: 'Templates', sublabel: 'Full-page demos' },
  { value: 'AA', label: 'WCAG 2.1', sublabel: 'Accessibility' },
];

const principles = [
  { icon: Eye, title: 'High-Quality by Default', desc: 'Agencies shouldn\'t have to start from scratch. Dogwood provides production-ready components, patterns, and templates so every team begins with a solid, well-crafted foundation.' },
  { icon: Users, title: 'Citizen-Centered', desc: 'Every design decision starts with the citizen. Clear language, obvious actions, minimal cognitive load. Government services should be as easy as the best consumer products.' },
  { icon: MapPin, title: 'Virginia-First Identity', desc: 'Not a generic system — a Virginia system. Colors named after our geography, typography chosen for government trust, patterns designed for Commonwealth services.' },
  { icon: Smartphone, title: 'Mobile-Ready', desc: 'Most Virginians access government services on their phones. Every component is responsive by default and optimized for touch interactions.' },
  { icon: Zap, title: 'Performance-Minded', desc: 'Fast load times aren\'t a nice-to-have — they\'re equity. Citizens on slow connections and older devices deserve the same experience as everyone else.' },
  { icon: Shield, title: 'Accessible First', desc: 'WCAG 2.1 AA is the floor, not the ceiling. Every component is keyboard navigable, screen-reader compatible, and meets contrast requirements. Government services must work for every citizen.' },
];

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="dogwood min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* ═══ Navigation ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="flex items-center justify-between px-6 lg:px-10 py-4"
          style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(16,42,67,0.85)' }}
        >
          <div className="flex items-center gap-2.5">
            <DogwoodLogo size={30} />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-sm tracking-tight" style={{ color: '#f0f4f8', fontFamily: 'var(--font-heading)' }}>
                Dogwood
              </span>
              <span className="text-[10px] tracking-wide" style={{ color: '#829ab1' }}>
                Virginia's Design System
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              to="/foundations"
              className="hidden md:inline-block px-3 py-1.5 text-sm no-underline transition-colors hover:text-white"
              style={{ color: '#9fb3c8' }}
            >
              Foundations
            </Link>
            <Link
              to="/components"
              className="hidden md:inline-block px-3 py-1.5 text-sm no-underline transition-colors hover:text-white"
              style={{ color: '#9fb3c8' }}
            >
              Components
            </Link>
            <div className="w-px h-5 mx-2 hidden md:block" style={{ backgroundColor: '#334e68' }} />
            <button onClick={toggleTheme} className="p-2 rounded-md transition-colors" style={{ color: '#9fb3c8' }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <a href="https://github.com/iyervish/dogwood-design-system" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md transition-colors" style={{ color: '#9fb3c8' }} aria-label="GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* ═══ HERO — Dark Navy, Blue Ridge at Dusk ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0a1f38' }}>
        {/* Topographic contour lines */}
        <div className="absolute inset-0" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-100">
            <defs>
              <pattern id="topo-hero" x="0" y="0" width="600" height="300" patternUnits="userSpaceOnUse">
                <path d="M0 150 Q150 80 300 150 T600 150" fill="none" stroke="#1b365d" strokeWidth="1" />
                <path d="M0 130 Q150 60 300 130 T600 130" fill="none" stroke="#1b365d" strokeWidth="0.8" />
                <path d="M0 170 Q150 100 300 170 T600 170" fill="none" stroke="#1b365d" strokeWidth="0.8" />
                <path d="M0 110 Q120 40 300 110 T600 110" fill="none" stroke="#1b365d" strokeWidth="0.6" />
                <path d="M0 190 Q180 120 300 190 T600 190" fill="none" stroke="#1b365d" strokeWidth="0.6" />
                <path d="M0 90 Q100 20 300 90 T600 90" fill="none" stroke="#243b53" strokeWidth="0.4" />
                <path d="M0 210 Q200 140 300 210 T600 210" fill="none" stroke="#243b53" strokeWidth="0.4" />
                <path d="M0 70 Q80 0 300 70 T600 70" fill="none" stroke="#243b53" strokeWidth="0.3" />
                <path d="M0 230 Q220 160 300 230 T600 230" fill="none" stroke="#243b53" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-hero)" />
          </svg>
        </div>

        {/* Virginia outline watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none" aria-hidden="true">
          <VirginiaOutline className="w-[700px] h-auto text-white opacity-[0.03]" />
        </div>


        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-36 pb-28 lg:pt-44 lg:pb-36">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Kicker */}
            <motion.div custom={0} variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{ backgroundColor: 'rgba(212,168,50,0.15)', color: '#eecb55', border: '1px solid rgba(212,168,50,0.25)' }}>
                <Shield size={13} />
                Open Source &middot; MIT Licensed
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl"
              style={{ fontFamily: 'var(--font-heading)', color: '#f0f4f8', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              A design system for the{' '}
              <span className="relative inline-block">
                <span style={{ color: '#eecb55' }}>Commonwealth</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #d4a832, transparent)' }} />
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl max-w-2xl mb-10"
              style={{ color: '#829ab1', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}
            >
              A high-quality, accessible starting point for
              Virginia's 80+ state agencies. Inspired by USWDS. Rooted in Virginia.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                to="/components"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-base font-semibold no-underline transition-all"
                style={{ backgroundColor: '#d4a832', color: '#102a43', fontFamily: 'var(--font-body)' }}
              >
                Explore Components
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/foundations/color"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold no-underline transition-all"
                style={{ border: '1px solid #334e68', color: '#9fb3c8', fontFamily: 'var(--font-body)' }}
              >
                View Foundations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Color Strip — Signature Palette ═══ */}
      <section className="py-20 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
            style={{ color: 'var(--color-text-muted)' }}>
            Virginia-Inspired Color System
          </p>

          <div className="space-y-3">
            {colorStrip.map((family) => (
              <div key={family.name} className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-right flex-shrink-0"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                  {family.name}
                </span>
                <div className="flex-1 flex gap-1 h-10 rounded-lg overflow-hidden">
                  {family.colors.map((color, j) => (
                    <div
                      key={j}
                      className="flex-1 transition-all hover:flex-[2] cursor-pointer"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ Problem Statement ═══ */}
      <section className="py-20 px-6 lg:px-10 relative" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--dogwood-500)' }}>
            The Problem
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            80+ agencies.<br />Most starting from zero.
          </h2>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
          >
            Every agency team deserves a solid starting point — accessible, well-crafted,
            and production-ready. Dogwood gives them that foundation so they can focus on
            serving citizens, not reinventing buttons.
          </p>
        </motion.div>
      </section>

      {/* ═══ Live Component Preview ═══ */}
      <section className="py-24 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)' }}>
            Component Library
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            Built to compose
          </h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Every component is accessible, dark-mode ready, and designed to work together.
            Here's a taste.
          </p>

          {/* Live component gallery */}
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Tab bar */}
            <div className="flex items-center gap-4 px-6 py-3 border-b" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-subtle)' }}>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f26b84' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#eecb55' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5cb57e' }} />
              </div>
              <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>
                preview.tsx
              </span>
            </div>

            {/* Component showcase */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Row 1: Buttons + Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <Button>Submit Application</Button>
                <Button variant="secondary">Save Draft</Button>
                <Button variant="outline">Cancel</Button>
                <div className="ml-2 flex gap-2">
                  <Badge variant="success">Approved</Badge>
                  <Badge variant="warning">Under Review</Badge>
                  <Badge variant="error">Action Required</Badge>
                </div>
              </div>

              {/* Row 2: Form + Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input label="Full Legal Name" placeholder="As it appears on your ID" />
                  <Input label="Email Address" type="email" placeholder="citizen@virginia.gov" helperText="We'll send your confirmation here" />
                </div>
                <Card variant="outline">
                  <CardHeader>
                    <CardTitle>DMV License Renewal</CardTitle>
                    <CardDescription>Renew your Virginia driver's license online</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Complete your renewal in minutes. You'll need your current license number and payment method.
                    </p>
                    <div className="mt-4">
                      <Button size="sm">Start Renewal</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Row 3: Alert */}
              <Alert variant="info" title="Application Received">
                Your application #VA-2024-38291 has been submitted. You'll receive a confirmation email within 24 hours.
              </Alert>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors"
              style={{ color: 'var(--color-primary)' }}
            >
              View all 30 components
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══ Principles ═══ */}
      <section className="py-20 px-6 lg:px-10 relative" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)' }}>
            Design Principles
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            What guides us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-6 rounded-xl border"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--dogwood-100)', color: 'var(--dogwood-700)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--color-text)' }}>
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Token Architecture Diagram ═══ */}
      <section className="py-20 px-6 lg:px-10" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)' }}>
            Architecture
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            Three layers of intention
          </h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            From Virginia geography to semantic meaning to component-ready values.
          </p>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {[
              {
                label: 'System',
                sublabel: 'Virginia Geography',
                items: [
                  { name: 'blue-ridge-600', color: 'var(--blue-ridge-600)' },
                  { name: 'dogwood-500', color: 'var(--dogwood-500)' },
                  { name: 'cardinal-500', color: 'var(--cardinal-500)' },
                ],
              },
              {
                label: 'Theme',
                sublabel: 'Semantic Roles',
                items: [
                  { name: '--color-primary', color: 'var(--color-primary)' },
                  { name: '--color-accent', color: 'var(--color-accent)' },
                  { name: '--color-error', color: 'var(--color-error)' },
                ],
              },
              {
                label: 'Component',
                sublabel: 'Ready to Use',
                items: [
                  { name: 'Button.bg', color: 'var(--color-primary)' },
                  { name: 'Badge.bg', color: 'var(--color-accent)' },
                  { name: 'Alert.border', color: 'var(--color-error)' },
                ],
              },
            ].map((layer, i) => (
              <div key={i} className="flex-1 flex flex-col">
                <div
                  className="rounded-xl border p-6 flex-1"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--dogwood-500)' }}>
                      {layer.label}
                    </span>
                  </div>
                  <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
                    {layer.sublabel}
                  </p>
                  <div className="space-y-3">
                    {layer.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md flex-shrink-0 border" style={{ backgroundColor: item.color, borderColor: 'var(--color-border)' }} />
                        <code className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                          {item.name}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
                {i < 2 && (
                  <div className="flex items-center justify-center py-2 md:hidden">
                    <ArrowRight size={16} style={{ color: 'var(--color-text-muted)', transform: 'rotate(90deg)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Arrow connectors (desktop) */}
          <div className="hidden md:flex items-center justify-center gap-4 -mt-[calc(50%_-_1rem)] pointer-events-none absolute left-0 right-0" />
        </motion.div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 lg:px-10 relative overflow-hidden"
        style={{ backgroundColor: '#0a1f38' }}>
        {/* Subtle topo texture */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo-cta" x="0" y="0" width="400" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q100 60 200 100 T400 100" fill="none" stroke="#1b365d" strokeWidth="0.8" />
                <path d="M0 80 Q100 40 200 80 T400 80" fill="none" stroke="#1b365d" strokeWidth="0.5" />
                <path d="M0 120 Q100 80 200 120 T400 120" fill="none" stroke="#1b365d" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-cta)" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#f0f4f8', letterSpacing: '-0.02em' }}>
            Start building with Dogwood
          </h2>
          <p className="text-lg mb-8" style={{ color: '#829ab1', lineHeight: 1.7 }}>
            Explore the component library, review the token architecture,
            or dive into the foundations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold no-underline"
              style={{ backgroundColor: '#d4a832', color: '#102a43' }}
            >
              Browse Components
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/iyervish/dogwood-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold no-underline"
              style={{ border: '1px solid #334e68', color: '#9fb3c8' }}
            >
              <Github size={18} />
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="py-12 px-6 lg:px-10 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <DogwoodLogo size={22} />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-heading)' }}>
                Dogwood
              </span>
              <span className="text-[9px]" style={{ color: 'var(--color-text-muted)' }}>
                Virginia's Design System
              </span>
            </div>
          </div>
          <p className="text-xs text-center md:text-right" style={{ color: 'var(--color-text-muted)' }}>
            Built by{' '}
            <a href="https://studiopimmit.com" target="_blank" rel="noopener noreferrer"
              className="no-underline font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              Studio Pimmit
            </a>
            {' '}&middot; MIT Licensed &middot; Not affiliated with the Commonwealth of Virginia
          </p>
        </div>
      </footer>
    </div>
  );
}
