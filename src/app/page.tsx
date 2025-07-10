'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ArrowRight, CheckCircle, Calendar, MapPin, Users, Lightbulb, Target, Brain, MessageSquare, Linkedin, Instagram, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Toast } from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'
import { TurnstileWidget } from '@/components/ui/Turnstile'
import { Navigation } from '@/components/Navigation'
import { LocalBusinessSchema, PersonSchema, WebsiteSchema } from '@/components/seo/StructuredData'

// Dynamic import für bessere Performance
const LoaderSequence = dynamic(() => import('../components/LoaderSequence'), {
  ssr: false
})


// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-16">
      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Bist du schon <span className="text-accent">beaible</span> für die Zukunft?
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Ich begleite kleine und mittlere Unternehmen bei ihrer KI-Transformation – 
              mit persönlicher Beratung aus dem Allgäu und einem ganzheitlichen Ansatz, 
              der Technologie und Menschlichkeit verbindet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#beratung" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors group" aria-label="Zu den Beratungsleistungen navigieren">
                Jetzt KI-Ready werden
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-white transition-colors" aria-label="Kontaktformular für Erstgespräch öffnen">
                Erstgespräch buchen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/chris-klose.jpg"
                alt="Christian Klose - KI-Berater und Geschäftsführer von beaible Consulting"
                width={800}
                height={1000}
                className="relative rounded-3xl shadow-2xl w-full h-auto"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
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
      title: "KI-Medienkompetenz",
      description: "Schulungen für den sicheren und effektiven Umgang mit KI-Tools",
      href: "/services/ki-medienkompetenz"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Change Management",
      description: "Begleitung bei der Integration von KI in Ihre Unternehmenskultur",
      href: "/services/change-management"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategieberatung",
      description: "Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen",
      href: "/services/strategieberatung"
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
            Mein Portfolio im Überblick
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ganzheitliche KI-Beratung, die auf die Bedürfnisse von KMU zugeschnitten ist
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
                className="block bg-card rounded-2xl p-6 hover:shadow-lg transition-all border border-border hover:scale-105 group"
                aria-label={`${service.title} - ${service.description}`}
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform" role="img" aria-label={`${service.title} Icon`}>{service.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
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
      title: "KI-Landarzt-Konzept",
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

        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  )
}

// KI-Beratung auf dem Land Section
function KILandSection() {
  return (
    <section id="land" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/heustadel-1.jpg"
                alt="Heustadel Bärenweiler"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg object-cover h-full"
              />
              <div className="space-y-4">
                <Image
                  src="/buero-1.jpg"
                  alt="Büro unter dem Heustadel"
                  width={300}
                  height={190}
                  className="rounded-2xl shadow-lg object-cover"
                />
                <Image
                  src="/arbeitsplatz-1.jpg"
                  alt="Arbeitsplatz"
                  width={300}
                  height={190}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
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
          <Navigation />
          <HeroSection />
          <PortfolioOverview />
          <KIBeratungSection />
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