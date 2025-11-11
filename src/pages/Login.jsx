import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert('Please enter both email and password');
      return;
    }
    alert(`Welcome back, ${form.email.split('@')[0]}!`);
    navigate('/'); // redirect to home or dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
      {/* Optional Header */}
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md mt-24"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Login
        </h2>

        {/* Login Fields */}
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            {/* 👉 Forgot Password button */}
            <div className="text-right mt-2">
              <button
                onClick={() => navigate('/forgot-password')}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
