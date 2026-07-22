"use client";

import { useEffect, useRef } from "react";
import styles from "./epk.module.css";
import paroImage from "@/assets/paro-image.jpg";
import paroLive1 from "@/assets/paro-live-1.jpeg";
import paroLive2 from "@/assets/paro-live-2.jpeg";
import paroPoster1 from "@/assets/paro-poster-1.png";

// ── Scroll animation hook ─────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const els = document.querySelectorAll(`.${styles.reveal}`);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Data ──────────────────────────────────────────────────────────────────────

const tickerItems = [
  "PARO",
  "BEFORE THE BEGINNING",
  "50K+ STREAMS",
  "OPENED FOR SEEDHE MAUT",
  "MUSE RECORDS",
  "BROTHERHOOD · MUSIC · MOVEMENT",
  "DELHI · LUCKNOW · JAIPUR",
];

const stats = [
  { num: "150K+", label: "Spotify Streams" },
  { num: "18+", label: "Live Shows" },
  { num: "6K", label: "Max Crowd" },
  { num: "01", label: "Debut Album" },
];

const genres = [
  "HIP-HOP",
  "CONSCIOUS RAP",
  "UNDERGROUND",
  "DELHI",
  "BROTHERHOOD",
];

const members = [
  {
    num: "01",
    name: "Satwik",
    role: "Rapper · Lyricist",
    handle: "@satwikparo",
    img: "https://i.scdn.co/image/ab676161000051742727c309af1f84a641ac8a33",
    bio: "The story architect. Writes bars that trace the full arc of self-discovery — from doubt to conviction. Carries the narrative weight of Paro's conceptual albums.",
    hueFilter: "",
  },
  {
    num: "02",
    name: "Sanath Parashar",
    role: "Rapper · Producer",
    handle: "@sanathparo",
    img: "https://i.scdn.co/image/ab676161000051742727c309af1f84a641ac8a33",
    bio: "The sonic frame-builder. Shapes the sound that carries the brotherhood's message — emotionally-driven, live-stage-ready, and built for crowds from 500 to 5,000.",
    hueFilter: "hue-rotate(10deg)",
  },
];

const tracklist = [
  { num: "01", name: "Epilogue", lead: false },
  { num: "02", name: "Hold Me — Remix", lead: true, badge: "DEBUT" },
  { num: "03", name: "Yin & Yang", lead: false },
  { num: "04", name: "Up In The Air", lead: true, badge: "LEAD · 50K+" },
  { num: "05", name: "7 Saal", lead: true },
  { num: "06", name: "Timeless", lead: false },
  { num: "07", name: "Khabib & Mayweather", lead: false },
  { num: "08", name: "The Secret Recipe (Prologue)", lead: false },
  { num: "09", name: "Athaara", lead: false },
  { num: "10", name: "No Emotions", lead: false },
  { num: "11", name: "Sunn", lead: false },
  { num: "12", name: "Picture Perfect", lead: false },
  { num: "13", name: "Third Eye", lead: false },
  { num: "14", name: "Conclusion", lead: false },
];

const singles = [
  {
    year: "2025",
    name: "7 SAAL",
    img: "https://i.scdn.co/image/ab67616d00001e0291d91f736975876c70cb1fa7",
    href: "https://open.spotify.com/album/7qiBf3v9OkwueZ4H1AuQ68",
  },
  {
    year: "2025",
    name: "OUR WAY",
    img: "https://i.scdn.co/image/ab67616d00001e02212ce221a8d1756282d24ffa",
    href: "https://open.spotify.com/album/0GXO9RU2G201GTSghjo92M",
  },
  {
    year: "2025",
    name: "SUNN",
    img: "https://i.scdn.co/image/ab67616d00001e02626be734e04b96bdd3ab3921",
    href: "https://open.spotify.com/album/5OFsxX9PdjfHquJJrp6DKH",
  },
  {
    year: "2025",
    name: "FEEL THE RIDE",
    img: "https://i.scdn.co/image/ab67616d00001e02ff78ad0cb7fc84fb2df9bc77",
    href: "https://open.spotify.com/album/6lkJ8cOLDaccyJdLuOL2hE",
  },
  {
    year: "2025",
    name: "UP IN THE AIR ↑",
    img: "https://i.scdn.co/image/ab67616d00001e0216733372205a4d5db9e25838",
    href: "https://open.spotify.com/album/23HGOePfuUdBd9YjToMBF6",
    highlight: true,
  },
  {
    year: "2025",
    name: "ISHAARE",
    img: "https://i.scdn.co/image/ab67616d00001e02cb93903b633fe34d4d8004c7",
    href: "https://open.spotify.com/album/16PPQCLuugskpRPAq5aRN2",
  },
  {
    year: "2025",
    name: "BOUNCE",
    img: "https://i.scdn.co/image/ab67616d00001e021da991a3efc40fd55dfd9e59",
    href: "https://open.spotify.com/album/2fMsD5rVXxWevlTCgnTii7",
  },
  {
    year: "2025",
    name: "HOPE IT'S ALL OKAY",
    img: "https://i.scdn.co/image/ab67616d00001e02135e2edd5a18585c979e319b",
    href: "https://open.spotify.com/album/30Kh8vnMri9x8qZYlSJljb",
  },
  {
    year: "2025",
    name: "SAVERA",
    img: "https://i.scdn.co/image/ab67616d00001e027fea8c7b84661e40f510116b",
    href: "https://open.spotify.com/album/1oZe4qviSWmN5neqtydedM",
  },
];
const shows = [
  {
    venue: "Amity University",
    city: "MANESAR",
    type: "college",
    date: "20.02.2025",
  },
  {
    venue: "Summerhouse Cafe",
    city: "SAKET, DELHI",
    type: "headline",
    date: "06.03.2025",
  },
  {
    venue: "NIFT University",
    city: "DELHI",
    type: "college",
    date: "11.03.2025",
  },
  {
    venue: "GNLU",
    city: "GANDHINAGAR",
    type: "college",
    date: "14.03.2025",
  },
  {
    venue: "DTU (Rohini)",
    city: "DELHI",
    type: "college",
    date: "22.03.2025",
  },
  {
    venue: "GD Goenka University",
    city: "GURGAON",
    type: "college",
    date: "28.03.2025",
  },
  {
    venue: "LSR, Delhi University",
    city: "DELHI",
    type: "college",
    date: "29.03.2025",
  },
  {
    venue: "Viviana Greens / Lulu Mall",
    city: "LUCKNOW",
    type: "support",
    note: "Opened for Seedhe Maut",
    crowd: "5–6K CROWD",
    date: "11.04.2025",
  },
  {
    venue: "JW Marriott",
    city: "JAIPUR",
    type: "support",
    note: "Opened for Foosie Gang",
    date: "18.04.2025",
  },
  {
    venue: "Omaxe Chandni Chowk",
    city: "DELHI",
    type: "support",
    note: "Opened for Foosie Gang",
    date: "26.04.2025",
  },
  {
    venue: "Isolates Club (Nojoto)",
    city: "SAKET, DELHI",
    type: "headline",
    date: "11.05.2025",
  },
  {
    venue: "The Vibes Late Night Club",
    city: "LUCKNOW",
    type: "support",
    note: "Opened for Arpit Bala",
    date: "23.05.2025",
  },
  {
    venue: "Avatar Club",
    city: "GURGAON",
    type: "headline",
    date: "07.06.2025",
  },
  {
    venue: "Stoa",
    city: "JAIPUR",
    type: "support",
    note: "Opened for Vichaar & Siyaahi",
    date: "04.10.2025",
  },
  {
    venue: "Club Cigar",
    city: "DELHI",
    type: "support",
    note: "Opened for Spectra & Bob B Randhawa",
  },
  {
    venue: "United Hip Hop Fest",
    city: "DELHI",
    type: "fest",
    date: "10.01.2026",
  },
  {
    venue: "Club Pacha",
    city: "JAIPUR",
    type: "support",
    note: "Opened for Karun & Nanku",
    date: "01.02.2026",
  },
  {
    venue: "Rishihood University",
    city: "SONIPAT",
    type: "college",
    date: "08.02.2026",
  },
  {
    venue: "Amity University (Encore)",
    city: "MANESAR",
    type: "college",
    date: "12.02.2026",
  },
  {
    venue: "ABES College",
    city: "GHAZIABAD",
    type: "college",
    date: "04.04.2026",
  },
  {
    venue: "Hindu College, Delhi University",
    city: "DELHI",
    type: "college",
    date: "25.04.2026",
  },
  {
    venue: "KMV Mahavidyalay, DU",
    city: "DELHI",
    type: "college",
    date: "30.04.2026",
  },
  {
    venue: "Starex University",
    city: "MANESAR",
    type: "college",
    date: "06.05.2026",
  },
  {
    venue: "Effingut Hop Fest",
    city: "GURUGRAM",
    type: "fest",
    date: "28.05.2026",
  },
  {
    venue: "Coffee Hip Hop Party",
    city: "GURUGRAM",
    type: "fest",
    date: "30.05.2026",
  },
  {
    venue: "Bohemia Bali",
    city: "INDONESIA",
    type: "headline",
    note: "International debut",
    date: "02.06.2026",
  },
];
const gallerySlots = [
  {
    src: paroImage,
    alt: "Paro EPK",
    label: "EPK — PARO 2026",
    minHeight: 568,
    imgStyle: { filter: "contrast(1.05) saturate(0.9)" },
    large: true,
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0216733372205a4d5db9e25838",
    alt: "Up In The Air — Paro",
    label: "UP IN THE AIR · 50K+ STREAMS",
    minHeight: 280,
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0291d91f736975876c70cb1fa7",
    alt: "7 Saal — Paro",
    label: "7 SAAL · SINGLE 2025",
    minHeight: 280,
  },
  {
    src: "https://i.scdn.co/image/ab676161000051742727c309af1f84a641ac8a33",
    alt: "Paro artist",
    label: "ARTIST — @WEAREPARO",
    minHeight: 280,
    overlay: true,
    imgStyle: { filter: "grayscale(20%)" },
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02212ce221a8d1756282d24ffa",
    alt: "Before The Beginning — Paro",
    label: "BEFORE THE BEGINNING · ALBUM 2025",
    minHeight: 280,
  },
  {
    src: paroLive1,
    alt: "Paro live on stage",
    label: "LIVE ON STAGE · 2026",
    minHeight: 280,
  },
  {
    src: paroLive2,
    alt: "Paro performing live, underpass venue",
    label: "LIVE PERFORMANCE",
    minHeight: 280,
  },
  {
    src: paroPoster1,
    alt: "Paro promotional poster",
    label: "PARO · TOUR POSTER",
    minHeight: 280,
  },
];

const contacts = [
  {
    label: "Booking & Press",
    val: "paro.mgmnt@ingluglobal.in",
    sub: "+91 99904 61446",
  },
  { label: "Management", val: "Muse Records", sub: "@muserecordsin" },
  {
    label: "Artist Instagram",
    val: "@weareparo",
    sub: "@satwikparo · @sanathparo",
  },
  { label: "Spotify", val: "PARO", sub: "open.spotify.com/artist/4Xon3v..." },
  {
    label: "YouTube",
    val: "@Paro.Officialmusic",
    sub: "youtube.com/@paro.officialmusic",
  },
  {
    label: "Label",
    val: "PARO RECORDS",
    sub: "Self-released, full rights retained",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function PillType({ type }: { type: string }) {
  const cls =
    type === "support"
      ? styles.typeSupport
      : type === "headline"
        ? styles.typeHeadline
        : styles.typeCollege;
  return (
    <span className={`${styles.typePill} ${cls}`}>{type.toUpperCase()}</span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EPKPage() {
  const allTicker = [...tickerItems, ...tickerItems];
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollGallery = (dir: "left" | "right") => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };
  useScrollReveal();

  return (
    <div className={`${styles.epkRoot} ${styles.pageLoaded}`}>
      {/* TICKER */}
      <div className={styles.tickerWrap} aria-hidden="true">
        <div className={styles.tickerInner}>
          {allTicker.map((item, i) => (
            <span key={i}>
              <span className={styles.tickerItem}>{item}</span>
              <span className={styles.tickerDot} />
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        <a className={styles.navLogo} href="#hero">
          PARO
        </a>
        <ul className={styles.navLinks}>
          {["bio", "music", "shows", "contact"].map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            </li>
          ))}
        </ul>
        <a
          className={styles.navBadge}
          href="https://open.spotify.com/artist/4Xon3vJqlI0Ed6VCAOWqvw"
          target="_blank"
          rel="noopener noreferrer"
        >
          LISTEN NOW
        </a>
      </nav>

      {/* HERO */}
      <div className={styles.hero} id="hero">
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroPhotoStrip}>
          <img
            src="https://i.scdn.co/image/ab676161000051742727c309af1f84a641ac8a33"
            alt="Paro"
          />
        </div>
        <div className={styles.heroEyebrow}>
          <span className={styles.liveDot} />
          Electronic Press Kit — 2026
        </div>
        <h1 className={styles.heroName}>
          PA<span>R</span>O
        </h1>
        <p className={styles.heroSub}>
          More than music — a brotherhood. Two brothers building India&apos;s
          underground hip-hop future, one stage at a time.
        </p>
        <div className={styles.heroStats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.heroScroll}>Scroll</div>
      </div>

      <div className={styles.fullDivider} />

      {/* BIO */}
      <section id="bio" className={styles.section}>
        <div className={`${styles.sectionLabel} ${styles.reveal}`}>
          Who We Are
        </div>
        <div className={styles.bioGrid}>
          <div className={styles.reveal}>
            <h2 className={styles.h2}>
              Brotherhood
              <br />
              <em style={{ color: "var(--epk-fire)", fontStyle: "italic" }}>
                is the message.
              </em>
            </h2>
            <p className={styles.bioText}>
              <strong>
                PARO is more than just music — it&apos;s a brotherhood.
              </strong>{" "}
              Comprised of two real-life brothers, Satwik and Sanath Parashar,
              Paro delivers a powerful message of self-discovery, resilience,
              and elevation to an entire generation.
              <br />
              <br />
              Less than 6 months after dropping their debut single{" "}
              <em>&ldquo;Hold Me&rdquo;</em>, they opened for{" "}
              <strong>India&apos;s biggest hip-hop act, Seedhe Maut</strong>, in
              front of a crowd of 5,000–6,000 people in Lucknow.
              <br />
              <br />
              They&apos;ve since toured with{" "}
              <strong>Foosie Gang (Arpit Bala)</strong> across Delhi, Jaipur,
              and Lucknow, and carved out an active college circuit — NIFT
              Delhi, DTU, Amity, Rishihood, GD Goenka, and GNLU.
            </p>
          </div>
          <div className={`${styles.reveal} ${styles.revealDelay1}`}>
            <blockquote className={styles.bioQuote}>
              &ldquo;Paro is more than just music; it&apos;s a brotherhood, it
              is art with a message to inspire, motivate and elevate an entire
              generation.&rdquo;
              <cite>— Spotify Artist Bio</cite>
            </blockquote>
            <div className={styles.genreTags}>
              {genres.map((g) => (
                <span key={g} className={styles.genreTag}>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.fullDivider} />

      {/* MEMBERS */}
      <section className={styles.section}>
        <div className={`${styles.sectionLabel} ${styles.reveal}`}>
          The Brothers
        </div>
        <div className={styles.membersGrid}>
          {members.map((m, i) => (
            <div
              key={m.num}
              className={`${styles.memberCard} ${styles.reveal} ${i === 1 ? styles.revealDelay1 : ""}`}
            >
              <div className={styles.memberNum}>{m.num}</div>
              <img
                src={m.img}
                alt={m.name}
                className={styles.memberImg}
                style={{ filter: `grayscale(20%) ${m.hueFilter}` }}
              />
              <div className={styles.memberRole}>{m.role}</div>
              <div className={styles.memberName}>{m.name}</div>
              <div className={styles.memberHandle}>{m.handle}</div>
              <p className={styles.memberBio}>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.fullDivider} />

      {/* MUSIC */}
      <section id="music" className={styles.section}>
        <div className={`${styles.sectionLabel} ${styles.reveal}`}>
          Discography
        </div>
        <h2
          className={`${styles.h2} ${styles.reveal}`}
          style={{ marginBottom: 40 }}
        >
          Before The
          <br />
          Beginning.
        </h2>

        <div className={`${styles.albumArtSection} ${styles.reveal}`}>
          <img
            className={styles.albumArtImg}
            src="https://i.scdn.co/image/ab67616d00001e02212ce221a8d1756282d24ffa"
            alt="Before The Beginning — Paro"
          />
          <div>
            <span className={styles.albumTag}>
              DEBUT ALBUM · PARO RECORDS · 2025
            </span>
            <div className={styles.albumArtTitle}>
              &ldquo;Before The Beginning&rdquo;
            </div>
            <div className={styles.albumArtMeta}>
              14 TRACKS · 37 MIN · SELF-RELEASED
            </div>
            <div className={styles.streamChips} style={{ marginTop: 16 }}>
              <a
                className={`${styles.streamChip} ${styles.chipSpotify}`}
                href="https://open.spotify.com/album/2moszGfvEK9yYsHjqasDGW"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPOTIFY
              </a>
              <a
                className={`${styles.streamChip} ${styles.chipYoutube}`}
                href="https://youtube.com/@paro.officialmusic"
                target="_blank"
                rel="noopener noreferrer"
              >
                YOUTUBE
              </a>
              <a
                className={`${styles.streamChip} ${styles.chipInsta}`}
                href="https://instagram.com/weareparo"
                target="_blank"
                rel="noopener noreferrer"
              >
                @WEAREPARO
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.albumHero} ${styles.reveal}`}>
          <div>
            <div className={styles.albumTag}>TRACKLIST</div>
            <div className={styles.albumTitle}>Before The Beginning</div>
            <div className={styles.albumMeta}>
              14 TRACKS · 37 MIN 50 SEC · SELF-RELEASED
            </div>
            <div className={styles.tracklist}>
              {tracklist.map((t) => (
                <div key={t.num} className={styles.trackRow}>
                  <span className={styles.trackNum}>{t.num}</span>
                  <span
                    className={`${styles.trackName} ${t.lead ? styles.trackLead : ""}`}
                  >
                    {t.name}
                  </span>
                  {t.badge && (
                    <span className={styles.trackBadge}>{t.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.albumStreams}>
            <span className={styles.streamNum}>150K+</span>
            <div className={styles.streamLabel}>
              STREAMS ON
              <br />
              &ldquo;UP IN THE AIR&rdquo;
            </div>
            <div style={{ marginTop: 28 }}>
              <a
                href="https://open.spotify.com/artist/4Xon3vJqlI0Ed6VCAOWqvw"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.spotifyBtn}
              >
                SPOTIFY →
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.reveal}`} style={{ marginTop: 32 }}>
          <div className={styles.singlesLabel}>Singles &amp; EPs — 2025</div>
          <div className={styles.singlesStrip}>
            {singles.map((s) => (
              <a
                key={s.name}
                className={styles.singleCard}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={s.img} alt={s.name} className={styles.singleImg} />
                <div className={styles.singleYear}>{s.year}</div>
                <div
                  className={styles.singleName}
                  style={s.highlight ? { color: "var(--epk-fire)" } : undefined}
                >
                  {s.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.fullDivider} />

      {/* SHOWS */}
      <section id="shows" className={styles.section}>
        <div className={`${styles.sectionLabel} ${styles.reveal}`}>
          Live Shows &amp; Gigs
        </div>
        <h2
          className={`${styles.h2} ${styles.reveal}`}
          style={{ marginBottom: 40 }}
        >
          Built for
          <br />
          the stage.
        </h2>
        <table className={`${styles.showsTable} ${styles.reveal}`}>
          <thead>
            <tr>
              <th>Venue</th>
              <th>City</th>
              <th>Type</th>
              <th>Notable</th>
            </tr>
          </thead>
          <tbody>
            {shows.map((s, i) => (
              <tr key={i}>
                <td>{s.venue}</td>
                <td className={styles.tdCity}>{s.city}</td>
                <td>
                  <PillType type={s.type} />
                </td>
                <td className={styles.showsNote}>
                  {s.note}
                  {s.crowd && (
                    <span className={styles.crowdBadge}>{s.crowd}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className={styles.fullDivider} />

      {/* GALLERY */}
      <div className={styles.gallerySection}>
        <div
          className={`${styles.sectionLabel} ${styles.reveal}`}
          style={{ marginBottom: 32 }}
        >
          Live &amp; Press Photos
        </div>
        <div className={styles.galleryWrap}>
          <button
            type="button"
            aria-label="Scroll photos left"
            className={`${styles.arrowBtn} ${styles.arrowBtnLeft}`}
            onClick={() => scrollGallery("left")}
          >
            ←
          </button>

          <div className={styles.galleryGrid} ref={galleryRef}>
            {gallerySlots.map((slot, i) => (
              <div
                key={i}
                className={`${styles.photoSlot} ${slot.large ? styles.photoSlotLarge : ""} ${styles.reveal} ${styles[`revealDelay${Math.min(i, 3)}` as keyof typeof styles] || ""}`}
              >
                <img
                  src={typeof slot.src === "string" ? slot.src : slot.src.src}
                  alt={slot.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    ...(slot.imgStyle || {}),
                  }}
                />
                {slot.overlay && <div className={styles.photoOverlay} />}
                <div className={styles.slotLabel}>{slot.label}</div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll photos right"
            className={`${styles.arrowBtn} ${styles.arrowBtnRight}`}
            onClick={() => scrollGallery("right")}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.fullDivider} />

      {/* VIDEO / MUSIC */}
      <div className={styles.videoSection}>
        <div
          className={`${styles.sectionLabel} ${styles.reveal}`}
          style={{ marginBottom: 32 }}
        >
          Watch &amp; Listen
        </div>
        <div className={styles.videoGrid}>
          <div
            className={`${styles.reveal}`}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div className={styles.embedWrap}>
              <iframe
                style={{ borderRadius: 12, display: "block" }}
                src="https://open.spotify.com/embed/track/6RaQFf7cdvMP6bIv8oENQE?utm_source=generator&theme=0"
                width="100%"
                height={152}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className={styles.embedWrap}>
              <iframe
                style={{ borderRadius: 12, display: "block" }}
                src="https://open.spotify.com/embed/album/2moszGfvEK9yYsHjqasDGW?utm_source=generator&theme=0"
                width="100%"
                height={352}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className={`${styles.videoInfo} ${styles.reveal} ${styles.revealDelay1}`}
          >
            <div className={styles.videoTag}>Lead Single — 2025</div>
            <div className={styles.videoTitle}>Up In The Air</div>
            <p className={styles.videoDesc}>
              The breakout single from debut album{" "}
              <em style={{ color: "var(--epk-ember)" }}>
                Before The Beginning
              </em>
              . 150,000+ streams on Spotify. Zero label support. Pure organic
              reach — built on live stages, college campuses, and raw
              word-of-mouth.
            </p>
            <div className={styles.streamChips}>
              <a
                className={`${styles.streamChip} ${styles.chipSpotify}`}
                href="https://open.spotify.com/track/6RaQFf7cdvMP6bIv8oENQE"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPOTIFY
              </a>
              <a
                className={`${styles.streamChip} ${styles.chipYoutube}`}
                href="https://youtube.com/@paro.officialmusic"
                target="_blank"
                rel="noopener noreferrer"
              >
                YOUTUBE
              </a>
              <a
                className={`${styles.streamChip} ${styles.chipInsta}`}
                href="https://instagram.com/weareparo"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
            </div>
            <div className={styles.platformsBox}>
              <div className={styles.platformsLabel}>ALSO AVAILABLE ON</div>
              <div className={styles.platformsList}>
                Spotify · YouTube · JioSaavn · Gaana · Apple Music · Amazon
                Music
              </div>
            </div>
            <div className={styles.platformsBox} style={{ marginTop: 16 }}>
              <div className={styles.platformsLabel}>YOUTUBE CHANNEL</div>
              <a
                href="https://youtube.com/@paro.officialmusic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ytLink}
              >
                @Paro.Officialmusic →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fullDivider} />

      {/* CONTACT */}
      <section id="contact" className={styles.section}>
        <div className={`${styles.sectionLabel} ${styles.reveal}`}>
          Get In Touch
        </div>
        <h2
          className={`${styles.h2} ${styles.reveal}`}
          style={{ marginBottom: 40 }}
        >
          Book. Press.
          <br />
          Collaborate.
        </h2>
        <div className={`${styles.museTag} ${styles.reveal}`}>
          <div className={styles.museDot} />
          <div className={styles.museText}>
            Managed by <strong>Muse Records</strong> — All booking enquiries,
            press requests, and collaboration pitches go through Muse Records.
          </div>
        </div>
        <div className={styles.contactGrid}>
          {contacts.map((c, i) => (
            <div
              key={c.label}
              className={`${styles.contactCard} ${styles.reveal} ${styles[`revealDelay${Math.min(i % 3, 3)}` as keyof typeof styles] || ""}`}
            >
              <div className={styles.contactLabel}>{c.label}</div>
              <div className={styles.contactVal}>{c.val}</div>
              <div className={styles.contactSub}>{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className={styles.footer}>
        <div>
          <div className={styles.fName}>PARO</div>
          <div className={styles.fTagline}>
            MUSIC · BROTHERHOOD · MOVEMENT · 2025
          </div>
        </div>
        <ul className={styles.fLinks}>
          <li>
            <a
              href="https://instagram.com/weareparo"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/4Xon3vJqlI0Ed6VCAOWqvw"
              target="_blank"
              rel="noopener noreferrer"
            >
              SPOTIFY
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@paro.officialmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
          </li>
          <li>
            <a href="mailto:booking@muserecords.in">EMAIL</a>
          </li>
        </ul>
        <div className={styles.fCopy}>© 2025 PARO · ALL RIGHTS RESERVED</div>
      </footer> */}
    </div> // end epkRoot
  );
}
