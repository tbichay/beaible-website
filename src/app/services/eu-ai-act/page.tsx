import { ServiceLayout } from '@/components/ServiceLayout'
import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Der EU AI Act – Was Unternehmen jetzt wissen müssen | beaible Consulting',
  description: 'Mit dem EU AI Act setzt die EU verbindliche Regeln für KI. Erfahren Sie, was das für Ihr Unternehmen bedeutet und wie Sie sich vorbereiten können.',
}

export default function EuAiActPage() {
  return (
    <ServiceLayout
      title="Der EU AI Act – Was Unternehmen jetzt wissen müssen"
      subtitle="Mit dem EU AI Act setzt die Europäische Union weltweit erstmals verbindliche Regeln für den Einsatz von Künstlicher Intelligenz. Ziel: Innovation fördern – Risiken begrenzen."
      description="Der EU AI Act ist ein Gesetzesrahmen, der KI-Systeme nach ihrem Risiko für Gesellschaft und Grundrechte klassifiziert – von minimal bis unvertretbar. Je höher das Risiko, desto strenger die Anforderungen."
      
      features={[
        "Risikobasierte Klassifizierung von KI-Systemen",
        "Transparenzpflichten für KI-Nutzung",
        "Dokumentation & Risikoanalyse",
        "Strenge Auflagen für Hochrisiko-KI",
        "Verbot manipulativer KI-Systeme",
        "Menschliche Kontrolle sicherstellen",
        "Datenqualität gewährleisten",
        "Compliance-Strategien entwickeln"
      ]}
      
      process={[
        "KI-Bestandsaufnahme im Unternehmen",
        "Risikoeinstufung bestehender Systeme",
        "Gap-Analyse zu EU AI Act Anforderungen",
        "Entwicklung von Compliance-Maßnahmen",
        "Implementierung von Transparenz-Prozessen",
        "Dokumentation und Nachweisführung",
        "Schulung der Mitarbeitenden",
        "Kontinuierliches Monitoring"
      ]}
      
      benefits={[
        "Rechtssicherheit schaffen",
        "Bußgelder vermeiden (bis 35 Mio. €)",
        "Wettbewerbsvorteile sichern",
        "Vertrauen bei Kunden aufbauen",
        "Innovation verantwortungsvoll gestalten",
        "Zukunftssicher aufstellen",
        "Risiken minimieren"
      ]}
      
      duration="2-6 Wochen je nach Komplexität"
      targetGroup="Unternehmen mit KI-Einsatz, IT-Abteilungen, Compliance-Verantwortliche, Geschäftsführung"
      deliverables={[
        "KI-Inventar und Risikobewertung",
        "Compliance-Roadmap",
        "Dokumentationsvorlagen",
        "Prozessbeschreibungen",
        "Schulungsunterlagen",
        "Handlungsempfehlungen",
        "Umsetzungsplan bis 2026",
        "Regelmäßige Updates"
      ]}
    >
      <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
        <h3 className="text-xl font-bold mb-6 text-center">Die vier Risikostufen des EU AI Act</h3>
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">🚫 Verbotene KI</h4>
            <p className="text-secondary">Systeme, die Menschen manipulieren, bewerten oder überwachen, werden grundsätzlich untersagt (z. B. Social Scoring).</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">⚠️ Hochriskante KI</h4>
            <p className="text-secondary">Etwa in Medizin, Bildung, Justiz oder Personalwesen – hier gelten strenge Auflagen zu Transparenz, Datenqualität und menschlicher Kontrolle.</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">⚡ Begrenztes Risiko</h4>
            <p className="text-secondary">z. B. Chatbots – sie müssen als KI erkennbar sein.</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Minimales Risiko</h4>
            <p className="text-secondary">z. B. KI in Spielen oder Spamfiltern – keine spezifischen Pflichten.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-secondary mb-6 font-medium text-lg">
            Für weiterführende Informationen zum EU AI Act:
          </p>
          <Link 
            href="https://datenmassiv.de" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 group"
          >
            <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            <span>Zum ausführlichen EU AI Act Guide auf Datenmassiv.de</span>
          </Link>
          <p className="text-xs text-secondary mt-3 opacity-75">
            Externe Ressource mit detaillierten Informationen und Praxisbeispielen
          </p>
        </div>
      </div>
    </ServiceLayout>
  )
}