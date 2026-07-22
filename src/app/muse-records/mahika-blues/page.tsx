"use client";

import { useEffect } from "react";
import styles from "./mahika.module.css";
import heroPortrait from "@/assets/mahika-blues-hero-portrait.jpg";
import photoBreak from "@/assets/mahika-blues-photo-break.jpg";
import press1 from "@/assets/mahika-blues-press-1.jpg";
import press2 from "@/assets/mahika-blues-press-2.jpg";
import press3 from "@/assets/mahika-blues-press-3.jpg";
import press4 from "@/assets/mahika-blues-press-4.jpg";

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

const facts = [
  { label: "Real Name", value: "Mahika Bora" },
  { label: "Stage Name", value: "Mahika Blues" },
  { label: "Category", value: "Vocalist / Live Performance" },
  { label: "Genres", value: "Rock, Pop, Bollywood, Jazz" },
];

const genrePillsHero = ["Rock", "Pop", "Bollywood", "Jazz"];
const genrePillsSound = ["Rock", "Pop", "Bollywood", "Jazz"];

const gallerySlots = [
  { src: press1, alt: "Mahika Blues singing, close stage shot" },
  { src: press2, alt: "Mahika Blues performing on a rooftop stage" },
  { src: press3, alt: "Mahika Blues performing, stage lighting" },
  { src: press4, alt: "Mahika Blues performing live outdoors" },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function MahikaBluesPage() {
  useScrollReveal();

  return (
    <div className={styles.mbRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          <div className={styles.navName}>Mahika Blues</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
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
            Vocalist · Live Performance · Electronic Press Kit
          </div>
          <h1 className={styles.heroTitle}>Mahika Blues</h1>
          <p className={styles.heroSub}>
            Mahika Bora — a voice that moves easily between rock grit, pop
            shine, Bollywood warmth, and jazz phrasing, built for a room that
            wants to feel it live.
          </p>
          <div className={styles.genreStrip}>
            {genrePillsHero.map((g) => (
              <span key={g} className={styles.genrePill}>
                {g}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className={`${styles.about} ${styles.sectionPad}`} id="about">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <h2>About</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.aboutGrid}>
            <div className={`${styles.facts} ${styles.reveal}`}>
              {facts.map((f) => (
                <div key={f.label} className={styles.factRow}>
                  <span className={styles.factLabel}>{f.label}</span>
                  <span className={styles.factValue}>{f.value}</span>
                </div>
              ))}
            </div>
            <div className={`${styles.aboutCopy} ${styles.reveal}`}>
              <p>
                <strong>Mahika Bora</strong>, performing as{" "}
                <strong>Mahika Blues</strong>, is a vocalist whose range
                crosses genre lines rather than staying inside one lane —
                pulling rock&apos;s edge, pop&apos;s hooks, Bollywood&apos;s
                warmth, and jazz&apos;s phrasing into a single live set.
              </p>
              <p>
                On stage, that range shows: an outdoor festival crowd under
                open sky, a hushed red-lit room, a smoky rooftop set under
                string lights — each one asking for a different version of
                the same voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO BREAK */}
      <div className={`${styles.photoBreak} ${styles.reveal}`}>
        <img src={photoBreak.src} alt="Mahika Blues performing live outdoors" />
        <div className={styles.photoCaption}>Live outdoor performance</div>
      </div>

      {/* GALLERY */}
      <section className={`${styles.gallery} ${styles.sectionPad}`} id="gallery">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <h2>Press Shots</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.gGrid} ${styles.reveal}`}>
            {gallerySlots.map((slot, i) => (
              <img key={i} src={slot.src.src} alt={slot.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* SOUND */}
      <section className={`${styles.genresCities} ${styles.sectionPad}`}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <h2>Sound</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.gcGrid}>
            <div className={styles.reveal}>
              <div className={styles.genreList}>
                {genrePillsSound.map((g) => (
                  <span key={g} className={styles.tagPill}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.reveal}>
              <div className={styles.noteBlock}>
                Location, years active, notable shows, and booking contact
                aren&apos;t listed yet — send those over and they&apos;ll slot
                in here alongside the genres.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact} id="contact">
        <div className={styles.wrap}>
          <div className={`${styles.contactCard} ${styles.reveal}`}>
            <h2>Get in Touch</h2>
            <p className={styles.sub}>For bookings, press &amp; collaborations</p>
            <div className={styles.socialRow}>
              <a
                className={styles.socialBtn}
                href="https://www.instagram.com/mahikablues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
