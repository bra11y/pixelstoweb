import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { usePageTitle } from '../hooks/usePageTitle';

const Sitemap = () => {
    usePageTitle('Sitemap | PixelsToWeb');

    const mainPages = [
        { name: 'Home', path: '/', description: 'Welcome to PixelsToWeb' },
        { name: 'Services', path: '/services', description: 'Our accessibility services' },
        { name: 'Portfolio', path: '/portfolio', description: 'View our work and case studies' },
        { name: 'Design', path: '/design', description: 'Design gallery and showcase' },
        { name: 'Resources', path: '/resources', description: 'Accessibility resources and guides' },
        { name: 'About', path: '/about', description: 'Learn about our team and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
    ];

    const additionalPages = [
        { name: 'Testimonials', path: '/testimonials', description: 'What our clients say' },
        { name: 'Blog', path: '/blog', description: 'Articles and insights' },
        { name: 'Search', path: '/search', description: 'Search our website' },
        { name: 'Gallery', path: '/gallery', description: 'Photo gallery' },
        { name: 'Accessibility Scanner', path: '/accessibility-scanner', description: 'Free accessibility testing tool' },
    ];

    return (
        <>
            <SEO
                title="Sitemap | PixelsToWeb"
                description="Complete sitemap of PixelsToWeb website. Navigate to all pages including services, portfolio, resources, and contact information."
                keywords="sitemap, navigation, PixelsToWeb pages, web design services"
                canonical="https://pixelstoweb.com/sitemap"
            />
            <Header />
            <main id="main-content" className="bg-[#F7F7F7] min-h-screen">
                <section className="pt-32 pb-20">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                        <div className="text-center mb-16">
                            <span className="inline-block text-sm font-bold text-black/40 uppercase tracking-widest mb-4">
                                Navigation
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-8">
                                Sitemap
                            </h1>
                            <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                                Find your way around our website with this complete list of all pages.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Main Pages */}
                            <div className="rounded-[32px] bg-white p-8 border border-black/10 shadow-sm">
                                <h2 className="text-2xl font-bold text-black/90 mb-6">Main Pages</h2>
                                <ul className="space-y-4">
                                    {mainPages.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                to={page.path}
                                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-black/[0.02] transition-colors"
                                            >
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-medium text-black/80 group-hover:text-primary transition-colors">
                                                        {page.name}
                                                    </span>
                                                    <p className="text-sm text-black/50 mt-1">{page.description}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Additional Pages */}
                            <div className="rounded-[32px] bg-white p-8 border border-black/10 shadow-sm">
                                <h2 className="text-2xl font-bold text-black/90 mb-6">Additional Pages</h2>
                                <ul className="space-y-4">
                                    {additionalPages.map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                to={page.path}
                                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-black/[0.02] transition-colors"
                                            >
                                                <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-medium text-black/80 group-hover:text-teal transition-colors">
                                                        {page.name}
                                                    </span>
                                                    <p className="text-sm text-black/50 mt-1">{page.description}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 rounded-[32px] bg-black p-8 text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Cannot find what you are looking for?</h2>
                            <p className="text-white/60 mb-6">Contact us directly and we will help you find what you need.</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Sitemap;
