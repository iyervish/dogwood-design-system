import React, { useState } from 'react';
import {
  Newspaper,
  Clock,
  ArrowRight,
  User,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Footer } from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Search } from '../../components/ui/Search';
import { Pagination } from '../../components/ui/Pagination';

const categories = ['All', 'Transportation', 'Health', 'Economy', 'Education', 'Public Safety', 'Environment'];

const featuredArticle = {
  category: 'Economy',
  title: 'Virginia Named Top State for Business for Third Consecutive Year',
  description:
    'The Commonwealth of Virginia has been recognized as the best state for business by CNBC, citing strong workforce development programs, competitive tax incentives, and robust infrastructure investments. Governor highlights the role of public-private partnerships in driving economic growth.',
  author: 'Office of the Governor',
  date: 'Feb 15, 2026',
  readTime: '5 min read',
};

const articles = [
  {
    category: 'Transportation',
    title: 'I-64 Widening Project Enters Phase 3',
    description: 'Construction begins on the final phase of the I-64 corridor improvements between Richmond and Hampton Roads, expected to reduce commute times by 25%.',
    author: 'VDOT Communications',
    date: 'Feb 12, 2026',
    readTime: '3 min read',
  },
  {
    category: 'Health',
    title: 'Free Flu Vaccination Clinics Open Statewide',
    description: 'The Virginia Department of Health announces free flu vaccination clinics across all 133 localities through March 2026.',
    author: 'VDH Public Affairs',
    date: 'Feb 10, 2026',
    readTime: '2 min read',
  },
  {
    category: 'Education',
    title: 'Virginia Launches STEM Initiative for K-12 Schools',
    description: 'A new $50 million investment will bring advanced STEM labs and training programs to underserved school districts.',
    author: 'Dept. of Education',
    date: 'Feb 8, 2026',
    readTime: '4 min read',
  },
  {
    category: 'Environment',
    title: 'Chesapeake Bay Cleanup Reaches Historic Milestone',
    description: 'Water quality metrics show the Chesapeake Bay is the cleanest it has been in 40 years, thanks to collaborative conservation efforts.',
    author: 'DEQ Communications',
    date: 'Feb 5, 2026',
    readTime: '3 min read',
  },
  {
    category: 'Public Safety',
    title: 'Emergency Alert System Upgrade Complete',
    description: 'Virginia\'s statewide emergency alert system now supports cell broadcast technology, reaching residents within seconds.',
    author: 'VDEM Public Affairs',
    date: 'Feb 3, 2026',
    readTime: '2 min read',
  },
  {
    category: 'Transportation',
    title: 'Metro Extension to Loudoun County Opens Next Month',
    description: 'The Silver Line Phase II extension will begin passenger service on March 1, connecting Dulles Airport to the Metro system.',
    author: 'DRPT Communications',
    date: 'Feb 1, 2026',
    readTime: '3 min read',
  },
];

export default function NewsAnnouncements() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

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
              <Newspaper size={22} />
            </div>
            <div>
              <p
                className="text-lg font-bold leading-tight"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                Virginia News
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                Official News & Announcements
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-64">
              <Search label="Search news" placeholder="Search articles..." size="sm" />
            </div>
            <Button size="sm" variant="outline">Subscribe</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Featured Article Hero */}
        <section
          className="border-b"
          style={{
            background: 'linear-gradient(135deg, var(--blue-ridge-900) 0%, var(--blue-ridge-700) 100%)',
            borderColor: 'var(--blue-ridge-600)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <div className="max-w-2xl">
              <Badge
                variant="info"
                size="sm"
                className="mb-4"
              >
                Featured
              </Badge>
              <Badge variant="secondary" size="sm" className="mb-4 ml-2">
                {featuredArticle.category}
              </Badge>
              <h1
                className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {featuredArticle.title}
              </h1>
              <p className="text-sm md:text-base text-white/75 mb-6 leading-relaxed">
                {featuredArticle.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  {featuredArticle.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featuredArticle.date}
                </span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <Button className="mt-6" size="sm">
                Read Full Article
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </section>

        {/* Category Filter + Articles */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Tag size={16} className="shrink-0" style={{ color: 'var(--color-text-muted)' }} />
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => { setSelectedCategory(cat); setPage(1); }}
                className="px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2"
                style={{
                  backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-background-subtle)',
                  color: selectedCategory === cat ? 'white' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  outlineColor: 'var(--color-border-focus)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Showing <strong style={{ color: 'var(--color-text)' }}>{filteredArticles.length}</strong> articles
              {selectedCategory !== 'All' && (
                <> in <strong style={{ color: 'var(--color-text)' }}>{selectedCategory}</strong></>
              )}
            </p>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArticles.map((article, idx) => (
              <Card key={idx} variant="outline" clickable>
                <CardContent>
                  {/* Colored accent bar */}
                  <div
                    className="w-10 h-1 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />

                  <div className="mb-3">
                    <Badge variant="secondary" size="sm">{article.category}</Badge>
                  </div>

                  <CardTitle className="text-base mb-2 leading-snug">{article.title}</CardTitle>
                  <CardDescription className="text-sm mb-4 leading-relaxed">{article.description}</CardDescription>

                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User size={11} />
                        {article.author}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                No articles found
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                No articles match the selected category. Try selecting a different filter.
              </p>
              <Button variant="outline" size="sm" className="mt-4" onClick={() => setSelectedCategory('All')}>
                View All Articles
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="flex justify-center mt-10">
              <Pagination totalPages={4} currentPage={page} onPageChange={setPage} />
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section
          className="border-t"
          style={{ backgroundColor: 'var(--color-background-subtle)', borderColor: 'var(--color-border)' }}
        >
          <div className="max-w-xl mx-auto px-4 py-12 text-center">
            <h2
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
            >
              Stay Informed
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Subscribe to receive the latest news and announcements from the Commonwealth of Virginia.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <Search
                  label="Email address"
                  placeholder="your.email@example.com"
                  size="md"
                  clearable={false}
                />
              </div>
              <Button className="shrink-0">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer
        siteName="Commonwealth of Virginia"
        linkGroups={[
          {
            title: 'News',
            links: [
              { label: 'Latest News', href: '#' },
              { label: 'Press Releases', href: '#' },
              { label: 'Media Contacts', href: '#' },
              { label: 'Archive', href: '#' },
            ],
          },
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
              { label: 'Contact Us', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}
