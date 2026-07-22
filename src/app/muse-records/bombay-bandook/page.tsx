"use client";

import { useEffect } from "react";
import styles from "./bandook.module.css";
import bbHero from "@/assets/bombay-bandook-hero.jpg";
import bbLive from "@/assets/bombay-bandook-live.jpg";

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
  { num: "Mumbai", label: "Based In" },
  { num: "9", label: "Singles Released" },
  { num: "2022", label: "Independence Rock Winners" },
  { num: "Apple", label: "Store-Featured Single" },
];

const facts = [
  { label: "Band Name", value: "Bombay Bandook" },
  { label: "Based In", value: "Mumbai, India" },
  { label: "Category", value: "Indian Classical Fusion Band" },
  {
    label: "Genres",
    value:
      "Raag-based melody with Jazz, Prog Rock, Funk, Folk & Classical influences",
  },
];

const musicList = [
  { n: "01", title: "Yaman", badge: "Apple Store Feature" },
  { n: "02", title: "Tilak", badge: "Single" },
  { n: "03", title: "Ginti", badge: "Single" },
  { n: "04", title: "Ritu Rani", badge: "Single" },
  { n: "05", title: "Sagariya", badge: "Single" },
];

const liveCircuit = [
  <>
    Alongside the legendary <strong>Wadali Brothers</strong> at Phoenix
    Mills, for Awestrung
  </>,
  "Fandom — Bangalore",
  "Hard Rock Cafe and High Spirits — Pune",
  "Headlining sets at KC College and Jai Hind College festivals",
];

const highlights = [
  <>
    Performed for the <strong>Government of India</strong> (Indore), Start-Up
    Conclave 2022, in the presence of the Prime Minister of India and Chief
    Minister of Bhopal
  </>,
  "Shared the stage with the Wadali Brothers at High Street Phoenix, 2017",
  <>
    Named Man&apos;s World <strong>&apos;Artist to Watch Out For&apos;</strong>,
    2020
  </>,
  "Best Folk Fusion Band 2020, for the track 'Azad'",
  "Single 'Yaman' featured in Apple's flagship stores at Palladium, Mumbai and Delhi",
  <>
    Winner of <strong>Independence Rock 2022</strong> — India&apos;s next Rock
    legends
  </>,
];

const filmography = [
  { title: "Autumn Leaf", year: "2018" },
  { title: "Antatogatva", year: "2018" },
];

const press = [
  {
    title: "Bombay Bandook Turn to Dance-Rock with Dexterity on 'Yaman'",
    source: "Rolling Stone",
    href: null,
  },
  {
    title: "Watch Bombay Bandook's Eerie Psychological Music Video for 'Azad'",
    source: "Rolling Stone",
    href: null,
  },
  {
    title: "8 Fusion Artists You Need to Add to Your Playlist",
    source: "Rolling Stone",
    href: null,
  },
  {
    title: "Band of the Month, June 2018",
    source: "Score",
    href: null,
  },
  {
    title: "Bombay Bandook Interview — Hindustani Fusion Music Group",
    source: "ETV Bharat",
    href: "https://www.etvbharat.com/en/lifestyle/bombay-bandook-interview-hindustani-fusion-music-group-enn26061906550",
  },
];

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@BombayBandookMusic/featured",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bombaybandook/?hl=en",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/3VkYRrfqoEIhBfcHTvdYGs?si=-gPKFCO-Tkq4gSId7dg9fw",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function BombayBandookPage() {
  useScrollReveal();

  return (
    <div className={styles.bbRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          <div className={styles.navName}>Bombay Bandook</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#music">Music</a>
            <a href="#live">Live</a>
            <a href="#press">Press</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div
          className={styles.heroPhoto}
          style={{ backgroundImage: `url(${bbHero.src})` }}
        />
        <div className={styles.heroScrim} />
        <div className={`${styles.wrap} ${styles.heroContent}`}>
          <div className={`${styles.tag} ${styles.heroEyebrow}`}>
            Indian Classical Fusion Band · Electronic Press Kit 2026
          </div>
          <h1 className={styles.heroTitle}>
            Bombay
            <br />
            <span>Bandook</span>
          </h1>
          <p className={styles.heroSub}>
            Raag-based melody collides with jazz, prog-rock, funk and folk —
            nine singles deep into a sound the band calls, simply, the{" "}
            <strong>Bandook sound</strong>.
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
            <span className={styles.idx}>01</span>
            <h2>About the Band</h2>
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
                Bombay Bandook is an Indian classical fusion band from
                Mumbai, India. Compositionally and sonically, the music is a
                blend of Raag-based melody writing, presented in a more
                modern aesthetic, taking influence from western genres such
                as jazz, progressive rock, funk, folk music, and classical
                music, to name a few.
              </p>
              <p>
                The members of the band themselves come from completely
                different musical backgrounds and influences — creating an
                entirely unique sound that often lies beyond the taxonomical
                constraints of genres. The band plans to bring massive change
                into the current independent scene, and to become the
                biggest band in the country.
              </p>
              <p>
                Currently, there are a total of nine singles, each a
                unique-sounding musical piece, tied by a common{" "}
                <strong>&apos;Bandook sound.&apos;</strong> These
                compositions have been praised by the likes of Karsh Kale,
                Ehsaan Noorani, Rekha Bhardwaj, Ustaad Rashid Khan, Kaushika
                Chakraborthy, Padmashri Purushottam Upadhyay, Indian Ocean,
                and Subhash Ghai.
              </p>
              <p>
                They&apos;ve been named <strong>Band of the Month</strong> by
                Rolling Stone India and The Score Magazine India, and their
                work has been featured on Nearfox India, Hindustan Times,
                Mumbai Mirror, and DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO BREAK 1 */}
      <div className={`${styles.photoBreak} ${styles.reveal}`}>
        <img
          src={bbLive.src}
          alt="Bombay Bandook performing live at antiSOCIAL, Mumbai, March 2026"
        />
        <div className={styles.photoCaption}>
          Live at antiSOCIAL, Mumbai — 19 March 2026 · Photo: Abhishek Gupta
        </div>
      </div>

      {/* MUSIC */}
      <section className={`${styles.music} ${styles.sectionPad}`} id="music">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.idx}>02</span>
            <h2>Previously Released Music</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.musicList} ${styles.reveal}`}>
            {musicList.map((m) => (
              <div key={m.n} className={styles.musicRow}>
                <span className={styles.n}>{m.n}</span>
                <span className={styles.title}>{m.title}</span>
                <span className={styles.badge}>{m.badge}</span>
              </div>
            ))}
          </div>
          <p className={`${styles.musicNote} ${styles.reveal}`}>
            Plus additional singles, for a total of nine released tracks
            under the shared &apos;Bandook sound.&apos;
          </p>
        </div>
      </section>

      {/* LIVE */}
      <section className={`${styles.live} ${styles.sectionPad}`} id="live">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.idx}>03</span>
            <h2>Live Shows &amp; Highlights</h2>
            <div className={styles.rule} />
          </div>
          <div className={`${styles.twoCol} ${styles.reveal}`}>
            <div className={styles.colBlock}>
              <h4>On the Live Circuit</h4>
              <ul>
                {liveCircuit.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.colBlock}>
              <h4>Highlights</h4>
              <ul>
                {highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO BREAK 2 */}
      <div className={`${styles.photoBreak} ${styles.reveal}`}>
        <img
          src={bbHero.src}
          alt="Bombay Bandook backstage at antiSOCIAL, Mumbai, March 2026"
        />
        <div className={styles.photoCaption}>
          Backstage at antiSOCIAL, Mumbai — March 2026 · Photo: Abhishek
          Gupta
        </div>
      </div>

      {/* FILMOGRAPHY */}
      <section className={`${styles.filmo} ${styles.sectionPad}`}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.idx}>04</span>
            <h2>Filmography (Score)</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.reveal}>
            {filmography.map((f) => (
              <div key={f.title} className={styles.filmoRow}>
                <span>{f.title}</span>
                <span className={styles.filmoYear}>{f.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className={`${styles.press} ${styles.sectionPad}`} id="press">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.idx}>05</span>
            <h2>Press</h2>
            <div className={styles.rule} />
          </div>
          <div className={styles.reveal}>
            {press.map((p) => (
              <div key={p.title} className={styles.pressRow}>
                <span>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </span>
                <span className={styles.pressSource}>{p.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact} id="contact">
        <div className={styles.wrap}>
          <div className={`${styles.contactCard} ${styles.reveal}`}>
            <h2>Get In Touch</h2>
            <p className={styles.contactSub}>
              For bookings, press &amp; collaborations
            </p>
            <div className={styles.socialRow}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  className={styles.socialBtn}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2026 Bombay Bandook — Electronic Press Kit
      </footer>
    </div>
  );
}
