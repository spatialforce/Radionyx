import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Plus, X, ZoomIn } from "lucide-react";
import type { CatalogService } from "@/data/site";
import { useCart } from "@/lib/cart";

export function ServiceLightbox({
  service,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  service: CatalogService;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const add = useCart((s) => s.add);
  const items = useCart((s) => s.items);
  const inCart = items.some((i) => i.id === service.id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-stretch bg-ink/92 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lb-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative z-10 m-3 flex w-full flex-col overflow-hidden rounded-xl bg-paper shadow-2xl lg:m-6 lg:flex-row">
        <div className="relative flex min-h-[42vh] flex-1 items-center justify-center bg-ink lg:min-h-0">
          <img
            src={service.image}
            alt={service.caption}
            className="max-h-[52vh] w-full object-contain lg:max-h-[calc(100vh-3rem)]"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 text-[11px] font-medium tracking-wide text-paper uppercase">
            <ZoomIn size={12} />
            Full map
          </div>
          {hasPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink hover:bg-accent hover:text-paper"
              aria-label="Previous service"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {hasNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink hover:bg-accent hover:text-paper"
              aria-label="Next service"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        <aside className="flex w-full flex-col overflow-y-auto p-6 lg:w-[420px] lg:shrink-0 lg:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                {service.category}
              </p>
              <h2 id="lb-title" className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                {service.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 hover:bg-ink hover:text-paper"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <p className="border-l-2 border-accent pl-3 text-sm leading-6 text-ink/70 italic">
            {service.caption}
          </p>
          <p className="mt-5 text-sm leading-7 text-ink/75">{service.description}</p>

          <div className="mt-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
              What this includes
            </p>
            <ul className="mt-3 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
              Typical outputs
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.outputs.map((o) => (
                <span
                  key={o}
                  className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs text-ink/80"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto border-t border-ink/10 pt-5">
            <p className="text-[11px] tracking-[0.14em] text-muted uppercase">Starting from</p>
            <p className="mt-1 text-3xl font-semibold text-ink">${service.price}</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => add(service.id, service.title, service.price)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-paper hover:bg-accent"
              >
                {inCart ? (
                  <>
                    <Check size={16} /> In cart
                  </>
                ) : (
                  <>
                    <Plus size={16} /> Add to enquiry
                  </>
                )}
              </button>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                onClick={onClose}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-ink/20 px-4 py-3 text-sm font-semibold text-ink hover:border-ink"
              >
                Full details
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>,
    document.body,
  );
}
