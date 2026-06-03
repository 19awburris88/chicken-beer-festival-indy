import { useState } from "react";
import "./App.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import festival1 from "./assets/festival-1.png";
import festival2 from "./assets/festival-2.png";
import festival3 from "./assets/festival-3.png";
import festival4 from "./assets/festival-4.png";
import festival5 from "./assets/festival-5.png";
import festival6 from "./assets/festival-6.png";

import entertainment1 from "./assets/entertainment-1.png";
import entertainment2 from "./assets/entertainment-2.png";
import entertainment3 from "./assets/entertainment-3.png";

import indystar from "./assets/indystar.png";
import eater from "./assets/eater.png";
import nuvo from "./assets/nuvo.png";
import visitindy from "./assets/visitindy.png";

import cbFestLogo from "./assets/cb-fest-logo.png";
import titos from "./assets/titos.png";
import sunking from "./assets/sunking.png";
import redbull from "./assets/redbull.png";
import donjulio from "./assets/donjulio.png";
import jackdaniels from "./assets/jackdaniels.png";

const ticketUrl =
  "https://www.eventbrite.com/e/2026-chicken-beer-festival-indianapolis-tickets-1983978969505";

const foodVendors = [
  "Khalanis Kitchen",
  "Huge Impact Restaurant",
  "EveryThang & Potatoes",
  "Connect Grills",
  "Mr. Shawarma",
  "Yazsh Cafe and Bistro",
  "Big Mike's Barbeque",
  "Ks Krazy Eats",
  "Bigsy's Sports Grill",
  "Jimmies Soulfood",
  "T Street Eatz",
  "Not Yo Mama's Meal Prep",
  "A&A Taste the Flavor Catering",
  "Golden Spatula",
  "Aroma Indian Cuisine and Bar",
  "Wisanggeni Pawon",
  "Paco's Taqueria",
  "City BBQ",
  "Joella's Hot Chicken",
  "Herculean Prepared Meals",
  "Big Benz BBQ",
  "Danielle's Popcorn and Funnel Cakes",
  "We're Poppin Popcorn and Lemonade Naptown",
  "Legacy Popz",
  "Smokey Waters",
  "Happy Chicken",
  "Good Folks Catering",
  "Honey B'zzz Soulfood",
  "Mumma's Magic",
  "Just Us Seasonings",
  "Tacos & Arepas",
  "Eva's Cookies",
  "Just Fruit'N It",
  "Cretia Cakes",
  "Sweetener",
];

const beverageVendors = [
  "Jeptha Creed",
  "Shake Up",
  "Amiracle Ade Lemonade",
  "Moontown Brewing Company",
  "The Health Club",
  "Cornbread Hemp",
  "Chilly Water Brewing Company",
  "Beer Pressure",
  "Bier Brewery",
];

const sponsors = [
  { name: "Tito's Handmade Vodka", logo: titos },
  { name: "Sun King Brewery", logo: sunking },
  { name: "Red Bull", logo: redbull },
  { name: "Don Julio 1942", logo: donjulio },
  { name: "Jack Daniel's", logo: jackdaniels },
];

const tickets = [
  {
    title: "General Entry",
    price: "Free",
    tag: "Community Access",
    items: ["Access to the festival", "Food vendors available", "Live music and games"],
  },
  {
    title: "Tasting Ticket",
    price: "$45",
    tag: "Most Popular",
    featured: true,
    items: [
      "Festival entry included",
      "Food and drink tastings",
      "12 PM – 3 PM tasting window",
    ],
  },
];

const faqs = [
  {
    question: "Is the festival free to enter?",
    answer:
      "Yes. General festival entry is free. Tasting tickets are available for guests who want food and drink samples.",
  },
  {
    question: "What time is the event?",
    answer:
      "The festival runs from 12 PM to 6 PM, with the tasting experience taking place from 12 PM to 3 PM.",
  },
  {
    question: "Where is the festival?",
    answer:
      "Chicken & Beer Festival takes place at University Park in downtown Indianapolis.",
  },
  {
    question: "Is this a family-friendly event?",
    answer: "Yes. Alcohol purchases and tastings require valid ID.",
  },
];

const pressLogos = [
  { src: indystar, alt: "IndyStar" },
  { src: eater, alt: "Eater Indianapolis" },
  { src: nuvo, alt: "NUVO" },
  { src: visitindy, alt: "Visit Indy", extraClass: "visit-indy" },
];

const entertainment = [
  { src: entertainment1, alt: "Live DJs", label: "Live DJs" },
  { src: entertainment2, alt: "Live Music", label: "Live Music" },
  { src: entertainment3, alt: "Games", label: "Games & Activities" },
];

function TikTokIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </SvgIcon>
  );
}

function Stat({ icon, number, label }) {
  return (
    <Card className="stat-card">
      <CardContent>
        <Box className="stat-icon">{icon}</Box>
        <Typography variant="h4">{number}</Typography>
        <Typography>{label}</Typography>
      </CardContent>
    </Card>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site">
      <nav className="navbar">
        <a href="/">
          <img src={cbFestLogo} alt="Chicken & Beer Festival" className="logo-img" />
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#vendors">Vendors</a>
          <a href="#tickets">Tickets</a>
          <a href="#gallery">Gallery</a>
          <a href="#faq">FAQ</a>
        </div>

        <Button
          href={ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          className="mui-gold-btn nav-ticket"
        >
          Buy Tickets
        </Button>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#vendors" onClick={() => setMenuOpen(false)}>Vendors</a>
          <a href="#tickets" onClick={() => setMenuOpen(false)}>Tickets</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <Button
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            className="mui-gold-btn"
          >
            Buy Tickets
          </Button>
        </div>
      )}

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.97), rgba(0,0,0,0.42)), url(${festival1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <div className="hero-content">
            <p className="eyebrow">6th Annual</p>

            <h1>
              Chicken <span>& Beer</span> Festival
            </h1>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent="center" className="hero-chips">
              <Chip label="August 1, 2026" />
              <Chip label="University Park" />
              <Chip label="Indianapolis" />
              <Chip label={`${foodVendors.length + beverageVendors.length}+ Vendors`} />
            </Stack>

            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
              <Button
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                className="mui-gold-btn"
                startIcon={<ConfirmationNumberIcon />}
              >
                Buy Tasting Tickets
              </Button>

              <Button href="#about" variant="outlined" size="large" className="mui-outline-btn">
                Explore Festival
              </Button>
            </Stack>
          </div>
        </Container>
      </section>

      <section className="press-strip">
        <span className="press-label">As Seen In</span>
        {pressLogos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`press-logo${logo.extraClass ? ` ${logo.extraClass}` : ""}`}
          />
        ))}
      </section>

      <Container maxWidth="xl">
        <section id="about" className="split-section">
          <Box className="image-card">
            <img src={festival1} alt="Festival guests enjoying chicken and beer" />
          </Box>

          <Box>
            <p className="eyebrow">About the Festival</p>
            <h2>Fried Chicken. Ice Cold Beer. Good Vibes.</h2>
            <p>
              Chicken & Beer Festival is Indianapolis' summer celebration of bold flavor,
              cold drinks, local restaurants, live music, games, and community energy.
            </p>

            <Grid container spacing={2} justifyContent="center" className="stat-grid">
              <Grid item xs={12} sm={4}>
                <Stat
                  icon={<RestaurantIcon />}
                  number={`${foodVendors.length}+`}
                  label="Food Vendors"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Stat
                  icon={<LocalBarIcon />}
                  number={`${beverageVendors.length}+`}
                  label="Drink Vendors"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Stat icon={<MusicNoteIcon />} number="Live" label="Music & DJs" />
              </Grid>
            </Grid>
          </Box>
        </section>

        <section id="vendors" className="section lineup-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">2026 Lineup</p>
              <h2>Food Vendors</h2>
            </div>

            <Button
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              View Tickets →
            </Button>
          </div>

          <div className="vendor-list">
            {foodVendors.map((vendor) => (
              <div className="vendor-item" key={vendor}>
                {vendor}
              </div>
            ))}
          </div>

          <div className="section-header beverage-header">
            <div>
              <p className="eyebrow">Beer, Spirits & Beverage</p>
              <h2>Beverage Partners</h2>
            </div>
          </div>

          <div className="vendor-list beverage-list">
            {beverageVendors.map((vendor) => (
              <div className="vendor-item" key={vendor}>
                {vendor}
              </div>
            ))}
          </div>
        </section>

        <section className="section entertainment-section">
          <p className="eyebrow">Entertainment</p>
          <h2>Live Music. DJs. Games & More.</h2>

          <div className="entertainment-gallery">
            {entertainment.map((item) => (
              <div className="entertainment-card" key={item.label}>
                <img src={item.src} alt={item.alt} />
                <div className="entertainment-overlay">
                  <h3>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tickets" className="section tickets-section">
          <p className="eyebrow">Ticket Options</p>
          <h2>Choose Your Festival Experience</h2>

          <Grid container spacing={3}>
            {tickets.map((ticket) => (
              <Grid item xs={12} md={4} key={ticket.title}>
                <Card className={`ticket-mui-card ${ticket.featured ? "featured-ticket" : ""}`}>
                  <CardContent>
                    <Chip label={ticket.tag} className="ticket-chip" />
                    <Typography variant="h4">{ticket.title}</Typography>
                    <Typography variant="h2">{ticket.price}</Typography>

                    <ul>
                      {ticket.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <Button
                      href={ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      fullWidth
                      className="mui-gold-btn"
                    >
                      Get Tickets
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        <section id="gallery" className="section gallery-section">
          <p className="eyebrow">Previous Festivals</p>
          <h2>Festival Gallery</h2>

          <div className="gallery-grid">
            <img src={festival1} alt="Chicken & Beer Festival crowd" />
            <img src={festival2} alt="Chicken & Beer Festival food" />
            <img src={festival3} alt="Chicken & Beer Festival guests" />
            <img src={festival4} alt="Chicken & Beer Festival vendor tents" />
            <img src={festival5} alt="Chicken & Beer Festival beer tasting" />
            <img src={festival6} alt="Chicken & Beer Festival atmosphere" />
          </div>
        </section>

        <section className="section sponsors">
          <p className="eyebrow">Thank You to Our Sponsors</p>

          <div className="sponsor-logo-grid">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="sponsor-logo-card">
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Before You Go</h2>

          <Typography className="faq-intro">
            Everything you need to know before joining us at Indianapolis&apos;
            favorite summer food and drink festival.
          </Typography>

          {faqs.map((item) => (
            <Accordion key={item.question} className="faq-accordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </section>
      </Container>

      <footer>
        <div>
          <img src={cbFestLogo} alt="Chicken & Beer Festival" className="logo-img footer-logo-img" />
          <p>August 1, 2026 • University Park • Indianapolis, IN</p>
          <div className="social-links">
            <a href="https://www.instagram.com/chickenandbeerindy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@chickenandbeerfest" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://www.facebook.com/chickenandbeerindy" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <Button
          href={ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          className="mui-gold-btn"
        >
          Buy Tickets
        </Button>
      </footer>
    </main>
  );
}

export default App;
