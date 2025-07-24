import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '"KI-Landarzt"-Idee | beaible Consulting',
  description: 'Persönliche Beratung vor Ort im Allgäu. Regelmäßige Sprechstunden und individuelle Betreuung für nachhaltige KI-Integration.',
}

export default function KILandarztKonzeptPage() {
  return (
    <ServiceLayout
      title='"KI-Landarzt"-Idee'
      subtitle="Persönliche Beratung vor Ort im Allgäu"
      description="Wie ein Landarzt für die Gesundheit, bin ich Ihr persönlicher KI-Berater vor Ort. Regelmäßige Sprechstunden, individuelle Betreuung und eine langfristige Partnerschaft für Ihre KI-Reise."
      
      features={[
        "Regelmäßige Sprechstunden im Allgäu",
        "Individuelle Betreuung",
        "Nahbare und verständliche Beratung",
        "Langfristige Partnerschaft",
        "Schnelle Hilfe bei akuten KI-Fragen",
        "Lokale Vernetzung mit anderen Unternehmen",
        "Flexible Termine vor Ort oder online",
        "Kontinuierliche Weiterentwicklung"
      ]}
      
      process={[
        "Erstberatung und Kennenlernen",
        "Definition der Betreuungsintensität",
        "Regelmäßige Sprechstunden etablieren",
        "Kontinuierliche Begleitung bei KI-Projekten",
        "Schulungen und Workshops vor Ort",
        "Vernetzung mit lokalen Partnern",
        "Langfristige Strategieentwicklung",
        "Gemeinsame Weiterentwicklung"
      ]}
      
      benefits={[
        "Persönlicher Ansprechpartner für alle KI-Fragen",
        "Regionale Nähe und schnelle Verfügbarkeit",
        "Langfristige Begleitung statt Einmalberatung",
        "Vertrauensvolle Zusammenarbeit",
        "Lokale Vernetzung und Erfahrungsaustausch",
        "Flexible und bedarfsgerechte Betreuung",
        "Nachhaltige KI-Integration"
      ]}
      
      duration="Langfristige Partnerschaft"
      targetGroup="KMU im Allgäu und Umgebung"
      deliverables={[
        "Monatliche Sprechstunden (vor Ort oder online)",
        "Individuelle KI-Roadmap",
        "Kontinuierliche Projekt-Begleitung",
        "Schulungen und Workshops nach Bedarf",
        "Zugang zur regionalen KI-Community",
        "Flexible Support-Optionen",
        "Langfristige Strategiepartnerschaft",
        "Regelmäßige Updates zu neuen KI-Trends"
      ]}
    >
      <div className="bg-card rounded-2xl p-8 border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Warum die "KI-Landarzt"-Idee?
        </h3>
        <div className="prose prose-lg text-secondary">
          <p>
            Genau wie ein Landarzt seine Patienten über Jahre hinweg begleitet und eine 
            vertrauensvolle Beziehung aufbaut, verstehe ich mich als Ihr persönlicher 
            KI-Berater. Ich kenne Ihr Unternehmen, Ihre Herausforderungen und Ihre Ziele.
          </p>
          <p>
            Statt einmaliger Projekte setze ich auf langfristige Partnerschaften. 
            So können wir gemeinsam eine nachhaltige KI-Strategie entwickeln und 
            kontinuierlich anpassen – immer nah am Menschen und am Unternehmen.
          </p>
          <p>
            <strong>Mein Büro in Bärenweiler</strong> steht Ihnen offen für persönliche 
            Gespräche in entspannter Atmosphäre, fernab vom Großstadttrubel.
          </p>
        </div>
      </div>
    </ServiceLayout>
  )
}