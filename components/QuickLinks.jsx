import Link from 'next/link';
import { FaDownload, FaFileAlt, FaPhone, FaBook } from 'react-icons/fa';

const quickLinks = [
  {
    icon: <FaDownload />,
    title: 'Download Forms',
    description: 'All required forms and documents',
    href: '#'
  },
  {
    icon: <FaFileAlt />,
    title: 'Certificates',
    description: 'Apply for certificates online',
    href: '#'
  },
  {
    icon: <FaPhone />,
    title: 'Helpline',
    description: 'Contact our support team',
    href: '#'
  },
  {
    icon: <FaBook />,
    title: 'FAQs',
    description: 'Frequently asked questions',
    href: '#'
  }
];

export default function QuickLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center section-title">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="card hover:shadow-xl hover:border-l-4 hover:border-l-primary transition-all duration-300 cursor-pointer">
                <div className="text-4xl text-primary mb-4">{link.icon}</div>
                <h3 className="text-lg font-bold mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
