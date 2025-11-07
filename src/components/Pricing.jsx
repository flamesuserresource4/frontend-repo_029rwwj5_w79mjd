import React from 'react';
import { Check, Satellite, Shield, Phone } from 'lucide-react';

const tiers = [
  {
    name: 'Trek Safe',
    price: '$9',
    period: '/week',
    highlight: 'Best for popular treks',
    features: [
      'Up to 4,000m coverage',
      'Basic medical + evacuation',
      'Email support',
    ],
  },
  {
    name: 'Summit Pro',
    price: '$39',
    period: '/week',
    highlight: 'For high altitude routes',
    features: [
      'Up to 6,500m coverage',
      'Helicopter rescue included',
      'Priority hotline 24/7',
      'Gear protection',
    ],
    popular: true,
  },
  {
    name: 'Expedition Elite',
    price: '$99',
    period: '/week',
    highlight: 'Expedition-grade coverage',
    features: [
      '8,000m+ technical coverage',
      'Team rescue coordination',
      'Device-linked policies',
      'On-ground case manager',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple pricing for every journey</h2>
          <p className="mt-3 text-slate-400">Choose a plan and activate instantly. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.popular ? 'border-sky-700/60 shadow-[0_0_0_1px] shadow-sky-700/40' : 'border-slate-800/80'} bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6`}>
              {t.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-sky-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">Popular</div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{t.name}</h3>
                <Shield className="h-5 w-5 text-sky-400" />
              </div>
              <p className="mt-2 text-sm text-slate-400">{t.highlight}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="mb-1 text-sm text-slate-400">{t.period}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-sky-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium ${t.popular ? 'bg-sky-500 text-white hover:bg-sky-600' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                Get started
              </button>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1"><Satellite className="h-3.5 w-3.5"/> SOS capable</div>
                <div className="flex items-center gap-1"><Phone className="h-3.5 w-3.5"/> 24/7 hotline</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
