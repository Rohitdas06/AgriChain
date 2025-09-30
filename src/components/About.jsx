import React from 'react';
import LanguageTestDemo from './LanguageTestDemo';

export default function About() {
  const primary = '#2E8B57';
  const primaryDark = '#228B22';
  const accent = '#FFD700';

  const problems = [
    { title: 'Farmer Exploitation', desc: 'Middlemen take unfair profits' },
    { title: 'Lack of Transparency', desc: "Consumers can't verify product origin" },
    { title: 'Price Manipulation', desc: 'Complex supply chains enable price inflation' },
    { title: 'Fraud', desc: 'Fake organic labels and counterfeit products' }
  ];

  const solutions = [
    { title: 'Blockchain Records', desc: 'Immutable tracking from farm to consumer' },
    { title: 'QR Code Verification', desc: 'Instant authenticity scanning' },
    { title: 'Fair Pricing', desc: 'Transparent cost breakdown at each step' },
    { title: 'Smart Contracts', desc: 'Automated payments for all stakeholders' }
  ];

  const workflow = [
    { icon: '🌾', role: 'Farmers', text: 'Register products with batch ID, harvest date, location' },
    { icon: '🚛', role: 'Distributors', text: 'Verify products, update transport status' },
    { icon: '🏪', role: 'Retailers', text: 'Confirm delivery, generate QR codes' },
    { icon: '👨‍👩‍👧‍👦', role: 'Consumers', text: 'Scan QR codes to verify authenticity' }
  ];

  const benefits = {
    Farmers: [
      'Direct market access and better pricing',
      'Proof of authenticity and sustainable practices',
      'Faster, automated payments via smart contracts'
    ],
    Distributors: [
      'Trusted product verification logs',
      'Simplified compliance and auditing',
      'Reduced fraud and disputes'
    ],
    Retailers: [
      'Instant QR code product verification',
      'Transparent sourcing for shoppers',
      'Brand trust and loyalty'
    ],
    Consumers: [
      'Verify origin and authenticity',
      'Understand true cost breakdown',
      'Support fair, sustainable farming'
    ]
  };

  const team = [
    { name: 'Surbhi Singh', role: 'Product Lead', bio: 'Builds human-centered products for emerging markets. Experienced in AgTech and fintech ecosystems.', linkedin: 'https://www.linkedin.com/in/surbhi-singh-cn30ss/', github: '' },
    { name: 'Annu Sinha', role: 'Blockchain Engineer', bio: 'Designs secure, scalable smart-contract systems. Passionate about leveraging decentralized tech for social impact.', linkedin: 'https://www.linkedin.com/in/annusinha/', github: '' },
    { name: 'Devanshu Mahato', role: 'DevOps Engineer', bio: 'Automates CI/CD pipelines and optimizes cloud infrastructure for cost and reliability.', linkedin: 'https://www.linkedin.com/in/devanshu-mahato-67653b294/', github: '' },
    { name: 'Rohit Das', role: 'Full-Stack Developer', bio: 'Creates reliable web experiences with a focus on performance and accessibility.', linkedin: 'https://www.linkedin.com/in/rohit-das-09a67728b/', github: '' },
    { name: 'Dhruv Shekhar', role: 'Data Analyst', bio: 'Turns blockchain and supply-chain data into actionable insights for stakeholders.', linkedin: 'https://www.linkedin.com/in/dhruv-shekhar-0a4853265/', github: '' },
    { name: 'Amar Das', role: 'UX Designer', bio: 'Crafts simple, inclusive interfaces that tell transparent stories about data.', linkedin: 'https://www.linkedin.com/in/amar-das-29a81726b/', github: '' }
  ];

  const impact = [
    'Eliminate farmer exploitation',
    'Increase farmer income through fair pricing',
    'Build consumer trust with transparency',
    'Promote sustainable farming practices'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundImage: 'linear-gradient(135deg, #f0fdf4 0%, #f8fafc 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: primary }}>
            About AgriChain
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Revolutionizing agriculture through blockchain transparency - connecting farmers directly to consumers
          </p>
        </section>

        {/* Problem We Solve */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>Problem We Solve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm" style={{ borderColor: '#e5e7eb' }}>
                <h3 className="font-semibold mb-2" style={{ color: primary }}>{p.title}</h3>
                <p className="text-gray-700 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>Our Solution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((s) => (
              <div key={s.title} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm" style={{ borderColor: '#e5e7eb' }}>
                <h3 className="font-semibold mb-2" style={{ color: primary }}>{s.title}</h3>
                <p className="text-gray-700 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((w) => (
              <div key={w.role} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm flex flex-col" style={{ borderColor: '#e5e7eb' }}>
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-semibold mb-1" style={{ color: primary }}>{w.role}</h3>
                <p className="text-gray-700 text-sm">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              'Ethereum/Hyperledger blockchain framework',
              'Smart contracts for automated verification',
              'MetaMask integration for secure wallet login',
              'Cloud deployment on low-cost infrastructure'
            ].map((item) => (
              <div key={item} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm" style={{ borderColor: '#e5e7eb' }}>
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stakeholder Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>Stakeholder Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(benefits).map(([group, points]) => (
              <div key={group} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm" style={{ borderColor: '#e5e7eb' }}>
                <h3 className="font-semibold mb-2" style={{ color: primary }}>{group}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="relative overflow-hidden rounded-2xl p-6 bg-white/80 backdrop-blur border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 aspect-square flex flex-col"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-2xl opacity-60" />
                <div className="absolute -bottom-10 -left-10 h-24 w-24 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full blur-2xl opacity-60" />

                <div className="relative mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center shadow-lg ring-4 ring-white">
                  <span className="text-2xl font-extrabold text-white">{m.name.charAt(0)}</span>
                </div>

                <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700">{m.name}</div>
                <div className="mt-1 mb-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100 mx-auto">
                  <span>🎖️</span>
                  <span>{m.role}</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed flex-1">{m.bio}</p>

                <div className="mt-4 flex justify-center gap-3 text-sm">
                  <a
                    href={m.linkedin || `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(m.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50 transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>🔗</span>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={m.github || `https://github.com/search?q=${encodeURIComponent(m.name)}&type=users`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>💻</span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryDark }}>Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impact.map((goal) => (
              <div key={goal} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm" style={{ borderColor: '#e5e7eb' }}>
                <span className="font-medium text-gray-800">{goal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <p className="text-gray-700 mb-4">
            Join the agricultural revolution with transparent, fair systems for everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              className="px-5 py-3 rounded-xl font-semibold text-white shadow"
              style={{ backgroundColor: primary, boxShadow: `0 8px 24px rgba(46,139,87,0.25)` }}
            >
              Connect MetaMask Wallet
            </button>
            <button
              className="px-5 py-3 rounded-xl font-semibold text-white shadow"
              style={{
                backgroundImage: 'linear-gradient(to right, #16a34a, #2563eb)',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.25)'
              }}
              onClick={() => {
                const el = document.querySelector('#how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn How It Works
            </button>
          </div>
        </section>

        {/* Language Test Demo Section */}
        <section style={{ padding: '4rem 0' }}>
          <LanguageTestDemo />
        </section>
      </div>
    </div>
  );
}