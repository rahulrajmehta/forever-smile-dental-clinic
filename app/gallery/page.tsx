import type { Metadata } from "next";
import {
  ContactStrip,
  GalleryGrid,
  PageHero,
  SectionHeading,
  SiteShell,
} from "../site-components";

export const metadata: Metadata = {
  title: "Clinic Gallery",
  description:
    "Explore the real Forever Smile Dental Clinic in Ranchi—treatment rooms, equipment, digital diagnosis and patient care moments.",
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Clinic gallery"
          title="Real spaces."
          italic="Real care."
          text="Step inside Forever Smile and explore the clinic, treatment environment, digital technology and patient moments."
        />
        <section className="section gallery-page">
          <div className="container">
            <SectionHeading
              eyebrow="Inside Forever Smile"
              title="Designed for clean, comfortable dental care."
              text="Tap any image to see it larger."
            />
            <GalleryGrid />
          </div>
        </section>
        <ContactStrip />
      </main>
    </SiteShell>
  );
}
