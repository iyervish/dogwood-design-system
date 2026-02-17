import React from 'react';
import {
  Building2,
  FileText,
  Car,
  HeartHandshake,
  Scale,
  GraduationCap,
  Shield,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Footer } from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Search } from '../../components/ui/Search';
import { Alert } from '../../components/ui/Alert';

const services = [
  { icon: Car, title: "Driver's License & ID", description: 'Renew, replace, or apply for a new license or ID card.' },
  { icon: FileText, title: 'Permits & Licensing', description: 'Business permits, professional licenses, and registrations.' },
  { icon: HeartHandshake, title: 'Benefits & Assistance', description: 'Apply for healthcare, food assistance, and housing programs.' },
  { icon: Scale, title: 'Courts & Legal', description: 'Court records, jury duty, and legal aid resources.' },
  { icon: GraduationCap, title: 'Education', description: 'Schools, higher education, financial aid, and training programs.' },
  { icon: Shield, title: 'Public Safety', description: 'Emergency services, sex offender registry, and safety resources.' },
];

const news = [
  {
    category: 'Transportation',
    title: 'I-64 Widening Project Enters Phase 3',
    description: 'Construction begins on the final phase of the I-64 corridor improvements between Richmond and Hampton Roads.',
    date: 'Feb 12, 2026',
    featured: true,
  },
  {
    category: 'Health',
    title: 'Free Flu Vaccination Clinics Open Statewide',
    description: 'The Virginia Department of Health announces free flu vaccination clinics across all 133 localities.',
    date: 'Feb 10, 2026',
    featured: false,
  },
  {
    category: 'Economy',
    title: 'Virginia Unemployment Rate Drops to 2.8%',
    description: 'The Commonwealth reports its lowest unemployment rate in a decade, driven by tech sector growth.',
    date: 'Feb 8, 2026',
    featured: false,
  },
];

const quickLinks = [
  { label: 'Pay Taxes Online', href: '#' },
  { label: 'Find a State Employee', href: '#' },
  { label: 'Register to Vote', href: '#' },
  { label: 'Unclaimed Property', href: '#' },
  { label: 'Job Openings', href: '#' },
  { label: 'State Parks & Recreation', href: '#' },
];

export default function AgencyHomepage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header
        className="border-b"
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--blue-ridge-900)', color: 'white' }}
            >
              <Building2 size={22} />
            </div>
            <div>
              <p
                className="text-lg font-bold leading-tight"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                Commonwealth of Virginia
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                Official State Portal
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {['Services', 'Agencies', 'News', 'About'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium transition-colors hover:opacity-70 no-underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item}
              </a>
            ))}
            <Button size="sm">Contact Us</Button>
          </nav>
        </div>
      </header>

      {/* Alert Banner */}
      <Alert variant="info" title="Tax Filing Season" dismissible>
        Virginia individual income tax returns are due May 1, 2026. File online at{' '}
        <a href="#" style={{ color: 'var(--color-primary)' }}>tax.virginia.gov</a>.
      </Alert>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--blue-ridge-900) 0%, var(--blue-ridge-700) 50%, var(--chesapeake-700) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Virginia is for
              <br />
              <span style={{ color: 'var(--dogwood-300)' }}>everyone.</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Access government services, find information, and connect with
              state agencies — all in one place.
            </p>
            <div className="max-w-lg">
              <Search
                label="Search Virginia.gov"
                placeholder="Search for services, agencies, or information..."
                size="lg"
              />
            </div>
          </div>
        </div>
        {/* Decorative shapes */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{
            background: 'radial-gradient(circle at 70% 30%, white 0%, transparent 70%)',
          }}
        />
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Popular Services
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Quick access to the most-used state services
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium no-underline transition-colors hover:opacity-70"
            style={{ color: 'var(--color-primary)' }}
          >
            All services <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => {
            const Icon = service.icon;
            return (
              <Card key={service.title} variant="outline" clickable>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--blue-ridge-50)', color: 'var(--blue-ridge-600)' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base mb-1">{service.title}</CardTitle>
                      <CardDescription className="text-sm">{service.description}</CardDescription>
                    </div>
                    <ChevronRight
                      size={16}
                      className="shrink-0 mt-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* News & Quick Links */}
      <section
        className="border-t"
        style={{ backgroundColor: 'var(--color-background-subtle)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-end justify-between mb-6">
                <h2
                  className="text-2xl font-bold"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                >
                  Latest News
                </h2>
                <a
                  href="#"
                  className="text-sm font-medium no-underline transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-primary)' }}
                >
                  All news <ArrowRight size={14} className="inline ml-1" />
                </a>
              </div>

              <div className="space-y-4">
                {news.map((item, idx) => (
                  <Card key={idx} variant="outline" clickable>
                    <CardContent>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" size="sm">{item.category}</Badge>
                            {item.featured && <Badge variant="info" size="sm">Featured</Badge>}
                          </div>
                          <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                          <CardDescription className="text-sm mb-2">{item.description}</CardDescription>
                          <span className="text-xs flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>
                            <Clock size={12} />
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                Quick Links
              </h2>
              <div
                className="rounded-lg border divide-y"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  divideColor: 'var(--color-border)',
                }}
              >
                {quickLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-sm font-medium no-underline transition-colors hover:opacity-70"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {link.label}
                    <ExternalLink size={14} style={{ color: 'var(--color-text-muted)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-xl mx-auto">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Need Help?
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Our team is available Monday through Friday, 8 AM to 5 PM ET.
              We're here to help you find the services and information you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <Phone size={16} style={{ color: 'var(--color-primary)' }} />
                <span>1-800-555-VIRGINIA</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <Mail size={16} style={{ color: 'var(--color-primary)' }} />
                <span>help@virginia.gov</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
                <span>Find an Office</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        siteName="Commonwealth of Virginia"
        linkGroups={[
          {
            title: 'Government',
            links: [
              { label: 'Governor', href: '#' },
              { label: 'State Agencies', href: '#' },
              { label: 'Legislature', href: '#' },
              { label: 'Courts', href: '#' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Accessibility', href: '#' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Open Data', href: '#' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Contact Us', href: '#' },
              { label: 'Social Media', href: '#' },
              { label: 'Newsletter', href: '#' },
              { label: 'Feedback', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}
