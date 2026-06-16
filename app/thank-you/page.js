import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Thank You | Analogue IT Solutions",
  description: "Thank you for contacting Analogue IT Solutions. Our team will connect with you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-card">
        <div className="thank-you-logo">
          <Image src="/assets/Navbar/Analogue-navbar-logo.svg" alt="Analogue IT Solutions logo" width={190} height={52} priority />
        </div>

        <div className="success-orbit" aria-hidden="true">
          <span className="success-ring" />
          <span className="success-pulse" />
          <div className="success-icon">
            <Check size={48} strokeWidth={3} />
          </div>
        </div>

        <p className="eyebrow">Request Received</p>
        <h1>Thank you for reaching out.</h1>
        <p className="thank-you-copy">
          Your details have been submitted successfully. Our team will review your requirement and connect with you soon.
        </p>

        <div className="thank-you-actions">
          <Link className="primary-btn" href="/">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <a className="secondary-thank-btn" href="https://www.analogueitsolutions.com/" target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Visit Our Website
          </a>
        </div>
      </section>
    </main>
  );
}
