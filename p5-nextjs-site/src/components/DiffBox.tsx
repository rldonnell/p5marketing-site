interface DiffBoxProps {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

export default function DiffBox({ leftTitle, leftItems, rightTitle, rightItems }: DiffBoxProps) {
  return (
    <div className="p5-diff-box">
      <div>
        <h3>{leftTitle}</h3>
        <ul>
          {leftItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{rightTitle}</h3>
        <ul>
          {rightItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
