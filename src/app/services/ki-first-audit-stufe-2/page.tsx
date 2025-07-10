import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-First-Audit Stufe 2 | beaible Consulting',
  description: 'Tiefgehende Analyse und Strategie. Detaillierte Prozessoptimierung und konkrete Tool-Empfehlungen.',
}

export default function KIFirstAuditStufe2Page() {
  return (
    <ServiceLayout
      title="KI-First-Audit Stufe 2"
      subtitle="Tiefgehende Analyse und strategische Planung"
      description="Der umfassende Audit für Unternehmen, die bereits erste KI-Erfahrungen gesammelt haben oder direkt in die Tiefe gehen möchten. Mit detaillierter Analyse und konkretem Implementierungsplan."
      
      features={[
        "Detaillierte Prozessoptimierung",
        "Konkrete Tool-Empfehlungen",
        "ROI-Berechnungen mit Szenarien",
        "Implementierungsplan mit Zeitschiene",
        "Technische Architektur-Empfehlungen",
        "Datenqualitäts-Assessment",
        "Compliance und Datenschutz-Prüfung",
        "Change Management Konzept"
      ]}
      
      process={[
        "Detaillierte Bestandsaufnahme aller Prozesse",
        "Umfassende Stakeholder-Interviews",
        "Technische Systemanalyse",
        "Datenqualität und -verfügbarkeit prüfen",
        "Ausführliche Use-Case-Entwicklung",
        "Machbarkeitsstudien und Prototyping",
        "Detaillierte ROI-Modellierung",
        "Umfassende Roadmap und Implementierungsplan"
      ]}
      
      benefits={[
        "Vollständige Transparenz über KI-Potenziale",
        "Detaillierte Kosten-Nutzen-Rechnung",
        "Konkrete Implementierungsanleitung",
        "Risikominimierung durch gründliche Analyse",
        "Fundament für größere KI-Investitionen",
        "Optimale Tool- und Technologieauswahl",
        "Langfristige strategische Ausrichtung"
      ]}
      
      duration="3-4 Wochen"
      targetGroup="Etablierte Unternehmen, IT-affine KMU"
      deliverables={[
        "Umfassender Audit-Report (40-60 Seiten)",
        "Detaillierte Use-Case-Spezifikationen",
        "ROI-Modell mit Szenarien",
        "Technische Architektur-Pläne",
        "Implementierungs-Roadmap (12-18 Monate)",
        "Vendor-Evaluation und -Empfehlungen",
        "Change Management Konzept",
        "6 Monate Follow-up Support"
      ]}
    />
  )
}