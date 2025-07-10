'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Settings, X, Check, Shield } from 'lucide-react'
import Link from 'next/link'
import { useConsent } from '@/hooks/useConsent'

export function CookieBanner() {
  const { 
    showBanner, 
    showSettings, 
    consent,
    acceptAll, 
    rejectAll, 
    updateConsent,
    toggleSettings,
    hideBanner
  } = useConsent()

  const [tempConsent, setTempConsent] = useState(consent)

  if (!showBanner) return null

  const handleSaveSettings = () => {
    updateConsent(tempConsent)
  }

  const ConsentSettings = () => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="border-t border-border mt-4 pt-4"
    >
      <h3 className="font-semibold text-foreground mb-3 flex items-center">
        <Settings className="h-4 w-4 mr-2" />
        Cookie-Einstellungen
      </h3>
      
      <div className="space-y-3">
        {/* Necessary Cookies */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-green-600 mr-2" />
              <h4 className="font-medium text-foreground">Notwendige Cookies</h4>
            </div>
            <p className="text-sm text-secondary mt-1">
              Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
            </p>
          </div>
          <div className="ml-4">
            <div className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Functional Cookies */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-foreground">Funktionale Cookies</h4>
            <p className="text-sm text-secondary mt-1">
              Ermöglichen erweiterte Funktionen wie Theme-Speicherung und personalisierte Inhalte.
            </p>
          </div>
          <div className="ml-4">
            <button
              onClick={() => setTempConsent(prev => ({ ...prev, functional: !prev.functional }))}
              className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                tempConsent.functional 
                  ? 'bg-accent justify-end' 
                  : 'bg-gray-300 justify-start'
              }`}
            >
              <div className="w-4 h-4 bg-white rounded-full mx-1" />
            </button>
          </div>
        </div>

        {/* Analytics Cookies */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-foreground">Analyse-Cookies</h4>
            <p className="text-sm text-secondary mt-1">
              Helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie kontinuierlich zu verbessern.
            </p>
          </div>
          <div className="ml-4">
            <button
              onClick={() => setTempConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
              className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                tempConsent.analytics 
                  ? 'bg-accent justify-end' 
                  : 'bg-gray-300 justify-start'
              }`}
            >
              <div className="w-4 h-4 bg-white rounded-full mx-1" />
            </button>
          </div>
        </div>

        {/* Marketing Cookies */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-foreground">Marketing-Cookies</h4>
            <p className="text-sm text-secondary mt-1">
              Werden für Werbung und Remarketing verwendet. Derzeit nicht aktiv genutzt.
            </p>
          </div>
          <div className="ml-4">
            <button
              onClick={() => setTempConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
              className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                tempConsent.marketing 
                  ? 'bg-accent justify-end' 
                  : 'bg-gray-300 justify-start'
              }`}
            >
              <div className="w-4 h-4 bg-white rounded-full mx-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleSaveSettings}
          className="flex-1 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors font-medium"
        >
          Einstellungen speichern
        </button>
        <button
          onClick={toggleSettings}
          className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Abbrechen
        </button>
      </div>
    </motion.div>
  )

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl"
      >
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="font-semibold text-foreground mb-2">
                Wir respektieren Ihre Privatsphäre
              </h2>
              <p className="text-secondary text-sm mb-4">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Notwendige Cookies sind für die Grundfunktionen erforderlich, während andere Cookies 
                uns helfen, unsere Website zu verbessern. Sie können Ihre Einstellungen jederzeit anpassen.
              </p>
              
              <div className="text-xs text-secondary mb-4">
                Mehr Informationen finden Sie in unserer{' '}
                <Link href="/datenschutz" className="text-accent hover:text-accent-hover underline">
                  Datenschutzerklärung
                </Link>
                .
              </div>

              <AnimatePresence>
                {showSettings && <ConsentSettings />}
              </AnimatePresence>

              {!showSettings && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors font-medium flex items-center justify-center"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={rejectAll}
                    className="border border-border px-6 py-2 rounded-lg hover:bg-muted transition-colors font-medium"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={toggleSettings}
                    className="border border-border px-6 py-2 rounded-lg hover:bg-muted transition-colors font-medium flex items-center justify-center"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Einstellungen
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={hideBanner}
              className="p-1 text-secondary hover:text-foreground transition-colors"
              aria-label="Cookie-Banner schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}