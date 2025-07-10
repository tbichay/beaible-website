import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CookieSettings } from '@/components/CookieSettings'
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Cookie-Einstellungen | beaible Consulting',
  description: 'Verwalten Sie Ihre Cookie-Präferenzen für beaible-consulting.de. Steuern Sie, welche Cookies verwendet werden dürfen.',
  robots: 'noindex, nofollow'
}

export default function CookieEinstellungenPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-accent hover:text-accent-hover mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Cookie-Einstellungen</h1>

        <div className="prose prose-lg max-w-none text-secondary mb-8">
          <p>
            Hier können Sie Ihre Cookie-Präferenzen verwalten. Ihre Einstellungen werden 
            lokal in Ihrem Browser gespeichert und gelten nur für diese Website.
          </p>
        </div>

        <CookieSettings />

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Informationen zu den Cookie-Kategorien
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground">Notwendige Cookies</h3>
              <p className="text-sm text-secondary mt-1">
                Diese Cookies sind essentiell für die Funktionalität der Website und können 
                nicht deaktiviert werden. Sie speichern keine persönlichen Informationen.
              </p>
              <div className="text-xs text-secondary mt-2">
                <strong>Beispiele:</strong> Session-Management, Sicherheits-Token, Cookie-Einstellungen
              </div>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Funktionale Cookies</h3>
              <p className="text-sm text-secondary mt-1">
                Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. 
                Sie können von uns oder Drittanbietern stammen.
              </p>
              <div className="text-xs text-secondary mt-2">
                <strong>Beispiele:</strong> Theme-Präferenz (Hell/Dunkel-Modus), Spracheinstellungen
              </div>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Analyse-Cookies</h3>
              <p className="text-sm text-secondary mt-1">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website 
                interagieren, indem sie Informationen anonym sammeln und weitergeben.
              </p>
              <div className="text-xs text-secondary mt-2">
                <strong>Anbieter:</strong> Derzeit nicht aktiv
              </div>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Marketing-Cookies</h3>
              <p className="text-sm text-secondary mt-1">
                Diese Cookies werden verwendet, um Besuchern relevante Werbung anzuzeigen. 
                Sie können auch dazu verwendet werden, die Wirksamkeit von Werbekampagnen zu messen.
              </p>
              <div className="text-xs text-secondary mt-2">
                <strong>Status:</strong> Derzeit nicht verwendet
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-secondary">
          <p>
            Haben Sie Fragen zu unseren Cookie-Richtlinien? Kontaktieren Sie uns unter{' '}
            <a href="mailto:c.klose@beaible.de" className="text-accent hover:text-accent-hover">
              c.klose@beaible.de
            </a>
            {' '}oder lesen Sie unsere{' '}
            <Link href="/datenschutz" className="text-accent hover:text-accent-hover">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
    </>
  )
}