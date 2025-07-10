'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ConsentCategories = {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

type ConsentContextType = {
  consent: ConsentCategories
  hasConsented: boolean
  updateConsent: (categories: Partial<ConsentCategories>) => void
  acceptAll: () => void
  rejectAll: () => void
  showBanner: boolean
  hideBanner: () => void
  showSettings: boolean
  toggleSettings: () => void
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined)

const CONSENT_STORAGE_KEY = 'beaible-cookie-consent'
const CONSENT_VERSION = '1.0'

const defaultConsent: ConsentCategories = {
  necessary: true, // Always true
  functional: false,
  analytics: false,
  marketing: false
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentCategories>(defaultConsent)
  const [hasConsented, setHasConsented] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  // Load consent from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (parsed.version === CONSENT_VERSION) {
            setConsent(parsed.consent)
            setHasConsented(true)
            setShowBanner(false)
          } else {
            // Version mismatch, show banner again
            setShowBanner(true)
          }
        } else {
          // No consent stored, show banner
          setShowBanner(true)
        }
      } catch (error) {
        console.error('Error loading consent:', error)
        setShowBanner(true)
      }
    }
  }, [])

  const saveConsent = (newConsent: ConsentCategories) => {
    const consentData = {
      consent: newConsent,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString()
    }
    
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData))
      setConsent(newConsent)
      setHasConsented(true)
      setShowBanner(false)
      setShowSettings(false)
    } catch (error) {
      console.error('Error saving consent:', error)
    }
  }

  const updateConsent = (categories: Partial<ConsentCategories>) => {
    const newConsent = {
      ...consent,
      ...categories,
      necessary: true // Always true
    }
    saveConsent(newConsent)
  }

  const acceptAll = () => {
    const allAccepted: ConsentCategories = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    saveConsent(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary: ConsentCategories = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    saveConsent(onlyNecessary)
  }

  const hideBanner = () => {
    setShowBanner(false)
  }

  const toggleSettings = () => {
    setShowSettings(!showSettings)
  }

  return (
    <ConsentContext.Provider 
      value={{
        consent,
        hasConsented,
        updateConsent,
        acceptAll,
        rejectAll,
        showBanner,
        hideBanner,
        showSettings,
        toggleSettings
      }}
    >
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider')
  }
  return context
}

// Helper hooks for specific consent types
export function useFunctionalConsent() {
  const { consent } = useConsent()
  return consent.functional
}

export function useAnalyticsConsent() {
  const { consent } = useConsent()
  return consent.analytics
}

export function useMarketingConsent() {
  const { consent } = useConsent()
  return consent.marketing
}