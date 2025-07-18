'use client'

import { useState, useCallback } from 'react'

interface ToastState {
  message: string
  type: 'success' | 'error'
  isVisible: boolean
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'success',
    isVisible: false
  })

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({
      message,
      type,
      isVisible: true
    })
  }, [])

  const hideToast = useCallback(() => {
    setToast(prev => ({
      ...prev,
      isVisible: false
    }))
  }, [])

  return {
    toast,
    showToast,
    hideToast
  }
}