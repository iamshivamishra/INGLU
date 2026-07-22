"use client";

import { useEffect } from "react";
import styles from "./cosmeeka.module.css";
import satinBg from "@/assets/cosmeeka-satin-bg.jpg";
import heroPortrait from "@/assets/cosmeeka-hero-portrait.jpg";
import aboutPhoto from "@/assets/cosmeeka-about-photo.jpg";
import highlightPhoto from "@/assets/cosmeeka-highlight-photo.jpg";
import press1 from "@/assets/cosmeeka-press-1.jpg";
import press2 from "@/assets/cosmeeka-press-2.jpg";
import press3 from "@/assets/cosmeeka-press-3.jpg";
import press4 from "@/assets/cosmeeka-press-4-bw.jpg";
import press5 from "@/assets/cosmeeka-press-5.jpg";
import press6 from "@/assets/cosmeeka-press-6.jpg";
import press7 from "@/assets/cosmeeka-press-7-bw.jpg";
import press8 from "@/assets/cosmeeka-press-8.jpg";

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
      { threshold: 0.08 },
    );
    const els = document.querySelectorAll(`.${styles.reveal}`);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Data ──────────────────────────────────────────────────────────────────

const stats = [
  { num: "2022", label: "DJ Since" },
  { num: "Jaipur → Indore", label: "Based In" },
  { num: "1–3 Hrs", label: "Set Duration" },
  { num: "7+ Cities", label: "Played Across India" },
];

const facts = [
  { label: "Real Name", value: "Divya Singh Takur" },
  { label: "Stage Name", value: "Cosmeeka" },
  { label: "Location", value: "Jaipur, Indore" },
  { label: "DJ Since", value: "2022" },
  { label: "Category", value: "DJ Performance / Live Show" },
  {
    label: "Available For",
    value: "Festivals, Club Shows, Universities, Private Gigs",
  },
  { label: "Set Duration", value: "1–3 Hours" },
];

const lineups = [
  {
    ev: "Terrific Techno — feat. Sáranya, opening by Cosmeeka",
    city: "Bhopal",
  },
  { ev: "Stellar Saturday — DJ Cosmeeka", city: "Zorro, Agra" },
  { ev: "Kafka's Electric Friday — w/ Lykan, Kayotic", city: "Indore" },
  { ev: "The Warehouse — w/ Shai, Baba Visfotak", city: "—" },
  { ev: "Ultraviolet Friday — w/ Naqsh, Kayotic", city: "—" },
  { ev: "Dynamo: Sorted Sounds — w/ Pablo Say, Brianoid", city: "Goa" },
  {
    ev: "Masaya — Endless Moments, Republic Day Weekend",
    city: "Goa",
  },
  { ev: "Beyond Sunrise x Lektroground", city: "Morjim, Goa" },
  { ev: "Aura Beach — Afters", city: "Anjuna, Goa" },
  { ev: "Lilliput — Defected Project", city: "Anjuna, Goa" },
  { ev: "Water Lemon Music Festival", city: "Dynamo, Goa" },
  { ev: "Government of India — Start-Up Conclave", city: "Indore" },
];

const gallerySlots = [
  { src: press1, cls: "g1", alt: "Cosmeeka press shot" },
  { src: press2, cls: "g2", alt: "Cosmeeka press shot" },
  { src: press3, cls: "g3", alt: "Cosmeeka press shot" },
  {
    src: press4,
    cls: "g4",
    alt: "Cosmeeka studio portrait, black and white",
  },
  { src: press5, cls: "g5", alt: "Cosmeeka press shot" },
  { src: press6, cls: "g6", alt: "Cosmeeka press shot" },
  {
    src: press7,
    cls: "g7",
    alt: "Cosmeeka studio portrait, black and white",
  },
  { src: press8, cls: "g8", alt: "Cosmeeka press shot" },
];

const genrePills = [
  "Melodic House",
  "Indie Dance",
  "Dark Disco",
  "Experimental House",
  "Deep Techno",
  "Minimal Techno",
  "Hard House",
  "Peak-Time Raw Techno",
];

const cities = ["Indore", "Bhopal", "Jaipur", "Agra", "Delhi", "Hyderabad", "Goa"];

const riderTech = [
  "All sound and lighting equipment provided by venue",
  <>
    <strong>DJ Console / Riser:</strong> 120cm deep x 240cm wide x 90cm high
  </>,
  <>
    <strong>2x</strong> Pioneer CDJ-3000 (updated to newest firmware)
  </>,
  <>
    <strong>1x</strong> Pioneer DJM-V10 or DJM-900NXS professional DJ mixer
  </>,
  <>
    <strong>1x</strong> Microphone and necessary cables
  </>,
  <>
    <strong>2x</strong> Monitor speakers (left and right)
  </>,
  <>
    <strong>1x</strong> Electric fan
  </>,
];

const riderHospitality = [
  <>
    <strong>Flights:</strong> Economy class (or equivalent), arranged and
    covered by the promoter for outstation bookings.
  </>,
  <>
    <strong>Accommodation:</strong> 1 private hotel room (minimum 3-star or
    boutique equivalent), close to the venue, covered by the promoter.
  </>,
  <>
    <strong>Local Transport:</strong> Pick-up and drop (airport ↔ hotel ↔
    venue) arranged by the promoter.
  </>,
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function CosmeekaPage() {
  useScrollReveal();

  return (
    <div className={styles.cmRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <div
        className={styles.satin}
        style={{ backgroundImage: `url(${satinBg.src})` }}
      />

      {/* NAV */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          <div className={styles.navName}>Cosmeeka</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#bio">Bio</a>
            <a href="#highlights">Highlights</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <div className={`${styles.eyebrow} ${styles.heroEyebrow}`}>
                DJ · Live Performance · Electronic Press Kit 2026
              </div>
              <h1 className={styles.heroTitle}>COSMEEKA</h1>
              <p className={styles.heroSub}>
                Melodic house, minimal techno and dark disco from Jaipur to
                Indore — sets built to move a room from the first drop to the
                last afterhour.
              </p>
            </div>
            <div className={styles.heroPhotoWrap}>
              <img src={heroPortrait.src} alt="Cosmeeka portrait" />
            </div>
          </div>

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
            <span className={styles.arrow}>↗</span>
            <h2>About Me</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutPhoto} ${styles.reveal}`}>
              <img src={aboutPhoto.src} alt="Cosmeeka performing at a festival" />
            </div>
            <div className={styles.reveal}>
              <div className={styles.facts}>
                {facts.map((f) => (
                  <div key={f.label} className={styles.factRow}>
                    <span className={styles.factLabel}>{f.label}</span>
                    <span className={styles.factValue}>{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className={`${styles.bio} ${styles.sectionPad}`} id="bio">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.arrow}>↗</span>
            <h2>Biography</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.bioBody} ${styles.reveal}`}>
            <p>
              <strong>Divya Singh Thakur</strong>, known by her stage name{" "}
              <strong>Cosmeeka</strong>, is a rising house and techno artist
              originally from Jaipur, now based in Indore, India. Her journey
              began with a lifelong passion for melody and rhythm, evolving
              into a powerful creative voice within the underground
              electronic scene.
            </p>
            <p>
              Drawing from genres like Melodic House, Minimal Techno, Indie
              Dance, and Dark Disco, Cosmeeka&apos;s sets are immersive and
              emotionally driven. Whether on the dance floor or in a
              late-night afterhours setting, her sound invites listeners into
              a journey — deep, pulsing, and spiritually charged.
            </p>
            <p>
              Cosmeeka Music brings a unique fusion of elegance and edge,
              consistently pushing boundaries while staying rooted in groove
              and soul. With every performance, she curates more than just a
              mix — she creates a moment of connection, energy, and
              transformation through sound.
            </p>
            <div className={styles.pullQuote}>
              &ldquo;Cosmeeka Music&rdquo; is an exciting new presence in the
              electronic music scene. Hailing from &ldquo;Jabalpur,&rdquo;
              the cultural capital of Madhya Pradesh, often referred to as
              Sanskardhani, her musical journey started in childhood, fueled
              by a profound love for singing and melody.
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section
        className={`${styles.highlights} ${styles.sectionPad}`}
        id="highlights"
      >
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.arrow}>↗</span>
            <h2>Highlights</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.hlGrid}>
            <div className={`${styles.hlText} ${styles.reveal}`}>
              <p>
                I&apos;ve had the pleasure of working with artists like{" "}
                <strong>
                  Lady Barot, Saranya, Atma, 17.5, LYKN, Sharnèa, Lost
                  Contact, Pablo Say
                </strong>
                , and playing at <strong>Endless Moments Festival</strong> and{" "}
                <strong>Water Lemon Music Festival</strong>.
              </p>
              <div className={styles.pullQuote}>
                &ldquo;Each performance sharpens my craft and deepens my
                connection with the dance floor. A defining moment in my
                journey came with my debut headlining set at Zorro in Agra,
                where I curated a full-length performance that truly
                reflected my sonic identity and artistic vision.&rdquo;
              </div>
            </div>
            <div className={`${styles.hlPhoto} ${styles.reveal}`}>
              <img src={highlightPhoto.src} alt="Cosmeeka portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* LINEUPS */}
      <section className={`${styles.lineups} ${styles.sectionPad}`}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.arrow}>↗</span>
            <h2>Selected Lineups &amp; Shows</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.lineupGrid} ${styles.reveal}`}>
            {lineups.map((l) => (
              <div key={l.ev} className={styles.lineupRow}>
                <span className={styles.ev}>{l.ev}</span>
                <span className={styles.city}>{l.city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={`${styles.gallery} ${styles.sectionPad}`} id="gallery">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.arrow}>↗</span>
            <h2>Press Shots</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.gGrid} ${styles.reveal}`}>
            {gallerySlots.map((slot, i) => (
              <img
                key={i}
                className={
                  styles[slot.cls as keyof typeof styles] as string
                }
                src={slot.src.src}
                alt={slot.alt}
              />
            ))}
          </div>
          <p className={`${styles.galleryNote} ${styles.reveal}`}>
            For the full-resolution photo archive,{" "}
            <a
              href="https://drive.google.com/drive/folders/19tzCNcbnQJ05K3avGeuTd_quqODnLTb7"
              target="_blank"
              rel="noopener noreferrer"
            >
              browse the shared drive
            </a>
            .
          </p>
        </div>
      </section>

      {/* GENRES / CITIES */}
      <section className={`${styles.genres} ${styles.sectionPad}`}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.arrow}>↗</span>
            <h2>Genres &amp; Cities Played</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.gcGrid}>
            <div className={styles.reveal}>
              <div className={styles.tagCloud}>
                {genrePills.map((g) => (
                  <span key={g} className={styles.tagPill}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.reveal}>
              <div className={styles.cityList}>
                {cities.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={`${styles.contact} ${styles.sectionPad}`} id="contact">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.arrow}>↗</span>
            <h2>Get In Touch</h2>
            <div className={styles.rule} />
          </div>

          <div className={styles.contactTop}>
            <div className={`${styles.contactBlock} ${styles.reveal}`}>
              <h3>Booking Info</h3>
              <div className={styles.contactBig}>
                <a href="mailto:cosmeeka.in88@gmail.com">
                  cosmeeka.in88@gmail.com
                </a>
              </div>
              <div
                className={styles.contactBig}
                style={{ fontSize: 20, color: "var(--cm-dim)" }}
              >
                <a href="tel:+918839445525">+91 88394 45525</a>
              </div>
            </div>
            <div className={`${styles.contactBlock} ${styles.reveal}`}>
              <h3>Hospitality Rider</h3>
              <ul className={styles.riderList}>
                {riderHospitality.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`${styles.contactBlock} ${styles.reveal}`}
            style={{ marginBottom: 56 }}
          >
            <h3>Technical Rider</h3>
            <ul className={styles.riderList}>
              {riderTech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className={styles.riderNote}>
              If the technical rider is not in order, the artist will not
              perform, and the full fee has to be paid as agreed in the
              contract.
            </div>
          </div>

          <div className={styles.reveal}>
            <h3 className={styles.socialLabel}>Social Links</h3>
            <div className={styles.socialRow}>
              <a
                className={styles.socialBtn}
                href="https://www.instagram.com/cosmeeka_music?igsh=MTh1b3F1ZHBpNjZrbA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2026 Cosmeeka — Electronic Press Kit
      </footer>
    </div>
  );
}
