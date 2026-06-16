"use client";

import Image from "next/image";
import { useState } from "react";
import { BriefcaseBusiness, Camera, Mail, MapPin, Phone, Share2, Video } from "lucide-react";

const services = [
  {
    title: "App Development",
    image: "/assets/service-icons/group-mobiles.png",
    copy:
      "Android, iOS, and cross-platform apps with secure architecture, smooth performance, and user-friendly experiences.",
  },
  {
    title: "Website Development",
    image: "/assets/service-icons/webdesign-img.png",
    copy:
      "Responsive business websites, ecommerce platforms, portals, and custom web solutions designed for speed and trust.",
  },
  {
    title: "UI UX Design",
    image: "/assets/service-icons/uiux-img.png",
    copy:
      "Modern wireframes, prototypes, and design systems that make digital products simple, engaging, and memorable.",
  },
  {
    title: "Digital Marketing",
    image: "/assets/service-icons/digitalmarketing-img.png",
    copy:
      "SEO, social media, paid advertising, and content campaigns shaped around measurable growth and stronger visibility.",
  },
  {
    title: "GPS Tracking",
    image: "/assets/service-icons/gps-img.png",
    copy:
      "Real-time tracking, route optimization, fuel monitoring, and reporting dashboards for fleets and field operations.",
  },
];

const projects = [
  { title: "Kickff", image: "/assets/Product-Images/kickff-product-img.png" },
  { title: "Careesteem", image: "/assets/Product-Images/careesteem-product-img.png" },
  { title: "Vitalmile", image: "/assets/Product-Images/vitalmile-product-img.png" },
  { title: "Educonnect", image: "/assets/Product-Images/educonnect-product-img.png" },
];

const stats = [
  { value: "500+", label: "Successful Projects" },
  { value: "500+", label: "Happy Clients" },
  { value: "80+", label: "Skilled Experts" },
  { value: "24/7", label: "Support Timings" },
];

const footerLinks = ["About Us", "Our Projects", "Careers", "Contact Us", "Blogs"];
const footerServices = [
  "Mobile App Development",
  "Web Development",
  "UI/UX Development",
  "Digital Marketing",
  "GPS Vehicle Tracking",
];

const socialLinks = [
  { label: "Facebook", Icon: Share2, href: "https://www.facebook.com/analogueitsolutions" },
  { label: "Instagram", Icon: Camera, href: "https://www.instagram.com/analogueitsolutions/" },
  { label: "LinkedIn", Icon: BriefcaseBusiness, href: "https://www.linkedin.com/company/analogueitsolutions/" },
  { label: "YouTube", Icon: Video, href: "https://www.youtube.com/@AnalogueITSolutions" },
];

const process = [
  {
    title: "Requirements",
    image: "/assets/puzzleimages/step1.png",
    copy: "We understand your vision, business goals, users, challenges, and roadmap before planning the product.",
  },
  {
    title: "Strategy",
    image: "/assets/puzzleimages/step2.png",
    copy: "We define features, technology choices, timelines, and success measures with practical clarity.",
  },
  {
    title: "Design",
    image: "/assets/puzzleimages/step3.png",
    copy: "Our team shapes interface flows, visual systems, and prototypes that feel intuitive for real users.",
  },
  {
    title: "Development",
    image: "/assets/puzzleimages/step4.png",
    copy: "We build scalable, secure, performance-focused applications with regular reviews and collaboration.",
  },
  {
    title: "Launch & Support",
    image: "/assets/puzzleimages/step5.png",
    copy: "We test, deploy, monitor, and keep improving the product after release.",
  },
];

function ConsultationForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      event.currentTarget.reset();
      setSubmitted(false);
    }, 2600);
  }

  return (
    <form className={compact ? "consult-form compact" : "consult-form"} onSubmit={handleSubmit}>
      <label>
        <span>Name*</span>
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        <span>Phone*</span>
        <input type="tel" name="phone" placeholder="+91 00000 00000" required />
      </label>
      <label>
        <span>Email*</span>
        <input type="email" name="email" placeholder="you@company.com" required />
      </label>
      <label>
        <span>Request for Services?*</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>Select service</option>
          <option>Mobile App Development</option>
          <option>Website Development</option>
          <option>UI/UX Design</option>
          <option>Digital Marketing</option>
          <option>GPS Tracking</option>
        </select>
      </label>
      <label>
        <span>What&apos;s Your Budget?*</span>
        <select name="budget" required defaultValue="">
          <option value="" disabled>Select budget</option>
          <option>INR 1 Lakh - 1.5 Lakhs</option>
          <option>INR 1.5 Lakhs - 2.5 Lakhs</option>
          <option>INR 2.5 Lakhs - 5 Lakhs</option>
          <option>INR 5 Lakhs and above</option>
        </select>
      </label>
      <button type="submit" disabled={submitted}>
        {submitted ? "Thank you! We will contact you soon." : "Submit"}
      </button>
    </form>
  );
}

export default function Home() {

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Analogue IT Solutions">
          <Image src="/assets/Navbar/Analogue-navbar-logo.svg" alt="Analogue IT Solutions logo" width={190} height={52} priority />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href="tel:+918919088163">
          <span>For Business</span>
          <strong>+91 89190 88163</strong>
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Mobile App Digital Website Development Marketing Development</p>
            <h1>Best Mobile App Development Company in Hyderabad</h1>
            <p className="hero-copy">
              Analogue IT Solutions is your trusted mobile app development company in Hyderabad, serving clients worldwide.
              We create innovative Android, iOS, hybrid, web, and marketing solutions that help businesses connect with
              their target audience and grow with confidence.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">Get Free Quote</a>
              <a className="secondary-btn" href="https://www.analogueitsolutions.com/" target="_blank" rel="noreferrer">Visit Website</a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>24/7</dt>
                <dd>Timings</dd>
              </div>
              <div>
                <dt>Global</dt>
                <dd>Client Reach</dd>
              </div>
              <div>
                <dt>End-to-End</dt>
                <dd>Digital Delivery</dd>
              </div>
            </dl>
          </div>

          <aside className="quote-card" id="contact" aria-label="Free consultation form">
            <h2>Get a FREE Consultation</h2>
            <p>Share your requirement and our team will get back to you.</p>
            <ConsultationForm />
          </aside>
        </section>

        <section className="stats-band" aria-label="Analogue success counts">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services We Provide</p>
            <h2>Digital solutions built differently for every business goal.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-visual">
                  <Image src={service.image} alt={service.title} width={620} height={420} />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Our Featured Projects</p>
            <h2>Products and platforms shaped with careful design and engineering.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
                <div className="project-visual">
                  <Image src={project.image} alt={`${project.title} project`} width={560} height={420} />
                </div>
                <h3>{project.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-heading">
            <p className="eyebrow">Our Process</p>
            <h2>A clear path from idea to launch and long-term support.</h2>
          </div>
          <div className="process-list">
            {process.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Image src={step.image} alt={`${step.title} step`} width={260} height={180} />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <p className="eyebrow">Start Your Digital Project</p>
              <h2>Let us elevate your ideas with design, development, and marketing expertise.</h2>
            </div>
            <a className="primary-btn" href="mailto:sales@analogueitsolutions.com">
              <Mail size={18} />
              sales@analogueitsolutions.com
            </a>
          </div>

          <div className="footer-main">
            <div className="footer-about">
              <Image src="/assets/Navbar/Analogue-navbar-logo.svg" alt="Analogue IT Solutions logo" width={190} height={52} />
              <p>
                Analogue IT Solutions builds mobile apps, websites, UI/UX experiences, GPS tracking platforms, and
                digital marketing campaigns for growing businesses.
              </p>
              <div className="social-links" aria-label="Social media links">
                {socialLinks.map(({ label, Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={19} strokeWidth={2.2} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-list">
              <h3>Links</h3>
              <ul>
                {footerLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="footer-list">
              <h3>Our Services</h3>
              <ul>
                {footerServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact</h3>
              <ul>
                <li><Phone size={16} />India +91 8919088163</li>
                <li><Phone size={16} />US +91 8143050202</li>
                <li><Mail size={16} />info@analogueitsolutions.com</li>
                <li><MapPin size={16} />Hyderabad, India</li>
              </ul>
            </div>

            {/* <div className="footer-form-card">
              <h2>Get a Quick Call Back</h2>
              <p>Send your details and we will connect with you.</p>
              <ConsultationForm compact />
            </div> */}
          </div>

          <div className="footer-bottom">
            <span>© 2026 Analogue IT Solutions. All Rights Reserved.</span>
            <span>Timings: 24/7</span>
          </div>
        </div>
      </footer>
    </>
  );
}
