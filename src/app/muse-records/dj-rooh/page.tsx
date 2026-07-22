"use client";

import { useEffect } from "react";
import styles from "./dj-rooh.module.css";
import heroPortrait from "@/assets/dj-rooh-hero-portrait.jpg";
import about1 from "@/assets/dj-rooh-about-1.jpg";
import about2Red from "@/assets/dj-rooh-about-2-red.jpg";
import photoBreakClub from "@/assets/dj-rooh-photo-break-club.jpg";
import citiesPortrait from "@/assets/dj-rooh-cities-portrait.jpg";
import press1 from "@/assets/dj-rooh-press-1.jpg";
import press2Floral from "@/assets/dj-rooh-press-2-floral.jpg";
import press3Club from "@/assets/dj-rooh-press-3-club.jpg";
import press4Red from "@/assets/dj-rooh-press-4-red.jpg";

// ── Scroll reveal hook ─────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll(`.${styles.reveal}`);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Data ──────────────────────────────────────────────────────────────────

const stats = [
  { num: "9+", label: "Genres in Rotation" },
  { num: "16+", label: "Cities Played" },
  { num: "Pan-India", label: "Touring Circuit" },
  { num: "Club · Festival", label: "Corporate · Private" },
];

const genres = [
  "Bollywood",
  "BollyTech",
  "Techno",
  "House Music",
  "Deep House",
  "Afro House",
  "Sufi Indo House",
  "Punjabi",
  "Retro",
];

const cities = [
  "Indore",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Ludhiana",
  "Ahmedabad & Across Gujarat",
  "Chennai",
  "Coimbatore",
  "Visakhapatnam (Vizag)",
  "Goa",
  "Raipur",
  "Gwalior",
  "Nagpur",
  "Jhansi",
  "Bhopal",
  "Jabalpur",
];

const gallerySlots = [
  { src: press1, alt: "DJ Rooh portrait" },
  { src: press2Floral, alt: "DJ Rooh portrait, floral crochet outfit" },
  { src: press3Club, alt: "DJ Rooh performing at a club, blue smoke lighting" },
  { src: press4Red, alt: "DJ Rooh portrait, red stage lighting" },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function DjRoohPage() {
  useScrollReveal();

  return (
    <div className={styles.drRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          <div className={styles.navName}>DJ Rooh</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#cities">Cities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div
          className={styles.heroPhoto}
          style={{ backgroundImage: `url(${heroPortrait.src})` }}
        />
        <div className={styles.heroScrim} />
        <div className={`${styles.wrap} ${styles.heroContent}`}>
          <div className={`${styles.eyebrow} ${styles.heroEyebrow}`}>
            DJ · Media Kit
          </div>
          <h1 className={styles.heroTitle}>
            DJ <span>Rooh</span>
          </h1>
          <p className={styles.heroSub}>
            Bridging contemporary electronic sound with Indian musical
            influences — seamless transitions, genre-blending sets, and a
            commanding presence on every stage.
          </p>

          <div className={styles.statStrip}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className={`${styles.about} ${styles.sectionPad}`} id="about">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <h2>About Me</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.reveal}>
              <div className={styles.aboutCopy}>
                <p>
                  <strong>DJ Rooh</strong> is a versatile and energetic DJ
                  known for creating immersive musical experiences that
                  bridge the gap between contemporary electronic sounds and
                  Indian musical influences. With a strong passion for music
                  and an instinctive understanding of diverse audiences, she
                  delivers performances that are both dynamic and memorable.
                </p>
                <p>
                  Her sets are carefully curated to create the perfect
                  atmosphere, whether it&apos;s a high-energy club night,
                  luxury event, festival, corporate gathering, or private
                  celebration.
                </p>
                <p>
                  Known for her seamless transitions and genre-blending
                  style, DJ Rooh brings a unique musical identity to every
                  stage, captivating audiences with her vibrant sound and
                  commanding presence.
                </p>
              </div>
              <div className={styles.genreBox}>
                <h4>Genres</h4>
                <div className={styles.tagCloud}>
                  {genres.map((g) => (
                    <span key={g} className={styles.tagPill}>
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${styles.aboutPhotos} ${styles.reveal}`}>
              <img src={about1.src} alt="DJ Rooh portrait" />
              <img
                src={about2Red.src}
                alt="DJ Rooh portrait, red stage lighting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO BREAK */}
      <div className={`${styles.photoBreak} ${styles.reveal}`}>
        <img
          src={photoBreakClub.src}
          alt="DJ Rooh performing at a club, blue smoke lighting"
        />
      </div>

      {/* CITIES */}
      <section className={`${styles.cities} ${styles.sectionPad}`} id="cities">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <h2>Cities Performed</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.citiesGrid}>
            <div className={`${styles.citiesPhoto} ${styles.reveal}`}>
              <img src={citiesPortrait.src} alt="DJ Rooh portrait" />
            </div>
            <div className={`${styles.cityList} ${styles.reveal}`}>
              {cities.map((c) => (
                <div key={c}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={`${styles.gallery} ${styles.sectionPad}`} id="gallery">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <h2>Gallery</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.gGrid} ${styles.reveal}`}>
            {gallerySlots.map((slot, i) => (
              <img key={i} src={slot.src.src} alt={slot.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactBand}>
          <div className={styles.wrap}>
            <div className={styles.reveal}>
              <h2>Get In Touch</h2>
              <p className={styles.sub}>
                For bookings, press &amp; collaborations
              </p>
              <div className={styles.socialRow}>
                <a
                  className={styles.socialBtn}
                  href="https://www.instagram.com/djrooh_?igsh=NjFnenFuY2VzdzZk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className={`${styles.contactInfo} ${styles.reveal}`}>
              <div className={styles.contactRow}>
                <span className={styles.label}>Email</span>
                <a href="mailto:ruchip12112@gmail.com">
                  ruchip12112@gmail.com
                </a>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.label}>Instagram</span>
                <a
                  href="https://www.instagram.com/djrooh_?igsh=NjFnenFuY2VzdzZk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @djrooh_
                </a>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.label}>Facebook</span>
                <span>Ruchi Patel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
