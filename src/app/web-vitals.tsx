'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // 2025 Core Web Vitals with INP
    switch (metric.name) {
      case 'CLS':
        console.log('Cumulative Layout Shift:', metric.value)
        // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
        break
      case 'FID':
        console.log('First Input Delay:', metric.value)
        // Good: < 100ms, Needs Improvement: 100-300ms, Poor: > 300ms
        break
      case 'FCP':
        console.log('First Contentful Paint:', metric.value)
        // Good: < 1.8s, Needs Improvement: 1.8-3s, Poor: > 3s
        break
      case 'LCP':
        console.log('Largest Contentful Paint:', metric.value)
        // Good: < 2.5s, Needs Improvement: 2.5-4s, Poor: > 4s
        break
      case 'TTFB':
        console.log('Time to First Byte:', metric.value)
        // Good: < 800ms, Needs Improvement: 800-1800ms, Poor: > 1800ms
        break
      case 'INP':
        // 2025 New Core Web Vital - Interaction to Next Paint
        console.log('Interaction to Next Paint:', metric.value)
        // Good: < 200ms, Needs Improvement: 200-500ms, Poor: > 500ms
        if (metric.value > 500) {
          console.warn('Poor INP detected - consider optimizing interactions')
        }
        break
    }

    // Send to analytics (only for critical metrics)
    if (typeof window !== 'undefined' && window.gtag && 
        ['LCP', 'FID', 'CLS', 'TTFB'].includes(metric.name)) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }

    // Performance monitoring for 2025 standards
    if (metric.name === 'INP' && metric.value > 200) {
      // Log slow interactions for optimization
      console.warn(`Slow interaction detected: ${metric.value}ms`)
    }

    if (metric.name === 'LCP' && metric.value > 2500) {
      // Log slow loading for optimization
      console.warn(`Slow loading detected: ${metric.value}ms`)
    }

    if (metric.name === 'TTFB' && metric.value > 800) {
      // Log slow server response for optimization
      const isDev = process.env.NODE_ENV === 'development'
      if (isDev && metric.value > 3000) {
        console.warn(`Dev mode TTFB: ${metric.value}ms (normal in development)`)
      } else if (!isDev && metric.value > 1800) {
        console.error(`Production TTFB issue: ${metric.value}ms - Server optimization required`)
      } else if (!isDev) {
        console.warn(`Slow server response: ${metric.value}ms`)
      }
    }
  })

  return null
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
  }
} 