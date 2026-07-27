import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  AppointmentPanel,
  PageHero,
  SiteShell,
} from "../site-components";
import { clinic } from "../site-data";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request a dental appointment with Dr. Noman Ahmed or Dr. Reena Kumari at Forever Smile Dental Clinic, Mission Chowk, Ranchi.",
};

export default function BookAppointmentPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Book your visit"
          title="Your healthier smile"
          italic="starts here."
          text="Tell us what you need and continue on WhatsApp for a quick appointment confirmation from the clinic."
        />
        <section className="section booking-page">
          <div className="container">
            <AppointmentPanel />
            <div className="booking-contact-grid">
              <a href={`tel:${clinic.phone}`} data-reveal>
                <span>
                  <Phone size={22} />
                </span>
                <div>
                  <small>Call the clinic</small>
                  <strong>{clinic.phoneDisplay}</strong>
                </div>
              </a>
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                data-reveal
              >
                <span>
                  <MessageCircle size={22} />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>Request an appointment</strong>
                </div>
              </a>
              <div data-reveal>
                <span>
                  <Clock3 size={22} />
                </span>
                <div>
                  <small>Clinic hours</small>
                  <strong>Open daily · Closes 7 PM</strong>
                </div>
              </div>
              <a href={clinic.maps} target="_blank" rel="noreferrer" data-reveal>
                <span>
                  <MapPin size={22} />
                </span>
                <div>
                  <small>Visit us</small>
                  <strong>Mission Chowk, Ranchi</strong>
                </div>
              </a>
            </div>
            <div className="location-card" data-reveal>
              <div>
                <span className="section-eyebrow">
                  <MapPin size={15} /> Convenient Ranchi location
                </span>
                <h2>Find Forever Smile Dental Clinic</h2>
                <p>{clinic.address}</p>
                <small>{clinic.landmark}</small>
              </div>
              <a href={clinic.maps} target="_blank" rel="noreferrer" className="button button-primary">
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
