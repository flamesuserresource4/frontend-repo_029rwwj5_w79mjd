import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Map, Satellite, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Nav */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/20 ring-1 ring-sky-500/40">
              <Shield className="h-6 w-6 text-sky-400" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Himalayan Guardian Nepal</p>
              <p className="text-xs text-slate-400">Tourist Safety & Rescue</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="#pricing" className="text-slate-300 hover:text-white">Pricing</a>
            <a href="#blog" className="text-slate-300 hover:text-white">Blog</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/60">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button className="hidden rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-600 md:block">
              Create account
            </button>
          </div>
        </nav>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-sky-300 ring-1 ring-sky-700/40">
            <Satellite className="h-3.5 w-3.5" />
            Real-time GPS & SOS coverage across Nepal
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Safety that moves with you across the Himalayas
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Comprehensive insurance, rescue coordination, and satellite-enabled devices for trekkers, climbers, and travelers in Nepal.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#pricing" className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600">
              Explore plans
            </a>
            <a href="#services" className="rounded-lg border border-slate-700/70 px-5 py-3 text-sm text-slate-200 hover:bg-slate-800/70">
              How it works
            </a>
          </div>
        </div>
        {/* Lightweight Auth Card */}
        <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 backdrop-blur">
          <div className="mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-sky-400" />
            <p className="text-sm font-medium text-slate-200">Secure Portal</p>
          </div>
          <form onSubmit={(e)=> e.preventDefault()} className="space-y-3">
            <div>
              <label className="mb-1 block text-xs text-slate-400">Email</label>
              <input type="email" required className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-600" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">Password</label>
              <input type="password" required className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-600" placeholder="••••••••" />
            </div>
            <button className="mt-2 w-full rounded-lg bg-sky-500 py-2.5 text-sm font-medium text-white hover:bg-sky-600">Sign in</button>
            <p className="text-center text-xs text-slate-400">
              New here? <a href="#pricing" className="text-sky-300 hover:text-sky-200">Create your account</a>
            </p>
          </form>
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2"><Map className="h-4 w-4 text-sky-400"/> Nationwide coverage</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-sky-400"/> Policy-backed rescues</div>
          </div>
        </div>
      </div>
    </section>
  );
}
