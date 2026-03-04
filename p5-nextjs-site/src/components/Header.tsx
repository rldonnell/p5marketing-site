'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-p5-bg-deep border-b border-white/5">
      <nav className="p5-wrap py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-p5-accent to-p5-accent-alt bg-clip-text text-transparent">
            P5
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-p5-accent transition">Home</Link>
          <Link href="/about" className="hover:text-p5-accent transition">About</Link>
          <div className="relative group">
            <button className="hover:text-p5-accent transition flex items-center gap-1">
              Markets <span>▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-p5-bg-surface border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
              <Link href="/wedding-venues" className="block px-4 py-2 hover:bg-white/5">Wedding Venues</Link>
              <Link href="/plastic-surgeons" className="block px-4 py-2 hover:bg-white/5">Plastic Surgeons</Link>
            </div>
          </div>
          <Link href="/how-it-works" className="hover:text-p5-accent transition">How It Works</Link>
          <Link href="/blog" className="hover:text-p5-accent transition">Blog</Link>
          <Link href="/contact" className="p5-btn p5-btn-primary">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-p5-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-p5-bg-surface border-t border-white/5">
          <div className="p5-wrap py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-p5-accent">Home</Link>
            <Link href="/about" className="hover:text-p5-accent">About</Link>
            <Link href="/wedding-venues" className="hover:text-p5-accent">Wedding Venues</Link>
            <Link href="/plastic-surgeons" className="hover:text-p5-accent">Plastic Surgeons</Link>
            <Link href="/how-it-works" className="hover:text-p5-accent">How It Works</Link>
            <Link href="/blog" className="hover:text-p5-accent">Blog</Link>
            <Link href="/contact" className="p5-btn p5-btn-primary">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
