import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MonoImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-ink", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Kicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-xs font-semibold uppercase tracking-[0.16em]",
        light ? "text-paper/50" : "text-muted",
      )}
    >
      {children}
    </p>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div className="pointer-events-none absolute -right-40 top-16 h-44 w-[620px] rotate-[-18deg] rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute -right-24 top-44 h-32 w-[430px] rotate-[-18deg] rounded-full border border-paper/10 bg-paper/[0.03]" />
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <Kicker light>{kicker}</Kicker>
        <h1 className="font-display max-w-[860px] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-[640px] text-base leading-relaxed text-paper/70 lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Capsule({
  className = "",
  dark = false,
  filled = false,
}: {
  className?: string;
  dark?: boolean;
  filled?: boolean;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        border: `1px solid ${dark ? "rgba(241,241,236,0.11)" : "rgba(26,26,24,0.10)"}`,
        backgroundColor: filled
          ? dark
            ? "rgba(241,241,236,0.025)"
            : "rgba(26,26,24,0.018)"
          : "transparent",
      }}
    />
  );
}
