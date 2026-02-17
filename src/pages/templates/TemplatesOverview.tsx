import { Link } from 'react-router-dom';
import { Building2, Car, FileCheck, Newspaper, MapPin, HeartHandshake, ClipboardCheck, Scale, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Template {
  title: string;
  icon: LucideIcon;
  description: string;
  category: string;
  slug?: string;
}

const templates: Template[] = [
  { title: 'Agency Homepage', icon: Building2, description: 'Hero, services grid, news feed, quick links, contact CTA.', category: 'Government Essentials', slug: 'agency-homepage' },
  { title: 'Services & Permits', icon: FileCheck, description: 'Category sidebar, service cards, search and filter.', category: 'Government Essentials' },
  { title: 'Contact / Office Finder', icon: MapPin, description: 'Location search, office cards, map placeholder, hours.', category: 'Government Essentials' },
  { title: 'News & Announcements', icon: Newspaper, description: 'Featured story, card grid, category filter, pagination.', category: 'Government Essentials', slug: 'news-announcements' },
  { title: 'DMV Service Portal', icon: Car, description: 'Service menu, appointment scheduling, document checklist.', category: 'Citizen Services', slug: 'dmv-portal' },
  { title: 'Benefit Application', icon: HeartHandshake, description: 'Multi-step wizard, form validation, review and submit.', category: 'Citizen Services', slug: 'benefit-application' },
  { title: 'Status Tracker', icon: ClipboardCheck, description: 'Status timeline, reference lookup, detail cards.', category: 'Citizen Services' },
  { title: 'SCC Portal', icon: Scale, description: 'Business entity search, UCC filing, sign-in, and helpful links. Based on cis.scc.virginia.gov.', category: 'Real-World Reimagined', slug: 'scc-portal' },
];

export default function TemplatesOverview() {
  const categories = [...new Set(templates.map(t => t.category))];

  return (
    <div className="dogwood-prose">
      <h1>Templates</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Full-page demos showing the design system in action. Each template is a
        complete, production-ready layout composed from Dogwood components and patterns.
      </p>

      {categories.map(category => (
        <div key={category} className="mt-10">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-heading)', borderBottom: 'none', marginTop: '2rem' }}
          >
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {templates
              .filter(t => t.category === category)
              .map(template => {
                const Icon = template.icon;
                const isBuilt = !!template.slug;

                const content = (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: isBuilt ? 'var(--blue-ridge-100)' : 'var(--dogwood-100)',
                        color: isBuilt ? 'var(--blue-ridge-600)' : 'var(--dogwood-600)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold mb-1"
                          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                          {template.title}
                        </h3>
                        {isBuilt && (
                          <ExternalLink size={12} style={{ color: 'var(--color-text-muted)' }} />
                        )}
                      </div>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {template.description}
                      </p>
                      <span
                        className="inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
                        style={
                          isBuilt
                            ? { backgroundColor: 'var(--shenandoah-100)', color: 'var(--shenandoah-700)' }
                            : { backgroundColor: 'var(--dogwood-100)', color: 'var(--dogwood-700)' }
                        }
                      >
                        {isBuilt ? 'Live demo' : 'Coming soon'}
                      </span>
                    </div>
                  </div>
                );

                if (isBuilt) {
                  return (
                    <Link
                      key={template.title}
                      to={`/templates/${template.slug}`}
                      className="block p-5 rounded-lg border no-underline transition-all hover:shadow-md"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                      }}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div
                    key={template.title}
                    className="p-5 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      opacity: 0.6,
                    }}
                  >
                    {content}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
