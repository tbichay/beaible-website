'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ExternalLink, X } from 'lucide-react'

export function AIGeneratedBadge() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null)

  // Show badge after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Mark as seen when user interacts
  const markAsSeen = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ai-badge-seen', 'true')
    }
  }

  // Handle mouse enter - cancel any pending close timer
  const handleMouseEnter = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      setHoverTimer(null)
    }
    setIsExpanded(true)
  }

  // Handle mouse leave with delay to allow moving to panel
  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsExpanded(false)
    }, 300) // 300ms delay
    setHoverTimer(timer)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-full right-0 mb-3 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border p-6 w-80 max-w-[90vw]"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 lg:hidden"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">KI-Generated Website</h3>
              </div>
              
              <div className="text-sm text-secondary leading-relaxed">
                <p className="mb-3">
                  🤖 Diese Website wurde vollständig mit KI erstellt
                </p>
                <p className="text-xs text-muted-foreground">
                  Powered by Datenmassiv & Claude
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://datenmassiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={markAsSeen}
                  className="flex items-center gap-1 px-3 py-2 bg-accent text-white text-xs rounded-lg hover:bg-accent-hover transition-colors"
                >
                  Datenmassiv
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={markAsSeen}
                  className="flex items-center gap-1 px-3 py-2 border border-border text-foreground text-xs rounded-lg hover:bg-muted transition-colors"
                >
                  Claude
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, y: 100 }}
        animate={{ 
          scale: 1, 
          y: 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30
        }}
        whileHover={{ 
          scale: 1.05
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsExpanded(!isExpanded)
          markAsSeen()
        }}
        className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-center gap-2">
          <span>🚀</span>
          <span className="hidden sm:inline">KI-Generated</span>
          <span className="sm:hidden">KI</span>
        </div>

        <div className="absolute -top-1 -right-1">
          <Sparkles className="h-3 w-3 text-yellow-300 opacity-70" />
        </div>
      </motion.button>
    </div>
  )
}