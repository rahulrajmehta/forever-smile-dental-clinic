import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import {
  AppointmentPanel,
  ContactStrip,
  GalleryGrid,
  ReviewsGrid,
  SectionHeading,
  ServiceCard,
  SiteShell,
} from "./site-components";
import { clinic, services } from "./site-data";

const trustServices = [
  {
    title: "Painless Root Canal",
    text: "Precise, comfort-first RCT and restoration for lasting relief.",
    Icon: ShieldCheck,
  },
  {
    title: "Smile Restoration",
    text: "Natural-looking cosmetic fillings, caps and zirconia crowns.",
    Icon: Sparkles,
  },
  {
    title: "Oral Care & Scaling",
    text: "Gentle cleaning and preventive care for a healthier smile.",
    Icon: Award,
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <Star size={15} fill="currentColor" />
                5.0 rated dental clinic in Ranchi
              </div>
              <h1>
                Expert dental care.
                <span>A smile that stays.</span>
              </h1>
              <p className="hero-lead">
                Modern, compassionate dentistry by <strong>Dr. Noman Ahmed</strong> and{" "}
                <strong>Dr. Reena Kumari</strong>—with clear guidance, gentle treatment and
                care that feels personal.
              </p>
              <div className="hero-actions">
                <Link href="/book-appointment" className="button button-primary button-large">
                  Book your appointment <ArrowRight size={18} />
                </Link>
                <a href={`tel:${clinic.phone}`} className="button button-ghost button-large">
                  <Phone size={18} /> Call now
                </a>
              </div>
              <div className="hero-assurance">
                <span>
                  <Check size={15} /> Hygienic clinic
                </span>
                <span>
                  <Check size={15} /> Digital diagnosis
                </span>
                <span>
                  <Check size={15} /> Family-friendly care
                </span>
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <div className="hero-image-wrap">
                <img src="/assets/doctor-reena.jpg" alt="Doctor at Forever Smile Dental Clinic" />
                <div className="image-sheen" />
              </div>
              <div className="rating-card">
                <div className="rating-icon">
                  <Star size={19} fill="currentColor" />
                </div>
                <div>
                  <strong>5.0 Google rating</strong>
                  <span>Trusted by 182 patients</span>
                </div>
              </div>
              <div className="experience-card">
                <span>Care built around</span>
                <strong>Comfort & clarity</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container">
            {trustServices.map(({ title, text, Icon }) => (
              <article key={title}>
                <span className="trust-icon">
                  <Icon size={23} />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-preview">
          <div className="container about-grid">
            <div className="about-collage" data-reveal>
              <img
                className="about-main-image"
                src="/assets/clinic-reception.jpg"
                alt="Forever Smile Dental Clinic reception"
                loading="lazy"
              />
              <img
                className="about-small-image"
                src="/assets/clinic-brand.jpg"
                alt="Forever Smile Dental Clinic brand wall"
                loading="lazy"
              />
              <div className="about-badge">
                <strong>5.0</strong>
                <span>Patient rating</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="About Forever Smile"
                title="Thoughtful dentistry. Personal attention."
                text="A modern clinic where careful diagnosis, clear explanations and gentle treatment come together—so every patient feels informed and comfortable."
              />
              <div className="feature-list" data-reveal>
                <div>
                  <span>01</span>
                  <p>
                    <strong>Clear before care</strong>
                    Every treatment is explained in simple language before the next step.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Hygiene you can see</strong>
                    A neat, well-equipped clinical setting for confident dental visits.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Comfort at every stage</strong>
                    Patient, respectful care for routine visits and complex dental concerns.
                  </p>
                </div>
              </div>
              <Link href="/about" className="text-link" data-reveal>
                Discover our clinic <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section services-preview">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="Dental services"
                title="Everything your smile needs, under one roof."
                text="Focused treatments, thoughtful planning and the right guidance for long-term oral health."
              />
              <Link href="/services" className="button button-ghost">
                View all services <ArrowRight size={17} />
              </Link>
            </div>
            <div className="services-grid">
              {services.slice(0, 6).map((service) => (
                <ServiceCard service={service} key={service.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section doctors-preview">
          <div className="container">
            <SectionHeading
              eyebrow="Meet the doctors"
              title="Expert hands. A genuinely caring approach."
              text="Led by two trusted dentists who take time to understand, explain and treat with care."
              align="center"
            />
            <div className="doctors-grid">
              <article className="doctor-card" data-reveal>
                <div className="doctor-image doctor-image-noman">
                  <img src="/assets/doctor-noman.jpg" alt="Dr. Noman Ahmed at the clinic" loading="lazy" />
                </div>
                <div className="doctor-copy">
                  <span>Dental surgeon</span>
                  <h3>Dr. Noman Ahmed</h3>
                  <p>
                    Known for a calm, clear approach to diagnosis and treatment planning,
                    helping patients feel confident about every step.
                  </p>
                  <Link href="/book-appointment">
                    Book consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
              <article className="doctor-card" data-reveal>
                <div className="doctor-image doctor-image-reena">
                  <img src="/assets/doctor-reena.jpg" alt="Dr. Reena Kumari at the clinic" loading="lazy" />
                </div>
                <div className="doctor-copy">
                  <span>Dental surgeon</span>
                  <h3>Dr. Reena Kumari</h3>
                  <p>
                    Appreciated by patients for professional, kind and cooperative care—with
                    clear explanations throughout treatment.
                  </p>
                  <Link href="/book-appointment">
                    Book consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section testimonials-preview">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="Patient stories"
                title="Real experiences. Real reasons to smile."
                text="A few words from patients who chose Forever Smile for their dental care."
              />
              <Link href="/testimonials" className="button button-ghost">
                Read more reviews <ArrowRight size={17} />
              </Link>
            </div>
            <ReviewsGrid limit={3} />
          </div>
        </section>

        <section className="section gallery-preview">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="Inside our clinic"
                title="A closer look at care, comfort and technology."
                text="Explore the real Forever Smile environment, treatment spaces and patient moments."
              />
              <Link href="/gallery" className="button button-ghost">
                Explore gallery <ArrowRight size={17} />
              </Link>
            </div>
            <GalleryGrid limit={6} />
          </div>
        </section>

        <section className="section appointment-section">
          <div className="container">
            <AppointmentPanel />
          </div>
        </section>

        <ContactStrip />
      </main>
    </SiteShell>
  );
}
