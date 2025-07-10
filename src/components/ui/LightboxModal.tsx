'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import Image from 'next/image'
import { GalleryImage } from '@/hooks/useImageGallery'

interface LightboxModalProps {
  isOpen: boolean
  currentImage: GalleryImage
  currentIndex: number
  totalImages: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  onGoToIndex: (index: number) => void
}

export function LightboxModal({
  isOpen,
  currentImage,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrevious,
  onGoToIndex
}: LightboxModalProps) {
  const [showUI, setShowUI] = useState(true)
  const [isZoomed, setIsZoomed] = useState(false)
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null)

  // Auto-hide UI after 3 seconds
  useEffect(() => {
    if (!showUI) return

    const timer = setTimeout(() => {
      setShowUI(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [showUI, currentIndex])

  // Reset zoom when changing images
  useEffect(() => {
    setIsZoomed(false)
  }, [currentIndex])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100
    const velocity = info.velocity.x

    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 || velocity > 0) {
        onPrevious()
      } else {
        onNext()
      }
    }
    setDragDirection(null)
  }

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 20) {
      setDragDirection(info.offset.x > 0 ? 'left' : 'right')
    }
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={() => {
          setShowUI(true)
          onClose()
        }}
      >
        {/* UI Controls */}
        <AnimatePresence>
          {showUI && (
            <>
              {/* Header */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent"
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg font-semibold">{currentImage.title || currentImage.alt}</h3>
                    {currentImage.description && (
                      <p className="text-sm text-white/80">{currentImage.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/80">
                      {currentIndex + 1} / {totalImages}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleZoom()
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                    >
                      {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onClose()
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Close gallery"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              {totalImages > 1 && (
                <>
                  <motion.button
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      onPrevious()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </motion.button>

                  <motion.button
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      onNext()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.button>
                </>
              )}

              {/* Thumbnail Navigation */}
              {totalImages > 1 && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="flex gap-2 p-2 rounded-full bg-black/30 backdrop-blur-sm">
                    {Array.from({ length: totalImages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          onGoToIndex(index)
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>

        {/* Main Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4"
          onClick={(e) => {
            e.stopPropagation()
            setShowUI(!showUI)
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          whileDrag={{ 
            cursor: 'grabbing',
            x: dragDirection === 'left' ? 20 : dragDirection === 'right' ? -20 : 0
          }}
        >
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0, scale: 0.8 }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              scale: isZoomed ? 1.5 : 1,
              transition: { 
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 200, damping: 20 }
              }
            }}
            exit={{ x: -300, opacity: 0, scale: 0.8 }}
            className="relative max-w-full max-h-full"
            style={{ 
              cursor: isZoomed ? 'zoom-out' : 'zoom-in'
            }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={currentImage.width}
              height={currentImage.height}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              priority
              quality={95}
              sizes="100vw"
              onDoubleClick={toggleZoom}
            />
            
            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg"
            >
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Swipe Hint */}
        {totalImages > 1 && showUI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center"
          >
            <p>Swipe oder Pfeiltasten zum Navigieren</p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}