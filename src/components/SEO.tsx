import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  schemaData?: object;
}

const SEO = ({
  title = "PixelsToWeb | Canadian Web Design Agency | Custom Website Development",
  description = "Canadian web design agency specializing in custom website development. We create beautiful, functional websites for businesses across Canada. Professional design, modern development, exceptional results.",
  keywords = "Canadian web design agency, website development Canada, custom websites, web design Toronto, web development agency, responsive web design, WordPress development, Shopify development",
  canonical,
  image = "/lovable-uploads/PixelsToWeb-logo.png",
  type = "website",
  noindex = false,
  schemaData
}: SEOProps) => {
  const siteUrl = "https://pixelstoweb.com";
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = canonical || siteUrl;

  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PixelsToWeb",
    "alternateName": "PixelsToWeb Web Development Agency",
    "description": "Canadian web design agency specializing in custom website development. We create beautiful, functional websites for businesses across Canada.",
    "url": siteUrl,
    "logo": fullImage,
    "image": fullImage,
    "email": "hello@pixelstoweb.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5H",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Province",
        "name": "Ontario"
      },
      {
        "@type": "City",
        "name": "Toronto"
      }
    ],
    "serviceType": [
      "Web Development",
      "Brand Design",
      "WordPress Development",
      "Shopify Development",
      "Digital Marketing",
      "Logo Design",
      "Website Maintenance"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "WordPress Development",
          "description": "Custom WordPress websites for Canadian businesses"
        },
        {
          "@type": "OfferCatalog",
          "name": "Brand Design",
          "description": "Logo design and brand identity services"
        },
        {
          "@type": "OfferCatalog",
          "name": "Shopify Development",
          "description": "Professional e-commerce stores"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Adebayo Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "PixelsToWeb created an amazing website for my Toronto-based business. Professional, fast, and exactly what I needed."
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/pixelstoweb",
      "https://instagram.com/pixelstoweb",
      "https://twitter.com/pixelstoweb"
    ]
  };

  const finalSchemaData = schemaData || defaultSchemaData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="PixelsToWeb" />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:site" content="@pixelstoweb" />
      <meta property="twitter:creator" content="@pixelstoweb" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="PixelsToWeb" />
      <meta name="publisher" content="PixelsToWeb" />
      <meta name="copyright" content="PixelsToWeb" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />

      {/* Business specific */}
      <meta name="business:contact_data:street_address" content="Toronto" />
      <meta name="business:contact_data:locality" content="Toronto" />
      <meta name="business:contact_data:region" content="ON" />
      <meta name="business:contact_data:postal_code" content="M5H" />
      <meta name="business:contact_data:country_name" content="Canada" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#0F2937" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;