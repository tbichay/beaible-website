'use client'

import { useState, useEffect, useCallback } from 'react'

export interface GalleryImage {
  src: string
  alt: string
  title?: string
  description?: string
  width: number
  height: number
}

export function useImageGallery(images: GalleryImage[]) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // Preload next and previous images
  const preloadImages = useCallback((index: number) => {
    const indicesToPreload = [
      index - 1 >= 0 ? index - 1 : images.length - 1,
      index + 1 < images.length ? index + 1 : 0
    ]
    
    indicesToPreload.forEach(i => {
      if (i !== index) {
        const img = new Image()
        img.src = images[i].src
      }
    })
  }, [images])

  const openGallery = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
    preloadImages(index)
  }, [preloadImages])

  const closeGallery = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goToNext = useCallback(() => {
    const nextIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
    preloadImages(nextIndex)
  }, [currentIndex, images.length, preloadImages])

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    preloadImages(prevIndex)
  }, [currentIndex, images.length, preloadImages])

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index)
      preloadImages(index)
    }
  }, [images.length, preloadImages])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeGallery()
          break
        case 'ArrowLeft':
          e.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          goToNext()
          break
        case '1':
        case '2':
        case '3':
        case '4':
          e.preventDefault()
          const index = parseInt(e.key) - 1
          if (index < images.length) {
            goToIndex(index)
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeGallery, goToPrevious, goToNext, goToIndex, images.length])

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return {
    isOpen,
    currentIndex,
    currentImage: images[currentIndex],
    isLoading,
    setIsLoading,
    openGallery,
    closeGallery,
    goToNext,
    goToPrevious,
    goToIndex,
    totalImages: images.length
  }
}