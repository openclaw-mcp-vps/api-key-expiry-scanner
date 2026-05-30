export default function Home() {
  const faqs = [
    {
      q: 'Which providers are supported?',
      a: 'We detect keys for AWS, GitHub, Stripe, Twilio, SendGrid, OpenAI, and 30+ other providers using pattern matching and provider validation APIs.',
    },
    {
      q: 'How are alerts delivered?',
      a: 'You receive email and Slack notifications 30, 7, and 1 day before a key expires, giving your team time to rotate credentials without downtime.',
    },
    {
      q: 'Is my source code stored?',
      a: 'No. We scan repositories in-memory and only persist key metadata (provider, last 4 chars, expiry date). Your source code never touches our servers.',
    },
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Codebases for<br />
          <span className="text-[#58a6ff]">Expiring API Keys</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect your GitHub or GitLab repos. We detect API keys, track their expiration dates, and alert your team before they cause outages.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 7-day trial</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔍', title: 'Pattern Detection', desc: '40+ key formats detected automatically across all files.' },
          { icon: '📅', title: 'Expiry Calendar', desc: 'Visual timeline of upcoming key expirations across all repos.' },
          { icon: '🔔', title: 'Smart Alerts', desc: 'Email & Slack alerts 30, 7, and 1 day before expiry.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited repositories',
              '40+ API key providers',
              'Email & Slack alerts',
              'Expiry calendar dashboard',
              'Background continuous scanning',
              '7-day free trial',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} API Key Expiry Scanner. Built for DevOps teams.
      </footer>
    </main>
  )
}
