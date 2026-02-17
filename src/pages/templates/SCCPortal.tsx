import React from 'react';
import {
  Building2,
  Search as SearchIcon,
  FileText,
  CreditCard,
  Download,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  UserPlus,
  LogIn,
  Scale,
  BookOpen,
  CheckCircle,
  Lock,
} from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Footer } from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Tabs, TabList, Tab, TabPanel } from '../../components/ui/Tabs';
import { RadioGroup } from '../../components/ui/Radio';
import { Accordion, AccordionItem } from '../../components/ui/Accordion';

const quickServices = [
  { icon: SearchIcon, label: 'Entity Search', description: 'Look up any business registered in Virginia' },
  { icon: CheckCircle, label: 'Certificate Verification', description: 'Verify a certificate of good standing' },
  { icon: FileText, label: 'Check Name Availability', description: 'See if a business name is available' },
  { icon: Download, label: 'Download Reports', description: 'Access public filing data and images' },
  { icon: CreditCard, label: 'Pay Fees Online', description: 'Pay annual registration fees' },
  { icon: SearchIcon, label: 'Property Owner Search', description: 'Nonresident property owner lookup' },
];

export default function SCCPortal() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(135deg, var(--blue-ridge-950) 0%, var(--blue-ridge-800) 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <Scale size={24} className="text-white" />
            </div>
            <div>
              <p
                className="text-xl md:text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                State Corporation Commission
              </p>
              <p className="text-sm text-white/60 mt-0.5">
                Clerk's Information System
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Sign In + Search Hero */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Sign In Card */}
            <Card variant="outline" className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock size={16} style={{ color: 'var(--color-primary)' }} />
                  <CardTitle className="text-base">Sign In</CardTitle>
                </div>
                <CardDescription>
                  Log in to complete filings, make payments, and manage your business activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input label="Username" required placeholder="Enter your username" />
                  <Input label="Password" type="password" required placeholder="Enter your password" />

                  <div className="flex items-center justify-between pt-1">
                    <Button size="sm">
                      <LogIn size={16} />
                      Sign In
                    </Button>
                    <a
                      href="#"
                      className="text-xs font-medium no-underline transition-colors hover:opacity-70"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Forgot your password?
                    </a>
                  </div>

                  <div
                    className="pt-4 mt-4 border-t flex items-center justify-between"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      Don't have an account?
                    </p>
                    <Button size="sm" variant="outline">
                      <UserPlus size={14} />
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search Cards */}
            <div className="lg:col-span-3 space-y-6">
              {/* Business Entity Search */}
              <Card variant="outline">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 size={16} style={{ color: 'var(--color-primary)' }} />
                    <CardTitle className="text-base">Business Entity Search</CardTitle>
                  </div>
                  <CardDescription>
                    Search for businesses registered with the Commonwealth. View filing history,
                    registered agent information, and download filing images — no login required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="name">
                    <TabList>
                      <Tab value="name">Search by Name</Tab>
                      <Tab value="id">Search by Entity ID</Tab>
                    </TabList>

                    <TabPanel value="name">
                      <div className="space-y-4">
                        <Input
                          label="Entity Name"
                          placeholder="Enter business name..."
                          helperText='Use "Contains" for partial matches or "Starts with" for exact prefix.'
                        />
                        <div className="flex items-center gap-3">
                          <Button size="sm">
                            <SearchIcon size={16} />
                            Search
                          </Button>
                          <a
                            href="#"
                            className="text-sm font-medium no-underline transition-colors hover:opacity-70"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            Advanced Search
                          </a>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel value="id">
                      <div className="space-y-4">
                        <Input
                          label="Entity ID"
                          placeholder="Enter SCC entity ID number..."
                          helperText="The 7-digit identification number assigned by the SCC."
                        />
                        <div className="flex items-center gap-3">
                          <Button size="sm">
                            <SearchIcon size={16} />
                            Search
                          </Button>
                          <a
                            href="#"
                            className="text-sm font-medium no-underline transition-colors hover:opacity-70"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            Advanced Search
                          </a>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </CardContent>
              </Card>

              {/* UCC Search */}
              <Card variant="outline">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText size={16} style={{ color: 'var(--color-primary)' }} />
                    <CardTitle className="text-base">UCC and Federal Lien Search</CardTitle>
                  </div>
                  <CardDescription>
                    <span>Search Uniform Commercial Code and federal lien records.</span>
                    <span className="block mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      UCC Certification Date: February 17, 2026
                    </span>
                  </CardDescription>
                </CardHeader>
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
                        Search
                      </Button>
                      <a
                        href="#"
                        className="text-sm font-medium no-underline transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Advanced Search
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Services Grid */}
        <section
          className="border-t border-b"
          style={{ backgroundColor: 'var(--color-background-subtle)', borderColor: 'var(--color-border)' }}
        >
          <div className="max-w-6xl mx-auto px-4 py-10">
            <h2
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Business Services
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              No login required for these services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickServices.map(service => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.label}
                    href="#"
                    className="flex items-start gap-3 p-4 rounded-lg border no-underline transition-all hover:shadow-md"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--blue-ridge-50)', color: 'var(--blue-ridge-600)' }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                      >
                        {service.label}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {service.description}
                      </p>
                    </div>
                    <ChevronRight size={14} className="shrink-0 mt-1" style={{ color: 'var(--color-text-muted)' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Helpful Links */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
          >
            Helpful Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Using CIS */}
            <Card variant="outline">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <HelpCircle size={16} style={{ color: 'var(--chesapeake-600)' }} />
                  <CardTitle className="text-sm">Using CIS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {['Create a CIS Account', 'Pay Fees Online', 'Online Help'].map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm no-underline transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <ExternalLink size={12} className="shrink-0" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Business Services */}
            <Card variant="outline">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Building2 size={16} style={{ color: 'var(--chesapeake-600)' }} />
                  <CardTitle className="text-sm">Business Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {[
                    'Certificate Verification',
                    'Check Name Availability',
                    'Download Reports',
                    'Download Data and Images',
                    'Nonresident Property Owner Search',
                  ].map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm no-underline transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <ExternalLink size={12} className="shrink-0" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card variant="outline">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} style={{ color: 'var(--chesapeake-600)' }} />
                  <CardTitle className="text-sm">Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {[
                    'Business Frequently Asked Questions',
                    'Existing Business Resources',
                    'New Business Resources',
                  ].map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm no-underline transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <ExternalLink size={12} className="shrink-0" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section
          className="border-t"
          style={{ backgroundColor: 'var(--color-background-subtle)', borderColor: 'var(--color-border)' }}
        >
          <div className="max-w-6xl mx-auto px-4 py-8">
            <Accordion type="single">
              <AccordionItem
                value="terms"
                title="Terms and Conditions of Use"
              >
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
                    The SCC monitors the use of the CIS to ensure proper functioning of the system and
                    to provide security for the system's operation. Such monitoring may include, but is
                    not limited to: network traffic, application and data access, user commands, and data content.
                  </p>
                  <p>
                    Unauthorized use, misuse, or abuse of the CIS or the information contained in the CIS
                    will result in loss of authorized access, potential civil penalties or sanctions, and the
                    reporting evidence of such actions to federal, state and local law enforcement for
                    investigation and prosecution.
                  </p>
                  <p>
                    By proceeding with the login process or by creating an account to use the CIS, you
                    acknowledge and agree to these Terms and Conditions of Use.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer
        siteName="State Corporation Commission"
        variant="default"
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
