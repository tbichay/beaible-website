import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-First-Audit Stufe 1 | beaible Consulting',
  description: 'Der Einstieg in Ihre KI-Transformation. Analyse Ihrer Geschäftsprozesse und erste KI-Potenziale.',
}

export default function KIFirstAuditStufe1Page() {
  return (
    <ServiceLayout
      title="KI-First-Audit Stufe 1"
      subtitle="Der Einstieg in Ihre KI-Transformation"
      description="Ein kompakter Einstiegs-Audit, der Ihnen einen ersten Überblick über KI-Potenziale in Ihrem Unternehmen verschafft. Ideal für Unternehmen, die mit KI starten möchten."
      
      features={[
        "Analyse Ihrer aktuellen Geschäftsprozesse",
        "Identifikation von KI-Potenzialen",
        "Erste Quick-Win Empfehlungen",
        "Roadmap für die nächsten Schritte",
        "Grundlegende Technologie-Bewertung",
        "Low-hanging-Fruit Identifikation",
        "Kostenbetrachtung für erste Schritte",
        "Priorisierungsmatrix"
      ]}
      
      process={[
        "Kick-off und Zielsetzung definieren",
        "Schnellanalyse der Hauptprozesse",
        "Interviews mit Schlüsselpersonen (3-5)",
        "Identifikation von 3-5 prioritären Use-Cases",
        "Machbarkeitsbewertung (High-Level)",
        "Quick-Win Empfehlungen entwickeln",
        "Kompakte Roadmap erstellen",
        "Ergebnispräsentation und nächste Schritte"
      ]}
      
      benefits={[
        "Schneller Einstieg in das Thema KI",
        "Kosteneffiziente erste Orientierung",
        "Klare Handlungsempfehlungen",
        "Fundament für weitere KI-Initiativen",
        "Risikominimierung bei ersten Schritten",
        "Management-Buy-in durch konkrete Ergebnisse",
        "Basis für Budgetplanung"
      ]}
      
      duration="1-2 Wochen"
      targetGroup="KMU, Start-ups, KI-Einsteiger"
      deliverables={[
        "Kompakter Audit-Report (15-20 Seiten)",
        "Top 3-5 KI-Use-Cases",
        "Quick-Win Empfehlungen",
        "Erste ROI-Schätzungen",
        "Prioritäts-Roadmap (6 Monate)",
        "Tool-Empfehlungen für Sofortstart",
        "Management-Präsentation",
        "1 Monat E-Mail-Support"
      ]}
    />
  )
}