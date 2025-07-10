'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import Image from 'next/image'

// 3D Background for Loader
function LoaderBackground() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 100, 200]} scale={3}>
          <MeshDistortMaterial
            color="#0891b2"
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}

// Animated particles for dramatic effect
function DramaticParticles() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 3
      }))
    }
    setParticles(generateParticles())
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Countdown Component
function CountdownNumber({ number, isActive }: { number: number, isActive: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={number}
          initial={{ 
            scale: 0, 
            rotate: -180,
            opacity: 0,
            y: 100
          }}
          animate={{ 
            scale: [0, 1.3, 1],
            rotate: [180, 0, 0],
            opacity: [0, 1, 1],
            y: [100, -20, 0]
          }}
          exit={{ 
            scale: 0,
            rotate: 180,
            opacity: 0,
            y: -100
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.6, 1]
          }}
          className="relative"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px rgba(8, 145, 178, 0.5)",
                "0 0 80px rgba(8, 145, 178, 0.8)",
                "0 0 20px rgba(8, 145, 178, 0.5)"
              ]
            }}
            transition={{
              duration: 0.8,
              repeat: 0
            }}
          />
          
          {/* Number */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
            <span className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
              {number}
            </span>
          </div>
          
          {/* Ring Animation */}
          <motion.div
            className="absolute inset-0 border-4 border-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 2],
              opacity: [1, 0.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Question Component
function BeaibleQuestion({ onComplete }: { onComplete: () => void }) {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Bist du schon beaible für die Zukunft?'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        // Cursor blinken für 2 Sekunden, dann zur Hauptseite
        setTimeout(() => {
          setShowCursor(false)
          setTimeout(onComplete, 500)
        }, 2000)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [fullText, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center relative z-10"
    >
      {/* Logo with dramatic entrance */}
      <motion.div
        initial={{ scale: 0, rotate: -360 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="mb-12"
      >
        <div className="relative inline-block">
          <Image
            src="/logo.png"
            alt="Beaible Logo"
            width={400}
            height={120}
            className="mx-auto filter brightness-110 drop-shadow-2xl"
          />
          
          {/* Pulsing glow around logo */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-transparent to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Question Text */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight px-4"
        style={{
          textShadow: "0 0 30px rgba(8, 145, 178, 0.5)"
        }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
          {displayText}
        </span>
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-cyan-400 ml-1"
          >
            |
          </motion.span>
        )}
      </motion.h1>

      {/* Subtitle that appears after question */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: displayText === fullText ? 1 : 0,
          y: displayText === fullText ? 0 : 20
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto px-4"
      >
        FUTURE STARTS WITH YOU
      </motion.p>
    </motion.div>
  )
}

// Main Loader Sequence Component
interface LoaderSequenceProps {
  onComplete: () => void
}

export default function LoaderSequence({ onComplete }: LoaderSequenceProps) {
  const [currentStep, setCurrentStep] = useState<'countdown' | 'question' | 'complete'>('countdown')
  const [countdownNumber, setCountdownNumber] = useState(3)

  useEffect(() => {
    if (currentStep === 'countdown') {
      const timer = setTimeout(() => {
        if (countdownNumber > 1) {
          setCountdownNumber(countdownNumber - 1)
        } else {
          // Nach "1" zur Frage wechseln
          setTimeout(() => {
            setCurrentStep('question')
          }, 800)
        }
      }, 1200) // Jede Zahl für 1.2 Sekunden anzeigen

      return () => clearTimeout(timer)
    }
  }, [countdownNumber, currentStep])

  const handleQuestionComplete = () => {
    setCurrentStep('complete')
    // Dramatischer Exit bevor die Hauptseite lädt
    setTimeout(onComplete, 1000)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-black overflow-hidden"
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <LoaderBackground />
      </div>

      {/* Dramatic Particles */}
      <DramaticParticles />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {currentStep === 'countdown' && (
          <div className="text-center">
            <CountdownNumber 
              number={countdownNumber} 
              isActive={true}
            />
            
            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-cyan-300 text-xl md:text-2xl font-light mt-8 tracking-wider"
            >
              {/* Initialisiere KI-Transformation... */}
            </motion.p>
          </div>
        )}

        {currentStep === 'question' && (
          <BeaibleQuestion onComplete={handleQuestionComplete} />
        )}
      </div>

      {/* Progress indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentStep === 'countdown' ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-2">
          {[1, 2, 3].map((step) => (
            <motion.div
              key={step}
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{
                opacity: step <= (4 - countdownNumber) ? 1 : 0.3,
                scale: step <= (4 - countdownNumber) ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}