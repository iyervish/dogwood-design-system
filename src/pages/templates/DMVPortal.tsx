import React, { useState } from 'react';
import {
  Building2,
  Car,
  CreditCard,
  FileText,
  CalendarDays,
  ClipboardCheck,
  RefreshCw,
  UserCircle,
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle,
  Circle,
  AlertTriangle,
} from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Footer } from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Search } from '../../components/ui/Search';
import { SideNavigation } from '../../components/ui/SideNavigation';
import { Alert } from '../../components/ui/Alert';
import { Tabs, TabList, Tab, TabPanel } from '../../components/ui/Tabs';
import { Select } from '../../components/ui/Select';

const dmvServices = [
  { icon: CreditCard, title: "Driver's License Renewal", description: 'Renew your license online, by mail, or in person.', tag: 'Online' },
  { icon: Car, title: 'Vehicle Registration', description: 'Register, renew, or transfer vehicle ownership.', tag: 'Online' },
  { icon: FileText, title: 'REAL ID Application', description: 'Apply for a federally-compliant identification card.', tag: 'In-Person' },
  { icon: UserCircle, title: 'Change of Address', description: 'Update your address on your license and registration.', tag: 'Online' },
  { icon: RefreshCw, title: 'Title Transfer', description: 'Transfer a vehicle title to a new owner.', tag: 'Online' },
  { icon: ClipboardCheck, title: 'Driving Record', description: 'Request a copy of your official driving record.', tag: 'Online' },
];

const appointments = [
  { time: '9:00 AM', available: true },
  { time: '9:30 AM', available: false },
  { time: '10:00 AM', available: true },
  { time: '10:30 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '11:30 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '1:30 PM', available: true },
  { time: '2:00 PM', available: false },
  { time: '2:30 PM', available: true },
];

const requiredDocs = [
  { name: 'Proof of Identity', examples: 'U.S. Passport, Birth Certificate, or Permanent Resident Card', required: true },
  { name: 'Social Security Card', examples: 'Original or replacement card from SSA', required: true },
  { name: 'Virginia Residency (2 proofs)', examples: 'Utility bill, bank statement, lease agreement', required: true },
  { name: 'Legal Presence', examples: 'U.S. Passport, Certificate of Citizenship', required: true },
  { name: 'Current Virginia License', examples: 'If renewing or upgrading to REAL ID', required: false },
];

const sideNavItems = [
  { label: 'Services', href: '#services', active: true },
  {
    label: 'Licenses & IDs',
    children: [
      { label: "Driver's License", href: '#' },
      { label: 'Learner\'s Permit', href: '#' },
      { label: 'REAL ID', href: '#' },
      { label: 'ID Card', href: '#' },
    ],
  },
  {
    label: 'Vehicles',
    children: [
      { label: 'Registration', href: '#' },
      { label: 'Title', href: '#' },
      { label: 'License Plates', href: '#' },
    ],
  },
  { label: 'Schedule Appointment', href: '#appointment' },
  { label: 'Find an Office', href: '#' },
  { label: 'Forms & Documents', href: '#documents' },
];

export default function DMVPortal() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header
        className="border-b"
        style={{ backgroundColor: 'var(--blue-ridge-900)', borderColor: 'var(--blue-ridge-800)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Car size={22} className="text-white" />
            </div>
            <div>
              <p
                className="text-lg font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Virginia DMV
              </p>
              <p className="text-xs text-white/60">
                Department of Motor Vehicles
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-64">
              <Search
                label="Search DMV"
                placeholder="Search services..."
                size="sm"
              />
            </div>
            <Button size="sm" variant="secondary">
              <UserCircle size={16} />
              My Account
            </Button>
          </div>
        </div>
      </header>

      {/* Alert */}
      <Alert variant="warning" title="Extended Wait Times" dismissible>
        Due to high demand, in-person wait times at select offices may exceed 60 minutes.
        We recommend using online services or scheduling an appointment.
      </Alert>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div
              className="rounded-lg border p-4"
              style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
            >
              <SideNavigation items={sideNavItems} />
            </div>

            {/* Office Hours Card */}
            <Card variant="outline" className="mt-4">
              <CardContent>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                >
                  Office Hours
                </h3>
                <div className="space-y-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium" style={{ color: 'var(--color-text)' }}>8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium" style={{ color: 'var(--color-text)' }}>8:00 AM – 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>Closed</span>
                  </div>
                </div>
                <div
                  className="mt-3 pt-3 border-t flex items-center gap-2 text-xs"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <Clock size={12} style={{ color: 'var(--shenandoah-500)' }} />
                  <span style={{ color: 'var(--shenandoah-600)' }} className="font-medium">Currently Open</span>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main */}
          <main className="lg:col-span-3">
            {/* Services Grid */}
            <section id="services">
              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                DMV Services
              </h1>
              <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Select a service to get started. Many transactions can be completed online.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {dmvServices.map(service => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} variant="outline" clickable>
                      <CardContent>
                        <div className="flex items-start gap-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: 'var(--blue-ridge-50)', color: 'var(--blue-ridge-600)' }}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <CardTitle className="text-sm">{service.title}</CardTitle>
                              <Badge
                                variant={service.tag === 'Online' ? 'success' : 'secondary'}
                                size="sm"
                              >
                                {service.tag}
                              </Badge>
                            </div>
                            <CardDescription className="text-xs">{service.description}</CardDescription>
                          </div>
                          <ChevronRight size={14} className="shrink-0 mt-1" style={{ color: 'var(--color-text-muted)' }} />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Appointment Scheduling */}
            <section id="appointment" className="mb-10">
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                Schedule an Appointment
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
                Skip the wait by scheduling an in-person appointment at your nearest DMV office.
              </p>

              <Card variant="outline">
                <CardContent>
                  <Tabs defaultValue="location">
                    <TabList>
                      <Tab value="location">Select Location</Tab>
                      <Tab value="time">Choose Time</Tab>
                    </TabList>

                    <TabPanel value="location">
                      <div className="space-y-4">
                        <Select
                          label="DMV Office Location"
                          placeholder="Select an office"
                          options={[
                            { value: 'richmond', label: 'Richmond - Main Office' },
                            { value: 'fairfax', label: 'Fairfax - City Center' },
                            { value: 'norfolk', label: 'Norfolk - Military Hwy' },
                            { value: 'roanoke', label: 'Roanoke - Valley View' },
                            { value: 'charlottesville', label: 'Charlottesville - Hydraulic Rd' },
                          ]}
                        />
                        <Select
                          label="Service Needed"
                          placeholder="Select a service"
                          options={[
                            { value: 'license-renewal', label: "Driver's License Renewal" },
                            { value: 'real-id', label: 'REAL ID Application' },
                            { value: 'title-transfer', label: 'Title Transfer' },
                            { value: 'registration', label: 'Vehicle Registration' },
                            { value: 'other', label: 'Other' },
                          ]}
                        />
                        <div className="flex items-center gap-2 text-xs p-3 rounded-md" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
                          <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                          <span style={{ color: 'var(--color-text-secondary)' }}>
                            <strong>Richmond - Main Office:</strong> 2300 W Broad St, Richmond, VA 23220
                          </span>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel value="time">
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                          Available Times — February 18, 2026
                        </p>
                        <p className="text-xs mb-4" style={{ color: 'var(--color-text-muted)' }}>
                          Select an available time slot for your appointment.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          {appointments.map(slot => (
                            <button
                              key={slot.time}
                              type="button"
                              disabled={!slot.available}
                              onClick={() => setSelectedTime(slot.time)}
                              className="px-3 py-2 rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
                              style={{
                                borderColor: selectedTime === slot.time
                                  ? 'var(--color-primary)'
                                  : 'var(--color-border)',
                                backgroundColor: selectedTime === slot.time
                                  ? 'var(--color-primary-light)'
                                  : slot.available
                                    ? 'var(--color-surface)'
                                    : 'var(--color-background-subtle)',
                                color: slot.available
                                  ? selectedTime === slot.time
                                    ? 'var(--color-primary)'
                                    : 'var(--color-text)'
                                  : 'var(--color-text-muted)',
                                cursor: slot.available ? 'pointer' : 'not-allowed',
                                fontFamily: 'var(--font-body)',
                                outlineColor: 'var(--color-border-focus)',
                              }}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                        {selectedTime && (
                          <div className="mt-4 flex items-center gap-3">
                            <Button size="sm">
                              <CalendarDays size={16} />
                              Confirm {selectedTime}
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setSelectedTime(null)}>
                              Cancel
                            </Button>
                          </div>
                        )}
                      </div>
                    </TabPanel>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            {/* Document Checklist */}
            <section id="documents">
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                REAL ID Document Checklist
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
                Bring these documents to your REAL ID appointment. All documents must be originals.
              </p>

              <Card variant="outline">
                <CardContent>
                  <div className="space-y-0 divide-y" style={{ divideColor: 'var(--color-border)' }}>
                    {requiredDocs.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                        <div className="mt-0.5">
                          {doc.required ? (
                            <AlertTriangle size={16} style={{ color: 'var(--dogwood-500)' }} />
                          ) : (
                            <Circle size={16} style={{ color: 'var(--color-text-muted)' }} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                            {doc.name}
                            {doc.required && (
                              <span className="text-xs font-normal ml-2" style={{ color: 'var(--cardinal-500)' }}>
                                Required
                              </span>
                            )}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                            {doc.examples}
                          </p>
                        </div>
                        <CheckCircle size={16} style={{ color: 'var(--color-border)' }} />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    <FileText size={16} />
                    Download Checklist (PDF)
                  </Button>
                </CardFooter>
              </Card>
            </section>
          </main>
        </div>
      </div>

      <Footer
        siteName="Virginia Department of Motor Vehicles"
        linkGroups={[
          {
            title: 'Services',
            links: [
              { label: "Driver's License", href: '#' },
              { label: 'Vehicle Registration', href: '#' },
              { label: 'REAL ID', href: '#' },
              { label: 'Driving Record', href: '#' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Forms & Documents', href: '#' },
              { label: 'Fee Schedule', href: '#' },
              { label: 'FAQ', href: '#' },
              { label: 'Accessibility', href: '#' },
            ],
          },
          {
            title: 'Contact',
            links: [
              { label: '1-804-497-7100', href: '#' },
              { label: 'dmvnow@dmv.virginia.gov', href: '#' },
              { label: 'Find an Office', href: '#' },
              { label: 'Feedback', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}
