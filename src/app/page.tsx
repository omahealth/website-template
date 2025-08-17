import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Environment variables with fallbacks
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '#';
const CLINIC_NAME = process.env.NEXT_PUBLIC_CLINIC_NAME || 'Healthcare Clinic';
const NP_FIRST_NAME = process.env.NEXT_PUBLIC_NP_FIRST_NAME || 'Dr. Smith';
const CLINIC_PHONE = process.env.NEXT_PUBLIC_CLINIC_PHONE || '(555) 123-4567';
const CLINIC_ADDRESS = process.env.NEXT_PUBLIC_CLINIC_ADDRESS || '123 Healthcare Ave, City, State 12345';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function HomePage(): React.JSX.Element {
  const services: Service[] = [
    {
      title: "Primary Care",
      description: "Total health assessments, preventive care, and management of chronic conditions.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      title: "Pediatric Care", 
      description: "Specialized medical care for infants, children, and adolescents with gentle, family-friendly approach.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Women's Health",
      description: "Complete women's healthcare including annual exams, reproductive health, and wellness screenings.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Vaccinations",
      description: "Up-to-date immunizations for all ages, including travel vaccines and flu shots.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Laboratory Services",
      description: "Partner site lab testing for quick results and convenient patient care.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Urgent Care",
      description: "Same-day appointments for non-emergency medical concerns and minor injuries.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const features: string[] = [
    "Board-certified clinicians",
    "State-of-the-art medical equipment", 
    "Electronic health records for seamless care",
    "Flexible scheduling and telehealth offerings"
  ]

  // Contact information with explicit typing
  const contactInfo: Array<{
    icon: React.ReactNode;
    text: string;
  }> = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ), 
      text: CLINIC_PHONE 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ), 
      text: CLINIC_ADDRESS 
    }
  ];

  // Navigation links with explicit typing
  const navLinks: Array<{
    href: string;
    text: string;
  }> = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" }
  ];

  const footerLinks: Array<{
    href: string;
    text: string;
  }> = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About Us" },
    { href: "#contact", text: "Contact" },
  ];

  const officeHours: Array<{
    day: string;
    hours: string;
  }> = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-900">
                {CLINIC_NAME}
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 hover:text-teal-900 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner in{' '}
                <span className="text-teal-600">Personalized Health</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A new era where modern technology meets patient-centered care, at affordable and friendly prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center"
                >
                  Schedule Appointment
                </Link>
                <Link
                  href="#about"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img/image-1.jpg"
                alt="Modern medical facility"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine checkups to specialized treatments, we offer comprehensive 
              healthcare services for patients of all ages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/img/image-2.jpg"
                alt="Healthcare professionals"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Trusted Healthcare Partners
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">
              Ready to Schedule Your Visit?
            </h3>
            <p className="text-xl text-teal-100 leading-relaxed max-w-2xl mx-auto">
              Contact us today to book your appointment or learn more about our services. 
              We&apos;re here to support your family&apos;s health journey.
            </p>
            <div className="pt-8">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-4">{CLINIC_NAME}</h5>
              <p className="text-gray-400 leading-relaxed">
                Your Trusted Partner in Personalized Health
              </p>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <div className="space-y-2">
                {footerLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="block text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Office Hours</h6>
              <div className="space-y-2 text-gray-400">
                {officeHours.map((schedule, index) => (
                  <div key={index}>{schedule.day}: {schedule.hours}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="text-sm text-gray-400">
              Emergency services available 24/7
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {CLINIC_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}