import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebVitals } from './web-vitals';
import { FontLoader } from './font-loader';
import { ErrorBoundary } from '../components/ErrorBoundary';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['Monaco', 'Consolas', 'Courier New', 'monospace'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sametdulger.dev'),
  title: {
    default: "Samet Dulger - Full Stack Developer | .NET & React Expert",
    template: "%s | Samet Dulger - Full Stack Developer"
  },
  description: "Full Stack Developer specializing in .NET, React, and modern web technologies. Professional software development services in Istanbul, Turkey.",
  keywords: [
    "Full Stack Developer",
    ".NET Developer", 
    "C# Developer",
    "React Developer",
    "JavaScript Developer",
    "ASP.NET Core",
    "Istanbul Turkey"
  ],
  authors: [{ name: "Samet Dulger", url: "https://sametdulger.dev" }],
  creator: "Samet Dulger",
  publisher: "Samet Dulger",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "author-experience": "professional-developer",
    "content-expertise": "full-stack-development"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sametdulger.dev",
    title: "Samet Dulger - Full Stack Developer | .NET & React Expert",
    description: "Full Stack Developer specializing in .NET, React, and modern web technologies. Professional software development services.",
    siteName: "Samet Dulger Portfolio",
    images: [
      {
        url: "https://sametdulger.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Samet Dulger - Full Stack Developer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samet Dulger - Full Stack Developer | .NET & React Expert",
    description: "Full Stack Developer specializing in .NET, React, and modern web technologies. Professional software development services.",
    creator: "@_SametDlgr",
    images: ["https://sametdulger.dev/og-image.jpg"],
  },

  alternates: {
    canonical: "https://sametdulger.dev",
  },
    category: "Technology",
};

// Optimized structured data - reduced size for better TTFB
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samet Dulger",
  "jobTitle": "Full Stack Developer",
  "description": "Full Stack Developer specializing in .NET, React, and modern web technologies",
  "url": "https://sametdulger.dev",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Istanbul",
    "addressCountry": "TR"
  },
  "sameAs": [
    "https://github.com/SametDulger",
    "https://www.linkedin.com/in/sametdulger/",
    "https://x.com/_SametDlgr"
  ],
  "knowsAbout": [".NET", "C#", "React", "JavaScript", "TypeScript", "ASP.NET Core"],
  "hasCredential": ["IBM JavaScript Developer", "Microsoft Back-End Developer"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(structuredData)
              .replace(/</g, '\\u003c')
              .replace(/>/g, '\\u003e')
              .replace(/&/g, '\\u0026')
          }}
        />
        <link rel="canonical" href="https://sametdulger.dev" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        {/* Critical CSS Inline - TTFB optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body{color:rgb(255,255,255);background:linear-gradient(to bottom,rgb(17,24,39),rgb(0,0,0));min-height:100vh;line-height:1.6;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
            .gradient-text{background:linear-gradient(to right,rgb(59,130,246),rgb(147,51,234));background-clip:text;color:transparent}
            .hero-section{min-height:100vh;min-height:100dvh}
            html{scroll-behavior:smooth}
            *{box-sizing:border-box}
          `
        }} />
        {/* Security Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        {/* Service Worker Registration and Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker Registration for font caching
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Enhanced GA loading with error handling
              function loadGA() {
                try {
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NJE56Q841Y';
                  script.onerror = function() {
                    console.warn('Google Analytics failed to load - this is normal if ad blockers are enabled');
                  };
                  document.head.appendChild(script);
                  
                  script.onload = function() {
                    try {
                      gtag('config', 'G-NJE56Q841Y', {
                        send_page_view: true,
                        anonymize_ip: true,
                        cookie_flags: 'SameSite=None;Secure'
                      });
                    } catch (e) {
                      console.warn('Google Analytics configuration failed:', e.message);
                    }
                  };
                } catch (e) {
                  console.warn('Google Analytics initialization failed:', e.message);
                }
              }
              
              if ('requestIdleCallback' in window) {
                requestIdleCallback(loadGA);
              } else {
                setTimeout(loadGA, 2000);
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased font-optimized`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <WebVitals />
        <FontLoader />
        <ErrorBoundary>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
