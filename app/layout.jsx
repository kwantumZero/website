import './globals.css'

export const metadata = {
  title: 'KwantumZero — Waitlist',
  description: 'Post-Quantum Zero Trust Auditing for Kubernetes'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  )
}
