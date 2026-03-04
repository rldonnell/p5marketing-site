interface StatBarProps {
  stats: Array<{ num: string; label: string }>;
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div className="p5-stat-bar">
      {stats.map((stat, idx) => (
        <div key={idx} className="p5-stat">
          <div className="p5-stat-num">{stat.num}</div>
          <div className="p5-stat-lbl">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
