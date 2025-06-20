'use client'

import { useEffect } from 'react'

export function FontLoader() {
  useEffect(() => {
    // Font loading error handling
    const handleFontLoadError = () => {
      // Add fallback font loading logic
      const style = document.createElement('style')
      style.textContent = `
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
        .font-mono {
          font-family: Monaco, Consolas, 'Courier New', monospace !important;
        }
      `
      document.head.appendChild(style)
    }

    // Check if fonts are loaded
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.log('All fonts loaded successfully')
      }).catch((error) => {
        console.warn('Font loading failed, using fallback fonts:', error)
        handleFontLoadError()
      })

      // Listen for font loading events
      document.fonts.addEventListener('loadingdone', (event) => {
        console.log(`Font loading completed: ${event.fontfaces.length} fonts loaded`)
      })

      document.fonts.addEventListener('loadingerror', (event) => {
        console.warn('Font loading error detected, applying fallbacks')
        handleFontLoadError()
      })
    }

    // Fallback timeout - if fonts don't load within 3 seconds, use fallbacks
    const fontTimeout = setTimeout(() => {
      if (document.fonts && document.fonts.status !== 'loaded') {
        console.warn('Font loading timeout, using fallback fonts')
        handleFontLoadError()
      }
    }, 3000)

    return () => {
      clearTimeout(fontTimeout)
    }
  }, [])

  return null
} 