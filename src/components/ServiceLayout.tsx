'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Users, Clock, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Navigation } from '@/components/Navigation'

interface ServiceLayoutProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  benefits: string[]
  process: string[]
  duration?: string
  targetGroup?: string
  deliverables?: string[]
  heroImage?: {
    src: string
    alt: string
  }
  children?: ReactNode
}

export function ServiceLayout({
  title,
  subtitle,
  description,
  features,
  benefits,
  process,
  duration,
  targetGroup,
  deliverables,
  heroImage,
  children
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <header className="bg-card border-b border-border pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/#beratung"
            className="inline-flex items-center text-accent hover:text-accent-hover mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Übersicht
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-xl text-accent font-medium mb-4">
                {subtitle}
              </p>
              <p className="text-lg text-secondary max-w-3xl">
                {description}
              </p>
            </motion.div>
            
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-3xl blur-3xl"></div>
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={600}
                    height={800}
                    className="relative rounded-3xl shadow-2xl w-full h-auto"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Was Sie erwartet
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Process Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Unser Vorgehen
              </h2>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-secondary pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Ihre Vorteile
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Target className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Custom Content */}
            {children}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Key Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-accent/10 rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Auf einen Blick
              </h3>
              <div className="space-y-4">
                {duration && (
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Dauer</p>
                      <p className="text-sm text-secondary">{duration}</p>
                    </div>
                  </div>
                )}
                
                {targetGroup && (
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Zielgruppe</p>
                      <p className="text-sm text-secondary">{targetGroup}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Deliverables */}
            {deliverables && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Das erhalten Sie
                </h3>
                <div className="space-y-2">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Interesse geweckt?
              </h3>
              <p className="text-secondary mb-4">
                Lassen Sie uns über Ihre KI-Zukunft sprechen.
              </p>
              <Link 
                href="/#contact"
                className="inline-block w-full text-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
              >
                Beratungstermin vereinbaren
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}