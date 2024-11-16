"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Eye, EyeOff, Heart, CircleUser, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Select from 'react-select';





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    country: '',
    postalCode: '',
    agreeToTerms: false
  });
  const [showForm, setShowForm] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when either modal is open
  useEffect(() => {
    if (showLoginModal || showSignupModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLoginModal, showSignupModal]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup attempt with:', formData);
  };
  let hideDropdownTimeout;

  const handleMouseEnter = () => {
    // Clear any pending timeout to keep the dropdown visible
    clearTimeout(hideDropdownTimeout);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    // Set a delay before hiding the dropdown
    hideDropdownTimeout = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200); // Adjust the delay as needed
  };

  useEffect(() => {
    // Clear the timeout when component unmounts to prevent memory leaks
    return () => clearTimeout(hideDropdownTimeout);
  }, []);

  const languageOptions = [
    { value: 'EN', label: 'English', flag: '/flags/en.png' },

    { value: 'ES', label: 'Español', flag: '/flags/es.png' }, // Added Spanish option
  ];
  // Add more languages with respective flag images


  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '9999px', // Circular shape
      padding: '2px 4px',
      minWidth: '80px',
    }),
    option: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }),
  };


  const LoginModal = () => (
    <div
      className={`fixed inset-0 flex z-50 items-center justify-center ${showLoginModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowLoginModal(false)}
      />

      {/* Modal */}
      <div
        className={`relative bg-red-50/85 rounded-lg w-full max-w-md transform transition-all duration-300 ${showLoginModal ? 'scale-100' : 'scale-95'
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-8 pt-8 pb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-red-600">Welcome back</h2>
            <button
              onClick={() => setShowLoginModal(false)}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              Don't have an account yet?{' '}
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignupModal(true);
                }}
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Register here
              </button>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <button className="flex items-center justify-center px-4 py-2.5 border border-red-400 rounded-lg hover:bg-red-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium text-gray-600">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-2.5 border border-red-400 rounded-lg hover:bg-red-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium text-gray-600">Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500">or via e-mail</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <div className="mt-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link href="/forgot-password" className="text-red-500 text-sm font-medium">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const SignupModal = () => (
    <div
      className={`fixed inset-0 flex z-50 items-center justify-center ${showSignupModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowSignupModal(false)}
      />

      {/* Modal */}
      <div
        className={`relative bg-red-50/85 rounded-lg w-full max-w-md max-h-[90vh] transform transition-all duration-300 ${showSignupModal ? 'scale-100' : 'scale-95'
          }`}
      >
        <div className="px-8 pt-8 pb-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-transparent hover:scrollbar-thumb-red-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-red-600">Create Account</h2>
            <button
              onClick={() => setShowSignupModal(false)}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => {
                  setShowSignupModal(false);
                  setShowLoginModal(true);
                }}
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Login here
              </button>
            </div>

            {/* Social Signup Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <button className="flex items-center justify-center px-4 py-2.5 border border-red-400 rounded-lg hover:bg-red-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium text-gray-600">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-2.5 border border-red-400 rounded-lg hover:bg-red-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium text-gray-600">Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>

              <div className="relative flex justify-center text-sm">
                {/* Only show the button if showForm is false */}
                {!showForm && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    Sign up with email
                  </button>
                )}
              </div>
            </div>

            {/* Signup Form */}
            {showForm && (
              <form onSubmit={handleSignup} className="space-y-4">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  className="w-full px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password (min. 8 characters)"
                    className="w-full px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="text"
                    value={formData.surname}
                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    placeholder="Surname"
                    className="px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex space-x-2">
                  <select
                    className="w-24 px-2 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  >
                    <option>+34</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Telephone number"
                    className="flex-1 px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    <option value="">Select country</option>
                  </select>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="Postal code"
                    className="px-4 py-3 border bg-red-50/70 border-red-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="rounded border-red-200 text-red-500 focus:ring-red-200"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the processing of{' '}
                    <a href="#" className="text-red-500 hover:text-red-600">
                      personal data
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Register
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="absolute w-full z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Left Menu Items */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  LOGO
                </Link>
                <span className="text-gray-200 text-2xl mx-5">|</span>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-1">
                  <Link
                    href="/cars"
                    className="text-white hover:text-gray-900 hover:bg-gray-50/40 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Search
                  </Link>
                  <Link
                    href="/sell"
                    className="text-white hover:text-gray-900 hover:bg-gray-50/40 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Best Deals
                  </Link>
                  <Link
                    href="/dealer"
                    className="text-white hover:text-gray-900 hover:bg-gray-50/40 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/import__process"
                     className="text-white hover:text-gray-900 hover:bg-gray-50/40 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Import process
                  </Link>
                  <Link
                    href="/dealer"
                     className="text-white hover:text-gray-900 hover:bg-gray-50/40 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Blog  
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Menu Items */}
            <div className="flex items-center space-x-4">
              <Heart className="text-zinc-900 hover:text-red-500 cursor-pointer" />
              <Select
                options={languageOptions}
                defaultValue={languageOptions[0]}
                styles={customStyles}
                formatOptionLabel={(option) => (
                  <div className="flex items-center">
                    {option.flag && <img src={option.flag} alt="" className="w-5 h-5 rounded-full" />}
                    <span className="ml-2">{option.label}</span>
                  </div>
                )}
                isSearchable={false}
              />

              <div
                className="relative inline-block text-left"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* User Icon with Dropdown Trigger */}
                <div className="flex items-center cursor-pointer">
                  <CircleUser className="h-6 w-6 text-zinc-900" />
                  <ChevronDown className="text-zinc-900" />
                </div>

                {/* Dropdown Menu */}
                {isDropdownVisible && (
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-20">
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      My Account
                    </button>
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Menu Items closed */}
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-gray-900 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#ffeded] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/cars" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base">
                Find Cars
              </a>
              <a href="/sell" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base">
                Sell a car
              </a>
              <a href="/apply" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base">
                Apply as Dealer
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowLoginModal(true);
                }}
                className="block w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowSignupModal(true);
                }}
                className="block bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium shadow-sm mx-2 mb-2 w-[calc(100%-1rem)]"
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      <LoginModal />
      <SignupModal />
    </>
  );
};

export default Navbar;