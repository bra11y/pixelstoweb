
import React from 'react';
import Header from '../components/Header';
import MinimalHero from '../components/MinimalHero';
import FeatureHero from '../components/home/FeatureHero';
import FeatureExplorer from '../components/home/FeatureExplorer';
import WorkShowcase from '../components/home/WorkShowcase';
import TestimonialsBento from '../components/home/TestimonialsBento';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';

const Index = () => {
  usePageTitle(PAGE_TITLES.HOME);

  return (
    <>
      <SEO
        title="PixelsToWeb | Canadian Web Design Agency | Custom Website Development"
        description="Canadian web design agency specializing in custom website development. We create beautiful, functional websites for businesses across Canada. Professional design, modern development, exceptional results."
        keywords="Canadian web design agency, website development Canada, custom websites, web design Toronto, web development agency, responsive web design, WordPress development, Shopify development"
        canonical="https://pixelstoweb.com/"
      />
      <Header />
      <main id="main-content">
        <FeatureHero />
        <MinimalHero />
        <FeatureExplorer />
        <WorkShowcase />
        <TestimonialsBento />
        <FinalCta />
      </main>
    </>
  );
};

export default Index;
