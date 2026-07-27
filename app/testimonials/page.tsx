import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";
import {
  ContactStrip,
  PageHero,
  ReviewsGrid,
  SectionHeading,
  SiteShell,
} from "../site-components";
import { clinic } from "../site-data";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read genuine patient experiences for RCT, crowns, extractions, scaling and dental care at Forever Smile Dental Clinic in Ranchi.",
};

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow={`${clinic.rating} Google rating`}
          title="Trusted by patients."
          italic="Remembered for care."
          text="Real patient experiences that highlight gentle treatment, clear explanations, clinic hygiene and the confidence to smile again."
        />
        <section className="section review-summary-section">
          <div className="container review-summary">
            <div className="review-score" data-reveal>
              <Star size={32} fill="currentColor" />
              <strong>{clinic.rating}</strong>
              <span className="stars">★★★★★</span>
              <p>Based on {clinic.reviewsCount} Google reviews</p>
            </div>
            <div className="review-values">
              {[
                {
                  Icon: HeartHandshake,
                  title: "Kind, patient doctors",
                  text: "Frequently mentioned in patient feedback.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Clean, hygienic clinic",
                  text: "A reassuring environment for treatment.",
                },
                {
                  Icon: Sparkles,
                  title: "Clear explanations",
                  text: "Patients understand what happens next.",
                },
              ].map(({ Icon, title, text }) => (
                <article key={title} data-reveal>
                  <Icon size={22} />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section all-reviews-section">
          <div className="container">
            <SectionHeading
              eyebrow="Google reviews"
              title="In their own words."
              text="Selected feedback shared by patients of Forever Smile Dental Clinic."
            />
            <ReviewsGrid />
          </div>
        </section>
        <ContactStrip />
      </main>
    </SiteShell>
  );
}
