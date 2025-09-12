import React from 'react';

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
    { name: 'Surbhi Singh', role: 'Product Lead', bio: 'Builds human-centered products for emerging markets. Experienced in AgTech and fintech ecosystems.' },
    { name: 'Annu Sinha', role: 'Blockchain Engineer', bio: 'Designs secure, scalable smart-contract systems. Passionate about leveraging decentralized tech for social impact.' },
    { name: 'Devanshu Mahato', role: 'DevOps Engineer', bio: 'Automates CI/CD pipelines and optimizes cloud infrastructure for cost and reliability.' },
    { name: 'Rohit Das', role: 'Full-Stack Developer', bio: 'Creates reliable web experiences with a focus on performance and accessibility.' },
    { name: 'Dhruv Shekhar', role: 'Data Analyst', bio: 'Turns blockchain and supply-chain data into actionable insights for stakeholders.' },
    { name: 'Amar Das', role: 'UX Designer', bio: 'Crafts simple, inclusive interfaces that tell transparent stories about data.' }
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
            About AgroChain
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl p-5 border bg-white/60 backdrop-blur-md shadow-sm text-center" style={{ borderColor: '#e5e7eb' }}>
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-tr from-white to-gray-100 border flex items-center justify-center mb-4" style={{ borderColor: '#e5e7eb' }}>
                  <span className="text-xl font-bold" style={{ color: primary }}>{m.name.charAt(0)}</span>
                </div>
                <div className="font-bold" style={{ color: primary }}>{m.name}</div>
                <div className="italic text-gray-600 text-sm mb-2">{m.role}</div>
                <p className="text-sm text-gray-700">{m.bio}</p>
                <div className="mt-3 flex justify-center gap-3 text-sm">
                  <a
                    href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(m.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                    style={{ color: primary }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://github.com/search?q=${encodeURIComponent(m.name)}&type=users`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                    style={{ color: primary }}
                  >
                    GitHub
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
      </div>
    </div>
  );
}