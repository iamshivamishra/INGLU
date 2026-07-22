"use client";

import { useEffect } from "react";
import styles from "./rider.module.css";
import Link from "next/link";

// ── Scroll reveal ─────────────────────────────────────────────────────────────
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll(`.${styles.reveal}`)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Data ──────────────────────────────────────────────────────────────────────

const tickerItems = [
  "PARO",
  "TECHNICAL RIDER 2026",
  "MANAGED BY MUSE RECORDS",
  "2 × SHURE WIRELESS MIC",
  "12FT × 8FT LED BACKDROP",
  "8 LINE ARRAYS · RCF HDL20/30 MIN",
  "HOSPITALITY RIDER 2026",
  "THE BIG LEAGUE · TBL",
];

const techItems = [
  {
    num: "01",
    badge: "CRITICAL",
    badgeType: "critical",
    title: "2 × Shure Wireless Microphone + Mic Stand",
    detail:
      "Shure BLX / QLXD / ULXD series preferred · Both units tested 90 min before performance · Fresh batteries mandatory · 1 dedicated mic stand per unit",
  },
  {
    num: "02",
    badge: "CRITICAL",
    badgeType: "critical",
    title: "12ft × 8ft LED Backdrop",
    detail:
      "Full-colour programmable LED wall · Minimum P3.9 pixel pitch · Operational and content-tested before soundcheck · Paro may supply custom MP4 content loops · Dedicated tech operator on standby during show",
  },
  {
    num: "03",
    badge: "CRITICAL",
    badgeType: "critical",
    title: "Stage Monitors — Tested Prior to Performance",
    detail:
      "Minimum 2 front-fill wedge monitors · Fully operational and EQ'd before soundcheck · Monitor mix separate from FOH · Sound engineer present throughout soundcheck · No substitution without prior approval",
  },
  {
    num: "04",
    badge: "REQUIRED",
    badgeType: "required",
    title: "2 × In-Ear Monitors (IEM)",
    detail:
      "Shure PSM 300/900 or Sennheiser EW-IEM G4 preferred · One unit per artist — Satwik & Sanath · Individual monitor mix for each unit · RF scan mandatory before show · Transmitter + receiver packs provided",
  },
  {
    num: "05",
    badge: "CRITICAL",
    badgeType: "critical",
    title: "8 × Line Array Speakers — Minimum RCF HDL 20/30",
    detail:
      "8 cabinets minimum (4 per side) · RCF HDL 20A / 30A / 50A preferred · Matched subwoofers required · Full audience coverage to rear of venue · Certified audio engineer to tune system · Line check mandatory 2 hours pre-show",
  },
];

const specTable = [
  {
    equip: "Wireless Microphone",
    spec: "Shure BLX / QLXD / ULXD — Handheld",
    qty: "×2",
  },
  {
    equip: "Mic Stand",
    spec: "Standard round base — boom optional",
    qty: "×2",
  },
  {
    equip: "LED Backdrop",
    spec: "12ft × 8ft · P3.9 pixel pitch min · Full colour",
    qty: "×1",
  },
  {
    equip: "Stage Monitor Wedge",
    spec: "Any professional front-fill · Tested pre-show",
    qty: "×2 min",
  },
  {
    equip: "In-Ear Monitor (IEM)",
    spec: "Shure PSM 300/900 or Sennheiser EW G4",
    qty: "×2",
  },
  {
    equip: "Line Array Cabinet",
    spec: "RCF HDL 20A / 30A / 50A — 4 per side",
    qty: "×8 min",
  },
  {
    equip: "Subwoofers",
    spec: "Matched to line array · RCF SUB 9004 preferred",
    qty: "×2 min",
  },
  {
    equip: "FOH Console",
    spec: "Yamaha CL/QL · DiGiCo · Allen & Heath",
    qty: "×1",
  },
  {
    equip: "Stage Power",
    spec: "Dedicated 16A clean power drops on stage",
    qty: "×4 min",
  },
];

const onStageItems = [
  {
    num: "01",
    badge: "ON STAGE",
    badgeType: "critical",
    title: "3–4 Bottles of Still Mineral Water",
    detail:
      "Minimum 2 bottles to remain on stage at all times · 500ml or 1L bottles · Room temperature preferred · Replenish if performance exceeds 45 min",
  },
  {
    num: "02",
    badge: "ON STAGE",
    badgeType: "required",
    title: "3–4 Energy Drink Cans",
    detail:
      "Red Bull preferred · Ice cold · Placed accessible from stage or side-stage · Do not open — leave sealed for artist",
  },
  {
    num: "03",
    badge: "ON STAGE",
    badgeType: "required",
    title: "3–4 Coke / Soft Drink Cans",
    detail:
      "Coca-Cola preferred · Chilled · Placed side-stage or on stage table · Sealed until required",
  },
  {
    num: "04",
    badge: "ON STAGE",
    badgeType: "required",
    title: "4 × Clean Towels",
    detail:
      "Fresh, clean white hand towels · Placed backstage / side-stage before showtime · Available before, during and after performance",
  },
];

const greenRoomItems = [
  {
    num: "01",
    badge: "REQUIRED",
    badgeType: "critical",
    title: "Comfortable Seating Area with Security",
    detail:
      "Private green room or dedicated backstage area · Comfortable seating for 5 (3 artists + 2 managers) · Security stationed outside — no unauthorised entry · Lockable door preferred",
  },
  {
    num: "02",
    badge: "REQUIRED",
    badgeType: "critical",
    title: "Clean Washrooms & Toilets",
    detail:
      "Dedicated and clean restroom access for artist team · Inspected and cleaned before artist arrival · Stocked with soap, paper towels / tissue, hand sanitiser",
  },
  {
    num: "03",
    badge: "PREFERRED",
    badgeType: "preferred",
    title: "Hot Snacks, Wafers, Chocolates & Energy Bars",
    detail:
      "Hot snacks — samosas, sandwiches or local equivalent · Assorted wafers / chips · Chocolate bars — KitKat / Snickers or similar · Energy bars — Clif / Ritebite or equivalent · Sufficient for team of 5",
  },
  {
    num: "04",
    badge: "REQUIRED",
    badgeType: "required",
    title: "Freezer — Stocked with Soft Beverages",
    detail:
      "Working freezer or refrigerator · Red Bull (min 6 cans) · Coke, Sprite, 7Up (assorted) · Fresh fruit juices · Still mineral water (min 8 bottles) · All items pre-chilled upon artist arrival",
  },
  {
    num: "05",
    badge: "COMFORT",
    badgeType: "comfort",
    title: "Tea & Coffee Vending Machine / Station",
    detail:
      "Functioning vending machine or hot beverage station · Tea bags kept separately — min 10 bags · Sugar, creamer / milk available · Disposable cups or clean mugs",
  },
];

const travelItems = [
  {
    num: "01",
    badge: "OUTSIDE DELHI",
    badgeType: "required",
    title: "4–5 Air Tickets — Shows Outside Delhi",
    detail:
      "Economy class return tickets · Departing Delhi · Booking confirmed minimum 7 days in advance · E-tickets sent to management email · IndiGo / Air India / Vistara preferred",
  },
  {
    num: "02",
    badge: "GROUND",
    badgeType: "required",
    title: "Ground Transportation — 1 Dedicated Fortuner or Crysta",
    detail:
      "Toyota Fortuner or Toyota Innova Crysta · Dedicated for team use only — no sharing · Available from artist arrival to post-show hotel drop · Experienced driver with local city knowledge · AC operational at all times",
  },
  {
    num: "03",
    badge: "ACCOMMODATION",
    badgeType: "required",
    title: "2 Rooms — 3-Star & Above · AP or IRD Access",
    detail:
      "Minimum 2 rooms in a 3-star or above property · AP (All meals included) or IRD (In-Room Dining) access mandatory · Check-in day before or day of event per schedule · Late check-out on departure day · Property within 30 min of venue",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

type BadgeType = "critical" | "required" | "preferred" | "comfort";

function Badge({ type, label }: { type: BadgeType; label: string }) {
  const cls = {
    critical: styles.badgeCritical,
    required: styles.badgeRequired,
    preferred: styles.badgePreferred,
    comfort: styles.badgeComfort,
  }[type];
  return <span className={`${styles.itemBadge} ${cls}`}>{label}</span>;
}

type ItemVariant = "tech" | "hosp" | "travel";

function RiderItem({
  num,
  title,
  detail,
  badge,
  badgeType,
  variant,
  delay = 0,
}: {
  num: string;
  title: string;
  detail: string;
  badge: string;
  badgeType: string;
  variant: ItemVariant;
  delay?: number;
}) {
  const varCls = {
    tech: styles.techItem,
    hosp: styles.hospItem,
    travel: styles.travelItem,
  }[variant];
  const numCls = {
    tech: styles.techNum,
    hosp: styles.hospNum,
    travel: styles.travelNum,
  }[variant];
  const delayCls =
    [styles.d0, styles.d1, styles.d2, styles.d3, styles.d4][delay] ?? styles.d0;
  return (
    <div
      className={`${styles.riderItem} ${varCls} ${styles.reveal} ${delayCls}`}
    >
      <div className={`${styles.itemNum} ${numCls}`}>{num}</div>
      <div className={styles.itemBody}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemDetail}>{detail}</div>
      </div>
      <Badge type={badgeType as BadgeType} label={badge} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RiderPage() {
  useScrollReveal();
  const allTicker = [...tickerItems, ...tickerItems];

  return (
    <div className={styles.riderRoot}>
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
        <Link className={styles.navLogo} href="/muse-records/paro">
          PARO
        </Link>
        <ul className={styles.navLinks}>
          {[
            ["Bio", "/muse-records/paro#bio"],
            ["Music", "/muse-records/paro#music"],
            ["Shows", "/muse-records/paro#shows"],
            ["Rider", "/muse-records/paro/rider"],
            ["Contact", "/muse-records/paro#contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={label === "Rider" ? styles.navLinkActive : ""}
              >
                {label}
              </Link>
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

      {/* PAGE HERO */}
      <div className={styles.pageHero}>
        <div className={styles.heroGrid} />
        <div className={styles.pageEyebrow}>
          <span className={styles.liveDot} />
          Artist Requirements Document — 2026
        </div>
        <h1 className={styles.pageTitle}>
          Technical &amp;
          <br />
          <span>Hospitality</span>
          <br />
          Rider.
        </h1>
        <p className={styles.pageSub}>
          All requirements below are mandatory for a world-class show
          experience. Please read carefully and confirm at least{" "}
          <strong>5 working days</strong> before the event. Contact Muse Records
          for any substitutions.
        </p>
        <div className={styles.heroTabs}>
          <a className={`${styles.htab} ${styles.htabTech}`} href="#tech-rider">
            ⚡ Technical Rider
          </a>
          <a className={`${styles.htab} ${styles.htabHosp}`} href="#hosp-rider">
            🥤 Hospitality Rider
          </a>
          <a className={`${styles.htab} ${styles.htabTravel}`} href="#travel">
            ✈️ Travel & Logistics
          </a>
        </div>
      </div>

      <div className={styles.fullDivider} />

      {/* ── TECHNICAL RIDER ── */}
      <div className={styles.riderSection} id="tech-rider">
        <div
          className={`${styles.sectionLabel} ${styles.sectionLabelTech} ${styles.reveal}`}
        >
          Technical Rider
        </div>
        <div className={styles.riderGrid}>
          {techItems.map((item, i) => (
            <RiderItem key={item.num} {...item} variant="tech" delay={i} />
          ))}
        </div>

        {/* Stage Diagram */}
        <div className={`${styles.stageDiagram} ${styles.reveal}`}>
          <div className={styles.stageLabelTop}>Stage Layout — Top View</div>
          <div className={`${styles.stageElement} ${styles.seLed}`}>
            12 FT × 8 FT LED BACKDROP (UPSTAGE CENTRE)
          </div>
          <div className={styles.stageBox}>
            <div className={styles.stageRow}>
              <div className={`${styles.stageElement} ${styles.seMonitor}`}>
                WEDGE
                <br />
                MON L
              </div>
              <div className={styles.stageCentre}>
                <div className={styles.stageMics}>
                  <div className={`${styles.stageElement} ${styles.seMic}`}>
                    🎤 MIC 1<br />
                    SATWIK
                  </div>
                  <div className={`${styles.stageElement} ${styles.seMic}`}>
                    🎤 MIC 2<br />
                    SANATH
                  </div>
                </div>
                <div className={styles.stageIems}>
                  <div className={`${styles.stageElement} ${styles.seIem}`}>
                    IEM 1
                  </div>
                  <div className={`${styles.stageElement} ${styles.seIem}`}>
                    IEM 2
                  </div>
                </div>
              </div>
              <div className={`${styles.stageElement} ${styles.seMonitor}`}>
                WEDGE
                <br />
                MON R
              </div>
            </div>
          </div>
          <div className={styles.stagePaRow}>
            <div className={styles.stagePaGroup}>
              {["PA L1", "PA L2", "PA L3", "PA L4"].map((p) => (
                <div
                  key={p}
                  className={`${styles.stageElement} ${styles.sePa}`}
                >
                  {p}
                </div>
              ))}
            </div>
            <div className={`${styles.stageElement} ${styles.stageAudience}`}>
              ↓ AUDIENCE ↓
            </div>
            <div className={styles.stagePaGroup}>
              {["PA R1", "PA R2", "PA R3", "PA R4"].map((p) => (
                <div
                  key={p}
                  className={`${styles.stageElement} ${styles.sePa}`}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.stageLabelBottom}>
            8 × LINE ARRAYS (RCF HDL 20/30 MIN) · MATCHED SUBS · FOH CONSOLE AT
            REAR OF AUDIENCE
          </div>
        </div>

        {/* Spec Table */}
        <table className={`${styles.specTable} ${styles.reveal}`}>
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Preferred Spec / Brand</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {specTable.map((row) => (
              <tr key={row.equip}>
                <td>{row.equip}</td>
                <td className={styles.specDetail}>{row.spec}</td>
                <td className={styles.specQty}>{row.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.fullDivider} />

      {/* ── HOSPITALITY RIDER ── */}
      <div className={styles.riderSection} id="hosp-rider">
        <div
          className={`${styles.sectionLabel} ${styles.sectionLabelHosp} ${styles.reveal}`}
        >
          Hospitality Rider
        </div>

        <div className={`${styles.subHeader} ${styles.reveal}`}>
          <div className={`${styles.subIcon} ${styles.subIconStage}`}>🎤</div>
          <div className={`${styles.subTitleH} ${styles.hospT}`}>On Stage</div>
          <div className={styles.subCount}>4 REQUIREMENTS</div>
        </div>
        <div className={styles.riderGrid}>
          {onStageItems.map((item, i) => (
            <RiderItem key={item.num} {...item} variant="hosp" delay={i} />
          ))}
        </div>

        <div
          className={`${styles.subHeader} ${styles.reveal}`}
          style={{ marginTop: 52 }}
        >
          <div className={`${styles.subIcon} ${styles.subIconGreen}`}>🟢</div>
          <div className={`${styles.subTitleH} ${styles.hospT}`}>
            Green Room / Backstage
          </div>
          <div className={styles.subCount}>5 REQUIREMENTS</div>
        </div>
        <div className={styles.riderGrid}>
          {greenRoomItems.map((item, i) => (
            <RiderItem key={item.num} {...item} variant="hosp" delay={i} />
          ))}
        </div>
      </div>

      <div className={styles.fullDivider} />

      {/* ── TRAVEL & LOGISTICS ── */}
      <div className={styles.riderSection} id="travel">
        <div
          className={`${styles.sectionLabel} ${styles.sectionLabelTravel} ${styles.reveal}`}
        >
          Travel & Logistics — TBL
        </div>

        <div className={`${styles.subHeader} ${styles.reveal}`}>
          <div className={`${styles.subIcon} ${styles.subIconTbl}`}>✈️</div>
          <div className={`${styles.subTitleH} ${styles.travelT}`}>
            The Big League — Team of 5
          </div>
          <div className={styles.subCount}>3 ARTISTS · 2 MANAGERS</div>
        </div>

        <div className={`${styles.teamGrid} ${styles.reveal}`}>
          {[
            {
              num: "3",
              title: "Artists",
              detail: "PARO MEMBERS\n+ ADDITIONAL CREW\nAS REQUIRED",
            },
            {
              num: "2",
              title: "Managers",
              detail: "MUSE RECORDS\nMANAGEMENT\nREPRESENTATIVES",
            },
            {
              num: "5",
              title: "Full Team",
              detail: "ALL LOGISTICS TO\nCOVER COMPLETE\nTEAM OF 5",
            },
          ].map((card) => (
            <div key={card.title} className={styles.teamCard}>
              <div className={styles.teamCardNum}>{card.num}</div>
              <div className={styles.teamCardTitle}>{card.title}</div>
              <div className={styles.teamCardDetail}>
                {card.detail.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.riderGrid} style={{ marginTop: 24 }}>
          {travelItems.map((item, i) => (
            <RiderItem key={item.num} {...item} variant="travel" delay={i} />
          ))}
        </div>
      </div>

      <div className={styles.fullDivider} />

      {/* NOTICE */}
      <div
        className={styles.riderSection}
        style={{ paddingTop: 40, paddingBottom: 80 }}
      >
        <div className={`${styles.noticeBox} ${styles.reveal}`}>
          <div className={styles.noticeHead}>
            ⚠️ Important Notice to Organisers
          </div>
          We strive for a top-notch show for our Artist & Audience, but we also
          understand the need for substitutions from a rental or logistical
          standpoint.{" "}
          <strong>
            We request that you inform us in case of any discrepancies,
            shortfalls, or substitutions
          </strong>{" "}
          at least 5 working days before the event so we can assess and confirm
          accordingly. Failure to communicate critical shortfalls may affect
          show delivery. All riders are subject to mutual agreement — we are
          happy to discuss.
          <div className={styles.noticeContacts}>
            <span>📧 paro.mgmnt@ingluglobal.in</span>
            <span>📞 +91 99904 61446</span>
            <span>📸 @muserecords.in</span>
          </div>
        </div>
      </div>
    </div>
  );
}
