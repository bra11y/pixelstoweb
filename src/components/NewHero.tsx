
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Text Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
              <Check size={16} />
              WCAG 2.2 AA Compliant
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Digital experiences
                <br />
                <span className="text-gray-600">that welcome everyone</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Make your website accessible to all users. We help Nigerian businesses create inclusive digital experiences that everyone can use.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/scanner"
                className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 shadow-lg hover:shadow-xl"
                aria-label="Scan your website for accessibility issues"
              >
                Scan Your Website
                <ArrowRight size={20} />
              </Link>

              <a
                href="mailto:hello@pixelstoweb.com"
                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                aria-label="Contact us via email"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* 3D Workspace Image */}
          <div className="relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
                <img
                  src="/lovable-uploads/65d2f673-94d8-4834-a9ac-47b711e0832e.png"
                  alt="Inclusive digital workspace featuring a white desk with computer, braille device, and wheelchair accessibility"
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                />
              </div>
            </div>

            {/* Subtle Accent Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-2xl opacity-40 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-2xl opacity-40 -z-10"></div>
          </div>
        </div>

        {/* Feature Stats */}
        <div className="mt-24 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                <Check size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">WCAG 2.2 AA</h3>
              <p className="text-gray-600">Meet international accessibility standards</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Screen Reader Ready</h3>
              <p className="text-gray-600">Optimized for assistive technologies</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Universal Design</h3>
              <p className="text-gray-600">Beautiful experiences for everyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
