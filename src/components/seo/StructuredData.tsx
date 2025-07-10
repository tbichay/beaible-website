interface StructuredDataProps {
  data: Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// LocalBusiness Schema für die Hauptseite
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://beaible-consulting.de",
    "name": "beaible Consulting",
    "alternateName": "beaible",
    "description": "KI-Beratung für kleine und mittlere Unternehmen im Allgäu. Persönliche Begleitung bei der KI-Transformation mit ganzheitlichem Ansatz.",
    "url": "https://beaible-consulting.de",
    "telephone": "+49 151 22311254",
    "email": "c.klose@beaible.de",
    "foundingDate": "2025",
    "priceRange": "€€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Bank Transfer, Invoice",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bärenweiler 1",
      "addressLocality": "Kißlegg", 
      "postalCode": "88353",
      "addressRegion": "Baden-Württemberg",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.7887",
      "longitude": "9.8856"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Baden-Württemberg"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Allgäu"
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "47.7887",
        "longitude": "9.8856"
      },
      "geoRadius": "100000"
    },
    "founder": {
      "@type": "Person",
      "name": "Christian Klose",
      "jobTitle": "KI-Berater und Geschäftsführer",
      "url": "https://www.linkedin.com/in/christian-klose-616154242/",
      "sameAs": [
        "https://www.linkedin.com/in/christian-klose-616154242/",
        "https://www.instagram.com/beaible_consulting/"
      ]
    },
    "employee": {
      "@type": "Person",
      "name": "Christian Klose",
      "jobTitle": "KI-Berater"
    },
    "knowsAbout": [
      "Künstliche Intelligenz",
      "KI-Transformation",
      "Change Management", 
      "Digitalisierung",
      "Unternehmensberatung",
      "KI-Strategie",
      "Prozessoptimierung"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KI-Beratungsleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-First-Audit",
            "description": "Umfassende Analyse Ihrer aktuellen Prozesse und KI-Potenziale"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Medienkompetenz",
            "description": "Schulungen für den sicheren und effektiven Umgang mit KI-Tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Change Management",
            "description": "Begleitung bei der Integration von KI in Ihre Unternehmenskultur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Strategieberatung", 
            "description": "Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/in/christian-klose-616154242/",
      "https://www.instagram.com/beaible_consulting/"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://beaible-consulting.de/logo.png",
      "width": "400",
      "height": "120"
    },
    "image": {
      "@type": "ImageObject", 
      "url": "https://beaible-consulting.de/chris-klose.jpg",
      "width": "800",
      "height": "1000"
    }
  }

  return <StructuredData data={schema} />
}

// Organization Schema für allgemeine Seiten
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "beaible Consulting",
    "url": "https://beaible-consulting.de",
    "logo": "https://beaible-consulting.de/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49 151 22311254",
      "contactType": "customer service",
      "email": "c.klose@beaible.de",
      "availableLanguage": "German"
    }
  }

  return <StructuredData data={schema} />
}

// Service Schema für Service-Seiten
export function ServiceSchema({ 
  name, 
  description,
  url 
}: { 
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "name": "beaible Consulting",
      "url": "https://beaible-consulting.de"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "serviceType": "Beratungsdienstleistung",
    "category": "KI-Beratung"
  }

  return <StructuredData data={schema} />
}

// Person Schema für Christian Klose
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christian Klose",
    "jobTitle": "KI-Berater und Geschäftsführer",
    "worksFor": {
      "@type": "Organization",
      "name": "beaible Consulting"
    },
    "url": "https://beaible-consulting.de",
    "sameAs": [
      "https://www.linkedin.com/in/christian-klose-616154242/",
      "https://www.instagram.com/beaible_consulting/"
    ],
    "knowsAbout": [
      "Künstliche Intelligenz",
      "KI-Transformation", 
      "Change Management",
      "Unternehmensberatung"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kißlegg",
      "addressRegion": "Baden-Württemberg",
      "addressCountry": "DE"
    }
  }

  return <StructuredData data={schema} />
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "beaible Consulting",
    "alternateName": "beaible",
    "url": "https://beaible-consulting.de",
    "description": "KI-Beratung für kleine und mittlere Unternehmen im Allgäu",
    "publisher": {
      "@type": "Organization",
      "name": "beaible Consulting"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://beaible-consulting.de/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return <StructuredData data={schema} />
}