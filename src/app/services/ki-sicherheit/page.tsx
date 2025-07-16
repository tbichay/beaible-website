'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Shield, AlertTriangle, Eye, Phone, MessageSquare, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function KISicherheitPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Breadcrumb Navigation */}
      <nav className="bg-card border-b border-border py-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-secondary hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-secondary">/</span>
            </li>
            <li>
              <Link href="/#beratung" className="text-secondary hover:text-accent transition-colors">
                Schulungen
              </Link>
            </li>
            <li>
              <span className="text-secondary">/</span>
            </li>
            <li>
              <span className="text-foreground font-medium">KI & Sicherheit</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-4 mr-4">
                <Shield className="h-12 w-12 text-red-600" />
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-4">
                <AlertTriangle className="h-12 w-12 text-orange-600" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              KI & Sicherheit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Schutz vor neuen Betrugsmaschen und Sicherheitsrisiken
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Sicherheit für alle
                </h2>
                <p className="text-xl text-secondary mb-6">
                  In einer Zeit, in der Fake News, Deep Fakes und KI-generierte Inhalte unsere 
                  digitale Umgebung dominieren, stehen alle Unternehmen vor einer beispiellosen 
                  Herausforderung: Wie schützen wir unsere Kunden vor immer ausgefeilteren 
                  Betrugsmaschen?
                </p>
                
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 mb-8 border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    Warum JETZT handeln?
                  </h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Generative KI vervielfacht Geschwindigkeit &amp; Glaubwürdigkeit von Fake News, Deep Fakes und Social‑Engineering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Jeder wird zum primären Ziel – Voice‑Cloning ersetzt den klassischen Enkeltrick</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Aufklärung statt Firewalls: Nur wer Funktionsweise und Grenzen von KI versteht, kann Angriffe früh stoppen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Reputations‑ und Umsatzschutz: Mehr Wissen der Kunden heißt weniger Schadensfälle und damit stärkere Kundenbindung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                  Die Bedrohungslage ist real
                </h3>
                <p className="text-secondary mb-6">
                  Die Bedrohungslage wächst täglich:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">&ldquo;Voice-Cloning&rdquo;</h4>
                      <p className="text-sm text-secondary">Täuschend echte KI-Anrufe</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Gefälschte Anwendungen</h4>
                      <p className="text-sm text-secondary">Perfekt gefälschte Apps und Webseiten</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Eye className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Deep-Fake-Videos</h4>
                      <p className="text-sm text-secondary">Manipulierte Videoaufnahmen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Maßgeschneiderte Phishing</h4>
                      <p className="text-sm text-secondary">Nachrichten, die persönliche Daten erschleichen</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schützen Sie Ihr Unternehmen und Ihre Kunden
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Lassen Sie uns gemeinsam eine Sicherheitsstrategie entwickeln, die vor den 
                neuesten KI-basierten Bedrohungen schützt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-medium rounded-full hover:bg-red-50 transition-colors"
                >
                  Sicherheits-Schulung anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/#beratung" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-red-600 transition-colors"
                >
                  Alle Schulungen entdecken
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#beratung" 
            className="inline-flex items-center text-accent hover:text-accent-hover transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu den Schulungen
          </Link>
        </div>
      </section>
    </div>
  )
}