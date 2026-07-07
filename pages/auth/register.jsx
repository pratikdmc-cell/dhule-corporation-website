import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaUser, FaPhone } from 'react-icons/fa';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // API call would go here
      console.log('Registration data:', formData);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/auth/login';
      }, 2000);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register - Dhule Municipal Corporation</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">Create Account</h1>
              <p className="text-gray-600">Join Dhule e-Governance Portal</p>
            </div>

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Registration successful! Redirecting to login...
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="flex-1 bg-transparent px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300">
                  <FaEnvelope className="ml-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-transparent px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300">
                  <FaPhone className="ml-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    required
                    className="flex-1 bg-transparent px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300">
                  <FaLock className="ml-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                    className="flex-1 bg-transparent px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300">
                  <FaLock className="ml-3 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                    className="flex-1 bg-transparent px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary text-lg font-semibold disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-primary font-semibold hover:text-secondary">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}