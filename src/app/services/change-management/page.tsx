import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Change Management | beaible Consulting - KI-Transformation erfolgreich gestalten',
  description: 'Begleitung bei der Integration von KI in Ihre Unternehmenskultur. Erfolgreiche Transformation durch strukturiertes Change Management im Allgäu.',
  keywords: 'Change Management, KI Transformation, Unternehmenskultur, Führungskräfte Coaching, Mitarbeiter Schulung, Allgäu',
  openGraph: {
    title: 'Change Management | beaible Consulting',
    description: 'Erfolgreiche KI-Integration in Ihre Unternehmenskultur mit strukturiertem Change Management',
    url: 'https://beaible-consulting.de/services/change-management',
    images: [
      {
        url: 'https://beaible-consulting.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Change Management für KI-Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change Management | beaible Consulting',
    description: 'Erfolgreiche KI-Integration in Ihre Unternehmenskultur',
    images: ['https://beaible-consulting.de/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://beaible-consulting.de/services/change-management'
  }
}

export default function ChangeManagementPage() {
  return (
    <ServiceLayout
      title="Change Management"
      subtitle="Erfolgreiche KI-Integration in Ihre Unternehmenskultur"
      description="Die Einführung von KI bedeutet mehr als nur neue Technologie – es ist ein kultureller Wandel. Wir begleiten Sie dabei, diese Transformation erfolgreich zu gestalten und Ihre Mitarbeiter mitzunehmen."
      
      features={[
        "Stakeholder-Analyse und -Management",
        "Change-Strategie und Kommunikationsplan",
        "Widerstandsmanagement und Motivation",
        "Kulturwandel-Begleitung",
        "Führungskräfte-Coaching für KI-Transformation",
        "Mitarbeiter-Workshops und Schulungen",
        "Change-Monitoring und Anpassungen",
        "Erfolgsmessung und KPI-Tracking"
      ]}
      
      process={[
        "IST-Analyse der Unternehmenskultur",
        "Definition der Ziel-Kultur und Vision",
        "Entwicklung der Change-Strategie",
        "Identifikation von Change-Agents",
        "Kommunikationskampagne starten",
        "Pilotprojekte und Quick Wins umsetzen",
        "Vollständige Transformation begleiten",
        "Nachhaltigkeit sicherstellen"
      ]}
      
      benefits={[
        "Reduzierte Widerstände gegen KI-Einführung",
        "Höhere Akzeptanz neuer Technologien",
        "Beschleunigte Transformationsprozesse",
        "Verbesserte Mitarbeitermotivation",
        "Nachhaltige Verankerung von KI-Kultur",
        "Minimierte Risiken bei der Einführung",
        "Erhöhte Innovationsbereitschaft im Team"
      ]}
      
      duration="3-12 Monate"
      targetGroup="Geschäftsführung, HR, Führungskräfte, Change-Manager"
      deliverables={[
        "Detaillierte Change-Strategie",
        "Stakeholder-Analyse und -Plan",
        "Kommunikations-Roadmap",
        "Workshop-Konzepte und Materialien",
        "Change-Monitoring Dashboard",
        "Führungskräfte-Coaching Programme",
        "Mitarbeiter-Feedback-System",
        "Nachhaltigkeit-Sicherungsplan"
      ]}
    />
  )
}