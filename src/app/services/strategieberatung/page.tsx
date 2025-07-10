import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategieberatung | beaible Consulting',
  description: 'Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen. Von der Vision bis zur Umsetzung.',
}

export default function StrategieberatungPage() {
  return (
    <ServiceLayout
      title="Strategieberatung"
      subtitle="Maßgeschneiderte KI-Strategien für nachhaltigen Erfolg"
      description="Eine durchdachte KI-Strategie ist der Schlüssel für erfolgreiche Digitalisierung. Wir entwickeln gemeinsam mit Ihnen eine umfassende Roadmap, die perfekt zu Ihren Unternehmenszielen passt."
      
      features={[
        "Strategische Vision und Zielsetzung",
        "Markt- und Wettbewerbsanalyse",
        "Technologie-Roadmap Entwicklung",
        "Investment- und Budget-Planung",
        "Governance und Compliance-Framework",
        "Risikomanagement und Mitigation",
        "Partnerschaften und Vendor-Strategie",
        "Erfolgsmessung und KPI-Definition"
      ]}
      
      process={[
        "Strategische Bestandsaufnahme",
        "Vision Workshop mit der Geschäftsführung",
        "Markt- und Technologieanalyse",
        "SWOT-Analyse und Gap-Assessment",
        "Strategieentwicklung und Roadmapping",
        "Business Case Entwicklung",
        "Stakeholder-Alignment und Validierung",
        "Implementierungsplanung starten"
      ]}
      
      benefits={[
        "Klare strategische Ausrichtung für KI-Initiativen",
        "Optimale Ressourcenallokation",
        "Reduzierte strategische Risiken",
        "Verbesserte Wettbewerbsposition",
        "Fundierte Investitionsentscheidungen",
        "Alignment zwischen Geschäfts- und IT-Strategie",
        "Nachhaltiger Competitive Advantage"
      ]}
      
      duration="4-8 Wochen"
      targetGroup="Geschäftsführung, C-Level, Strategische Planer"
      deliverables={[
        "Umfassende KI-Strategie (60-80 Seiten)",
        "Detaillierte Technologie-Roadmap",
        "Business Cases für KI-Initiativen",
        "Investment- und Budgetplanung",
        "Governance-Framework",
        "Risikomanagement-Plan",
        "KPI-Dashboard und Metriken",
        "Executive Summary für Board"
      ]}
    />
  )
}