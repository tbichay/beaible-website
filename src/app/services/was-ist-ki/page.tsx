'use client'

import { motion } from 'framer-motion'
import { Lightbulb, CheckCircle, XCircle, BarChart, Shield, Zap, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export default function WasIstKIPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Was ist KI' }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Was ist KI – und was kann sie wirklich?
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Realistische Einordnung statt Science-Fiction für Einsteiger:innen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-lg text-secondary leading-relaxed">
              Künstliche Intelligenz (KI) beschreibt Systeme, die Aufgaben übernehmen, 
              für die normalerweise menschliche Intelligenz nötig ist – zum Beispiel Sprache verstehen, 
              Bilder erkennen, Entscheidungen treffen oder aus Daten lernen. Doch was steckt wirklich dahinter?
            </p>
          </motion.div>

          {/* Stärken der KI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              Stärken der KI
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Automatisierung</h3>
                </div>
                <p className="text-secondary">
                  KI kann Prozesse beschleunigen, repetitive Aufgaben übernehmen und dabei effizienter arbeiten.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="flex items-center mb-3">
                  <BarChart className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Datenanalyse</h3>
                </div>
                <p className="text-secondary">
                  Sie erkennt Muster und Zusammenhänge in großen Datenmengen – schneller und präziser als der Mensch.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Personalisierung</h3>
                </div>
                <p className="text-secondary">
                  Von Empfehlungen bis zur individuellen Kundenansprache – KI schafft maßgeschneiderte Erlebnisse.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="flex items-center mb-3">
                  <Clock className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">24/7-Verfügbarkeit</h3>
                </div>
                <p className="text-secondary">
                  KI-Systeme kennen keine Pause und arbeiten rund um die Uhr.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Grenzen der KI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <XCircle className="h-8 w-8 text-red-500 mr-3" />
              Grenzen der KI
            </h2>
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Kein echtes Verständnis</h3>
                <p className="text-secondary">
                  KI verarbeitet Sprache, versteht sie aber nicht wie ein Mensch.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Abhängig von Daten</h3>
                <p className="text-secondary">
                  Schlechte oder einseitige Daten führen zu verzerrten Ergebnissen.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Fehlende Intuition</h3>
                <p className="text-secondary">
                  KI kennt keine Gefühle, kein Bauchgefühl, keine ethischen Werte – sie folgt Algorithmen.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Komplexität & Intransparenz</h3>
                <p className="text-secondary">
                  Viele KI-Systeme sind Black Boxes – ihre Entscheidungen sind nicht immer nachvollziehbar.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Häufige Mythen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Häufige Mythen
            </h2>
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  &ldquo;KI wird den Menschen ersetzen&rdquo;
                </h3>
                <p className="text-secondary">
                  <strong>Nein</strong>, aber sie wird viele Berufe verändern. Der Mensch bleibt zentral – mit neuen Aufgaben.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  &ldquo;KI denkt wie ein Mensch&rdquo;
                </h3>
                <p className="text-secondary">
                  <strong>Falsch.</strong> KI imitiert Denkmuster, aber ohne Bewusstsein oder eigenes Wollen.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  &ldquo;KI ist neutral&rdquo;
                </h3>
                <p className="text-secondary">
                  Nur wenn die Daten es sind. Oft übernimmt sie <strong>ungewollt menschliche Vorurteile.</strong>
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  &ldquo;KI kann alles&rdquo;
                </h3>
                <p className="text-secondary">
                  <strong>Noch lange nicht.</strong> KI ist ein Werkzeug – stark in bestimmten Bereichen, schwach in anderen.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-card rounded-lg p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Möchten Sie mehr über KI für Ihr Unternehmen erfahren?
            </h3>
            <p className="text-secondary mb-6">
              Lassen Sie uns gemeinsam herausfinden, wie KI Ihrem Unternehmen helfen kann – 
              realistisch, praktisch und ohne Hype.
            </p>
            <a 
              href="https://zeeg.me/cklose" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors"
            >
              Beratungsgespräch vereinbaren
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}