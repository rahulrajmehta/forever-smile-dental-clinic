import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, HeartHandshake, ScanLine, ShieldCheck } from "lucide-react";
import {
  ContactStrip,
  PageHero,
  SectionHeading,
  SiteShell,
} from "../site-components";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Dr. Noman Ahmed and Dr. Reena Kumari and discover the comfort-first approach at Forever Smile Dental Clinic in Ranchi.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="About Forever Smile"
          title="Care that feels"
          italic="personal."
          text="A modern dental clinic in Ranchi built on thoughtful diagnosis, clear communication and the belief that every patient deserves to feel comfortable."
        />

        <section className="section story-section">
          <div className="container story-grid">
            <div className="story-images" data-reveal>
              <img src="/assets/clinic-reception.jpg" alt="Forever Smile reception" />
              <img src="/assets/clinic-brand.jpg" alt="Forever Smile Dental Clinic identity" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our philosophy"
                title="Modern dentistry with a human touch."
                text="Forever Smile brings professional dental care into a clean, welcoming environment. Every visit starts by listening to your concern and explaining what the doctor sees—so you can make an informed decision without confusion."
              />
              <div className="prose-block" data-reveal>
                <p>
                  Patients repeatedly mention the clinic’s cleanliness, helpful staff, careful
                  explanations and smooth treatment experience. That trust shapes the way the
                  clinic works every day.
                </p>
                <p>
                  From routine scaling and cosmetic fillings to RCT, crowns and wisdom tooth
                  care, the focus stays on preserving oral health while making treatment as calm
                  and comfortable as possible.
                </p>
              </div>
              <Link href="/book-appointment" className="button button-primary">
                Plan your visit <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <SectionHeading
              eyebrow="Why patients choose us"
              title="Confidence before, during and after treatment."
              text="The essentials of trustworthy dental care, made visible at every step."
              align="center"
            />
            <div className="values-grid">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Hygiene-first setting",
                  text: "A neat, clean and well-equipped treatment environment.",
                },
                {
                  Icon: ScanLine,
                  title: "Clear diagnosis",
                  text: "Digital visuals and simple explanations help patients understand.",
                },
                {
                  Icon: HeartHandshake,
                  title: "Respectful care",
                  text: "Patient, friendly guidance for children, adults and seniors.",
                },
              ].map(({ Icon, title, text }) => (
                <article key={title} data-reveal>
                  <Icon size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span>
                    <Check size={15} /> Patient-focused
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section doctors-page">
          <div className="container">
            <SectionHeading
              eyebrow="Your dental team"
              title="Two doctors. One shared standard of care."
              text="Professional expertise matched with an approachable, explanatory style."
            />
            <div className="doctor-profiles">
              <article data-reveal>
                <div className="profile-image">
                  <img src="/assets/doctor-noman.jpg" alt="Dr. Noman Ahmed at Forever Smile" />
                </div>
                <div>
                  <span>Dental surgeon</span>
                  <h2>Dr. Noman Ahmed</h2>
                  <p>
                    Dr. Noman is known for taking a calm, structured approach to dental concerns.
                    Patients value the way complex treatment is explained clearly before care
                    begins.
                  </p>
                  <ul>
                    <li>
                      <Check size={16} /> Careful diagnosis
                    </li>
                    <li>
                      <Check size={16} /> Clear treatment planning
                    </li>
                    <li>
                      <Check size={16} /> Patient-first communication
                    </li>
                  </ul>
                </div>
              </article>
              <article data-reveal>
                <div className="profile-image">
                  <img src="/assets/doctor-reena.jpg" alt="Dr. Reena Kumari at Forever Smile" />
                </div>
                <div>
                  <span>Dental surgeon</span>
                  <h2>Dr. Reena Kumari</h2>
                  <p>
                    Dr. Reena is repeatedly appreciated by patients for being professional, kind
                    and cooperative—explaining each step and helping them feel comfortable
                    throughout treatment.
                  </p>
                  <ul>
                    <li>
                      <Check size={16} /> Gentle treatment approach
                    </li>
                    <li>
                      <Check size={16} /> RCT and restorative care
                    </li>
                    <li>
                      <Check size={16} /> Friendly follow-up guidance
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
        <ContactStrip />
      </main>
    </SiteShell>
  );
}
