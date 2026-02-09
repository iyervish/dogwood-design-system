import { Link } from 'react-router-dom';
import { FileText, Search, UserCheck, Activity, BarChart3, MapPin, Newspaper } from 'lucide-react';

const patterns = [
  { title: 'Form Pattern', slug: 'form', icon: FileText, description: 'Complete form with validation, error summary, and success states.' },
  { title: 'Search Results', slug: 'search-results', icon: Search, description: 'Search bar, filters, result cards, and pagination.' },
  { title: 'Authentication', slug: 'authentication', icon: UserCheck, description: 'Sign-in, forgot password, and create account flows.' },
  { title: 'Status Tracker', slug: 'status-tracker', icon: Activity, description: 'Step indicator, status cards, and timeline.' },
  { title: 'Data Dashboard', slug: 'data-dashboard', icon: BarChart3, description: 'Stat cards, data table, and filter controls.' },
  { title: 'Contact Information', slug: 'contact-info', icon: MapPin, description: 'Address card, map placeholder, and office hours.' },
  { title: 'News Feed', slug: 'news-feed', icon: Newspaper, description: 'Card grid with filters and featured article hero.' },
];

export default function PatternsOverview() {
  return (
    <div className="dogwood-prose">
      <h1>Patterns</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Multi-component compositions that solve common government service design problems.
        Patterns combine components into ready-to-use page sections.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {patterns.map(pattern => {
          const Icon = pattern.icon;
          return (
            <div
              key={pattern.slug}
              className="p-5 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                opacity: 0.6,
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--chesapeake-100)', color: 'var(--chesapeake-600)' }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {pattern.title}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {pattern.description}
                  </p>
                  <span
                    className="inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
                    style={{ backgroundColor: 'var(--dogwood-100)', color: 'var(--dogwood-700)' }}
                  >
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
