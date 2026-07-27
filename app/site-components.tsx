"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  Baby,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleGauge,
  Clock3,
  Crown,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { clinic, gallery, navItems, reviews, services, type Service } from "./site-data";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Forever Smile Dental Clinic home">
      <span className="original-logo-frame">
        <img
          src="/assets/original-logo-wall.jpg"
          alt="Forever Smile Dental Clinic original logo"
        />
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Clock3 size={14} /> Open today · Closes 7:00 PM
          </span>
          <a href={`tel:${clinic.phone}`}>
            <Phone size={14} /> {clinic.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                className={pathname === href ? "active" : undefined}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/book-appointment" className="button button-primary header-cta">
            <CalendarDays size={17} />
            Book visit
          </Link>
          <button
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu />
          </button>
        </div>
      </header>
      <aside className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X />
        </button>
        <Brand />
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              onClick={() => setOpen(false)}
              className={pathname === href ? "active" : undefined}
            >
              {label} <ArrowRight size={17} />
            </Link>
          ))}
        </nav>
        <a href={`tel:${clinic.phone}`} className="button button-outline">
          <Phone size={17} /> Call clinic
        </a>
      </aside>
      {open && (
        <button className="menu-backdrop" onClick={() => setOpen(false)} aria-label="Close menu" />
      )}
    </>
  );
}

function MotionProvider() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <MotionProvider />
      <Header />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}

export function FloatingActions() {
  const whatsapp = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    "Hello Forever Smile Dental Clinic, I would like to book an appointment.",
  )}`;

  return (
    <div className="floating-actions" aria-label="Quick contact">
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="float-button whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={21} />
        <span>WhatsApp</span>
      </a>
      <a href={`tel:${clinic.phone}`} className="float-button call" aria-label="Call clinic">
        <Phone size={20} />
        <span>Call now</span>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Gentle, modern dental care in Ranchi—built around clear communication,
            thoughtful treatment and lasting smiles.
          </p>
          <div className="footer-rating">
            <span>5.0</span>
            <span className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <small>{clinic.reviewsCount} Google reviews</small>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems.slice(1).map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Dental care</h2>
          <div className="footer-links">
            {services.slice(0, 5).map((service) => (
              <Link href="/services" key={service.title}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>Visit us</h2>
          <address>
            <span>
              <MapPin size={17} /> {clinic.address}
            </span>
            <a href={`tel:${clinic.phone}`}>
              <Phone size={17} /> {clinic.phoneDisplay}
            </a>
            <span>
              <Clock3 size={17} /> Open daily · Closes 7:00 PM
            </span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Forever Smile Dental Clinic. All rights reserved.</span>
        <span>Made for healthier, happier smiles.</span>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`} data-reveal>
      <span className="section-eyebrow">
        <Sparkles size={14} /> {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  text,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-orb" />
      <div className="container page-hero-inner">
        <div data-reveal className="in-view">
          <span className="section-eyebrow">
            <Star size={14} fill="currentColor" /> {eyebrow}
          </span>
          <h1>
            {title} <em>{italic}</em>
          </h1>
          <p>{text}</p>
        </div>
        <Link href="/" className="back-home">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}

export function ServiceCard({
  service,
  expanded = false,
}: {
  service: Service;
  expanded?: boolean;
}) {
  const Icon = {
    shield: ShieldCheck,
    crown: Crown,
    sparkles: Sparkles,
    activity: Activity,
    gauge: CircleGauge,
    scan: ScanLine,
    family: Baby,
    heart: HeartPulse,
  }[service.icon];
  return (
    <article className={`service-card ${expanded ? "expanded" : ""}`} data-reveal>
      <div className="service-media">
        <img src={service.image} alt={`${service.title} at Forever Smile Dental Clinic`} loading="lazy" />
        <span className="service-media-shade" />
        <span className="service-icon">
          <Icon size={24} />
        </span>
        <span className="service-number">{service.number}</span>
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{expanded ? service.detail : service.short}</p>
        <Link href="/book-appointment">
          Book consultation <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="review-card" data-reveal>
      <div className="review-card-top">
        <span className="review-stars" aria-label="5 stars">
          ★★★★★
        </span>
        <Quote size={24} />
      </div>
      <p>“{review.text}”</p>
      <div className="review-author">
        <span>{review.name.charAt(0)}</span>
        <div>
          <strong>{review.name}</strong>
          <small>Google review · {review.tag}</small>
        </div>
      </div>
    </article>
  );
}

export function ReviewsGrid({ limit }: { limit?: number }) {
  const items = limit ? reviews.slice(0, limit) : reviews;
  return (
    <div className="reviews-grid">
      {items.map((review) => (
        <ReviewCard review={review} key={review.name} />
      ))}
    </div>
  );
}

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const handle = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % items.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [active, items.length]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((image, index) => (
          <button
            className="gallery-item"
            key={image.src}
            onClick={() => setActive(index)}
            aria-label={`Open photo: ${image.alt}`}
            data-reveal
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>
              <small>{image.category}</small>
              <strong>View photo</strong>
            </span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image">
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close photo">
            <X />
          </button>
          <button
            className="lightbox-arrow previous"
            onClick={() => setActive((active - 1 + items.length) % items.length)}
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <figure>
            <img src={items[active].src} alt={items[active].alt} />
            <figcaption>
              {items[active].category} · {items[active].alt}
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow next"
            onClick={() => setActive((active + 1) % items.length)}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

export function AppointmentPanel({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const service = String(form.get("service") || "Dental consultation");
    const date = String(form.get("date") || "Flexible");
    const message = [
      "Hello Forever Smile Dental Clinic, I would like to request an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Treatment: ${service}`,
      `Preferred date: ${date}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <div className={`appointment-panel ${compact ? "compact" : ""}`} data-reveal>
      <div className="appointment-copy">
        <span className="section-eyebrow">
          <CalendarDays size={15} /> Simple appointment request
        </span>
        <h2>
          Let’s plan your <em>healthier smile.</em>
        </h2>
        <p>
          Share a few details and continue on WhatsApp. The clinic can confirm a suitable
          time and guide you on the next step.
        </p>
        <div className="appointment-points">
          <span>
            <Check size={16} /> Fast WhatsApp confirmation
          </span>
          <span>
            <Check size={16} /> Clear treatment guidance
          </span>
          <span>
            <Check size={16} /> No online payment required
          </span>
        </div>
      </div>
      <form onSubmit={submit} className="appointment-form">
        <div className="field">
          <label htmlFor="appointment-name">Your name</label>
          <input id="appointment-name" name="name" placeholder="Enter full name" required />
        </div>
        <div className="field">
          <label htmlFor="appointment-phone">Phone number</label>
          <input
            id="appointment-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+91"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="appointment-service">Treatment or concern</label>
          <select id="appointment-service" name="service" defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option value={service.title} key={service.title}>
                {service.title}
              </option>
            ))}
            <option value="General dental consultation">General consultation</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="appointment-date">Preferred date</label>
          <input id="appointment-date" name="date" type="date" />
        </div>
        <button type="submit" className="button button-primary form-submit">
          Continue on WhatsApp <Send size={17} />
        </button>
        {sent && (
          <p className="form-note success">
            WhatsApp opened with your details. Send the message to request your slot.
          </p>
        )}
        <p className="form-note">For urgent tooth pain, call the clinic directly.</p>
      </form>
    </div>
  );
}

export function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="container contact-strip-grid">
        <div>
          <span className="section-eyebrow light">
            <MapPin size={15} /> Mission Chowk, Ranchi
          </span>
          <h2>Expert dental care, closer than you think.</h2>
          <p>{clinic.address}</p>
        </div>
        <div className="contact-strip-actions">
          <a className="button button-light" href={clinic.maps} target="_blank" rel="noreferrer">
            Get directions <ArrowRight size={17} />
          </a>
          <a className="button button-outline-light" href={`tel:${clinic.phone}`}>
            <Phone size={17} /> {clinic.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
