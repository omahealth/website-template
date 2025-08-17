'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Environment variables with fallbacks
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '#';
const CLINIC_NAME = process.env.NEXT_PUBLIC_CLINIC_NAME || 'Healthcare Clinic';
const NP_FIRST_NAME = process.env.NEXT_PUBLIC_NP_FIRST_NAME || 'Dr. Smith';
const CLINIC_PHONE = process.env.NEXT_PUBLIC_CLINIC_PHONE || '(555) 123-4567';
const CLINIC_ADDRESS = process.env.NEXT_PUBLIC_CLINIC_ADDRESS || '123 Healthcare Ave, City, State 12345';

// Professional healthcare color palette
const theme = {
  dark: '#264653',     // Deep teal for text and depth
  teal: '#2a9d8f',     // Primary teal for actions
  yellow: '#e9c46a',   // Warm yellow for highlights
  orange: '#f4a261',   // Orange for secondary actions
  coral: '#e76f51',    // Coral for urgent/important elements
  bg: '#fefefe',       // Clean white background
  lightTeal: '#a7c5bd' // Light teal for subtle elements
};

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HealthcareWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services: ServiceItem[] = [
    {
      title: "Telehealth Consultations",
      description: "Convenient virtual appointments from the comfort of your home with secure, HIPAA-compliant technology.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.teal }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z" />
        </svg>
      )
    },
    {
      title: "Preventive Care",
      description: "Comprehensive health screenings and wellness programs to keep you healthy and prevent illness.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.teal }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing support and monitoring for conditions like diabetes, hypertension, and heart disease.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.teal }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg }}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" 
                   style={{ backgroundColor: theme.teal }}>
                <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.teal }}></div>
                </div>
              </div>
              <div className="text-xl font-semibold tracking-wide" style={{ color: theme.dark }}>
                {CLINIC_NAME}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: theme.dark }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: theme.dark }}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: theme.dark }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: theme.dark }}
              >
                Contact
              </button>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: theme.teal }}
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-300"
              style={{ color: theme.dark }}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 bg-white rounded-b-2xl shadow-lg">
              <div className="flex flex-col space-y-10">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-sm font-medium tracking-wide"
                  style={{ color: theme.dark }}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-sm font-medium tracking-wide"
                  style={{ color: theme.dark }}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-sm font-medium tracking-wide"
                  style={{ color: theme.dark }}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-sm font-medium tracking-wide"
                  style={{ color: theme.dark }}
                >
                  Contact
                </button>
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-white text-center"
                  style={{ backgroundColor: theme.teal }}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-10">
                <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" 
                      style={{ color: theme.dark, backgroundColor: theme.yellow }}>
                  Welcome to {CLINIC_NAME}
                </span>
                <h1 className="text-5xl lg:text-6xl font-light leading-tight" style={{ color: theme.dark }}>
                  Modern Healthcare
                  <span className="block font-normal">Made Personal</span>
                </h1>
                <p className="text-lg leading-relaxed opacity-80 max-w-lg" style={{ color: theme.dark }}>
                  Experience compassionate, evidence-based healthcare with {NP_FIRST_NAME}. 
                  We provide personalized telehealth services focused on your wellness journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  style={{ backgroundColor: theme.teal }}
                >
                  Book Consultation
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 border-2"
                  style={{ 
                    color: theme.teal, 
                    borderColor: theme.teal,
                    backgroundColor: 'transparent'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
                   style={{ backgroundColor: theme.lightTeal }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                      <Image 
                        src="/img/image-1.jpg" 
                        alt="Professional Healthcare" 
                        width={96} 
                        height={96} 
                        className="w-full h-full object-cover" 
                      />
                    </div>                    <p className="text-lg font-medium" style={{ color: theme.dark }}>
                      Professional Healthcare
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-8" style={{ backgroundColor: '#fafbfb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-10 mb-20">
            <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" 
                  style={{ color: theme.dark, backgroundColor: theme.yellow }}>
              OUR SERVICES
            </span>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight max-w-3xl mx-auto" 
                style={{ color: theme.dark }}>
              Comprehensive Care for Every Need
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                       style={{ backgroundColor: `${theme.teal}15` }}>
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold" style={{ color: theme.dark }}>
                      {service.title}
                    </h3>
                    <p className="leading-relaxed opacity-80" style={{ color: theme.dark }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-10">
                <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" 
                      style={{ color: theme.dark, backgroundColor: theme.yellow }}>
                  ABOUT {NP_FIRST_NAME}
                </span>
                <h2 className="text-4xl lg:text-5xl font-light leading-tight" style={{ color: theme.dark }}>
                  Dedicated to Your
                  <span className="block font-normal">Health & Wellness</span>
                </h2>
                <p className="text-lg leading-relaxed opacity-80" style={{ color: theme.dark }}>
                  {NP_FIRST_NAME} brings years of experience in providing compassionate, 
                  patient-centered care. Our approach combines evidence-based medicine with 
                  personalized attention to help you achieve your health goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.teal }}></div>
                  <span className="font-medium" style={{ color: theme.dark }}>Board-Certified Nurse Practitioner</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.teal }}></div>
                  <span className="font-medium" style={{ color: theme.dark }}>Telehealth Specialist</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.teal }}></div>
                  <span className="font-medium" style={{ color: theme.dark }}>Preventive Care Expert</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
                   style={{ backgroundColor: theme.lightTeal }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                      <Image 
                        src="/img/image-2.jpg" 
                        alt="Professional Healthcare" 
                        width={96} 
                        height={96} 
                        className="w-full h-full object-cover" 
                      />
                    </div>                    <p className="text-lg font-medium" style={{ color: theme.dark }}>
                      Excellence in Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8" style={{ backgroundColor: '#fafbfb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-10 mb-20">
            <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" 
                  style={{ color: theme.dark, backgroundColor: theme.yellow }}>
              GET IN TOUCH
            </span>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight max-w-3xl mx-auto" 
                style={{ color: theme.dark }}>
              Ready to Start Your Health Journey?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: `${theme.teal}15` }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.teal }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: theme.dark }}>Phone</h3>
                    <p className="opacity-80" style={{ color: theme.dark }}>{CLINIC_PHONE}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: `${theme.teal}15` }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.teal }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: theme.dark }}>Address</h3>
                    <p className="opacity-80" style={{ color: theme.dark }}>{CLINIC_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-center space-y-10">
                <h3 className="text-2xl font-semibold" style={{ color: theme.dark }}>
                  Schedule Your Consultation
                </h3>
                <p className="opacity-80" style={{ color: theme.dark }}>
                  Book your telehealth appointment today and take the first step towards better health.
                </p>
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: theme.teal }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8" style={{ backgroundColor: theme.dark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" 
                   style={{ backgroundColor: theme.teal }}>
                <div className="w-4 h-4 rounded-md bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.teal }}></div>
                </div>
              </div>
              <div className="text-lg font-semibold text-white">
                {CLINIC_NAME}
              </div>
            </div>
            <p className="text-white/60">
              © 2024 {CLINIC_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareWebsite;
