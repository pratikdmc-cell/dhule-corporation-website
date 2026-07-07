import Head from 'next/head';
import { useState } from 'react';

export default function Grievance() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    attachments: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call would go here
    console.log('Grievance submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Grievance Redressal - Dhule Municipal Corporation</title>
      </Head>
      <div className="bg-gradient-to-b from-primary to-blue-700 text-white py-12">
        <div className="container-custom">
          <h1 className="section-title text-white">Grievance Redressal System</h1>
          <p className="text-blue-100">Report issues and track the status of your complaints</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Lodge a Complaint</h2>
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Your grievance has been submitted successfully!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary mb-4"
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary mb-4"
                >
                  <option>Select Category</option>
                  <option>Street Lights</option>
                  <option>Road Maintenance</option>
                  <option>Water Supply</option>
                  <option>Sanitation</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="description"
                  placeholder="Describe your grievance in detail"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary mb-4"
                />
                <button type="submit" className="btn btn-primary w-full">
                  Submit Grievance
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="card bg-blue-50">
              <h3 className="text-xl font-bold mb-4">Track Your Grievance</h3>
              <p className="text-gray-600 mb-4">Enter your grievance ID to track status</p>
              <input
                type="text"
                placeholder="Grievance ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary mb-4"
              />
              <button className="btn btn-primary w-full">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}