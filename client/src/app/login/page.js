"use client"
import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Moon, Sun, Brain } from 'lucide-react';


const page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your authentication logic here
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          darkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-purple-500' : 'bg-purple-400'} -top-48 -left-48`}></div>
          <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -bottom-48 -right-48`} style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Memora
              </h1>
            </div>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </p>
          </div>

          {/* Auth Card */}
          <div className={`rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            {/* Tab Switcher */}
            <div className={`flex border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 font-semibold transition-all duration-300 ${
                  isLogin
                    ? darkMode
                      ? 'bg-gradient-to-r from-purple-900 to-blue-900 text-white'
                      : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700'
                    : darkMode
                    ? 'text-gray-400 hover:bg-gray-750'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 font-semibold transition-all duration-300 ${
                  !isLogin
                    ? darkMode
                      ? 'bg-gradient-to-r from-purple-900 to-blue-900 text-white'
                      : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700'
                    : darkMode
                    ? 'text-gray-400 hover:bg-gray-750'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                Register
              </button>
            </div>

            {/* Form Container */}
            <div className="p-8 space-y-6">
              {/* Name Field (Register only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        darkMode
                          ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        darkMode
                          ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Forgot Password & Remember Me (Login only) */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight size={20} />
              </button>

              {/* Terms (Register only) */}
              {!isLogin && (
                <p className={`text-xs text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  By creating an account, you agree to our{' '}
                  <button type="button" className="text-purple-600 hover:underline">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Switch Mode Link */}
          <div className="text-center mt-6">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={switchMode}
                className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default page