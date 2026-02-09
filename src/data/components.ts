export interface ComponentMeta {
  name: string;
  slug: string;
  description: string;
  category: 'Form' | 'Feedback' | 'Layout' | 'Navigation' | 'Data Display';
  tier: 1 | 2 | 3;
  status: 'stable' | 'beta' | 'planned';
}

export const components: ComponentMeta[] = [
  { name: 'Button', slug: 'button', description: 'Triggers actions and navigates users. Supports multiple variants and sizes.', category: 'Form', tier: 1, status: 'stable' },
  { name: 'Input', slug: 'input', description: 'Single-line text input with labels, help text, and validation states.', category: 'Form', tier: 1, status: 'stable' },
  { name: 'Select', slug: 'select', description: 'Dropdown selection from a predefined list of options.', category: 'Form', tier: 1, status: 'stable' },
  { name: 'Checkbox', slug: 'checkbox', description: 'Allows users to select one or more options from a set.', category: 'Form', tier: 1, status: 'stable' },
  { name: 'Radio', slug: 'radio', description: 'Allows users to select exactly one option from a set.', category: 'Form', tier: 1, status: 'stable' },
  { name: 'TextArea', slug: 'textarea', description: 'Multi-line text input for longer form content.', category: 'Form', tier: 1, status: 'stable' },
  { name: 'Alert', slug: 'alert', description: 'Communicates important information with contextual severity levels.', category: 'Feedback', tier: 1, status: 'stable' },
  { name: 'Card', slug: 'card', description: 'Container for grouping related content and actions.', category: 'Layout', tier: 1, status: 'stable' },
  { name: 'Badge', slug: 'badge', description: 'Small label for status, category, or count indicators.', category: 'Data Display', tier: 1, status: 'stable' },
  { name: 'Table', slug: 'table', description: 'Displays structured data in rows and columns.', category: 'Data Display', tier: 1, status: 'stable' },
  { name: 'Breadcrumb', slug: 'breadcrumb', description: 'Shows the user\'s current location in a navigational hierarchy.', category: 'Navigation', tier: 1, status: 'stable' },
  { name: 'Accordion', slug: 'accordion', description: 'Expandable sections for organizing content under collapsible headers.', category: 'Layout', tier: 1, status: 'stable' },
];
