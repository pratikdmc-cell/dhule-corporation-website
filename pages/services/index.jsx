import Head from 'next/head';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Property Tax Payment',
    description: 'Pay your property tax online securely',
    icon: '🏠',
    link: '/services/property-tax'
  },
  {
    id: 2,
    title: 'Water Tax Payment',
    description: 'Pay water supply charges online',
    icon: '💧',
    link: '/services/water-tax'
  },
  {
    id: 3,
    title: 'Grievance Redressal',
    description: 'Lodge and track your complaints',
    icon: '📋',
    link: '/services/grievance'
  },
  {
    id: 4,
    title: 'Apply for Licenses',
    description: 'Apply for various licenses and permits',
    icon: '📄',
    link: '/services/licenses'
  },
  {
    id: 5,
    title: 'E-Tendering',
    description: 'Access tenders and bid online',
    icon: '🔨',
    link: '/services/tenders'
  },
  {
    id: 6,
    title: 'News & Updates',
    description: 'Latest news and updates from DMC',
    icon: '📰',
    link: '/news'
  }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Dhule Municipal Corporation</title>
      </Head>
      <div className="bg-gradient-to-b from-primary to-blue-700 text-white py-16">
        <div className="container-custom">
          <h1 className="section-title text-white">Our Services</h1>
          <p className="text-blue-100">Browse all available e-services provided by Dhule Municipal Corporation</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card hover:shadow-xl">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-primary font-semibold hover:text-secondary transition-colors">
                Access Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}