import Link from 'next/link';
import { FaFileInvoice, FaDroplet, FaBullhorn, FaClipboard, FaAuction, FaBell } from 'react-icons/fa';

const services = [
  {
    icon: <FaFileInvoice />,
    title: 'Property Tax',
    description: 'Pay your property tax online with ease',
    color: 'from-blue-500 to-blue-600',
    link: '/services/property-tax'
  },
  {
    icon: <FaDroplet />,
    title: 'Water Services',
    description: 'Manage water supply and billing',
    color: 'from-cyan-500 to-blue-500',
    link: '/services/water-bill'
  },
  {
    icon: <FaBullhorn />,
    title: 'Notices',
    description: 'Access official notices and orders',
    color: 'from-purple-500 to-pink-500',
    link: '/services/notices'
  },
  {
    icon: <FaClipboard />,
    title: 'Grievance',
    description: 'File and track your complaints',
    color: 'from-orange-500 to-red-500',
    link: '/grievance'
  },
  {
    icon: <FaAuction />,
    title: 'Tenders',
    description: 'Bid on government tenders',
    color: 'from-green-500 to-emerald-500',
    link: '/services/tenders'
  },
  {
    icon: <FaBell />,
    title: 'Alerts',
    description: 'Get real-time notifications',
    color: 'from-yellow-500 to-orange-500',
    link: '/services/alerts'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Popular Services</h2>
          <p className="section-subtitle">Access all municipal services in one place</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <div className={`card bg-gradient-to-br ${service.color} text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group`}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-100 mb-4">{service.description}</p>
                <span className="inline-block text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Get Started →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
