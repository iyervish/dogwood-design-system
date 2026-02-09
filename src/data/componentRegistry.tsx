import React from 'react';
import type { PropDef } from '../components/docs/PropsTable';

// Component imports will be added as components are built
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Radio, RadioGroup } from '../components/ui/Radio';
import { TextArea } from '../components/ui/TextArea';
import { Alert } from '../components/ui/Alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Accordion, AccordionItem } from '../components/ui/Accordion';

interface VariantPreview {
  title: string;
  preview: React.ReactNode;
  code: string;
}

interface ComponentRegistryEntry {
  defaultPreview: React.ReactNode;
  defaultCode: string;
  variants?: VariantPreview[];
  propDefinitions: PropDef[];
  accessibility: string[];
  dos?: string[];
  donts?: string[];
  usageCode?: string;
}

export const componentRegistry: Record<string, ComponentRegistryEntry> = {
  // ─── Button ───────────────────────────────────────────
  button: {
    defaultPreview: (
      <div className="flex flex-wrap gap-3">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    ),
    defaultCode: `<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,
    variants: [
      {
        title: 'Sizes',
        preview: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
      {
        title: 'States',
        preview: (
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        ),
        code: `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'", default: "'primary'", description: 'Visual style variant' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading spinner and disables interaction' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
      { name: 'children', type: 'ReactNode', required: true, description: 'Button content' },
    ],
    accessibility: [
      'Uses native <button> element for built-in keyboard and screen reader support',
      'Disabled state uses aria-disabled for screen reader announcement',
      'Loading state announces "Loading" to screen readers via aria-label',
      'Focus ring visible on keyboard navigation (focus-visible)',
      'Meets WCAG 2.1 AA contrast requirements in all variants',
    ],
    dos: [
      'Use clear, action-oriented labels ("Submit application", "Save changes")',
      'Use primary variant for the main action on a page',
      'Use destructive variant only for irreversible actions',
      'Provide loading state feedback for async actions',
    ],
    donts: [
      'Don\'t use multiple primary buttons in the same section',
      'Don\'t use vague labels like "Click here" or "Submit"',
      'Don\'t disable buttons without explaining why',
      'Don\'t use ghost variant for primary actions',
    ],
    usageCode: `// Basic usage
<Button onClick={handleSubmit}>Submit Application</Button>

// With loading state
<Button loading={isSubmitting}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</Button>

// Destructive action
<Button variant="destructive" onClick={handleDelete}>
  Delete Account
</Button>`,
  },

  // ─── Input ────────────────────────────────────────────
  input: {
    defaultPreview: (
      <div className="w-full max-w-sm space-y-4">
        <Input label="Full Name" placeholder="Enter your name" />
        <Input label="Email" type="email" placeholder="name@example.com" helperText="We'll never share your email." />
      </div>
    ),
    defaultCode: `<Input label="Full Name" placeholder="Enter your name" />
<Input label="Email" type="email" placeholder="name@example.com"
  helperText="We'll never share your email." />`,
    variants: [
      {
        title: 'Error State',
        preview: (
          <div className="w-full max-w-sm">
            <Input label="Email" type="email" error="Please enter a valid email address" defaultValue="invalid-email" />
          </div>
        ),
        code: `<Input label="Email" type="email"
  error="Please enter a valid email address"
  defaultValue="invalid-email" />`,
      },
      {
        title: 'Sizes',
        preview: (
          <div className="w-full max-w-sm space-y-3">
            <Input label="Small" size="sm" placeholder="Small input" />
            <Input label="Medium" size="md" placeholder="Medium input" />
            <Input label="Large" size="lg" placeholder="Large input" />
          </div>
        ),
        code: `<Input label="Small" size="sm" placeholder="Small input" />
<Input label="Medium" size="md" placeholder="Medium input" />
<Input label="Large" size="lg" placeholder="Large input" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', description: 'Input label text' },
      { name: 'helperText', type: 'string', description: 'Helper text below the input' },
      { name: 'error', type: 'string', description: 'Error message (also sets error styling)' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
    ],
    accessibility: [
      'Label is properly associated with input via htmlFor/id',
      'Error messages linked via aria-describedby',
      'aria-invalid set when error prop is provided',
      'Helper text linked via aria-describedby',
      'Focus ring visible on keyboard navigation',
    ],
    dos: [
      'Always provide a visible label',
      'Use helper text for format requirements',
      'Show inline error messages near the field',
    ],
    donts: [
      'Don\'t use placeholder text as a label replacement',
      'Don\'t show errors before the user interacts with the field',
      'Don\'t use red for non-error states',
    ],
    usageCode: `<Input
  label="Social Security Number"
  type="text"
  placeholder="XXX-XX-XXXX"
  helperText="Required for benefit applications"
  error={errors.ssn}
/>`,
  },

  // ─── Select ───────────────────────────────────────────
  select: {
    defaultPreview: (
      <div className="w-full max-w-sm">
        <Select
          label="State"
          placeholder="Select a state"
          options={[
            { value: 'va', label: 'Virginia' },
            { value: 'md', label: 'Maryland' },
            { value: 'dc', label: 'District of Columbia' },
          ]}
        />
      </div>
    ),
    defaultCode: `<Select
  label="State"
  placeholder="Select a state"
  options={[
    { value: 'va', label: 'Virginia' },
    { value: 'md', label: 'Maryland' },
    { value: 'dc', label: 'District of Columbia' },
  ]}
/>`,
    variants: [
      {
        title: 'Error State',
        preview: (
          <div className="w-full max-w-sm">
            <Select label="County" placeholder="Select a county" options={[]} error="County is required" />
          </div>
        ),
        code: `<Select label="County" placeholder="Select a county"
  options={[]} error="County is required" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', description: 'Select label text' },
      { name: 'options', type: '{ value: string, label: string }[]', required: true, description: 'Array of options' },
      { name: 'placeholder', type: 'string', description: 'Placeholder option text' },
      { name: 'helperText', type: 'string', description: 'Helper text below the select' },
      { name: 'error', type: 'string', description: 'Error message' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Select size' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select' },
    ],
    accessibility: [
      'Uses native <select> element for full keyboard and screen reader support',
      'Label properly associated via htmlFor/id',
      'Error messages linked via aria-describedby',
    ],
    dos: [
      'Provide a clear placeholder option',
      'Keep option lists reasonable (under 15 items)',
      'Sort options logically (alphabetical or by frequency)',
    ],
    donts: [
      'Don\'t use a select for fewer than 3 options (use radio instead)',
      'Don\'t use for very long lists (use a combobox/autocomplete)',
    ],
  },

  // ─── Checkbox ─────────────────────────────────────────
  checkbox: {
    defaultPreview: (
      <div className="space-y-3">
        <Checkbox label="I agree to the terms and conditions" />
        <Checkbox label="Subscribe to newsletter" description="Get monthly updates about Virginia services" />
        <Checkbox label="Disabled option" disabled />
      </div>
    ),
    defaultCode: `<Checkbox label="I agree to the terms and conditions" />
<Checkbox label="Subscribe to newsletter"
  description="Get monthly updates about Virginia services" />
<Checkbox label="Disabled option" disabled />`,
    propDefinitions: [
      { name: 'label', type: 'string', required: true, description: 'Checkbox label' },
      { name: 'description', type: 'string', description: 'Additional description below the label' },
      { name: 'checked', type: 'boolean', description: 'Controlled checked state' },
      { name: 'onChange', type: '(checked: boolean) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox' },
      { name: 'error', type: 'string', description: 'Error message' },
    ],
    accessibility: [
      'Uses native <input type="checkbox"> for built-in support',
      'Label properly associated for click-to-toggle',
      'Focus ring visible on keyboard navigation',
      'Checked state announced by screen readers',
    ],
    dos: [
      'Use for multiple selections from a list',
      'Write labels as positive statements',
      'Group related checkboxes with a fieldset and legend',
    ],
    donts: [
      'Don\'t use for mutually exclusive options (use radio)',
      'Don\'t use negative phrasing ("Don\'t send emails")',
    ],
  },

  // ─── Radio ────────────────────────────────────────────
  radio: {
    defaultPreview: (
      <RadioGroup
        name="contact-method"
        label="Preferred contact method"
        options={[
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone', description: 'We\'ll call during business hours' },
          { value: 'mail', label: 'Mail' },
        ]}
      />
    ),
    defaultCode: `<RadioGroup
  name="contact-method"
  label="Preferred contact method"
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone',
      description: "We'll call during business hours" },
    { value: 'mail', label: 'Mail' },
  ]}
/>`,
    propDefinitions: [
      { name: 'name', type: 'string', required: true, description: 'Form field name' },
      { name: 'label', type: 'string', description: 'Group label' },
      { name: 'options', type: '{ value: string, label: string, description?: string }[]', required: true, description: 'Radio options' },
      { name: 'value', type: 'string', description: 'Controlled selected value' },
      { name: 'onChange', type: '(value: string) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables all options' },
      { name: 'error', type: 'string', description: 'Error message' },
    ],
    accessibility: [
      'Uses native <input type="radio"> within a <fieldset>',
      'Group label provided via <legend>',
      'Arrow keys navigate between options',
      'Error messages linked via aria-describedby',
    ],
    dos: [
      'Use for mutually exclusive choices',
      'Always provide a group label',
      'Pre-select a default when possible',
    ],
    donts: [
      'Don\'t use for multiple selections (use checkbox)',
      'Don\'t use for more than 7 options (use select)',
    ],
  },

  // ─── TextArea ─────────────────────────────────────────
  textarea: {
    defaultPreview: (
      <div className="w-full max-w-sm space-y-4">
        <TextArea label="Description" placeholder="Tell us about your situation..." rows={4} />
        <TextArea label="Notes" placeholder="Additional notes..." maxLength={500} showCount />
      </div>
    ),
    defaultCode: `<TextArea label="Description"
  placeholder="Tell us about your situation..."
  rows={4} />
<TextArea label="Notes" placeholder="Additional notes..."
  maxLength={500} showCount />`,
    variants: [
      {
        title: 'Error State',
        preview: (
          <div className="w-full max-w-sm">
            <TextArea label="Reason" error="Please provide a reason for your request" />
          </div>
        ),
        code: `<TextArea label="Reason"
  error="Please provide a reason for your request" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', description: 'TextArea label' },
      { name: 'helperText', type: 'string', description: 'Helper text below the textarea' },
      { name: 'error', type: 'string', description: 'Error message' },
      { name: 'rows', type: 'number', default: '4', description: 'Number of visible rows' },
      { name: 'maxLength', type: 'number', description: 'Maximum character count' },
      { name: 'showCount', type: 'boolean', default: 'false', description: 'Show character counter' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea' },
    ],
    accessibility: [
      'Label properly associated via htmlFor/id',
      'Error messages linked via aria-describedby',
      'Character count announced to screen readers',
      'aria-invalid set when error is present',
    ],
    dos: [
      'Set appropriate rows for expected content length',
      'Use maxLength with showCount for constrained fields',
    ],
    donts: [
      'Don\'t use for single-line input (use Input)',
      'Don\'t set very small row counts (minimum 3)',
    ],
  },

  // ─── Alert ────────────────────────────────────────────
  alert: {
    defaultPreview: (
      <div className="w-full space-y-3">
        <Alert variant="info" title="Information">Your application has been received and is being reviewed.</Alert>
        <Alert variant="success" title="Success">Your password has been updated successfully.</Alert>
        <Alert variant="warning" title="Warning">Your session will expire in 5 minutes.</Alert>
        <Alert variant="error" title="Error">There was a problem processing your payment.</Alert>
      </div>
    ),
    defaultCode: `<Alert variant="info" title="Information">
  Your application has been received.
</Alert>
<Alert variant="success" title="Success">
  Your password has been updated.
</Alert>
<Alert variant="warning" title="Warning">
  Your session will expire in 5 minutes.
</Alert>
<Alert variant="error" title="Error">
  There was a problem processing your payment.
</Alert>`,
    variants: [
      {
        title: 'Dismissible',
        preview: (
          <Alert variant="info" title="Heads up" dismissible>
            This alert can be dismissed by clicking the close button.
          </Alert>
        ),
        code: `<Alert variant="info" title="Heads up" dismissible>
  This alert can be dismissed.
</Alert>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Alert severity' },
      { name: 'title', type: 'string', description: 'Alert heading' },
      { name: 'children', type: 'ReactNode', description: 'Alert description content' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Show close button' },
      { name: 'onDismiss', type: '() => void', description: 'Called when alert is dismissed' },
    ],
    accessibility: [
      'Uses role="alert" for error and warning variants',
      'Uses role="status" for info and success variants',
      'Dismiss button has aria-label="Dismiss alert"',
      'Default icons per variant provide visual redundancy',
    ],
    dos: [
      'Use concise, actionable messages',
      'Match variant to severity (error for failures, warning for caution)',
      'Provide a title for scannability',
    ],
    donts: [
      'Don\'t use alerts for non-important information',
      'Don\'t stack more than 3 alerts at once',
      'Don\'t use error variant for warnings',
    ],
  },

  // ─── Card ─────────────────────────────────────────────
  card: {
    defaultPreview: (
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Virginia DMV</CardTitle>
            <CardDescription>Renew your driver's license online</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Complete your renewal in minutes. You'll need your current license number and a valid payment method.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Start Renewal</Button>
          </CardFooter>
        </Card>
      </div>
    ),
    defaultCode: `<Card>
  <CardHeader>
    <CardTitle>Virginia DMV</CardTitle>
    <CardDescription>Renew your driver's license</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Complete your renewal in minutes.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Start Renewal</Button>
  </CardFooter>
</Card>`,
    variants: [
      {
        title: 'Variants',
        preview: (
          <div className="flex flex-wrap gap-4">
            <Card variant="outline" className="w-48">
              <CardContent><p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Outline card</p></CardContent>
            </Card>
            <Card variant="elevated" className="w-48">
              <CardContent><p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Elevated card</p></CardContent>
            </Card>
          </div>
        ),
        code: `<Card variant="outline">...</Card>
<Card variant="elevated">...</Card>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'default' | 'outline' | 'elevated'", default: "'default'", description: 'Card style variant' },
      { name: 'padding', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Internal padding' },
      { name: 'clickable', type: 'boolean', default: 'false', description: 'Add hover effect for clickable cards' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
    ],
    accessibility: [
      'Semantic HTML structure with proper heading hierarchy',
      'Clickable cards use appropriate cursor and hover feedback',
      'Card content is accessible to screen readers in reading order',
    ],
    dos: [
      'Use cards to group related content',
      'Maintain consistent card layouts within a page',
      'Use CardHeader for scannable titles',
    ],
    donts: [
      'Don\'t nest cards within cards',
      'Don\'t overload cards with too much content',
      'Don\'t use cards for single pieces of information (use a list)',
    ],
  },

  // ─── Badge ────────────────────────────────────────────
  badge: {
    defaultPreview: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Approved</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Rejected</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    defaultCode: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Rejected</Badge>
<Badge variant="outline">Outline</Badge>`,
    variants: [
      {
        title: 'Sizes',
        preview: (
          <div className="flex items-center gap-2">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
          </div>
        ),
        code: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'", default: "'default'", description: 'Badge color variant' },
      { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Badge size' },
      { name: 'children', type: 'ReactNode', required: true, description: 'Badge content' },
    ],
    accessibility: [
      'Text content is readable by screen readers',
      'Color is not the sole indicator — text provides context',
      'Meets contrast requirements in all variants',
    ],
    dos: [
      'Use for status indicators and categories',
      'Keep text short (1-2 words)',
      'Use consistent variant meanings across the application',
    ],
    donts: [
      'Don\'t use badges for long text',
      'Don\'t rely solely on color to convey meaning',
    ],
  },

  // ─── Table ────────────────────────────────────────────
  table: {
    defaultPreview: (
      <Table striped hoverable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>County</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Smith</TableCell>
            <TableCell>Fairfax</TableCell>
            <TableCell><Badge variant="success" size="sm">Active</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>Arlington</TableCell>
            <TableCell><Badge variant="warning" size="sm">Pending</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>Loudoun</TableCell>
            <TableCell><Badge variant="error" size="sm">Expired</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    defaultCode: `<Table striped hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>County</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Smith</TableCell>
      <TableCell>Fairfax</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    propDefinitions: [
      { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row backgrounds' },
      { name: 'hoverable', type: 'boolean', default: 'false', description: 'Highlight rows on hover' },
      { name: 'compact', type: 'boolean', default: 'false', description: 'Reduced padding for dense data' },
    ],
    accessibility: [
      'Uses semantic <table>, <thead>, <tbody>, <th>, <td>',
      'Column headers use scope="col"',
      'Responsive wrapper allows horizontal scrolling',
      'Screen readers can navigate table structure',
    ],
    dos: [
      'Use for structured, comparable data',
      'Keep column headers short and descriptive',
      'Use striped rows for tables with many rows',
    ],
    donts: [
      'Don\'t use tables for layout purposes',
      'Don\'t make tables wider than necessary',
    ],
  },

  // ─── Breadcrumb ───────────────────────────────────────
  breadcrumb: {
    defaultPreview: (
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/components' },
          { label: 'Driver\'s License Renewal' },
        ]}
      />
    ),
    defaultCode: `<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: "Driver's License Renewal" },
  ]}
/>`,
    propDefinitions: [
      { name: 'items', type: '{ label: string, href?: string }[]', required: true, description: 'Breadcrumb items (last one is current page)' },
      { name: 'separator', type: 'string', default: "'/'", description: 'Separator character between items' },
    ],
    accessibility: [
      'Uses <nav> with aria-label="Breadcrumb"',
      'Current page marked with aria-current="page"',
      'Separator is hidden from screen readers via aria-hidden',
    ],
    dos: [
      'Show the full path from home to current page',
      'Make all items except the last clickable links',
      'Keep labels short and matching page titles',
    ],
    donts: [
      'Don\'t use breadcrumbs for fewer than 2 levels',
      'Don\'t use as the primary navigation',
    ],
  },

  // ─── Accordion ────────────────────────────────────────
  accordion: {
    defaultPreview: (
      <Accordion type="single" className="w-full">
        <AccordionItem title="How do I renew my driver's license?">
          You can renew your Virginia driver's license online, by mail, or in person at any DMV customer service center. Online renewals are available if your license hasn't been expired for more than 2 years.
        </AccordionItem>
        <AccordionItem title="What documents do I need?">
          You'll need your current license number, Social Security number, and a valid payment method. If renewing in person, bring two proofs of Virginia residency.
        </AccordionItem>
        <AccordionItem title="How long does it take?">
          Online renewals are processed within 7-10 business days. In-person renewals include a temporary license issued the same day.
        </AccordionItem>
      </Accordion>
    ),
    defaultCode: `<Accordion type="single">
  <AccordionItem title="How do I renew my driver's license?">
    You can renew online, by mail, or in person...
  </AccordionItem>
  <AccordionItem title="What documents do I need?">
    You'll need your current license number...
  </AccordionItem>
</Accordion>`,
    variants: [
      {
        title: 'Multiple Open',
        preview: (
          <Accordion type="multiple" defaultOpen={['0', '1']} className="w-full">
            <AccordionItem title="Section 1" defaultOpen>
              This section is open by default.
            </AccordionItem>
            <AccordionItem title="Section 2" defaultOpen>
              Multiple sections can be open simultaneously.
            </AccordionItem>
            <AccordionItem title="Section 3">
              This section is closed by default.
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="multiple" defaultOpen={['0', '1']}>
  <AccordionItem title="Section 1" defaultOpen>...</AccordionItem>
  <AccordionItem title="Section 2" defaultOpen>...</AccordionItem>
</Accordion>`,
      },
    ],
    propDefinitions: [
      { name: 'type', type: "'single' | 'multiple'", default: "'single'", description: 'Allow one or multiple sections open' },
      { name: 'defaultOpen', type: 'string[]', description: 'IDs of initially open sections' },
      { name: 'title', type: 'string', required: true, description: 'AccordionItem header text' },
      { name: 'children', type: 'ReactNode', required: true, description: 'AccordionItem content' },
    ],
    accessibility: [
      'Header buttons use aria-expanded and aria-controls',
      'Content panels use role="region" with aria-labelledby',
      'Enter and Space toggle sections',
      'Focus management follows WAI-ARIA Accordion pattern',
    ],
    dos: [
      'Use for FAQ sections and progressive disclosure',
      'Keep headers concise and descriptive',
      'Use "single" type when content sections are long',
    ],
    donts: [
      'Don\'t nest accordions within accordions',
      'Don\'t use for critical content that users must see',
      'Don\'t hide primary actions inside accordions',
    ],
  },
};
