import Link from 'next/link';
import { FaClock } from 'react-icons/fa';

const news = [
  {
    id: 1,
    title: 'Online Services Platform Launched',
    excerpt: 'New digital platform for seamless citizen services',
    date: '2024-07-07',
    category: 'Update',
    icon: '📱'
  },
  {
    id: 2,
    title: 'Property Tax Deadline Extended',
    excerpt: 'Extended deadline for property tax payments',
    date: '2024-07-05',
    category: 'Notice',
    icon: '📋'
  },
  {
    id: 3,
    title: 'Water Supply Maintenance',
    excerpt: 'Scheduled maintenance on water supply lines',
    date: '2024-07-01',
    category: 'Alert',
    icon: '💧'
  }
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-4">
          <div>
            <h2 className="section-title mb-0">Latest Updates</h2>
            <p className="section-subtitle mb-0">Stay informed with recent announcements</p>
          </div>
          <Link href="/news" className="btn btn-primary whitespace-nowrap">
            View All News
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="card border-l-4 border-l-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="mb-3">
                <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{item.excerpt}</p>
              <div className="flex items-center text-xs text-gray-500">
                <FaClock className="mr-2" />
                {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
