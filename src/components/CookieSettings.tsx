'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Save, RotateCcw, Info, Cookie } from 'lucide-react'
import { useConsent, ConsentCategories } from '@/hooks/useConsent'

export function CookieSettings() {
  const { consent, updateConsent, hasConsented } = useConsent()
  const [tempConsent, setTempConsent] = useState<ConsentCategories>(consent)
  const [hasChanges, setHasChanges] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  useEffect(() => {
    setTempConsent(consent)
  }, [consent])

  useEffect(() => {
    const changed = Object.keys(consent).some(
      key => consent[key as keyof ConsentCategories] !== tempConsent[key as keyof ConsentCategories]
    )
    setHasChanges(changed)
  }, [consent, tempConsent])

  const handleToggle = (category: keyof ConsentCategories) => {
    if (category === 'necessary') return // Can't toggle necessary cookies
    
    setTempConsent(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const handleSave = () => {
    updateConsent(tempConsent)
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleReset = () => {
    setTempConsent(consent)
  }

  const cookieCategories = [
    {
      key: 'necessary' as const,
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine persönlichen Informationen.',
      icon: <Shield className="h-5 w-5 text-green-600" />,
      examples: 'Session-Management, Sicherheits-Token, Cookie-Einstellungen',
      disabled: true
    },
    {
      key: 'functional' as const,
      title: 'Funktionale Cookies',
      description: 'Ermöglichen erweiterte Funktionen wie Theme-Speicherung und personalisierte Inhalte. Diese Cookies verbessern Ihre Nutzererfahrung.',
      examples: 'Theme-Präferenz (Hell/Dunkel-Modus), Spracheinstellungen',
      disabled: false
    },
    {
      key: 'analytics' as const,
      title: 'Analyse-Cookies',
      description: 'Helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie kontinuierlich zu verbessern. Alle Daten werden anonymisiert.',
      examples: 'Seitenaufrufe, Verweildauer, Klickverhalten (derzeit nicht aktiv)',
      disabled: false
    },
    {
      key: 'marketing' as const,
      title: 'Marketing-Cookies',
      description: 'Werden für personalisierte Werbung und Remarketing verwendet. Helfen dabei, relevante Inhalte anzuzeigen.',
      examples: 'Derzeit nicht verwendet',
      disabled: false
    }
  ]

  return (
    <div className="space-y-6">
      {/* Info Box - How to access settings later */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
              Cookie-Einstellungen jederzeit ändern
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
              Sie können Ihre Cookie-Präferenzen jederzeit anpassen:
            </p>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li className="flex items-center gap-2">
                <Cookie className="h-3 w-3" />
                Über das Cookie-Symbol in der Navigation
              </li>
              <li className="flex items-center gap-2">
                <Cookie className="h-3 w-3" />
                Über den Link im Footer der Website
              </li>
              <li className="flex items-center gap-2">
                <Cookie className="h-3 w-3" />
                Direkt unter: /cookie-einstellungen
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-foreground">Cookie-Status</h2>
            <p className="text-sm text-secondary">
              {hasConsented 
                ? 'Ihre Cookie-Einstellungen wurden gespeichert.' 
                : 'Sie haben noch keine Cookie-Einstellungen vorgenommen.'
              }
            </p>
          </div>
          {saveSuccess && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              Gespeichert!
            </motion.div>
          )}
        </div>
      </div>

      {/* Cookie Categories */}
      <div className="space-y-4">
        {cookieCategories.map((category) => (
          <div key={category.key} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {category.icon}
                  <h3 className="font-semibold text-foreground ml-2">
                    {category.title}
                  </h3>
                </div>
                <p className="text-secondary mb-3">
                  {category.description}
                </p>
                <div className="text-xs text-secondary">
                  <strong>Beispiele:</strong> {category.examples}
                </div>
              </div>
              
              <div className="ml-6">
                <button
                  onClick={() => handleToggle(category.key)}
                  disabled={category.disabled}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    tempConsent[category.key]
                      ? 'bg-accent justify-end'
                      : 'bg-gray-300 dark:bg-gray-600 justify-start'
                  } ${category.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1 shadow-sm" />
                </button>
                <div className="text-xs text-center mt-1 text-secondary">
                  {tempConsent[category.key] ? 'Ein' : 'Aus'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
            hasChanges
              ? 'bg-accent text-white hover:bg-accent-hover'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Save className="h-4 w-4 mr-2" />
          Einstellungen speichern
        </button>
        
        <button
          onClick={handleReset}
          disabled={!hasChanges}
          className={`px-6 py-3 border border-border rounded-lg font-medium transition-colors ${
            hasChanges
              ? 'hover:bg-muted text-foreground'
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Zurücksetzen
        </button>
      </div>

      {/* Help Text */}
      <div className="text-sm text-secondary bg-muted p-4 rounded-lg">
        <p>
          <strong>Hinweis:</strong> Ihre Einstellungen werden lokal in Ihrem Browser gespeichert. 
          Bei einer Löschung der Browser-Daten werden auch diese Einstellungen entfernt und 
          müssen neu vorgenommen werden.
        </p>
      </div>
    </div>
  )
}