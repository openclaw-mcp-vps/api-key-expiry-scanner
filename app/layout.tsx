import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Expiry Scanner — Never Let a Key Expire Again',
  description: 'Scan your GitHub and GitLab repositories for API keys, track expiration dates, and get alerts before keys expire. Built for DevOps teams and CTOs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7705c498-c480-4bc6-8662-0ec69089fb18"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
