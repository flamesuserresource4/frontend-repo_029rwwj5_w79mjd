import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BlogContact from './components/BlogContact';

function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Himalayan Guardian Nepal. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <Pricing />
      <BlogContact />
      <Footer />
    </div>
  );
}
