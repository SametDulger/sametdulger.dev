import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Samet Dulger',
  description: 'The page you are looking for does not exist. Return to Samet Dulger\'s portfolio homepage.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Return Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Or explore these sections:</p>
            <div className="mt-2 space-x-4">
              <Link href="/#about" className="text-blue-400 hover:text-blue-300 transition-colors">
                About
              </Link>
              <Link href="/#experience" className="text-blue-400 hover:text-blue-300 transition-colors">
                Experience
              </Link>
              <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 