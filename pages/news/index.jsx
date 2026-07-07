import Head from 'next/head';
import { useState } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'New Water Supply Project Inaugurated',
    description: 'DMC successfully completed the new water supply project covering 5 new areas',
    date: '2024-07-05',
    category: 'Infrastructure',
    image: '🏗️'
  },
  {
    id: 2,
    title: 'Property Tax Payment Deadline Extended',
    description: 'The property tax payment deadline has been extended to July 31, 2024',
    date: '2024-07-03',
    category: 'Announcement',
    image: '📢'
  },
  {
    id: 3,
    title: 'Smart City Initiative - Phase 2',
    description: 'Dhule Municipal Corporation launches phase 2 of Smart City Initiative',
    date: '2024-07-01',
    category: 'Development',
    image: '🏙️'
  }
];

export default function News() {
  return (
    <>
      <Head>
        <title>News & Updates - Dhule Municipal Corporation</title>
      </Head>
      <div className="bg-gradient-to-b from-primary to-blue-700 text-white py-12">
        <div className="container-custom">
          <h1 className="section-title text-white">News & Updates</h1>
          <p className="text-blue-100">Latest updates and announcements from Dhule Municipal Corporation</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="card hover:shadow-xl border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.image}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{item.category}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500">Published: {new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}