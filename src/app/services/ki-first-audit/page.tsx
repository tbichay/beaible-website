import { ServiceLayout } from '@/components/ServiceLayout'
import { ServiceSchema } from '@/components/seo/StructuredData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-First-Audit | beaible Consulting - Professionelle KI-Potenzialanalyse',
  description: 'Umfassende Analyse Ihrer aktuellen Prozesse und KI-Potenziale. Identifizieren Sie Chancen für KI-Integration in Ihrem Unternehmen im Allgäu.',
  keywords: 'KI Audit, KI Potenzial Analyse, Künstliche Intelligenz Beratung, KI Transformation, Allgäu',
  openGraph: {
    title: 'KI-First-Audit | beaible Consulting',
    description: 'Professionelle Analyse Ihrer KI-Potenziale mit persönlicher Beratung im Allgäu',
    url: 'https://beaible-consulting.de/services/ki-first-audit',
    images: [
      {
        url: 'https://beaible-consulting.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KI-First-Audit - Professionelle KI-Potenzialanalyse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-First-Audit | beaible Consulting',
    description: 'Professionelle Analyse Ihrer KI-Potenziale mit persönlicher Beratung im Allgäu',
    images: ['https://beaible-consulting.de/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://beaible-consulting.de/services/ki-first-audit'
  }
}

export default function KIFirstAuditPage() {
  return (
    <>
      <ServiceSchema 
        name="KI-First-Audit"
        description="Umfassende Analyse Ihrer aktuellen Prozesse und KI-Potenziale zur Identifikation von Chancen für KI-Integration"
        url="https://beaible-consulting.de/services/ki-first-audit"
      />
      <ServiceLayout
      title="KI-First-Audit"
      subtitle="Der strategische Einstieg in Ihre KI-Transformation"
      description="Eine umfassende Analyse Ihrer aktuellen Geschäftsprozesse mit dem Fokus auf KI-Potenziale. Wir identifizieren konkrete Ansatzpunkte, wo Künstliche Intelligenz Ihr Unternehmen voranbringen kann."
      
      features={[
        "Detaillierte Prozessanalyse aller Geschäftsbereiche",
        "Identifikation von KI-Anwendungsfeldern",
        "Bewertung der technischen Machbarkeit",
        "Priorisierung nach Aufwand und Nutzen",
        "ROI-Potenzial-Einschätzung",
        "Roadmap für die KI-Implementierung",
        "Technologie-Empfehlungen",
        "Risikobewertung und Compliance-Check"
      ]}
      
      process={[
        "Kick-off Meeting und Zielsetzung",
        "Interviews mit Schlüsselpersonen",
        "Analyse bestehender Systeme und Daten",
        "Identifikation von KI-Use-Cases",
        "Machbarkeitsbewertung und Priorisierung",
        "Erstellung der KI-Roadmap",
        "Präsentation der Ergebnisse",
        "Empfehlungen für erste Schritte"
      ]}
      
      benefits={[
        "Klare Sicht auf Ihre KI-Potenziale",
        "Fundierte Grundlage für KI-Investitionen",
        "Reduzierung von Implementierungsrisiken",
        "Priorisierte Umsetzungsreihenfolge",
        "Konkrete ROI-Projektionen",
        "Vermeidung kostspieliger Fehlentscheidungen",
        "Wettbewerbsvorteile durch frühe KI-Adoption"
      ]}
      
      duration="2-4 Wochen"
      targetGroup="Geschäftsführung, IT-Leitung, Prozessverantwortliche"
      deliverables={[
        "Umfassender KI-Audit-Report (40-60 Seiten)",
        "Priorisierte KI-Use-Case-Liste",
        "Detaillierte ROI-Berechnungen",
        "Technische Machbarkeitsstudien",
        "KI-Roadmap mit Zeitplan",
        "Implementierungsempfehlungen",
        "Präsentation für das Management",
        "3 Monate kostenloser E-Mail-Support"
      ]}
    />
    </>
  )
}