import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Medienkompetenz fördern | beaible Consulting',
  description: 'Befähigung Ihres Teams durch praktische Workshops und Hands-on Training mit modernen KI-Tools.',
}

export default function KIMediankompetenzFoerdernPage() {
  return (
    <ServiceLayout
      title="KI-Medienkompetenz fördern"
      subtitle="Befähigung Ihres Teams für den KI-Alltag"
      description="Intensive Schulungsprogramme, die Ihre Mitarbeiter von KI-Anfängern zu kompetenten Anwendern entwickeln. Mit praktischen Übungen und echten Anwendungsfällen aus Ihrem Unternehmen."
      heroImage={{
        src: "/chris-medienkompetenz.jpg",
        alt: "Christian Klose - KI-Medienkompetenz fördern"
      }}
      
      features={[
        "Praktische Workshops zu KI-Tools",
        "Hands-on Training mit ChatGPT & Co",
        "Best Practices für den Arbeitsalltag",
        "Kontinuierliche Begleitung",
        "Individuelle Lernpfade",
        "Branchenspezifische Anwendungen",
        "Qualitätskontrolle und Fact-Checking",
        "Aufbau interner KI-Experten"
      ]}
      
      process={[
        "Skill-Assessment und Bedarfsanalyse",
        "Anpassung der Lernpfade an Rollen",
        "Grundlagen-Workshop (1 Tag)",
        "Hands-on Sessions mit echten Projekten",
        "Coaching-Sessions für Fortgeschrittene",
        "Peer-Learning und Best-Practice-Sharing",
        "Zertifizierung und Kompetenzbewertung",
        "Kontinuierliche Weiterbildung etablieren"
      ]}
      
      benefits={[
        "Drastische Produktivitätssteigerung",
        "Reduzierung repetitiver Aufgaben",
        "Höhere Mitarbeiterzufriedenheit",
        "Verbesserte Qualität der Arbeitsergebnisse",
        "Zukunftssichere Qualifikation",
        "Competitive Advantage durch KI-Skills",
        "Aufbau einer Lernkultur"
      ]}
      
      duration="2-8 Wochen (modularer Aufbau)"
      targetGroup="Alle Mitarbeiterebenen, Teams, Abteilungen"
      deliverables={[
        "Umfassendes Schulungskonzept",
        "Rolle-spezifische Lernmaterialien",
        "Prompt-Bibliothek für Ihr Unternehmen",
        "KI-Tool-Bewertungsmatrix",
        "Workflow-Integration-Guides",
        "Zertifikate für alle Teilnehmer",
        "Train-the-Trainer Programm",
        "6 Monate Community-Zugang"
      ]}
    />
  )
}