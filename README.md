# Royal Wedding Invitation — Ultra-Premium Mobile-First Interactive Website

An ultra-luxurious, mobile-first interactive wedding invitation website built with pure **HTML5**, modern **CSS3**, and **vanilla JavaScript** (zero heavy external frameworks or dependencies).

---

## ✨ Key Features

1. **3D Interactive Envelope Welcome Screen**:
   - Realistic 3D textured Burgundy envelope with a folding triangular flap and gold monogram wax seal (`R&S`).
   - Clicking the seal, inner card, or "OPEN" button triggers:
     - **Web Audio API Celestial Chime**: Synthesized crystal bell arpeggio chords with zero external audio dependencies.
     - **Physics-based Shower**: Fluttering rose petals and shimmering 24K gold foil confetti on an HTML5 canvas overlay.
     - **3D Flap Unfold**: Flap rotates back (`rotateX`), seal vanishes, and inner card smoothly slides up.
     - **Audio Ambiance**: Automatic fade-in of meditative royal ambient music (synthesized or MP3).

2. **Cinematic Auto-Scroll Tour**:
   - Automatically pauses for 3 seconds after opening so the guest can admire the blessing and hero card.
   - Begins a continuous slow auto-scroll down the page (~42 px/sec) using `requestAnimationFrame`.
   - **Zero-lag user interrupt**: Any touch, swipe, mouse wheel roll, click, or keyboard key immediately halts auto-scroll and hands full manual control to the user.

3. **Floating Controls**:
   - **Bilingual Language Switcher**: Smooth sliding capsule to toggle between **English** and **Regional Language** (Punjabi Gurmukhi / Hindi).
   - **Royal Music Player**: Rotating 24K gold vinyl medallion, animated sound wave equalizer bars, and track pill.

4. **Royal Stationery Sections**:
   - **Hero Darbar Card**: 24K gold filigree corners (`.card-corner`), sacred emblem (`ੴ` / `ॐ`), divine blessing, couple names in luxury typography (`Pinyon Script`, `Cinzel`), framed portrait, and auspicious date badge.
   - **Live Countdown**: Days, Hours, Minutes, and Seconds updating in real-time.
   - **Couple Showcase**: Individual cards for Bride & Groom with circular gold frames, parents' names, and heartfelt bios.
   - **Event Itinerary**: Cards for Mehendi & Sangeet, Anand Karaj (Wedding Ceremony), and Royal Reception with dress codes and timing highlights.
   - **Family RSVP**: Ahluwalia & Bedi blessings with one-tap `tel:` phone call buttons.
   - **Venue & Google Maps**: Embedded interactive Google Maps iframe with a direct "📍 Get Directions" button.
   - **Royal Footer**: WhatsApp one-tap share with pre-formatted invitation message, native Web Share API, "Back to Top", and gold foil developer credit.

---

## 🎨 How to Customize

All customization settings are centralized at the top of [`script.js`](file:///C:/Users/PC/.gemini/antigravity/scratch/royal-wedding-invitation/script.js):

```javascript
const CONFIG = {
  couple: {
    groom: "Rohan",
    groomFull: "Rohan Singh Ahluwalia",
    bride: "Simran",
    brideFull: "Simran Kaur Bedi",
    monogram: "R&S",
    unionMonogram: "R & S"
  },
  weddingDateTarget: new Date("2026-12-18T10:00:00+05:30"),
  weddingDateDisplay: "Friday, December 18, 2026",
  sacredSymbol: "ੴ", // e.g. ੴ, ॐ, 卐, ✝, ﷽, or Custom
  venue: {
    name: "The Grand Heritage Palace",
    address: "MG Road, Near Sultanpur Estate, New Delhi, Delhi 110030",
    googleMapsUrl: "https://maps.google.com/?q=The+Grand+Heritage+Palace+New+Delhi"
  },
  contacts: [
    { name: "S. Gurmukh Singh Ahluwalia", phone: "+919876543210", displayPhone: "+91 98765 43210" },
    { name: "S. Jasbir Singh Bedi", phone: "+919812345678", displayPhone: "+91 98123 45678" }
  ],
  developerCredit: "Designed & Developed with Royal Elegance by YourBrand.in"
};
```

---

## 🚀 How to Run

Simply open [`index.html`](file:///C:/Users/PC/.gemini/antigravity/scratch/royal-wedding-invitation/index.html) in any modern desktop or mobile browser. No build steps, bundlers, or servers required!
