import { useEffect, useMemo } from "react";

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 4,
    }));
  }, []);

  return (
    <div className="particles-bg" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            width: p.size + "px",
            height: p.size + "px",
            animationDelay: p.delay + "s",
            animationDuration: p.duration + "s",
          }}
        />
      ))}
    </div>
  );
}
