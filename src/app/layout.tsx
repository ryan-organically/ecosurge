import type { Metadata } from 'next'
import './globals.css'
import { ServiceWorkerRegistrar } from '@/components/ServiceWorkerRegistrar'

export const metadata: Metadata = {
  title: {
    default: 'The Species Archive | EcoSurge',
    template: '%s | The Species Archive',
  },
  description: 'A comprehensive field guide to every species on Earth. Explore the complete tree of life.',
  metadataBase: new URL('https://ecosurge.co'),
  openGraph: {
    type: 'website',
    siteName: 'The Species Archive | EcoSurge',
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EcoSurge',
  url: 'https://ecosurge.co',
  description:
    'A global climate-technology conglomerate building tools to combat climate change, harmonize nature and agriculture, and grow a biomechanical and biotechnological ecosystem.',
  logo: 'https://ecosurge.co/assets/logo.png',
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EcoSurge',
  url: 'https://ecosurge.co',
  publisher: { '@type': 'Organization', name: 'EcoSurge' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <ServiceWorkerRegistrar />
        {children}
      </body>
    </html>
  )
}
