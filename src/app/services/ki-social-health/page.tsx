'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Users, Heart, MessageSquare, Shield, Brain, CheckCircle, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function KISocialHealthPage() {
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
              <span className="text-foreground font-medium">KI & Social Health</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 mr-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              KI & Social Health
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Social Health beschreibt die Qualität unserer sozialen Beziehungen und
              Interaktionen als einen wesentlichen Aspekt der ganzheitlichen Gesundheit.
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
                  Was ist Social Health?
                </h2>
                <p className="text-xl text-secondary mb-6">
                  Social Health beschreibt die Qualität unserer sozialen Beziehungen und 
                  Interaktionen als einen wesentlichen Aspekt der ganzheitlichen Gesundheit. 
                  Es geht dabei nicht nur um physische oder psychische Gesundheit, sondern 
                  um die Fähigkeit, bedeutungsvolle und unterstützende soziale Verbindungen 
                  zu entwickeln und aufrechtzuerhalten.
                </p>
                
                <div className="bg-card rounded-xl p-6 mb-8 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Heart className="h-6 w-6 text-blue-600 mr-2" />
                    Zentrale Aspekte der Social Health
                  </h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Beziehungskompetenz:</span> Die Fähigkeit, gesunde, respektvolle und
                        wechselseitig bereichernde Beziehungen zu anderen Menschen zu gestalten.
                        Dies beinhaltet Kommunikationsfähigkeiten, Empathie und emotionale
                        Intelligenz.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Soziale Unterstützung:</span> Die Möglichkeit, sowohl Unterstützung zu geben
                        als auch zu empfangen. Dies kann emotionale, praktische oder
                        informationelle Unterstützung in verschiedenen Lebenssituationen umfassen.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Soziale Integration:</span> Die Einbindung in soziale Netzwerke, Gemeinschaften
                        und Gruppen, die ein Gefühl der Zugehörigkeit und Sinnhaftigkeit vermitteln.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Grenzsetzung:</span> Die Kompetenz, gesunde Grenzen in sozialen Beziehungen
                        zu definieren und zu kommunizieren, um die eigene emotionale und
                        psychische Gesundheit zu schützen.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Konfliktfähigkeit:</span> Die Fähigkeit, Konflikte konstruktiv und respektvoll zu
                        lösen, ohne zwischenmenschliche Beziehungen zu gefährden.
                      </div>
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
                  <Brain className="h-8 w-8 text-purple-600 mr-3" />
                  Moderne Herausforderungen
                </h3>
                <p className="text-secondary mb-6">
                  Moderne Herausforderungen für Social Health sind beispielsweise:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Smartphone className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Digitalisierung und virtuelle Kommunikation</h4>
                      <p className="text-sm text-secondary">Veränderte zwischenmenschliche Interaktionen durch digitale Medien</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Vereinsamungstendenzen</h4>
                      <p className="text-sm text-secondary">Zunehmende Isolation in urbanen Gesellschaften</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Oberflächliche soziale Interaktionen</h4>
                      <p className="text-sm text-secondary">Durch Social Media entstehen oft oberflächliche Verbindungen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Abnehmende persönliche Bindungsintensität</h4>
                      <p className="text-sm text-secondary">Weniger tiefe und bedeutungsvolle persönliche Verbindungen</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Auswirkungen guter Social Health
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Eine gute Social Health kann positive Auswirkungen auf die mentale
              Gesundheit, Stressresilienz und sogar die körperliche Gesundheit haben.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Mentale Gesundheit</h3>
              <p className="text-secondary">
                Starke soziale Netzwerke fördern psychisches Wohlbefinden und emotionale Stabilität
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Stressresilienz</h3>
              <p className="text-secondary">
                Soziale Unterstützung hilft dabei, Stress zu bewältigen und Herausforderungen zu meistern
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <Heart className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Körperliche Gesundheit</h3>
              <p className="text-secondary">
                Studien zeigen, dass Menschen mit starken sozialen Netzwerken häufig eine
                höhere Lebenserwartung und bessere Bewältigungsstrategien bei
                Herausforderungen aufweisen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-card rounded-2xl p-12 border border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Stärken Sie die Social Health in Ihrem Unternehmen
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-secondary">
                Erfahren Sie, wie KI die zwischenmenschlichen Beziehungen beeinflusst und wie Sie 
                eine gesunde digitale Kommunikationskultur fördern können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-colors"
                >
                  Social Health Schulung anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/#beratung" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground font-medium rounded-full hover:bg-muted transition-colors"
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