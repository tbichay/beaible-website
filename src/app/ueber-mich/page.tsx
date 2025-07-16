'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Users, Lightbulb, Target, Brain, ExternalLink, Linkedin, Instagram, Award, BookOpen, Briefcase, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PersonSchema } from '@/components/seo/StructuredData'

export default function UeberMichPage() {
  return (
    <>
      {/* SEO: Structured Data */}
      <PersonSchema />
      
      <div className="min-h-screen bg-background">
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
                <span className="text-foreground font-medium">Über mich</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Das bin ich – Christian Klose
                </h1>
                <p className="text-xl text-accent font-medium mb-4">
                  Beratung mit Substanz. Wandel mit Weitblick.
                </p>
                <p className="text-lg text-secondary mb-8">
                  53 Jahre alt, gebürtig aus Ulm an der Donau – seit über 30 Jahren leidenschaftlich 
                  in der Medienbranche tätig. Heute begleite ich Unternehmen als Berater für digitale 
                  Transformation und Künstliche Intelligenz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-card rounded-full px-4 py-2 border border-border">
                    <Award className="h-5 w-5 text-accent mr-2" />
                    <span className="text-sm font-medium">30+ Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center bg-card rounded-full px-4 py-2 border border-border">
                    <BookOpen className="h-5 w-5 text-accent mr-2" />
                    <span className="text-sm font-medium">AI Expert (DBU)</span>
                  </div>
                  <div className="flex items-center bg-card rounded-full px-4 py-2 border border-border">
                    <Home className="h-5 w-5 text-accent mr-2" />
                    <span className="text-sm font-medium">Bärenweiler, Allgäu</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-3xl blur-3xl"></div>
                  <Image
                    src="/chris-about.jpg"
                    alt="Christian Klose - KI-Berater und Geschäftsführer von beaible Consulting"
                    width={600}
                    height={750}
                    className="relative rounded-3xl shadow-2xl w-full h-auto"
                    priority
                    quality={95}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meine Mission
              </h2>
            </motion.div>
            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Ich baue mit beaible ein Beratungsunternehmen auf, das kleine und mittlere 
                Unternehmen (KMU) branchenübergreifend bei ihrer digitalen Transformation 
                unterstützt – mit einem besonderen Fokus auf KI-Integration, Prozessoptimierung, 
                Change-Management und Mitarbeiter:innen-Entwicklung.
              </p>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                Ich berate nicht nur – ich arbeite partnerschaftlich mit meinen Kunden zusammen, 
                um gemeinsam tragfähige Strategien zu entwickeln und umzusetzen.
              </p>
            </div>
          </div>
        </section>

        {/* Mein Werdegang */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mein Werdegang
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Über 30 Jahre Erfahrung an der Schnittstelle von Redaktion, Digitalisierung und Führung
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <Briefcase className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Berufliche Laufbahn</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2">Ausbildung & Einstieg</h4>
                      <p className="text-accent font-medium mb-2">Augsburger Allgemeine</p>
                      <p className="text-secondary">
                        Nach dem Abitur Ausbildung zum Redakteur bei der Augsburger Allgemeinen. 
                        Hier lernte ich das journalistische Handwerk von Grund auf.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2">Chefredakteur & Führung</h4>
                      <p className="text-accent font-medium mb-2">Mehrere deutsche Medienhäuser</p>
                      <p className="text-secondary">
                        Chefredakteur bzw. in den Chefredaktionen der Nordsee-Zeitung, 
                        Heilbronner Stimme, Braunschweiger Zeitung, Pforzheimer Zeitung. 
                        Führungsspanne von bis zu 130 Mitarbeitenden.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2">Chief Digital Officer</h4>
                      <p className="text-accent font-medium mb-2">FUNKE Medien Niedersachsen</p>
                      <p className="text-secondary">
                        Gesamtprokura und strategische Verantwortung in der Geschäftsleitung. 
                        Entwicklung digitaler Produkte, Aufbau datengetriebener Content-Prozesse.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <Award className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Besondere Kompetenzen</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-2">Auszeichnungen</h4>
                      <ul className="text-sm text-secondary space-y-1">
                        <li>• 2023: Shortlist der besten Chefredakteure (kress pro)</li>
                        <li>• 2017: BDZV-Nova-Award für Projekt &ldquo;Nordkind&rdquo;</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Target className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Strategieentwicklung</h4>
                          <p className="text-sm text-secondary">Umsetzung digitaler Redaktions- und Geschäftsprozesse</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Führung & Coaching</h4>
                          <p className="text-sm text-secondary">Teams in Veränderungsprozessen begleiten</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Lightbulb className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Innovation</h4>
                          <p className="text-sm text-secondary">Innovative Inhalte & Social-Media-Strategien</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aktuelle Weiterbildung */}
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
                Aktuelle Weiterbildung
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent/10 to-accent-hover/10 rounded-2xl p-8 border border-accent/20"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-accent/20 rounded-full p-4">
                    <BookOpen className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Zertifizierter AI Expert
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    Digital Business University Berlin For Applied Sciences (DBU)
                  </p>
                  <p className="text-lg text-secondary mb-6">
                    Aktuell vertiefe ich meine Expertise als zertifizierter AI Expert (Abschluss im
                    Oktober 2025) an der &ldquo;Digital Business University Berlin For Applied Sciences
                    (DBU)&rdquo;, um Sie auch bei technologisch anspruchsvollen Vorhaben kompetent zu
                    unterstützen.
                  </p>
                  <div className="flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-accent mr-2" />
                    <span className="text-foreground font-medium">Abschluss: Oktober 2025</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meine Expertise */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meine Expertise
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Warum ich der richtige Partner für Ihre digitale Transformation bin
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: "Praxisnähe",
                  description: "Keine theoretischen Konzepte, sondern erprobte Lösungen aus der Praxis"
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Verständlichkeit",
                  description: "Komplexe KI-Themen einfach und nachvollziehbar erklärt"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Persönlichkeit",
                  description: "Individuelle Betreuung statt Standardlösungen"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Nachhaltigkeit",
                  description: "Langfristige Begleitung für dauerhaften Erfolg"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
                <p className="text-xl text-foreground font-medium">
                  Ich spreche die Sprache von Geschäftsführung, IT und Mitarbeitenden. Ich denke
                  unternehmerisch, handle lösungsorientiert und liefere Ergebnisse, die spürbar
                  entlasten und echten Mehrwert schaffen.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Standort & Persönliches */}
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
                Persönlich & Nahbar
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                KI-Beratung mit Herz und Verstand aus dem Allgäu
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Bärenweiler im Allgäu</h3>
                  </div>
                  <div className="prose prose-lg text-secondary">
                    <p className="mb-6">
                      Mein Büro befindet sich unter dem historischen Heustadel in Bärenweiler – 
                      einem Zukunftsort im Herzen des Allgäus. Hier verbinde ich die Ruhe und 
                      Bodenständigkeit des ländlichen Raums mit modernster KI-Technologie.
                    </p>
                    <div className="bg-accent/10 rounded-xl p-6 mb-6 border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-3">KI-Sprechstunden vor Ort</h4>
                      <p className="mb-4">
                        Regelmäßige Beratungstermine in Bärenweiler – persönlich, nahbar und auf Augenhöhe.
                      </p>
                      <Link 
                        href="/#contact" 
                        className="inline-flex items-center text-accent font-medium hover:text-accent-hover"
                      >
                        Termin vereinbaren
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Home className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Analoge Events in Bärenweiler</p>
                        <p className="text-secondary">
                          Workshops, Netzwerktreffen und Vorträge – wo digitale Innovation auf 
                          persönliche Begegnung trifft.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Partner & Netzwerk
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Datenmassiv", link: "https://datenmassiv.com" },
                      { name: "KI-Weitblick", link: "https://ki-weitblick.com" },
                      { name: "KI-Medienkompetenz", link: "https://ki-medienkompetenz.com" }
                    ].map((partner, index) => (
                      <li key={index}>
                        <a 
                          href={partner.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-accent hover:text-accent-hover font-medium"
                        >
                          {partner.name}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Social Media
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/christian-klose-616154242/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://www.instagram.com/beaible_consulting/?igsh=NzR0M3pnMmV2YnBu#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Mehr über Bärenweiler
                  </h3>
                  <a 
                    href="https://heimat-baerenweiler.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent font-medium hover:text-accent-hover"
                  >
                    Zukunftsort entdecken
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
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
              <div className="bg-accent rounded-2xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Bereit für den nächsten Schritt? Vereinbaren Sie jetzt ein unverbindliches Erstgespräch 
                  und erfahren Sie, wie KI Ihr Unternehmen voranbringen kann.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-medium rounded-full hover:bg-accent-hover hover:text-white transition-colors"
                  >
                    Erstgespräch vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="/#beratung" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-accent transition-colors"
                  >
                    Services entdecken
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}