'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, Expand } from 'lucide-react'
import { useImageGallery, GalleryImage } from '@/hooks/useImageGallery'
import { LightboxModal } from './LightboxModal'

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const {
    isOpen,
    currentIndex,
    currentImage,
    openGallery,
    closeGallery,
    goToNext,
    goToPrevious,
    goToIndex,
    totalImages
  } = useImageGallery(images)

  if (!images.length) return null

  const [mainImage, ...otherImages] = images

  return (
    <>
      <div className={`space-y-4 ${className}`}>
        {/* Hauptbild: Bärenweiler von oben - deutlich größer */}
        <motion.div 
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onClick={() => openGallery(0)}
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            width={mainImage.width}
            height={mainImage.height}
            className="rounded-2xl shadow-2xl object-cover w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
          
          {/* Overlay mit Hover-Effekt */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          
          {/* Expand Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white"
          >
            <Expand className="h-5 w-5" />
          </motion.div>

          {/* Image Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 text-white"
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <h3 className="font-semibold text-lg">{mainImage.title || mainImage.alt}</h3>
              {mainImage.description && (
                <p className="text-sm text-white/80 mt-1">{mainImage.description}</p>
              )}
            </div>
          </motion.div>

          {/* Gallery Indicator */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
            <Camera className="h-4 w-4" />
            <span>{totalImages} Fotos</span>
          </div>
        </motion.div>
        
        {/* Kleinere Bilder in einer Reihe */}
        {otherImages.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {otherImages.map((image, index) => {
              const imageIndex = index + 1 // +1 because main image is index 0
              return (
                <motion.div
                  key={image.src}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => openGallery(imageIndex)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="rounded-xl shadow-lg object-cover h-32 w-full"
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 13vw"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Expand className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>

                  {/* Image Number */}
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-medium">
                    {imageIndex + 1}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isOpen}
        currentImage={currentImage}
        currentIndex={currentIndex}
        totalImages={totalImages}
        onClose={closeGallery}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onGoToIndex={goToIndex}
      />
    </>
  )
}