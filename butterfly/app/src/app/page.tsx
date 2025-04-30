"use client";

import { useEffect } from "react";

export default function Home() {
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
              <li className="shop-link"><a href="https://your-store-name.myshopify.com" target="_blank">Shop</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <h1>Helping Monarchs Thrive Through Community Action</h1>
          <p>Join our mission to restore monarch butterfly populations with home-grown habitat solutions.</p>
          <a href="https://your-store-name.myshopify.com" className="btn btn-primary">Buy a Butterfly Box</a>
          <a href="/about" className="btn btn-outline">Learn More</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="row">
            <div className="col-md-8 col-md-2">
              <p>At Sackett Ranch Monarch Butterfly Recovery Center, we're continuing the important conservation work started by the Putah Creek Council nursery. Through community-based solutions, we're working to reverse the decline of monarch butterflies by creating a network of butterfly-friendly habitats.</p>
              <p>Our specialized butterfly boxes provide everything monarchs need to complete their lifecycle, creating stepping stones of habitat across our community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Butterfly Boxes</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="feature-box text-center">
                <div className="feature-icon">🌱</div>
                <h3>Starter Box</h3>
                <p>Perfect for beginners. Includes essential milkweed plants and native flowering species to support monarchs.</p>
                <div id="starter-box-button" className="shopify-buy-button"></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-box text-center">
                <div className="feature-icon">🦋</div>
                <h3>Complete Habitat Box</h3>
                <p>Our comprehensive solution with a variety of nectar plants, milkweed, and shelter plants for every stage of the monarch lifecycle.</p>
                <div id="complete-box-button" className="shopify-buy-button"></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-box text-center">
                <div className="feature-icon">🌿</div>
                <h3>Milkweed Special Box</h3>
                <p>Focused on multiple varieties of milkweed, the essential plant for monarch caterpillars to feed and grow on.</p>
                <div id="milkweed-box-button" className="shopify-buy-button"></div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="https://your-store-name.myshopify.com" className="btn btn-secondary">Visit Our Shop</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why It Matters</h2>
          <div className="row">
            <div className="col-md-6">
              <img src="https://via.placeholder.com/600x400" alt="Monarch butterfly on milkweed" className="mb-3" />
            </div>
            <div className="col-md-6">
              <h3>Monarch Populations Are In Danger</h3>
              <p>Monarch butterfly populations have declined by over 80% in the last two decades due to habitat loss, pesticide use, and climate change.</p>
              <p>Every butterfly box you install creates a stepping stone of habitat, helping monarchs find food and breeding grounds during their incredible migration.</p>
              <p>Join hundreds of community members who are already making a difference in our local ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2>Be Part of the Solution</h2>
          <p className="mb-4">Help us create a network of monarch habitats across our community.</p>
          <a href="https://your-store-name.myshopify.com" className="btn btn-primary">Shop Butterfly Boxes</a>
          <a href="/contact" className="btn btn-outline">Contact Us</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-logo">
                <span className="butterfly-logo">🦋</span>
                <h3>Sackett Ranch</h3>
              </div>
              <p>Community-based monarch butterfly conservation through distributing monarch-friendly boxes.</p>
            </div>
            <div className="col-md-4">
              <h4>Quick Links</h4>
              <ul className="footer-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://your-store-name.myshopify.com">Shop</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>Sackett Ranch<br />Near Winters, CA</p>
              <p>Email: info@sackettranch.org</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Sackett Ranch Monarch Butterfly Recovery Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
