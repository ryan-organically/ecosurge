import type { Metadata } from 'next'
import './globals.css'
import { ServiceWorkerRegistrar } from '@/components/ServiceWorkerRegistrar'

export const metadata: Metadata = {
  title: {
    default: 'The Species Archive | EcoSurge',
    template: '%s | The Species Archive',
  },
  description: 'A comprehensive field guide to every species on Earth. Explore the complete tree of life.',
  metadataBase: new URL('https://ecosurge.com'),
  openGraph: {
    type: 'website',
    siteName: 'The Species Archive | EcoSurge',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body>
        <ServiceWorkerRegistrar />
        {children}
      </body>
    </html>
  )
}
