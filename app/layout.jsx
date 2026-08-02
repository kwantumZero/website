import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
});

const siteUrl = 'https://kwantumzero.dev';
const siteTitle = 'KwantumZero — Post-Quantum Zero Trust Auditing for Kubernetes';
const siteDescription =
  'KwantumZero is an open-source Kubernetes Operator that audits Ingress Controllers, Service Meshes, and TLS configurations to protect infrastructure against Harvest Now, Decrypt Later attacks and verify NIST-approved post-quantum cryptography, including ML-KEM (Kyber).';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | KwantumZero'
  },
  description: siteDescription,
  keywords: [
    'post-quantum cryptography',
    'Kubernetes security',
    'Harvest Now Decrypt Later',
    'ML-KEM',
    'Kyber',
    'Kubernetes Operator',
    'TLS auditing',
    'service mesh security',
    'Istio',
    'Cilium',
    'Gateway API',
    'zero trust'
  ],
  authors: [{ name: 'KwantumZero' }],
  creator: 'KwantumZero',
  publisher: 'KwantumZero',
  applicationName: 'KwantumZero',
  category: 'technology',
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'KwantumZero',
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@kwantumzero'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-base font-sans text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-green focus:px-4 focus:py-2 focus:text-base focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
