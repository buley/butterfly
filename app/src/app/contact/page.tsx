/**
 * @file ContactPage - Sackett Ranch Monarch Butterfly Recovery Center
 * @description Contact form and support information for visitors.
 *              Includes team hours, location, email, and social links.
 *              Frequently Asked Questions and Community Partners included.
 *              Based on static HTML, adapted for React/Next.js.
 */

"use client";

import { useEffect } from "react";

/**
 * React component for the /contact route.
 * Displays contact details, a form, FAQ, and partner logos.
 */
export default function ContactPage() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");

    const onScroll = () => {
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 100);
      }
    };

    const onToggleClick = () => {
      toggle?.classList.toggle("active");
      nav?.classList.toggle("active");
    };

    window.addEventListener("scroll", onScroll);
    toggle?.addEventListener("click", onToggleClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      toggle?.removeEventListener("click", onToggleClick);
    };
  }, []);

  return (
    <main className="main-content">
      {/* === Hero Header === */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </section>

      {/* === Contact Info + Form === */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-5">
              <h2>Get In Touch</h2>
              <p className="mb-4">
                We&rsquo;d love to hear from you! Whether you have questions about our butterfly boxes, want to join our conservation efforts, or need assistance with your monarch garden, we&rsquo;re here to help.
              </p>

              <h3 className="mb-2">Visit Us</h3>
              <p className="mb-3">
                Sackett Ranch<br />
                Near Winters, CA<br />
                <em>(Nursery visits by appointment only)</em>
              </p>

              <h3 className="mb-2">Email</h3>
              <p className="mb-3">info@sackettranch.org</p>

              <h3 className="mb-2">Follow Us</h3>
              <div className="social-links mb-4">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
              </div>

              <h3 className="mb-2">Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            {/* Right Column */}
            <div className="col-md-7">
              <div className="card">
                <div className="card-content">
                  <h2 className="card-title">Send Us a Message</h2>
                  <form id="contactForm" className="contact-form" onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your message! We will get back to you soon.");
                    e.currentTarget.reset();
                  }}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" id="name" name="name" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" id="email" name="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select id="subject" name="subject" className="form-control">
                        <option value="general">General Inquiry</option>
                        <option value="butterfly-boxes">Butterfly Boxes</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="education">Educational Programs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea id="message" name="message" className="form-control" rows={5} required></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ Section === */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="row">
            {[
              {
                q: "When is the best time to plant my butterfly box?",
                a: "Spring and early fall are ideal planting times in our region. This gives plants time to establish before extreme temperatures arrive. We recommend planting on a cool, overcast day to minimize transplant shock."
              },
              {
                q: "How much maintenance do butterfly boxes require?",
                a: "Our butterfly boxes are designed to be low-maintenance. Regular watering during the first growing season is essential, but once established, most native plants require minimal care."
              },
              {
                q: "Can I order butterfly boxes for a school or community garden?",
                a: "Absolutely! We offer special pricing for educational institutions and community projects. Please contact us directly to discuss your needs and we can create a custom solution."
              },
              {
                q: "How can I volunteer with Sackett Ranch?",
                a: "We welcome volunteers who are passionate about monarch conservation! We have opportunities in plant propagation, garden maintenance, educational outreach, and special events."
              },
              {
                q: "Do you ship butterfly boxes outside of the local area?",
                a: "We primarily serve the Northern California region to ensure plants arrive in excellent condition. For other areas, contact us to discuss options."
              },
              {
                q: "What if I spot monarchs in my butterfly box?",
                a: "Congratulations! That means your habitat is working. We encourage you to log sightings with the Monarch Watch citizen science program and share photos with us on social media."
              }
            ].map(({ q, a }) => (
              <div className="col-md-6 faq-item" key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Community Partners === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Community Partners</h2>
          <p className="text-center mb-4">We&rsquo;re proud to work with these organizations to support monarch conservation.</p>
          <div className="row">
            {["Monarch Watch", "Native Plant Society", "Xerces Society", "Local Schools"].map((name) => (
              <div className="col-md-3 col-sm-6 text-center partner" key={name}>
                <img src="https://via.placeholder.com/200x100" alt={`${name} logo`} className="mb-2" />
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2>Ready to Create Your Butterfly Habitat?</h2>
          <p className="mb-4">Help monarchs thrive with our specially designed butterfly boxes.</p>
          <a href="https://your-store-name.myshopify.com" className="btn btn-primary">Shop Butterfly Boxes</a>
          <a href="/about" className="btn btn-outline">Learn More</a>
        </div>
      </section>
    </main>
  );
}
