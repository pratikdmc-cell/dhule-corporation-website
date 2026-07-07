import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [userData, setUserData] = useState({
    name: 'Citizen',
    propertyTax: { status: 'Paid', amount: '5000', dueDate: '2024-12-31' },
    waterBill: { status: 'Pending', amount: '1200', dueDate: '2024-07-15' },
    grievances: [
      { id: 'GR001', title: 'Street Light Issue', status: 'In Progress', date: '2024-07-01' },
      { id: 'GR002', title: 'Water Supply', status: 'Resolved', date: '2024-06-15' }
    ]
  });

  return (
    <>
      <Head>
        <title>Dashboard - Dhule Municipal Corporation</title>
      </Head>
      <div className="bg-gradient-to-r from-primary to-blue-700 text-white py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold">Welcome, {userData.name}!</h1>
          <p className="text-blue-100">Your Citizen Dashboard</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card border-l-4 border-l-primary">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Property Tax</h3>
            <p className="text-2xl font-bold">{userData.propertyTax.status}</p>
            <p className="text-sm text-gray-500">Amount: ₹{userData.propertyTax.amount}</p>
          </div>
          <div className="card border-l-4 border-l-secondary">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Water Bill</h3>
            <p className="text-2xl font-bold">{userData.waterBill.status}</p>
            <p className="text-sm text-gray-500">Due: {userData.waterBill.dueDate}</p>
          </div>
          <div className="card border-l-4 border-l-warning">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Active Grievances</h3>
            <p className="text-2xl font-bold">1</p>
          </div>
          <div className="card border-l-4 border-l-success">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Resolved</h3>
            <p className="text-2xl font-bold">1</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Your Grievances</h2>
            <div className="space-y-4">
              {userData.grievances.map((grievance) => (
                <div key={grievance.id} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{grievance.title}</h4>
                      <p className="text-sm text-gray-500">{grievance.id} • {grievance.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      grievance.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {grievance.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="btn btn-primary w-full text-left">Pay Property Tax</button>
              <button className="btn btn-primary w-full text-left">Pay Water Bill</button>
              <button className="btn btn-secondary w-full text-left">File New Grievance</button>
              <button className="btn btn-outline w-full text-left">Download Certificate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}