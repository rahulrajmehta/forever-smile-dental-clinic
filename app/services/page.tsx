import type { Metadata } from "next";
import { Check, MessageCircle, Search, Stethoscope } from "lucide-react";
import {
  AppointmentPanel,
  ContactStrip,
  PageHero,
  SectionHeading,
  ServiceCard,
  SiteShell,
} from "../site-components";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore root canal treatment, zirconia crowns, scaling, cosmetic fillings, wisdom tooth care and family dentistry at Forever Smile Dental Clinic.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Our dental services"
          title="Complete care for"
          italic="every smile."
          text="From tooth pain and routine cleaning to restorative treatments, every service is planned around clarity, comfort and long-term oral health."
        />
        <section className="section services-page">
          <div className="container">
            <SectionHeading
              eyebrow="Treatments"
              title="Focused solutions. Thoughtful treatment."
              text="Choose the service closest to your concern, or book a general consultation if you are unsure."
            />
            <div className="services-grid expanded-grid">
              {services.map((service) => (
                <ServiceCard service={service} expanded key={service.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <SectionHeading
              eyebrow="Your visit"
              title="A clear, comfortable path to care."
              text="No confusing steps—just attentive assessment, a transparent plan and careful treatment."
              align="center"
            />
            <div className="process-grid">
              {[
                {
                  number: "01",
                  Icon: MessageCircle,
                  title: "Share your concern",
                  text: "Tell the clinic what you are experiencing and choose a convenient time.",
                },
                {
                  number: "02",
                  Icon: Search,
                  title: "Understand the cause",
                  text: "The doctor examines, uses digital diagnosis where needed and explains the findings.",
                },
                {
                  number: "03",
                  Icon: Stethoscope,
                  title: "Begin the right care",
                  text: "Receive a clear treatment recommendation focused on comfort and preservation.",
                },
              ].map(({ number, Icon, title, text }) => (
                <article data-reveal key={number}>
                  <span>{number}</span>
                  <Icon size={26} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <small>
                    <Check size={14} /> Clearly explained
                  </small>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section appointment-section">
          <div className="container">
            <AppointmentPanel compact />
          </div>
        </section>
        <ContactStrip />
      </main>
    </SiteShell>
  );
}
