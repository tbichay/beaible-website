import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Medienkompetenz | beaible Consulting',
  description: 'Schulungen für den sicheren und effektiven Umgang mit KI-Tools. Befähigen Sie Ihr Team für die KI-Zukunft.',
}

export default function KIMediankompetenPage() {
  return (
    <ServiceLayout
      title="KI-Medienkompetenz"
      subtitle="Befähigung Ihres Teams für die KI-Zukunft"
      description="Praktische Schulungen und Workshops, die Ihre Mitarbeiter befähigen, KI-Tools sicher und effektiv zu nutzen. Von den Grundlagen bis zu fortgeschrittenen Anwendungen."
      
      features={[
        "Grundlagen der Künstlichen Intelligenz",
        "Hands-on Training mit ChatGPT, Claude & Co.",
        "Prompt Engineering Techniken",
        "Branchenspezifische KI-Anwendungen",
        "Datenschutz und ethische KI-Nutzung",
        "Integration in bestehende Workflows",
        "Qualitätskontrolle von KI-Outputs",
        "Zukunftstrends und neue Tools"
      ]}
      
      process={[
        "Bedarfsanalyse und Zielgruppendefinition",
        "Anpassung der Inhalte an Ihr Unternehmen",
        "Interaktive Workshop-Durchführung",
        "Praktische Übungen mit echten Use-Cases",
        "Entwicklung eigener Prompts und Workflows",
        "Q&A Sessions und Troubleshooting",
        "Nachbetreuung und Vertiefungsrunden",
        "Aufbau interner KI-Champions"
      ]}
      
      benefits={[
        "Erhöhte Produktivität durch KI-Nutzung",
        "Reduzierung von Ängsten vor neuen Technologien",
        "Sichere und verantwortungsvolle KI-Anwendung",
        "Competitive Advantage durch KI-Skills",
        "Kosteneinsparungen durch Automatisierung",
        "Verbesserte Qualität der Arbeitsergebnisse",
        "Zukunftssichere Qualifikation der Mitarbeiter"
      ]}
      
      duration="1-3 Tage (je nach Umfang)"
      targetGroup="Alle Mitarbeiter, Führungskräfte, Fachexperten"
      deliverables={[
        "Umfassende Schulungsunterlagen",
        "Prompt-Bibliothek für Ihr Unternehmen",
        "Best Practice Guidelines",
        "KI-Tool Bewertungsmatrix",
        "Workflow-Templates",
        "Zertifikat für Teilnehmer",
        "3 Monate Follow-up Support",
        "Zugang zur beaible KI-Community"
      ]}
    />
  )
}