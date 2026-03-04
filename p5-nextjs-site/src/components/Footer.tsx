import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-p5-bg-surface border-t border-white/5 py-12 mt-24">
      <div className="p5-wrap">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold mb-4">P5 Marketing</h4>
            <p className="text-p5-text-dim text-sm">
              Intent Data Marketing Agency for High-Trust, High-Value Businesses
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-p5-text-dim">
              <li><Link href="/how-it-works" className="hover:text-p5-accent">How It Works</Link></li>
              <li><Link href="/markets" className="hover:text-p5-accent">Markets</Link></li>
              <li><Link href="/blog" className="hover:text-p5-accent">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-p5-text-dim">
              <li><Link href="/about" className="hover:text-p5-accent">About</Link></li>
              <li><Link href="/contact" className="hover:text-p5-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-p5-text-dim">
              <li><Link href="/privacy" className="hover:text-p5-accent">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-p5-accent">Terms</Link></li>
              <li><Link href="/do-not-sell" className="hover:text-p5-accent">Do Not Sell</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-p5-text-dim">
          <p>&copy; {currentYear} P5 Marketing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-p5-accent">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-p5-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
