"use client";

import AnimatedSection from "@/components/AnimatedSection";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  return (
    <AnimatedSection className={className} delay={delay}>
      {children}
    </AnimatedSection>
  );
}
