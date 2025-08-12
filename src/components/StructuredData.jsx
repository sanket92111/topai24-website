import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StructuredData = ({ data }) => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-dynamic]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    if (data) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, location.pathname]);

  return null;
};

// Predefined structured data for different pages
export const getStructuredData = (type, data = {}) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TopAi24",
    "description": "Leading app development agency creating cutting-edge mobile experiences and digital solutions",
    "url": "https://topai24.com",
    "logo": "https://topai24.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "topai24apps@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "India"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Software Development"
  };

  switch (type) {
    case 'blog':
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "TopAi24 Technology Blog",
        "description": "Latest insights on mobile development, AI integration, and web technologies",
        "url": "https://topai24.com/blog",
        "publisher": baseOrganization,
        "inLanguage": "en-US"
      };

    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.title,
        "description": data.excerpt,
        "image": data.image,
        "author": {
          "@type": "Organization",
          "name": data.author || "TopAi24 Team"
        },
        "publisher": baseOrganization,
        "datePublished": data.date,
        "dateModified": data.date,
        "url": `https://topai24.com/blog/${data.slug}`,
        "keywords": data.tags?.join(', '),
        "articleSection": data.category,
        "inLanguage": "en-US"
      };

    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobile App Development Services",
        "description": "Professional mobile app development services using React Native, Flutter, and native technologies",
        "provider": baseOrganization,
        "serviceType": "Software Development",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        }
      };

    default:
      return baseOrganization;
  }
};

export default StructuredData;