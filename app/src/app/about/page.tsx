/**
 * @file AboutPage - Sackett Ranch Monarch Butterfly Recovery Center
 * @description Provides the full "About Us" page experience for the Next.js Cloudflare Worker app.
 *              Integrates scroll-based header effects and a mobile-friendly navigation toggle.
 *              Uses Next.js Image optimization and Tailwind + custom CSS.
 * @author
 * Sackett Ranch Dev Team
 */

"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./../globals.css"; // Import global styles

/**
 * React component for the /about route.
 * This page shares the mission, story, and team of Sackett Ranch.
 */
export default function AboutPage() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");

    const onScroll = () => {
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
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
      {/* === Header & Navigation === */}
      <header className="site-header" id="siteHeader">
        <div className="header-container">
          <div className="site-branding">
            <span className="butterfly-logo">🦋</span>
            <h1 className="site-title">Sackett Ranch Monarch Butterfly Recovery Center</h1>
            <span className="site-title-short">Sackett Ranch</span>
          </div>

          <nav className="main-navigation">
            <button className="menu-toggle" aria-expanded="false" id="menuToggle">
              <span className="hamburger"></span>
              <span className="screen-reader-text">Menu</span>
            </button>
            <ul className="nav-menu" id="navMenu">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li className="shop-link"><a href="https://y2v110-fm.myshopify.com" target="_blank">Shop</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* === Hero Section === */}
      <section className="hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://placehold.co/1920x500')`
      }}>
        <div className="hero-inner">
          <h1>About Sackett Ranch</h1>
          <p>Our story, mission, and vision for monarch conservation</p>
        </div>
      </section>

      {/* === Our Story === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="row">
            <div className="col-md-6">
              <p>Sackett Ranch Monarch Butterfly Recovery Center was born out of a passion for environmental stewardship and a commitment to protecting one of nature&rsquo;s most iconic pollinators.</p>
              <p>When the Putah Creek Council nursery at Four Winds facility near Winters, CA ceased operations, we saw an opportunity to continue and expand their important work in monarch conservation.</p>
              <p>Our team of dedicated environmentalists, gardeners, and butterfly enthusiasts came together with a shared vision: to create a community-based solution for monarch habitat loss that empowers individuals to make a difference right in their own backyards.</p>
            </div>
            <div className="col-md-6">
              <Image
                src="https://placehold.co/600x400"
                alt="Sackett Ranch nursery"
                width={600}
                height={400}
                className="mb-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Our Mission === */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="row justify-center">
            <div className="col-md-8">
              <div className="feature-box text-center">
                <div className="feature-icon">🦋</div>
                <p>To restore and protect monarch butterfly populations through community-based habitat creation, education, and sustainable practices.</p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {[
              {
                title: "Habitat Creation",
                description: "We grow and distribute native milkweed and nectar plants specifically tailored to support monarchs at every stage of their lifecycle."
              },
              {
                title: "Community Engagement",
                description: "We believe in the power of communities coming together to create a network of butterfly-friendly spaces across our region."
              },
              {
                title: "Education & Research",
                description: "We provide resources and information about monarch conservation and track our impact to continuously improve our approach."
              }
            ].map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="feature-box">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === The Monarch Crisis === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Monarch Crisis</h2>
          <div className="row">
            <div className="col-md-6">
              <Image
                src="https://placehold.co/600x400"
                alt="Monarch butterfly on milkweed"
                width={600}
                height={400}
                className="mb-3"
              />
            </div>
            <div className="col-md-6">
              <h3>Why Monarchs Need Our Help</h3>
              <p>Monarch butterfly populations have declined by more than 80% in recent decades due to:</p>
              <ul>
                <li>Loss of milkweed habitat across North America</li>
                <li>Agricultural practices that reduce native plant diversity</li>
                <li>Pesticide use that harms butterflies and their host plants</li>
                <li>Climate change affecting migration patterns and timing</li>
                <li>Deforestation in overwintering grounds</li>
              </ul>
              <p>By creating a network of monarch-friendly habitats, we can provide crucial &ldquo;stepping stones&rdquo; for these incredible butterflies during their epic migration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Our Approach === */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="row justify-between">
            <div className="col-md-5">
              <h3>The Butterfly Box Solution</h3>
              <p>Our carefully designed butterfly boxes contain:</p>
              <ul>
                <li><strong>Native Milkweed:</strong> The only plant monarch caterpillars can eat</li>
                <li><strong>Nectar Plants:</strong> Food sources for adult butterflies</li>
                <li><strong>Shelter Plants:</strong> Protection from predators and elements</li>
                <li><strong>Detailed Care Guide:</strong> Instructions for maintaining your habitat</li>
              </ul>
              <p>Each box is designed to thrive in our local climate and provide maximum benefit to monarchs with minimal maintenance required.</p>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-image" style={{ backgroundImage: "url('https://placehold.co/600x400')" }}></div>
                <div className="card-content">
                  <h3 className="card-title">Community Impact</h3>
                  <p>A single butterfly box can support dozens of monarchs, but a network of boxes throughout our community creates a continuous habitat corridor that can support thousands.</p>
                  <p>Our growing network of monarch supporters has already installed hundreds of butterfly boxes, creating crucial habitat in gardens, schools, parks, and businesses across the region.</p>
                  <a href="https://y2v110-fm.myshopify.com" className="btn btn-primary mt-3">Get Your Butterfly Box</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Our Team === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="row">
            {[
              {
                name: "Jane Doe",
                role: "Founder & Director",
                desc: "With 15 years of experience in native plant cultivation and a deep passion for butterfly conservation, Jane leads our nursery operations and community outreach efforts."
              },
              {
                name: "John Smith",
                role: "Lead Horticulturist",
                desc: "John specializes in native California plants and has developed our butterfly box growing protocols to ensure healthy, resilient plants for monarch habitat."
              },
              {
                name: "Maria Garcia",
                role: "Conservation Educator",
                desc: "Maria develops our educational materials and conducts workshops on monarch conservation for schools, community groups, and garden clubs."
              }
            ].map((member) => (
              <div className="col-md-4" key={member.name}>
                <div className="card">
                  <div className="card-image" style={{ backgroundImage: "url('https://placehold.co/400x400')" }}></div>
                  <div className="card-content">
                    <h3 className="card-title">{member.name}</h3>
                    <p className="mb-2"><em>{member.role}</em></p>
                    <p>{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Call to Action === */}
      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2>Join Our Monarch Movement</h2>
          <p className="mb-4">Help us create a network of monarch habitats across our community.</p>
          <a href="https://y2v110-fm.myshopify.com" className="btn btn-primary">Shop Butterfly Boxes</a>
          <a href="/contact" className="btn btn-outline">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
