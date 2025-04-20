
import { useState, useEffect, useRef } from "react";

type MetricProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

const Metric = ({ value, label, prefix = "", suffix = "", duration = 2000 }: MetricProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const increment = end / 80; // Adjust for smoother/faster animation
    const startTime = performance.now();
    
    const animateCount = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const relativeProgress = runtime / duration;
      
      if (relativeProgress > 1) {
        setCount(end);
        return;
      }
      
      const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
      const easedProgress = easeOutQuad(relativeProgress);
      
      const currentCount = Math.min(
        Math.floor(easedProgress * end),
        end
      );
      
      setCount(currentCount);
      
      if (runtime < duration) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center counter-animation">
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="text-lg text-gray-600 mt-2">{label}</span>
    </div>
  );
};

export default function ImpactMetrics() {
  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Metric value={50} label="Youth Trained in 2024" />
          <Metric value={120} label="Tons of Compost Produced" suffix="+" />
          <Metric value={5} label="Hectares Regenerated" />
        </div>
      </div>
    </div>
  );
}
