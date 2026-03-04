'use client';

import { useState } from 'react';

interface FAQProps {
  items: Array<{ question: string; answer: string }>;
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="p5-faq-list">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`p5-faq-item ${openIndex === idx ? 'p5-open' : ''}`}
        >
          <button
            className="p5-faq-q w-full"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span>{item.question}</span>
            <span className="p5-faq-icon">+</span>
          </button>
          <div className="p5-faq-a">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
