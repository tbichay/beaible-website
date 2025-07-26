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
      
      heroImage={{
        src: "/ki-landarzt-header.jpg",
        alt: "KI-Landarzt Beratung - Persönliche KI-Beratung vor Ort im Allgäu"
      }}
      
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
      {/* Die KI-Landarzt Idee Section */}
      <div className="bg-card rounded-2xl p-8 border border-border mb-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="bg-accent/10 rounded-full p-4 flex-shrink-0">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Die &ldquo;KI-Landarzt&rdquo;
            </h3>
            <p className="text-xl text-accent font-medium mb-6">
              Erste Hilfe für Ihre Digitalisierung
            </p>
          </div>
        </div>

        <div className="grid gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg text-secondary">&lsquo;Erste KI-Hilfe&rsquo; für Einsteiger:innen</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg text-secondary">Ehrliche Einschätzungen, ob und wo sich KI lohnt</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg text-secondary">Kompetente Antworten zu Datenschutz, Tools, Umsetzung</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg text-secondary">Vertrauensvolle Vernetzung mit Experten für komplexere Fälle</span>
          </div>
        </div>

        <div className="bg-background/50 rounded-lg p-6 mb-6">
          <p className="text-lg text-secondary leading-relaxed">
            Wie ein Landarzt biete ich werktags eine KI-Sprechstunde in meiner &lsquo;KI-Praxis&rsquo; in Bärenweiler 
            an. Dabei höre ich zu, stelle unterstützende Fragen, kläre auf und helfe weiter.
          </p>
        </div>

        <div className="text-center">
          <button className="bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-full inline-flex items-center gap-3 transition-all duration-300 text-lg">
            KI-Sprechstunde buchen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Warum die &ldquo;KI-Landarzt&rdquo;-Idee?
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