import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // API call would go here
      console.log('Login data:', formData);
      // On success, redirect to dashboard
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Dhule Municipal Corporation</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
              <p className="text-gray-600">Login to your account</p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <Link href="#" className="text-primary font-semibold hover:text-secondary">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary text-lg font-semibold disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{' '}
              <Link href="/auth/register" className="text-primary font-semibold hover:text-secondary">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}