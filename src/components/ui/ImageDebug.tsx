'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageDebugProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

const ImageDebug = ({ src, alt, width, height, className, priority }: ImageDebugProps) => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${src}`, e)
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded ${className}`}>
        <span className="text-sm text-gray-500">Image failed to load</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${className}`} />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}

export default ImageDebug 