'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useTheme } from '@/hooks/useTheme'

interface TurnstileProps {
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
}

export function TurnstileWidget({ onVerify, onError, onExpire }: TurnstileProps) {
  const { effectiveTheme } = useTheme()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  // Fallback für Development ohne Site Key
  if (!siteKey || siteKey === 'your-site-key-here') {
    return (
      <div className="p-4 border border-yellow-300 bg-yellow-50 rounded-lg text-sm text-yellow-800">
        <p><strong>Development Mode:</strong> Turnstile nicht konfiguriert.</p>
        <p>Bitte Site Key in .env.local setzen.</p>
        <button 
          type="button"
          onClick={() => onVerify('dev-mode-token')}
          className="mt-2 px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded text-xs"
        >
          Debug: Als verifiziert markieren
        </button>
      </div>
    )
  }

  return (
    <Turnstile
      siteKey={siteKey}
      onSuccess={onVerify}
      onError={onError}
      onExpire={onExpire}
      options={{
        theme: effectiveTheme === 'dark' ? 'dark' : 'light',
        size: 'normal',
        language: 'de'
      }}
    />
  )
}