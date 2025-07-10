'use client'

import { ConsentProvider, useFunctionalConsent } from '@/hooks/useConsent'
import { ThemeProvider } from '@/hooks/useTheme'
import { CookieBanner } from '@/components/ui/CookieBanner'

function ThemeProviderWithConsent({ children }: { children: React.ReactNode }) {
  const functionalConsent = useFunctionalConsent()
  
  return (
    <ThemeProvider 
      defaultTheme="light" 
      storageKey="beaible-theme"
      functionalConsent={functionalConsent}
    >
      {children}
    </ThemeProvider>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConsentProvider>
      <ThemeProviderWithConsent>
        {children}
        <CookieBanner />
      </ThemeProviderWithConsent>
    </ConsentProvider>
  )
}