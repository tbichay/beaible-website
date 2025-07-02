'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { ArrowRight, ChevronDown, Target, Users, TrendingUp, Cpu, BarChart3, Layers, Rocket, Clock, Shield, Menu, X } from 'lucide-react'
import Image from 'next/image'

// Neural Network Component
function NeuralNetwork() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#0891b2"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
          />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}

// Animated particles component
function ParticleField() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.1
      }))
    }
    setParticles(generateParticles())
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [particle.opacity, 0.8, particle.opacity]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  )
}

// Hero Section Component
function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Ihr Unternehmen. Unsere KI. Ihre Zukunft.'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 h-full w-full">
        <NeuralNetwork />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Image
              src="/logo.png"
              alt="Beaible Logo"
              width={200}
              height={200}
              className="mx-auto filter brightness-110"
            />
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-cyan-400"
          >
            |
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4"
        >
          Consulting Future For You - KI-Beratung, digitale Transformation und Change Management für mittelständische Unternehmen
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(8, 145, 178, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Transformation starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-colors duration-300"
          >
            Kostenlose Analyse
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-400"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Analyse', href: '#analyse' },
    { name: 'Lösungen', href: '#lösungen' },
    { name: 'Team', href: '#team' },
    { name: 'Vorgehen', href: '#vorgehen' },
    { name: 'Kontakt', href: '#kontakt' }
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Beaible" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-lg md:text-xl font-bold text-white">beaible</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Problem Analysis Section
function ProblemAnalysis() {
  const problems = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Verpasste Chancen",
      description: "KI-Potenziale bleiben ungenutzt, während die Konkurrenz bereits automatisiert"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Ineffiziente Prozesse",
      description: "Manuelle Abläufe kosten Zeit und Geld, die in Innovation investiert werden könnten"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mitarbeiter-Resistenz",
      description: "Das Team fürchtet Veränderungen und blockiert digitale Transformation"
    }
  ]

  return (
    <section id="analyse" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kennen Sie diese <span className="text-cyan-400">Herausforderungen</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mittelständische Unternehmen stehen vor einzigartigen Herausforderungen bei der digitalen Transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Kostenlose Potenzial-Analyse starten
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Solutions Section
function SolutionsSection() {
  const solutions = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "KI-Strategieberatung",
      description: "Maßgeschneiderte KI-Roadmap für Ihr Unternehmen",
      features: ["Potenzial-Analyse", "Use-Case Identifikation", "ROI-Berechnung"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Prozessautomatisierung",
      description: "Intelligente Automatisierung Ihrer Geschäftsprozesse",
      features: ["Workflow-Optimierung", "KI-Integration", "Effizienzsteigerung"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Change Management",
      description: "Erfolgreiche Transformation durch Mitarbeiter-Engagement",
      features: ["Schulungskonzepte", "Akzeptanzförderung", "Kulturwandel"],
      color: "from-green-500 to-teal-600"
    }
  ]

  return (
    <section id="lösungen" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unsere <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">KI-Lösungen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformieren Sie Ihr Unternehmen mit maßgeschneiderten KI-Strategien und bewährten Change-Management-Methoden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {solution.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 bg-gradient-to-r ${solution.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                Mehr erfahren
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
function TeamSection() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "KI-Strategin",
      expertise: "Machine Learning & Business Strategy",
      avatar: "👩‍💼",
      skills: ["Deep Learning", "NLP", "Computer Vision"]
    },
    {
      name: "Marcus Weber",
      role: "Change Manager",
      expertise: "Organizational Development",
      avatar: "👨‍💻",
      skills: ["Agile Transformation", "Leadership", "Team Development"]
    },
    {
      name: "Lisa Rodriguez",
      role: "Process Expert",
      expertise: "Business Process Optimization",
      avatar: "👩‍🔬",
      skills: ["Automation", "Workflow Design", "Analytics"]
    }
  ]

  return (
    <section id="team" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unser <span className="text-cyan-400">Expert*innen-Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profitieren Sie von der Expertise unserer KI- und Change-Management-Spezialisten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-slate-700/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.expertise}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-600/50 text-cyan-300 text-xs rounded-full border border-cyan-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Termin buchen
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Process/Methodology Section
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Analyse & Assessment",
      description: "Umfassende Bewertung Ihrer aktuellen Situation und KI-Potenziale",
      icon: <Target className="w-8 h-8" />,
      duration: "2-4 Wochen"
    },
    {
      number: "02",
      title: "Strategieentwicklung",
      description: "Entwicklung einer maßgeschneiderten KI-Roadmap für Ihr Unternehmen",
      icon: <Layers className="w-8 h-8" />,
      duration: "3-6 Wochen"
    },
    {
      number: "03",
      title: "Implementierung",
      description: "Schrittweise Umsetzung mit begleitendem Change Management",
      icon: <Rocket className="w-8 h-8" />,
      duration: "3-12 Monate"
    },
    {
      number: "04",
      title: "Optimierung",
      description: "Kontinuierliche Verbesserung und Skalierung der KI-Lösungen",
      icon: <BarChart3 className="w-8 h-8" />,
      duration: "Fortlaufend"
    }
  ]

  return (
    <section id="vorgehen" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unser bewährtes <span className="text-cyan-400">Vorgehen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ein strukturierter Ansatz für Ihre erfolgreiche KI-Transformation
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-30" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-lg group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </div>
                
                {/* Content Card */}
                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 group-hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-300">{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section id="kontakt" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ParticleField />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bereit für die <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zukunft</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Starten Sie jetzt Ihre KI-Transformation mit einer kostenlosen Potenzial-Analyse
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(8, 145, 178, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-colors duration-300"
            >
              Demo anfordern
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-white font-semibold">100% Kostenlos</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-white font-semibold">Schneller Start</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-white font-semibold">Persönliche Betreuung</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main App Component
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <ProblemAnalysis />
      <SolutionsSection />
      <TeamSection />
      <ProcessSection />
      <CTASection />
    </main>
  )
}