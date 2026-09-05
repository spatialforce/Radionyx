import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ShoppingCart, Trash2 } from "lucide-react";
import { contactInfo, mainNavLinks, socialLinks } from "@/data/site";
import { cartCount, cartTotal, useCart } from "@/lib/cart";

function SocialIcon({ label }: { label: string }) {
  const map: Record<string, string> = {
    Facebook: "facebook",
    LinkedIn: "linkedin",
    Instagram: "instagram",
  };
  const name = map[label];
  if (!name) return null;
  return <img src={`/icons/${name}.png`} alt="" className="h-[17px] w-[17px] object-contain" />;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const count = cartCount(items);
  const total = cartTotal(items);

  useEffect(() => {
    useCart.persist.rehydrate();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 30);
      setProgress(h > 0 ? Math.min(100, (top / h) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="overflow-hidden bg-ink py-2.5">
        <div className="ticker-track gap-16 px-6">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 items-center gap-16 text-[13px] font-medium text-paper">
              <span className="flex items-center gap-2">
                <img src="/icons/location.png" alt="" className="h-4 w-4" />
                {contactInfo.address}
              </span>
              <span className="flex items-center gap-2">
                <img src="/icons/phone.png" alt="" className="h-4 w-4" />
                {contactInfo.phone}
              </span>
              <span className="flex items-center gap-2">
                <img src="/icons/mail.png" alt="" className="h-4 w-4" />
                {contactInfo.email}
              </span>
              <span className="flex items-center gap-2">
                <img src="/icons/clock.png" alt="" className="h-4 w-4" />
                {contactInfo.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-paper/95 backdrop-blur ${
          scrolled ? "shadow-[0_1px_0_0_rgba(26,26,24,0.15)]" : ""
        }`}
      >
        <div className="relative flex items-center justify-between gap-6 px-3 py-2 lg:px-5">
          <Link to="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="Radionyx Geospatial Solutions"
              className="h-16 w-auto object-contain sm:h-20 sm:w-36"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {mainNavLinks.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive(href) ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="absolute right-0 bottom-0 left-0 h-[3px] bg-ink/10">
            <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${progress}%` }} />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-paper-2 hover:-translate-y-0.5 hover:border-accent/40"
                  aria-label={label}
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setCartOpen((o) => !o)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink hover:bg-ink hover:text-paper"
                aria-label="Open enquiry cart"
              >
                <ShoppingCart size={16} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-paper">
                    {count}
                  </span>
                )}
              </button>
              {cartOpen && <CartPanel items={items} total={total} count={count} onRemove={remove} />}
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink"
            >
              Start a project
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setCartOpen((o) => !o)}
              className="relative flex h-11 w-11 items-center justify-center"
              aria-label="Open enquiry cart"
            >
              <ShoppingCart size={20} />
              {count > 0 && (
                <span className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] font-bold text-paper">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {cartOpen && (
          <div className="border-t border-ink/10 lg:hidden">
            <CartPanel items={items} total={total} count={count} onRemove={remove} mobile />
          </div>
        )}

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-ink/10 px-5 py-4 lg:hidden">
            {mainNavLinks.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`rounded-md px-2 py-3 text-base font-medium ${
                  isActive(href) ? "text-accent" : "text-ink"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Start a project
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

function CartPanel({
  items,
  total,
  count,
  onRemove,
  mobile = false,
}: {
  items: { id: string; title: string; price: number; qty: number }[];
  total: number;
  count: number;
  onRemove: (id: string) => void;
  mobile?: boolean;
}) {
  return (
    <div
      className={
        mobile
          ? "bg-paper px-4 py-4"
          : "absolute top-12 right-0 z-50 w-80 overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-xl"
      }
    >
      <p className="border-b border-ink/10 p-4 text-sm font-semibold text-ink">
        Enquiry cart {count > 0 && `(${count})`}
      </p>
      {items.length === 0 ? (
        <p className="p-4 text-sm text-ink/60">
          No services added yet. Browse the{" "}
          <Link to="/services" className="font-medium text-accent">
            services page
          </Link>
          .
        </p>
      ) : (
        <>
          <div className="max-h-64 divide-y divide-ink/10 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-3 p-4">
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="text-xs text-ink/50">
                    Qty {item.qty} · ${item.price} ea.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="text-ink/50 hover:text-ink"
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-ink/10 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-medium text-ink">Estimated total</span>
              <span className="font-semibold text-ink">${total}</span>
            </div>
            <Link
              to="/contact"
              className="block w-full rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-paper hover:bg-ink"
            >
              Request a quote
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
