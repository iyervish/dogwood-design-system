import {
  Building2,
  Search as SearchIcon,
  FileText,
  CreditCard,
  Download,
  HelpCircle,
  ChevronRight,
  LogIn,
  Scale,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Shield,
} from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Footer } from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent } from '../../components/ui/Card';
import { Tabs, TabList, Tab, TabPanel } from '../../components/ui/Tabs';
import { RadioGroup } from '../../components/ui/Radio';
import { Accordion, AccordionItem } from '../../components/ui/Accordion';

const quickServices = [
  { icon: SearchIcon, label: 'Entity Search', description: 'Look up any registered business', color: 'var(--blue-ridge-600)', bg: 'var(--blue-ridge-50)' },
  { icon: CheckCircle, label: 'Certificate Verification', description: 'Verify a certificate of good standing', color: 'var(--shenandoah-600)', bg: 'var(--shenandoah-50)' },
  { icon: FileText, label: 'Name Availability', description: 'Check if a business name is available', color: 'var(--chesapeake-600)', bg: 'var(--chesapeake-50)' },
  { icon: Download, label: 'Download Reports', description: 'Access public filing data and images', color: 'var(--blue-ridge-600)', bg: 'var(--blue-ridge-50)' },
  { icon: CreditCard, label: 'Pay Fees Online', description: 'Pay annual registration fees', color: 'var(--dogwood-600)', bg: 'var(--dogwood-50)' },
  { icon: Briefcase, label: 'Property Owner Search', description: 'Nonresident property owner lookup', color: 'var(--chesapeake-600)', bg: 'var(--chesapeake-50)' },
];

const helpLinks = [
  {
    icon: HelpCircle,
    title: 'Using CIS',
    color: 'var(--blue-ridge-600)',
    bg: 'var(--blue-ridge-50)',
    links: ['Create a CIS Account', 'Pay Fees Online', 'Online Help'],
  },
  {
    icon: Building2,
    title: 'Business Services',
    color: 'var(--chesapeake-600)',
    bg: 'var(--chesapeake-50)',
    links: ['Certificate Verification', 'Check Name Availability', 'Download Reports', 'Download Data and Images', 'Nonresident Property Owner Search'],
  },
  {
    icon: BookOpen,
    title: 'Resources',
    color: 'var(--shenandoah-600)',
    bg: 'var(--shenandoah-50)',
    links: ['Business Frequently Asked Questions', 'Existing Business Resources', 'New Business Resources'],
  },
];

export default function SCCPortal() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* ─── Header + Hero ─── */}
      <header className="relative overflow-hidden" style={{ backgroundColor: 'var(--blue-ridge-950)' }}>
        {/* Topographic texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-100">
            <defs>
              <pattern id="scc-topo" x="0" y="0" width="700" height="350" patternUnits="userSpaceOnUse">
                <path d="M0 175 Q175 100 350 175 T700 175" fill="none" stroke="var(--blue-ridge-900)" strokeWidth="1" />
                <path d="M0 155 Q175 80 350 155 T700 155" fill="none" stroke="var(--blue-ridge-900)" strokeWidth="0.7" />
                <path d="M0 195 Q175 120 350 195 T700 195" fill="none" stroke="var(--blue-ridge-900)" strokeWidth="0.7" />
                <path d="M0 135 Q140 60 350 135 T700 135" fill="none" stroke="var(--blue-ridge-900)" strokeWidth="0.5" opacity="0.6" />
                <path d="M0 215 Q210 140 350 215 T700 215" fill="none" stroke="var(--blue-ridge-900)" strokeWidth="0.5" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#scc-topo)" />
          </svg>
        </div>

        {/* Decorative gold accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, var(--dogwood-500), var(--dogwood-300), var(--dogwood-500))' }}
        />

        {/* Nav bar */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(212,168,50,0.15)', border: '1px solid rgba(212,168,50,0.2)' }}
            >
              <Scale size={22} style={{ color: 'var(--dogwood-400)' }} />
            </div>
            <div>
              <p
                className="text-base md:text-lg font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                State Corporation Commission
              </p>
              <p className="text-xs" style={{ color: 'var(--blue-ridge-400)' }}>
                Clerk's Information System
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5">
            {['Business Home', 'Filing Help', 'Contact'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm no-underline transition-colors hover:text-white"
                style={{ color: 'var(--blue-ridge-300)' }}
              >
                {item}
              </a>
            ))}
            <div className="h-4 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium no-underline transition-all hover:brightness-110"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
              }}
            >
              <LogIn size={14} />
              Sign In
            </a>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pb-16 pt-10 md:pt-16 text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
          >
            Search Virginia{' '}
            <span style={{ color: 'var(--dogwood-400)' }}>business records</span>
          </h1>
          <p className="text-sm md:text-base mx-auto max-w-lg mb-8" style={{ color: 'var(--blue-ridge-300)', lineHeight: 1.6 }}>
            Look up any entity registered with the Commonwealth — view filing history,
            registered agents, and download documents.
          </p>

          {/* Entity search — glass card */}
          <div
            className="rounded-xl p-5 md:p-6 text-left"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Tabs defaultValue="name">
              <TabList>
                <Tab value="name">By Name</Tab>
                <Tab value="id">By Entity ID</Tab>
              </TabList>

              <TabPanel value="name">
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  <div className="flex-1">
                    <Input
                      label="Entity Name"
                      placeholder="e.g. Dominion Energy, Acme LLC..."
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <Button>
                      <SearchIcon size={16} />
                      Search
                    </Button>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium no-underline transition-colors hover:opacity-80"
                  style={{ color: 'var(--dogwood-400)' }}
                >
                  Advanced Search
                  <ArrowRight size={12} />
                </a>
              </TabPanel>

              <TabPanel value="id">
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  <div className="flex-1">
                    <Input
                      label="Entity ID"
                      placeholder="7-digit SCC identification number"
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <Button>
                      <SearchIcon size={16} />
                      Search
                    </Button>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium no-underline transition-colors hover:opacity-80"
                  style={{ color: 'var(--dogwood-400)' }}
                >
                  Advanced Search
                  <ArrowRight size={12} />
                </a>
              </TabPanel>
            </Tabs>
          </div>

          {/* Stat chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {[
              { value: '800K+', label: 'Registered Entities' },
              { value: '24/7', label: 'Online Access' },
              { value: 'Free', label: 'Public Searches' },
            ].map(stat => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-sm font-bold" style={{ color: 'var(--dogwood-400)' }}>{stat.value}</span>
                <span className="text-xs" style={{ color: 'var(--blue-ridge-300)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ─── Quick Services ─── */}
      <section className="relative">
        {/* Overlap pull-up */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-0 pt-10 pb-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-1.5"
                style={{ color: 'var(--dogwood-600)' }}
              >
                No login required
              </p>
              <h2
                className="text-xl md:text-2xl font-bold"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                Business Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickServices.map(service => {
              const Icon = service.icon;
              return (
                <a
                  key={service.label}
                  href="#"
                  className="group flex items-center gap-3.5 p-4 rounded-xl border no-underline transition-all hover:shadow-lg"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: service.bg, color: service.color }}
                  >
                    <Icon size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {service.label}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {service.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── UCC Search ─── */}
      <section
        className="border-t"
        style={{ backgroundColor: 'var(--color-background-subtle)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-1.5"
                style={{ color: 'var(--dogwood-600)' }}
              >
                Public Records
              </p>
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
              >
                UCC & Federal Lien Search
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Search Uniform Commercial Code and federal lien records filed
                with the State Corporation Commission.
              </p>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <Shield size={13} style={{ color: 'var(--shenandoah-500)' }} />
                <span style={{ color: 'var(--color-text-muted)' }}>
                  UCC Certification Date: <strong style={{ color: 'var(--color-text)' }}>Feb 17, 2026</strong>
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card variant="outline">
                <CardContent>
                  <div className="space-y-4">
                    <RadioGroup
                      name="ucc-search-type"
                      label="Search by"
                      options={[
                        { value: 'filing', label: 'Filing Number' },
                        { value: 'debtor', label: 'Debtor Name' },
                      ]}
                      defaultValue="filing"
                    />
                    <Input
                      label="Filing Number"
                      required
                      placeholder="Enter UCC filing number..."
                    />
                    <div className="flex items-center gap-3">
                      <Button size="sm">
                        <SearchIcon size={16} />
                        Search Records
                      </Button>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm font-medium no-underline transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Advanced Search
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Helpful Links ─── */}
      <section className="border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-1.5"
            style={{ color: 'var(--dogwood-600)' }}
          >
            Quick Links
          </p>
          <h2
            className="text-xl md:text-2xl font-bold mb-8"
            style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
          >
            Helpful Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {helpLinks.map(group => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                >
                  {/* Colored top accent */}
                  <div className="h-1" style={{ backgroundColor: group.color }} />

                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: group.bg, color: group.color }}
                      >
                        <Icon size={15} />
                      </div>
                      <h3
                        className="text-sm font-bold"
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                      >
                        {group.title}
                      </h3>
                    </div>

                    <ul className="list-none p-0 m-0 space-y-0">
                      {group.links.map((link, idx) => (
                        <li
                          key={link}
                          className="border-t first:border-t-0"
                          style={{ borderColor: 'var(--color-border)' }}
                        >
                          <a
                            href="#"
                            className="flex items-center justify-between py-2.5 text-sm no-underline transition-colors hover:opacity-70"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            <span>{link}</span>
                            <ChevronRight size={13} style={{ color: 'var(--color-text-muted)' }} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Terms ─── */}
      <section
        className="border-t"
        style={{ backgroundColor: 'var(--color-background-subtle)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <Accordion type="single">
            <AccordionItem value="terms" title="Terms and Conditions of Use">
              <div className="space-y-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  This Clerk's Information System (CIS) is the property of the State Corporation
                  Commission (SCC) of the Commonwealth of Virginia. Only persons authorized by the SCC
                  are permitted to access and use the CIS.
                </p>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                  Authorized uses of the CIS include:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>File or submit business entity documents for new and existing businesses</li>
                  <li>Pay business entity annual registration fees</li>
                  <li>Reinstate business entities</li>
                  <li>File Uniform Commercial Code (UCC) and federal lien documents</li>
                  <li>Serve process on the Clerk as statutory agent</li>
                </ul>
                <p>
                  The SCC monitors the use of the CIS to ensure proper functioning and security.
                  Unauthorized use will result in loss of access, potential civil penalties,
                  and reporting to law enforcement for investigation.
                </p>
                <p>
                  By proceeding with login or account creation, you acknowledge and agree to these
                  Terms and Conditions of Use.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer
        siteName="State Corporation Commission"
        linkGroups={[
          {
            title: 'SCC Services',
            links: [
              { label: 'Business Home', href: '#' },
              { label: 'Bureau of Insurance', href: '#' },
              { label: 'Utility Regulation', href: '#' },
              { label: 'Securities Division', href: '#' },
            ],
          },
          {
            title: 'Business Filing',
            links: [
              { label: 'Start a Business', href: '#' },
              { label: 'Manage a Business', href: '#' },
              { label: 'Close a Business', href: '#' },
              { label: 'Forms Library', href: '#' },
            ],
          },
          {
            title: 'Support',
            links: [
              { label: 'Contact Us', href: '#' },
              { label: 'CIS FAQs', href: '#' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Accessibility', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}
