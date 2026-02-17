import React, { useState } from 'react';
import {
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  FileText,
  Upload,
  Printer,
} from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Footer } from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Checkbox } from '../../components/ui/Checkbox';
import { RadioGroup } from '../../components/ui/Radio';
import { TextArea } from '../../components/ui/TextArea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Alert } from '../../components/ui/Alert';
import { StepIndicator } from '../../components/ui/StepIndicator';

const steps = [
  { label: 'Personal Info' },
  { label: 'Household' },
  { label: 'Income' },
  { label: 'Review' },
  { label: 'Confirmation' },
];

export default function BenefitApplication() {
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const goBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header
        className="border-b"
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--shenandoah-100)', color: 'var(--shenandoah-600)' }}
          >
            <HeartHandshake size={22} />
          </div>
          <div>
            <p
              className="text-lg font-bold leading-tight"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Benefit Application
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Virginia Department of Social Services
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        {/* Step Indicator */}
        <div className="mb-8">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>

        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Personal Information
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              All fields marked with <span style={{ color: 'var(--cardinal-500)' }}>*</span> are required.
            </p>

            <Card variant="outline">
              <CardContent>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="First name" placeholder="e.g. James" required />
                    <Input label="Last name" placeholder="e.g. Madison" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Date of birth" type="date" required />
                    <Input label="Social Security Number" placeholder="XXX-XX-XXXX" required helperText="Used for identity verification only." />
                  </div>

                  <Input label="Email address" type="email" placeholder="james.madison@example.com" required />
                  <Input label="Phone number" type="tel" placeholder="(555) 123-4567" />

                  <div className="pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                      Mailing Address
                    </p>
                    <div className="space-y-4">
                      <Input label="Street address" placeholder="1600 Monument Ave" required />
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <Input label="City" placeholder="Richmond" required />
                        <Select
                          label="State"
                          options={[{ value: 'VA', label: 'Virginia' }]}
                          defaultValue="VA"
                          required
                        />
                        <Input label="ZIP code" placeholder="23220" required />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Household */}
        {currentStep === 2 && (
          <div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Household Information
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Tell us about the people in your household.
            </p>

            <Card variant="outline">
              <CardContent>
                <div className="space-y-5">
                  <Select
                    label="Household size"
                    required
                    placeholder="Select household size"
                    options={[
                      { value: '1', label: '1 person' },
                      { value: '2', label: '2 people' },
                      { value: '3', label: '3 people' },
                      { value: '4', label: '4 people' },
                      { value: '5', label: '5 people' },
                      { value: '6', label: '6 or more' },
                    ]}
                  />

                  <RadioGroup
                    name="housing-type"
                    label="Housing situation"
                    required
                    options={[
                      { value: 'rent', label: 'Renting' },
                      { value: 'own', label: 'Own home' },
                      { value: 'staying', label: 'Staying with others' },
                      { value: 'homeless', label: 'Experiencing homelessness' },
                    ]}
                  />

                  <Select
                    label="County of residence"
                    required
                    placeholder="Select a county"
                    options={[
                      { value: 'fairfax', label: 'Fairfax County' },
                      { value: 'arlington', label: 'Arlington County' },
                      { value: 'loudoun', label: 'Loudoun County' },
                      { value: 'prince-william', label: 'Prince William County' },
                      { value: 'henrico', label: 'Henrico County' },
                      { value: 'chesterfield', label: 'Chesterfield County' },
                      { value: 'richmond', label: 'City of Richmond' },
                    ]}
                  />

                  <Checkbox
                    label="I have dependents under 18 in my household"
                    description="This may affect your eligibility for additional benefits."
                  />

                  <Checkbox
                    label="Someone in my household has a disability"
                    description="Additional assistance programs may be available."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Income */}
        {currentStep === 3 && (
          <div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Income & Employment
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Provide information about your household income. This is used to determine eligibility.
            </p>

            <Card variant="outline">
              <CardContent>
                <div className="space-y-5">
                  <RadioGroup
                    name="employment-status"
                    label="Employment status"
                    required
                    options={[
                      { value: 'employed', label: 'Employed' },
                      { value: 'self-employed', label: 'Self-employed' },
                      { value: 'unemployed', label: 'Unemployed' },
                      { value: 'retired', label: 'Retired' },
                      { value: 'student', label: 'Student' },
                    ]}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Monthly gross income"
                      placeholder="$0.00"
                      required
                      helperText="Before taxes and deductions"
                    />
                    <Input
                      label="Other monthly income"
                      placeholder="$0.00"
                      helperText="Disability, child support, alimony, etc."
                    />
                  </div>

                  <Select
                    label="Primary income source"
                    placeholder="Select income source"
                    options={[
                      { value: 'wages', label: 'Wages / Salary' },
                      { value: 'self-employment', label: 'Self-employment' },
                      { value: 'social-security', label: 'Social Security' },
                      { value: 'pension', label: 'Pension / Retirement' },
                      { value: 'disability', label: 'Disability benefits' },
                      { value: 'unemployment', label: 'Unemployment benefits' },
                      { value: 'none', label: 'No income' },
                    ]}
                  />

                  <TextArea
                    label="Additional financial information"
                    placeholder="Include any relevant details about your financial situation, assets, or expenses..."
                    helperText="Optional — but may help expedite your application review."
                    maxLength={500}
                    showCount
                  />

                  <Alert variant="info" title="Verification">
                    Income may be verified through Virginia Employment Commission records.
                    You may also be asked to provide pay stubs or tax documents.
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 4: Review */}
        {currentStep === 4 && (
          <div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Review Your Application
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Please review all information before submitting. You can go back to edit any section.
            </p>

            <div className="space-y-4">
              <Card variant="outline">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Personal Information</CardTitle>
                    <Button size="sm" variant="ghost" onClick={() => setCurrentStep(1)}>Edit</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Name</span>
                      <span style={{ color: 'var(--color-text)' }}>James Madison</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Date of Birth</span>
                      <span style={{ color: 'var(--color-text)' }}>March 16, 1992</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Email</span>
                      <span style={{ color: 'var(--color-text)' }}>james.madison@example.com</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Phone</span>
                      <span style={{ color: 'var(--color-text)' }}>(555) 123-4567</span>
                    </div>
                    <div className="col-span-2">
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Address</span>
                      <span style={{ color: 'var(--color-text)' }}>1600 Monument Ave, Richmond, VA 23220</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="outline">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Household Information</CardTitle>
                    <Button size="sm" variant="ghost" onClick={() => setCurrentStep(2)}>Edit</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Household Size</span>
                      <span style={{ color: 'var(--color-text)' }}>3 people</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Housing</span>
                      <span style={{ color: 'var(--color-text)' }}>Renting</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>County</span>
                      <span style={{ color: 'var(--color-text)' }}>City of Richmond</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Dependents</span>
                      <span style={{ color: 'var(--color-text)' }}>Yes (under 18)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="outline">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Income & Employment</CardTitle>
                    <Button size="sm" variant="ghost" onClick={() => setCurrentStep(3)}>Edit</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Employment</span>
                      <span style={{ color: 'var(--color-text)' }}>Employed</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Monthly Gross</span>
                      <span style={{ color: 'var(--color-text)' }}>$2,400.00</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Other Income</span>
                      <span style={{ color: 'var(--color-text)' }}>$0.00</span>
                    </div>
                    <div>
                      <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Income Source</span>
                      <span style={{ color: 'var(--color-text)' }}>Wages / Salary</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-2">
                <Checkbox
                  label="I certify that all information provided is true and complete"
                  description="I understand that providing false information may result in denial of benefits and possible legal action under Virginia Code § 63.2-502."
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {currentStep === 5 && (
          <div>
            <div className="text-center mb-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--shenandoah-100)', color: 'var(--shenandoah-600)' }}
              >
                <CheckCircle size={32} />
              </div>
              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                Application Submitted
              </h1>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Your application has been received and is being processed.
              </p>
            </div>

            <Alert variant="success" title="Confirmation Number: VA-2026-03847">
              Save this number for your records. You will also receive a confirmation email.
            </Alert>

            <Card variant="outline" className="mt-6">
              <CardContent>
                <h3
                  className="text-base font-semibold mb-4"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                >
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Application Review', desc: 'A caseworker will review your application within 5–7 business days.' },
                    { step: '2', title: 'Verification', desc: 'You may be contacted to provide additional documentation.' },
                    { step: '3', title: 'Interview', desc: 'A phone or in-person interview may be scheduled.' },
                    { step: '4', title: 'Decision', desc: 'You will receive a decision letter by mail within 30 days.' },
                  ].map(item => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                        style={{ backgroundColor: 'var(--blue-ridge-100)', color: 'var(--blue-ridge-700)' }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  <Printer size={16} />
                  Print Confirmation
                </Button>
                <Button size="sm" variant="outline">
                  <Upload size={16} />
                  Upload Documents
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <div>
            {currentStep > 1 && currentStep < 5 && (
              <Button variant="outline" onClick={goBack}>
                <ArrowLeft size={16} />
                Previous
              </Button>
            )}
          </div>
          <div className="flex items-center gap-3">
            {currentStep < 4 && (
              <>
                <Button variant="ghost">Save Draft</Button>
                <Button onClick={goNext}>
                  Next Step
                  <ArrowRight size={16} />
                </Button>
              </>
            )}
            {currentStep === 4 && (
              <Button onClick={goNext}>
                <FileText size={16} />
                Submit Application
              </Button>
            )}
            {currentStep === 5 && (
              <Button variant="outline" onClick={() => setCurrentStep(1)}>
                Start New Application
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer
        variant="slim"
        siteName="Virginia Department of Social Services"
        linkGroups={[
          {
            title: 'Links',
            links: [
              { label: 'Privacy Policy', href: '#' },
              { label: 'Accessibility', href: '#' },
              { label: 'Contact Us', href: '#' },
              { label: 'Help', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}
