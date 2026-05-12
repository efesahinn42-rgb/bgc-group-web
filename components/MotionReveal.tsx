import type { CSSProperties, ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
  y?: number;
};

export default function MotionReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: MotionRevealProps) {
  const stil = {
    "--reveal-delay": `${delay}s`,
    "--reveal-offset": `${y}px`,
  } as CSSProperties;

  return (
    <div
      className={["reveal-up", className].filter(Boolean).join(" ")}
      style={stil}
    >
      {children}
    </div>
  );
}
