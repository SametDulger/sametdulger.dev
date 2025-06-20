export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // 2025 Performance Monitoring
    const { performance } = await import('perf_hooks')
    
    // Core Web Vitals tracking
    performance.mark('app-start')
    
    // Monitor critical resources
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEntry & { processingStart: number }
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number }
          console.log('CLS:', clsEntry.value)
        }
      })
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    
    // Memory usage monitoring
    if (process.env.NODE_ENV === 'production') {
      setInterval(() => {
        const memUsage = process.memoryUsage()
        if (memUsage.heapUsed > 100 * 1024 * 1024) { // 100MB threshold
          console.warn('High memory usage detected:', memUsage)
        }
      }, 30000) // Check every 30 seconds
    }
  }
} 