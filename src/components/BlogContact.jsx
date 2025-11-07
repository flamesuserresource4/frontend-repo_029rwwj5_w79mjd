import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const posts = [
  {
    title: 'Altitude Sickness 101: Recognize and respond fast',
    excerpt: 'Headache, nausea, dizziness — learn the early signs and what to do before it escalates.',
  },
  {
    title: 'Helicopter rescue in Nepal: How it really works',
    excerpt: 'From incident report to hospital handoff, here is the step-by-step process our teams follow.',
  },
  {
    title: 'Essential gear for winter trekking',
    excerpt: 'Layering systems, traction devices, and when satellite messengers are non-negotiable.',
  },
];

export default function BlogContact() {
  return (
    <section id="blog" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Blog */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Safety tips and field updates</h2>
            <p className="mt-3 max-w-xl text-slate-400">Insights from rescue coordinators, guides, and medics operating in the Himalayas.</p>
            <div className="mt-8 grid gap-4">
              {posts.map((p) => (
                <article key={p.title} className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition hover:border-sky-700/50">
                  <h3 className="text-lg font-medium group-hover:text-sky-300">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.excerpt}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-sm text-sky-300 group-hover:text-sky-200">
                    Read more <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-slate-400">Questions about coverage, devices, or rescue support? Our coordinators are here 24/7.</p>
            <form onSubmit={(e)=> e.preventDefault()} className="mt-6 grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Full name</label>
                  <input className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-600" placeholder="Alex Sherpa" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Email</label>
                  <input type="email" className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-600" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-400">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-600" placeholder="Tell us about your trip or question..." />
              </div>
              <button className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600">Send message</button>
            </form>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-400"/> support@himalayangdn.com</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-400"/> +977 1 555 0123</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-400"/> Kathmandu & Pokhara coordination centers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
