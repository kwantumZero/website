import './globals.css';

const siteUrl = 'https://kwantumzero.dev';
const siteTitle = 'KwantumZero — Post-Quantum Zero Trust Auditing for Kubernetes';
const siteDescription =
  'KwantumZero is an open-source Kubernetes security auditor in development, designed to help teams find legacy TLS configurations and prepare for post-quantum cryptography.';

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
    <html lang="en">
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
