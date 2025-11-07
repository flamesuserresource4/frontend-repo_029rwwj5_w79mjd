import React from 'react';
import { Mountain, Compass, Activity, Shield, Radio, Ambulance } from 'lucide-react';

const services = [
  {
    icon: <Activity className="h-6 w-6 text-sky-500" />,
    title: 'Tourism Insurance',
    desc: 'Medical coverage, trip interruption, and personal liability for travelers exploring Nepal\'s cities and lowlands.'
  },
  {
    icon: <Compass className="h-6 w-6 text-sky-500" />,
    title: 'Trekking Insurance',
    desc: 'High-altitude evacuation, AMS coverage, and gear protection for popular trekking routes like Annapurna and Everest.'
  },
  {
    icon: <Mountain className="h-6 w-6 text-sky-500" />,
    title: 'Mountaineering Insurance',
    desc: 'Technical rescue, helicopter coordination, and expedition-grade coverage for 6,000m+ peaks with certified guides.'
  },
  {
    icon: <Radio className="h-6 w-6 text-sky-500" />,
    title: 'Rescue Coordination',
    desc: '24/7 coordination with local SAR teams, air operators, and hospitals. Multilingual support and incident reporting.'
  },
  {
    icon: <Shield className="h-6 w-6 text-sky-500" />,
    title: 'Device-Linked Policies',
    desc: 'Pair your GPS/SOS device to automate incident alerts and accelerate claims with verified telemetry.'
  },
  {
    icon: <Ambulance className="h-6 w-6 text-sky-500" />,
    title: 'Hospital Network',
    desc: 'Cashless treatment at partner hospitals in Kathmandu, Pokhara, and regional centers.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Insurance and safety built for Nepal</h2>
          <p className="mt-3 text-slate-400">Pick what fits your journey — from city escapes to 8,000ers.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 transition hover:border-sky-700/50 hover:shadow-[0_0_0_1px] hover:shadow-sky-700/40">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-slate-900/80 p-3 ring-1 ring-slate-800">
                {s.icon}
              </div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
