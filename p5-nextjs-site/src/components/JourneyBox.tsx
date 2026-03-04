interface JourneyBoxProps {
  intro: string;
  steps: string[];
}

export default function JourneyBox({ intro, steps }: JourneyBoxProps) {
  return (
    <div className="p5-journey-box">
      <p className="text-p5-text-dim mb-4">{intro}</p>
      <div className="p5-journey-steps">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="p5-journey-step">{step}</span>
            {idx < steps.length - 1 && <span className="p5-journey-arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
