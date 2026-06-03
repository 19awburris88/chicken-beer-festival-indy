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
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import festival1 from "./assets/festival-1.png";
import festival2 from "./assets/festival-2.png";
import festival3 from "./assets/festival-3.png";
import festival4 from "./assets/festival-4.png";
import festival5 from "./assets/festival-5.png";
import festival6 from "./assets/festival-6.png";

import indystar from "./assets/indystar.png";
import eater from "./assets/eater.png";
import nuvo from "./assets/nuvo.png";
import visitindy from "./assets/visitindy.png";

const ticketUrl =
  "https://www.eventbrite.com/e/2026-chicken-beer-festival-indianapolis-tickets-1983978969505";

const foodVendors = [
  "Khalanis Kitchen",
  "Huge Impact Restaurant",
  "EveryThang & Potatoes",
  "Connect Grills",
  "Mr. Shawarma",
  "Yazsh Cafe and Bistro",
  "Big Mike’s Barbeque",
  "Ks Krazy Eats",
  "Bigsy’s Sports Grill",
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
  "We’re Poppin Popcorn and Lemonade Naptown",
  "Legacy Popz",
  "Smokey Waters",
  "Happy Chicken",
  "Good Folks Catering",
  "Honey B’zzz Soulfood",
  "Mumma's Magic",
  "Just Us Seasonings",
  "Tacos & Arepas",
  "Eva's Cookies",
  "Just Fruit’N It",
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
  "Tito’s Handmade Vodka",
  "Sun King Brewery",
  "Red Bull",
  "Don Julio 1942",
  "Jack Daniel’s",
  "Topo Chico",
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

function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">🐔</span>
          <span>
            Chicken <strong>& Beer</strong>
          </span>
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
          variant="contained"
          className="mui-gold-btn nav-ticket"
        >
          Buy Tickets
        </Button>
      </nav>

      <section className="hero">
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={8}>
              <p className="eyebrow">6th Annual</p>

              <h1>
                Chicken <span>& Beer</span> Festival
              </h1>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap className="hero-chips">
                <Chip label="August 1, 2026" />
                <Chip label="University Park" />
                <Chip label="Indianapolis" />
                <Chip label={`${foodVendors.length + beverageVendors.length}+ Vendors`} />
              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  href={ticketUrl}
                  target="_blank"
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
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="hero-info-card">
                <CardContent>
                  <p className="eyebrow">Event Info</p>
                  <Typography variant="h3" className="card-title">
                    Free Entry
                  </Typography>
                  <Typography>Festival: 12 PM – 6 PM</Typography>
                  <Typography>Tasting: 12 PM – 3 PM</Typography>

                  <Button
                    href={ticketUrl}
                    target="_blank"
                    variant="contained"
                    fullWidth
                    className="mui-gold-btn card-btn"
                  >
                    Get Tickets
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="press-strip">
        <span className="press-label">As Seen In</span>
        <img src={indystar} alt="IndyStar" className="press-logo" />
        <img src={eater} alt="Eater Indianapolis" className="press-logo" />
        <img src={nuvo} alt="NUVO" className="press-logo" />
        <img src={visitindy} alt="Visit Indy" className="press-logo visit-indy" />
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
              Chicken & Beer Festival is Indianapolis’ summer celebration of bold flavor,
              cold drinks, local restaurants, live music, games, and community energy.
            </p>

            <Grid container spacing={2} className="stat-grid">
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

            <Button href={ticketUrl} target="_blank" className="text-gold">
              View Tickets →
            </Button>
          </div>

          <div className="vendor-pill-grid">
            {foodVendors.map((vendor) => (
              <div className="vendor-pill" key={vendor}>
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

          <div className="vendor-pill-grid beverage-grid">
            {beverageVendors.map((vendor) => (
              <div className="vendor-pill beverage" key={vendor}>
                {vendor}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">Entertainment</p>
          <h2>Live Music. DJs. Games & More.</h2>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FeatureCard icon="🎧" title="Live DJs" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard icon="🎸" title="Live Music" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard icon="🎲" title="Games" />
            </Grid>
          </Grid>
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
          <Grid container spacing={2}>
            {sponsors.map((sponsor) => (
              <Grid item xs={12} sm={6} md={4} key={sponsor}>
                <Card className="sponsor-card">
                  <CardContent>{sponsor}</CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        <section id="faq" className="section faq">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Before You Go</h2>

          <Typography
            className="faq-intro"
            sx={{
              maxWidth: "700px",
              margin: "0 auto 50px",
              color: "#bdbdbd",
              lineHeight: 1.7,
            }}
          >
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
          <div className="logo footer-logo">
            <span className="logo-icon">🐔</span>
            <span>
              Chicken <strong>& Beer</strong>
            </span>
          </div>
          <p>August 1, 2026 • University Park • Indianapolis, IN</p>
        </div>

        <Button href={ticketUrl} target="_blank" variant="contained" className="mui-gold-btn">
          Buy Tickets
        </Button>
      </footer>
    </main>
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

function FeatureCard({ icon, title }) {
  return (
    <Card className="feature-card">
      <CardContent>
        <div className="feature-icon">{icon}</div>
        <Typography variant="h4">{title}</Typography>
      </CardContent>
    </Card>
  );
}

export default App;