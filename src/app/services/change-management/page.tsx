import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Change Management & Persönlichkeitsentwicklung | beaible Consulting',
  description: 'Veränderung ist ein Prozess. Ich unterstütze Führungskräfte und Teams dabei, innere Blockaden zu erkennen und Veränderung als Chance zu begreifen.',
}

export default function ChangeManagementPage() {
  return (
    <ServiceLayout
      title="Werde beaible: Change-Management & Persönlichkeitsentwicklung"
      subtitle="Veränderung ist kein Projekt. Veränderung ist ein Prozess – und oft ein sehr persönlicher."
      description="Ob digitale Transformation, der Einsatz von KI oder ein grundlegender Kulturwandel im Unternehmen: Erfolgreicher Change beginnt mit den Menschen, die ihn tragen. Mit ihren Überzeugungen, Gewohnheiten, Ängsten – und ihrer Bereitschaft, sich selbst weiterzuentwickeln."
      
      features={[
        "Change-Workshops & Zukunftsdialoge",
        "Einzel-Coachings für Führungskräfte",
        "Impulse zu Resilienz & Selbstführung",
        "Team-Entwicklung im Digitalisierungskontext",
        "Haltung & Mindset-Arbeit",
        "Veränderungsbegleitung",
        "Persönlichkeitsentwicklung",
        "Praxisnahe Methoden & ehrliches Feedback"
      ]}
      
      process={[
        "Erstgespräch und Situationsanalyse",
        "Definition der Veränderungsziele",
        "Entwicklung individueller Formate",
        "Durchführung von Workshops oder Coachings",
        "Reflexion und Feedbackschleifen",
        "Transfer in den Alltag begleiten",
        "Nachhaltige Verankerung sichern",
        "Langfristige Begleitung nach Bedarf"
      ]}
      
      benefits={[
        "Innere Blockaden erkennen und lösen",
        "Neue Denkweisen etablieren",
        "Veränderung als Chance begreifen",
        "Persönliche Weiterentwicklung",
        "Stärkung der Führungskompetenz",
        "Erhöhte Veränderungsbereitschaft",
        "Nachhaltige Kulturentwicklung"
      ]}
      
      duration="Individuell nach Bedarf"
      targetGroup="Führungskräfte, Teams, Veränderungsbegleiter, Einzelpersonen"
      deliverables={[
        "Maßgeschneiderte Workshop-Konzepte",
        "Persönliche Coaching-Sessions",
        "Impulse und Sparrings",
        "Praxisnahe Übungen und Tools",
        "Reflexionsmaterialien",
        "Transferbegleitung",
        "Langfristige Partnerschaft",
        "Ehrliches Feedback und klare Sprache"
      ]}
    >
      <div className="space-y-8">
        <p className="text-lg text-secondary">
          Bei beaible stehen deshalb nicht nur Strategien und Strukturen im Fokus, sondern vor allem auch die Persönlichkeitsentwicklung.
        </p>
        
        <p className="text-lg text-secondary">
          Ich unterstütze Führungskräfte, Teams und Einzelpersonen dabei, innere Blockaden zu erkennen, neue Denkweisen zu etablieren und Veränderung als Chance zu begreifen. Mit praxisnahen Methoden, ehrlichem Feedback und einer klaren Sprache.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Meine Sei-Dazu-Fähig-Angebote in diesem Bereich:</h3>
          <ul className="text-lg text-secondary list-disc pl-6 space-y-3">
            <li>Change-Workshops & Zukunftsdialoge für Unternehmen und Organisationen</li>
            <li>Einzel-Coachings für Führungskräfte & Veränderungsbegleiter</li>
            <li>Impulse & Sparrings zu Themen wie Resilienz, Selbstführung, Haltung & Mindset</li>
            <li>Formate zur Team-Entwicklung im Kontext von Digitalisierung und KI</li>
          </ul>
        </div>
        
        <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
          <p className="text-xl font-bold text-foreground mb-4">
            Future starts with you.
          </p>
          <p className="text-lg text-secondary">
            Lass uns gemeinsam herausfinden, was in dir steckt – und wie du andere dabei unterstützen kannst, über sich hinauszuwachsen.
          </p>
        </div>
      </div>
    </ServiceLayout>
  )
}