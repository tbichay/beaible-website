'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ArrowRight, CheckCircle, Calendar, MapPin, Users, Lightbulb, Target, Brain, MessageSquare, Linkedin, Instagram, Mail, Phone, ExternalLink, Shield, AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Toast } from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'
import { TurnstileWidget } from '@/components/ui/Turnstile'
import { LocalBusinessSchema, PersonSchema, WebsiteSchema } from '@/components/seo/StructuredData'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { GalleryImage } from '@/hooks/useImageGallery'

// Dynamic import für bessere Performance
const LoaderSequence = dynamic(() => import('../components/LoaderSequence'), {
  ssr: false
})


// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-background pt-16">
      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/chris-hero.jpg"
                alt="Christian Klose - KI-Berater und Geschäftsführer von beaible Consulting"
                width={1200}
                height={800}
                className="relative rounded-3xl shadow-2xl w-full h-auto"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Bist du schon <span className="text-accent">beaible</span> für die Zukunft?
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Ich begleite kleine und mittlere Unternehmen bei ihrer KI-Transformation – 
              mit persönlicher Beratung aus dem Allgäu und einem ganzheitlichen Ansatz, 
              der Technologie und Menschlichkeit verbindet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#ki-unternehmen" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors group" aria-label="Zu den Beratungsleistungen navigieren">
                Jetzt KI-Ready werden
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-white transition-colors" aria-label="Kontaktformular für Erstgespräch öffnen">
                Erstgespräch buchen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Welcome Section
function WelcomeSection() {
  return (
    <section id="ki-unternehmen" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            KI, die zu Ihrem Unternehmen passt
          </h2>
          <p className="text-xl text-accent font-medium mb-6">
            Persönliche Beratung aus dem Allgäu – praxisnah, verständlich und umsetzbar
          </p>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Keine Theorie. Keine Buzzwords. Sondern KI, die wirklich hilft.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg text-secondary">
              <p className="mb-6 text-lg">
                Sie sind Geschäftsführer eines mittelständischen Unternehmens, eher
                praxisorientiert, und noch etwas skeptisch gegenüber KI, aber offen für
                konkrete Vorteile? Dann sind Sie bei mir genau richtig!
              </p>
              <p className="mb-6">
                Ich unterstütze Unternehmen dabei, Digitalisierung und Künstliche Intelligenz nicht
                nur zu verstehen, sondern strategisch und nachhaltig einzusetzen – mit klarem
                Fokus auf den konkreten Nutzen für Ihr Geschäft.
              </p>
              <p className="mb-6 text-foreground font-medium">
                Ich bin Ihr strategischer Sparringspartner mit tiefem Verständnis für Prozesse,
                Technologien und vor allem Menschen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg text-secondary">
              <p className="mb-6">
                Ob digitale Strategien, KI-Integration, effizientere Abläufe oder Change-
                Management und -Kommunikation – ich analysiere präzise, formuliere klar und
                begleite Sie von der Idee bis zur erfolgreichen Umsetzung.
              </p>
              
              <div className="bg-accent/10 rounded-xl p-6 mb-6 border border-accent/20">
                <p className="text-foreground font-medium mb-2">
                  Aktuell vertiefe ich meine Expertise als zertifizierter AI Expert (Abschluss im
                  Oktober 2025) an der &ldquo;Digital Business University Berlin For Applied Sciences
                  (DBU)&rdquo;, um Sie auch bei technologisch anspruchsvollen Vorhaben kompetent zu
                  unterstützen.
                </p>
              </div>
              
              <p className="text-foreground font-medium">
                Ich spreche die Sprache von Geschäftsführung, IT und Mitarbeitenden. Ich denke
                unternehmerisch, handle lösungsorientiert und liefere Ergebnisse, die spürbar
                entlasten und echten Mehrwert schaffen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Stärken Section
function StaerkenSection() {
  const staerken = [
    {
      title: "Langjährige Branchenerfahrung",
      description: "Über 30 Jahre in der Medienbranche mit Fokus auf journalistische Exzellenz, digitale Transformation und nachhaltiges Change-Management."
    },
    {
      title: "Redaktionelle Fachkompetenz in Crossmedia", 
      description: "Langjähriger Chefredakteur in mehreren deutschen Medienhäusern – verantwortlich für alle Kanäle und Inhalte, inklusive Social Media."
    },
    {
      title: "Führungskompetenz auf höchster Ebene",
      description: "Erfahrung in leitenden Positionen, darunter Gesamtprokura bei FUNKE Medien Niedersachsen."
    },
    {
      title: "Technologische Weiterbildung",
      description: "Aktuelle Fortbildung zum zertifizierten AI Expert an der Digital Business University Berlin (DBU)."
    },
    {
      title: "Starkes Netzwerk",
      description: "Enge Zusammenarbeit mit erfahrenen Partnern wie Datenmassiv aus Ulm und Heimat Bärenweiler."
    },
    {
      title: "Ganzheitlicher Beratungsansatz",
      description: "Verbindung von strategischer Beratung, technologischem Know-how und menschlicher Kommunikation."
    }
  ]

  return (
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
            Meine Stärken auf einen Blick
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Beratung mit Substanz. Wandel mit Weitblick.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staerken.map((staerke, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{staerke.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{staerke.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Portfolio Overview
function PortfolioOverview() {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "KI-First-Audit",
      description: "Umfassende Analyse Ihrer aktuellen Prozesse und KI-Potenziale",
      href: "/services/ki-first-audit"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Was ist KI – und was kann sie wirklich?",
      description: "Realistische Einordnung statt Science-Fiction für Einsteiger:innen",
      href: "/services/was-ist-ki"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "KI & Sicherheit",
      description: "Schutz vor neuen Betrugsmaschen und Sicherheitsrisiken",
      href: "/services/ki-sicherheit"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "KI & Social Health",
      description: "Wie KI unser Miteinander und unsere Kommunikation verändert",
      href: "/services/ki-social-health"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "KI, Social Media & Deepfakes",
      description: "Medienkompetenz zwischen Faszination und Manipulation",
      href: "/services/ki-medienkompetenz-foerdern"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Der EU AI Act",
      description: "Was der neue KI-Rechtsrahmen für Ihr Unternehmen bedeutet",
      href: "https://www.datenmassiv.com/eu-ai-act"
    }
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" id="beratung">
            Meine Schulungen & Impulse
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Verständlich. Inspirierend. Wirksam. Praxisnahe Formate für Ihr Team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.href}
                className="block bg-card rounded-2xl p-6 hover:shadow-lg transition-all border border-border hover:scale-105 group h-full flex flex-col"
                aria-label={`${service.title} - ${service.description}`}
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform" role="img" aria-label={`${service.title} Icon`}>{service.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-secondary flex-grow">{service.description}</p>
                <div className="flex items-center text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Medienkompetenz Section
function MedienkompetenzSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 mr-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4">
              <AlertTriangle className="h-12 w-12 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            MEDIENKOMPETENZ und KI-KOMPETENZ FÜR ALLE
          </h2>
          <p className="text-xl text-secondary max-w-4xl mx-auto">
            Digitaler Kompass für die gesamte Gesellschaft
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg text-secondary">
              <p className="mb-6 text-xl">
                In einer Welt, in der die Grenzen zwischen echt und gefälscht verschwimmen, wird 
                Medienkompetenz zum entscheidenden Schutzschild für Unternehmen und Gesellschaft. 
                Wir haben es uns zur Aufgabe gemacht, genau diese kritische Kompetenz zu vermitteln.
              </p>
              <p className="mb-6 text-lg">
                Unsere Schulungen verbinden langjährige journalistische Erfahrung und tiefe 
                KI-Expertise mit praktischem Anwendungswissen. Die Teilnehmer lernen nicht nur, 
                Fake News und Betrugsversuche zu erkennen, sondern entwickeln ein grundlegendes 
                Verständnis dafür, wie KI-Systeme funktionieren und missbraucht werden können.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 mb-6 border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-indigo-600 mr-2" />
                  Aktuelle Herausforderungen
                </h3>
                <p className="text-secondary">
                  Im KI-Zeitalter verschwimmen Realität und Fiktion erst recht. Deep Fakes 
                  lassen zweifeln: War das wirklich? Wurde das tatsächlich gesagt? In dieser 
                  Welt, wo selbst unseren Augen nicht zu trauen ist, brauchen wir alle einen 
                  {`'KI- und Medien-Führerschein'.`}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/chris-medienkompetenz.jpg"
                alt="Christian Klose - KI-Medienkompetenz Experte"
                width={600}
                height={800}
                className="relative rounded-3xl shadow-2xl w-full h-auto"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Medienkompetenz stärken – Demokratie schützen
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam einen digitalen Kompass für Ihre Organisation entwickeln. 
              Schützen Sie Ihre Mitarbeiter und Kunden vor Manipulation und Betrug.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                Medienkompetenz-Schulung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#beratung" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600 transition-colors"
              >
                Alle Schulungen entdecken
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


// KI-Beratung Section
function KIBeratungSection() {
  const beratungsLeistungen = [
    {
      title: "KI-First-Audit Stufe 1",
      subtitle: "Der Einstieg in Ihre KI-Transformation",
      features: [
        "Analyse Ihrer aktuellen Geschäftsprozesse",
        "Identifikation von KI-Potenzialen",
        "Erste Quick-Win Empfehlungen",
        "Roadmap für die nächsten Schritte"
      ],
      href: "/services/ki-first-audit-stufe-1"
    },
    {
      title: "KI-First-Audit Stufe 2",
      subtitle: "Tiefgehende Analyse und Strategie",
      features: [
        "Detaillierte Prozessoptimierung",
        "Konkrete Tool-Empfehlungen",
        "ROI-Berechnungen",
        "Implementierungsplan"
      ],
      href: "/services/ki-first-audit-stufe-2"
    },
    {
      title: "KI-Medienkompetenz fördern",
      subtitle: "Befähigung Ihres Teams",
      features: [
        "Praktische Workshops zu KI-Tools",
        "Hands-on Training mit ChatGPT & Co",
        "Best Practices für den Arbeitsalltag",
        "Kontinuierliche Begleitung"
      ],
      href: "/services/ki-medienkompetenz-foerdern"
    },
    {
      title: `'KI-Landarzt'-Konzept`,
      subtitle: "Persönliche Beratung vor Ort",
      features: [
        "Regelmäßige Sprechstunden im Allgäu",
        "Individuelle Betreuung",
        "Nahbare und verständliche Beratung",
        "Langfristige Partnerschaft"
      ],
      href: "/services/ki-landarzt-konzept"
    }
  ]

  return (
    <section id="beratung" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meine KI-Beratung von A bis Z
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ganzheitliche Begleitung für kleine und mittlere Unternehmen auf dem Weg in die KI-Zukunft
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {beratungsLeistungen.map((leistung, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={leistung.href}
                className="block bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-border hover:scale-105 group"
              >
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{leistung.title}</h3>
                <p className="text-accent font-medium mb-4">{leistung.subtitle}</p>
                <ul className="space-y-3 mb-4">
                  {leistung.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-accent rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Change Management & Persönlichkeitsentwicklung
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            KI-Integration bedeutet Veränderung. Ich begleite Sie und Ihr Team dabei, 
            diese Transformation als Chance zu nutzen und eine zukunftsfähige Unternehmenskultur zu entwickeln.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-accent font-medium rounded-full hover:bg-accent-hover hover:text-white transition-colors">
            Mehr erfahren
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Beratungsprozess Section
function BeratungsprozessSection() {
  const schritte = [
    {
      nummer: "1",
      title: "Verstehen, wo Sie stehen",
      description: "Im unverbindlichen Erstgespräch kläre ich mit Ihnen Ihre Ausgangssituation, Ihre Ziele – und mögliche Stolpersteine."
    },
    {
      nummer: "2", 
      title: "Quick-Check & Potenzial-Analyse",
      description: "Mit meinem kompakten KI-Audit-Toolkit identifiziere ich schnell und praxisnah, wo Ihre größten Hebel liegen."
    },
    {
      nummer: "3",
      title: "Strategie & Roadmap entwickeln", 
      description: "Gemeinsam erarbeiten wir eine realistische, maßgeschneiderte Umsetzungsstrategie – technisch machbar, organisatorisch anschlussfähig."
    },
    {
      nummer: "4",
      title: "Umsetzung begleiten",
      description: "Ob Pilotprojekt, Tool-Auswahl oder kompletter Change-Prozess: Ich begleite Sie hands-on – pragmatisch und zielgerichtet."
    },
    {
      nummer: "5", 
      title: "Daten- und KI-Kultur verankern",
      description: "Ich unterstütze Sie dabei, datengetriebenes Denken langfristig zu etablieren – mit Workshops, klaren Guidelines und Formaten."
    },
    {
      nummer: "6",
      title: "Reflektieren & skalieren",
      description: "Am Ende ziehen wir gemeinsam Bilanz – und entwickeln Ansätze, wie Sie KI systematisch ausbauen können."
    },
    {
      nummer: "7",
      title: "Transformation dauerhaft begleiten",
      description: "Auf Wunsch bleibe ich als Sparringspartner an Ihrer Seite – mit gezieltem Coaching und kontinuierlicher Strategie-Weiterentwicklung."
    }
  ]

  return (
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
            Ihr Weg mit mir: Schritt für Schritt zur erfolgreichen KI-Transformation
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Strukturiert, transparent und immer mit Fokus auf das, was bei Ihnen wirkt
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block"></div>
          
          <div className="space-y-8">
            {schritte.map((schritt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative">
                    {schritt.nummer}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-foreground mb-3">{schritt.title}</h3>
                      <p className="text-secondary leading-relaxed">{schritt.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lust, den ersten Schritt zu gehen?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie Künstliche Intelligenz Ihr Unternehmen 
              weiterbringen kann – verantwortungsvoll, wirksam und menschenzentriert.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-accent font-medium rounded-full hover:bg-accent-hover hover:text-white transition-colors"
            >
              Erstgespräch vereinbaren
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Zusätzliche Angebote Section
function ZusatzangeboteSection() {
  return (
    <section id="angebote" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zusätzliche Angebote
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Spezialisierte Beratung für Medienhäuser und Social Media
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-8 border border-border"
          >
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Beratung für Medienhäuser
            </h3>
            <p className="text-secondary mb-6">
              Mit meiner journalistischen Expertise begleite ich Medienhäuser bei der 
              Entwicklung zukunftsfähiger Content-Strategien und der Integration von KI 
              in redaktionelle Prozesse.
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                KI-gestützte Content-Produktion
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Zielgruppenanalyse und Personalisierung
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Workflow-Optimierung
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-hover/10 to-accent-hover/20 rounded-2xl p-8 border border-border"
          >
            <Instagram className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Social-Media-Strategien
            </h3>
            <p className="text-secondary mb-6">
              Entwicklung und Umsetzung effektiver Social-Media-Strategien für KMU 
              und Organisationen – mit KI-Tools für mehr Effizienz und Reichweite.
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                Content-Planung mit KI
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                Community Management
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                Performance-Analyse
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl p-8 border border-border"
          >
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Medienkompetenz-Schulungen
            </h3>
            <p className="text-secondary mb-6">
              Digitale Kompetenz für alle Generationen – von der Erkennung von Fake News bis 
              zur sicheren Nutzung von KI-Tools. Praxisnahe Workshops für Unternehmen, 
              Bildungseinrichtungen und Privatpersonen.
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Fake News und Deep Fakes erkennen
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                KI-Tools sicher und effektiv nutzen
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Datenschutz und Privatsphäre schützen
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Kritisches Denken im digitalen Zeitalter
              </li>
            </ul>
            <div className="mt-4 text-sm text-secondary">
              <p>✅ Journalistische Expertise seit 30+ Jahren</p>
              <p>✅ Spezialisiert auf KI-Medienkompetenz</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// KI-Beratung auf dem Land Section
function KILandSection() {
  const galleryImages: GalleryImage[] = [
    {
      src: '/chris-land-landscape.jpg',
      alt: 'Christian Klose - KI-Berater in ländlicher Atmosphäre',
      title: 'KI-Beratung auf dem Land',
      description: 'Moderne KI-Beratung mit der Gemütlichkeit und Bodenständigkeit des Allgäus.',
      width: 1200,
      height: 800
    },
    {
      src: '/baerenweiler-oben.png',
      alt: 'Bärenweiler von oben - Zukunftsort im Allgäu',
      title: 'Bärenweiler von oben',
      description: 'Der idyllische Zukunftsort im Herzen des Allgäus, wo Tradition auf Innovation trifft.',
      width: 800,
      height: 500
    },
    {
      src: '/office-exterior.jpg',
      alt: 'Bürogebäude außen',
      title: 'Büro unter dem Heustadel',
      description: 'Moderne KI-Beratung in historischem Ambiente.',
      width: 400,
      height: 300
    },
    {
      src: '/workspace.jpg',
      alt: 'Arbeitsplatz und Büroausstattung',
      title: 'Moderner Arbeitsplatz',
      description: 'Hochmoderne Technik für innovative KI-Lösungen.',
      width: 400,
      height: 300
    },
    {
      src: '/office-interior-temp.jpg',
      alt: 'Büro innen (wird noch ersetzt)',
      title: 'Beratungsraum',
      description: 'Persönliche Gespräche in entspannter Atmosphäre.',
      width: 400,
      height: 300
    },
    {
      src: '/gallery-1035.jpg',
      alt: 'Weitere Impressionen aus Bärenweiler',
      title: 'Bärenweiler Ambiente',
      description: 'Einblicke in die einzigartige Atmosphäre des Zukunftsorts.',
      width: 400,
      height: 300
    },
    {
      src: '/gallery-1036.jpg',
      alt: 'Arbeitsumgebung und Details',
      title: 'Arbeitsdetails',
      description: 'Die perfekte Umgebung für kreative KI-Lösungen.',
      width: 400,
      height: 300
    },
    {
      src: '/gallery-1065.jpg',
      alt: 'Büroausstattung und Technik',
      title: 'Technische Ausstattung',
      description: 'Moderne Technologie für professionelle Beratung.',
      width: 400,
      height: 300
    },
    {
      src: '/gallery-9529.jpg',
      alt: 'Bärenweiler Umgebung',
      title: 'Ländliche Idylle',
      description: 'Die inspirierenden Landschaften rund um das Büro.',
      width: 400,
      height: 300
    },
    {
      src: '/gallery-9549.jpg',
      alt: 'Weitere Eindrücke vom Standort',
      title: 'Standort-Impressionen',
      description: 'Wo Innovation auf Tradition trifft - weitere Einblicke.',
      width: 400,
      height: 300
    }
  ]

  return (
    <section id="land" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Linke Spalte: KI-Beratung auf dem Land */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              KI-Beratung auf dem Land
            </h2>
            <div className="prose prose-lg text-secondary">
              <p className="mb-4">
                Mein Büro befindet sich unter dem historischen Heustadel in Bärenweiler – 
                einem Zukunftsort im Herzen des Allgäus. Hier verbinde ich die Ruhe und 
                Bodenständigkeit des ländlichen Raums mit modernster KI-Technologie.
              </p>
              <div className="bg-card rounded-xl p-6 mb-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                  <Calendar className="h-6 w-6 text-green-600 mr-2" />
                  KI-Sprechstunden vor Ort
                </h3>
                <p className="text-secondary mb-4">
                  Regelmäßige Beratungstermine in Bärenweiler – persönlich, nahbar und auf Augenhöhe.
                </p>
                <a href="#contact" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Analoge Events in Bärenweiler</p>
                  <p className="text-secondary">
                    Workshops, Netzwerktreffen und Vorträge – wo digitale Innovation auf 
                    persönliche Begegnung trifft.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://heimat-baerenweiler.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
              >
                Mehr über den Zukunftsort Bärenweiler
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Rechte Spalte: KI-Landarzt Karte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Der {'\u0027'}KI-Landarzt{'\u0027'}</h3>
                  <p className="text-green-600 font-medium">Erste Hilfe für Ihre Digitalisierung</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary">{'\u0027'}Erste KI-Hilfe{'\u0027'} für Einsteiger:innen</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary">Ehrliche Einschätzungen, ob und wo sich KI lohnt</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary">Kompetente Antworten zu Datenschutz, Tools, Umsetzung</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary">Vertrauensvolle Vernetzung mit Experten für komplexere Fälle</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-secondary mb-4">
                  Wie ein Landarzt biete ich werktags eine KI-Sprechstunde in meiner {'\u0027'}KI-Praxis{'\u0027'} 
                  in Bärenweiler an. Dabei höre ich zu, stelle unterstützende Fragen, kläre auf und helfe weiter.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors"
                >
                  KI-Sprechstunde buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Galerie */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Eindrücke aus Bärenweiler</h3>
            <p className="text-secondary max-w-2xl mx-auto">
              Entdecken Sie die Atmosphäre, in der moderne KI-Beratung auf ländliche Gemütlichkeit trifft.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ImageGallery images={galleryImages} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const partners = [
    { name: "Datenmassiv", link: "https://datenmassiv.com" },
    { name: "KI-Weitblick", link: "https://ki-weitblick.com" },
    { name: "KI-Medienkompetenz", link: "https://ki-medienkompetenz.com" }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Über mich
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Mein Werdegang</h3>
            <div className="prose prose-lg text-secondary">
              <p className="mb-4">
                Als erfahrener Journalist und Medienexperte habe ich den digitalen Wandel 
                der Branche hautnah miterlebt. Diese Erfahrung nutze ich heute, um 
                Unternehmen bei ihrer KI-Transformation zu begleiten.
              </p>
              <p className="mb-4">
                Meine Expertise umfasst jahrelange Erfahrung in der Medienbranche, 
                fundiertes Wissen über KI-Technologien und ihre praktische Anwendung 
                sowie ein tiefes Verständnis für Change-Prozesse in Unternehmen.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Warum ich der Richtige bin
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Praxisnähe</h4>
                <p className="text-secondary">
                  Keine theoretischen Konzepte, sondern erprobte Lösungen aus der Praxis
                </p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Verständlichkeit</h4>
                <p className="text-secondary">
                  Komplexe KI-Themen einfach und nachvollziehbar erklärt
                </p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Persönlichkeit</h4>
                <p className="text-secondary">
                  Individuelle Betreuung statt Standardlösungen
                </p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Nachhaltigkeit</h4>
                <p className="text-secondary">
                  Langfristige Begleitung für dauerhaften Erfolg
                </p>
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
                Zertifikate & Auszeichnungen
              </h3>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Zertifizierter KI-Berater</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Experte für digitale Transformation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Change Management Professional</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Partner & Netzwerk
              </h3>
              <ul className="space-y-3">
                {partners.map((partner, index) => (
                  <li key={index}>
                    <a 
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
          </motion.div>
        </div>

        {/* Mehr über mich Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            href="/ueber-mich"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors group"
          >
            Mehr über mich erfahren
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const { toast, showToast, hideToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      })

      const data = await response.json()

      if (response.ok) {
        showToast(data.message || 'Nachricht erfolgreich gesendet!', 'success')
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          honeypot: ''
        })
        setTurnstileToken('')
      } else {
        showToast(data.error || 'Ein Fehler ist aufgetreten.', 'error')
      }
    } catch {
      showToast('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toast {...toast} onClose={hideToast} />
      <section id="contact" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lass uns über deine KI-Zukunft sprechen
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Vereinbare jetzt ein unverbindliches Erstgespräch
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Kontaktinformationen
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a href="mailto:c.klose@beaible.de" className="text-accent hover:text-accent-hover">
                      c.klose@beaible.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a href="tel:+4915122311254" className="text-accent hover:text-accent-hover">
                      +49 151 22311254
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-secondary">
                      beaible Consulting<br />
                      Christian Klose<br />
                      Bärenweiler 1<br />
                      88353 Kißlegg
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  KI-Sprechstunde buchen
                </h4>
                <p className="text-secondary mb-4">
                  Vereinbare einen persönlichen Termin in Bärenweiler oder online.
                </p>
                <a 
                  href="https://zeeg.me/cklose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors"
                >
                  Termin vereinbaren
                  <Calendar className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Schreib mir eine Nachricht
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary mb-1">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                    required
                  />
                </div>
                
                {/* Turnstile Captcha */}
                <div className="space-y-2">
                  <label className="text-sm text-secondary">
                    Sicherheitsverifizierung *
                  </label>
                  <TurnstileWidget
                    onVerify={setTurnstileToken}
                    onError={() => {
                      setTurnstileToken('')
                      showToast('Captcha-Fehler. Bitte versuchen Sie es erneut.', 'error')
                    }}
                    onExpire={() => {
                      setTurnstileToken('')
                      showToast('Captcha abgelaufen. Bitte erneuern Sie die Verifizierung.', 'error')
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title={!turnstileToken ? 'Bitte vervollständigen Sie die Sicherheitsverifizierung' : ''}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo width={160} height={50} className="h-10" />
            </div>
            <p className="text-secondary">
              KI-Beratung mit Herz und Verstand aus dem Allgäu
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <address className="text-secondary not-italic">
              Christian Klose<br />
              Bärenweiler 1<br />
              88353 Kißlegg<br />
              <a href="mailto:c.klose@beaible.de" className="hover:text-accent">
                c.klose@beaible.de
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/christian-klose-616154242/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/beaible_consulting/?igsh=NzR0M3pnMmV2YnBu#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm">
            © 2024 beaible Consulting. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="text-secondary hover:text-accent text-sm">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-secondary hover:text-accent text-sm">
              Datenschutz
            </Link>
            <Link href="/cookie-einstellungen" className="text-secondary hover:text-accent text-sm">
              Cookie-Einstellungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function Home() {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    // Nur beim ersten Besuch oder wenn explizit gewünscht
    const hasSeenLoader = sessionStorage.getItem('beaible-loader-seen')
    const forceLoader = new URLSearchParams(window.location.search).get('intro')
    
    if (!hasSeenLoader || forceLoader === 'true') {
      setShowLoader(true)
      sessionStorage.setItem('beaible-loader-seen', 'true')
    }
  }, [])

  const handleLoaderComplete = () => {
    setShowLoader(false)
  }

  return (
    <>
      {/* SEO: Structured Data */}
      <LocalBusinessSchema />
      <PersonSchema />
      <WebsiteSchema />
      
      <AnimatePresence>
        {showLoader && (
          <LoaderSequence onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {!showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <WelcomeSection />
          <StaerkenSection />
          <PortfolioOverview />
          <MedienkompetenzSection />
          <KIBeratungSection />
          <BeratungsprozessSection />
          <ZusatzangeboteSection />
          <KILandSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </>
  )
}