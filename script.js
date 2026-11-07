/* ============================================================
   INDIAN WEDDING INVITATION — script.js
   ============================================================
   USAGE:
   Update the WEDDING_CONFIG object below with real wedding
   details. All sections read from this config automatically.
   ============================================================ */

'use strict';

/* ============================================================
   ★ WEDDING CONFIGURATION — EDIT THIS SECTION ★
   All wedding details are centralized here so you can
   reuse this template for any wedding without touching
   any other part of the code.
   ============================================================ */
const WEDDING_CONFIG = {

  /* ── Couple ─────────────────────────────────────────── */
  bride: {
    firstName:    'Taranpreet',
    lastName:     'Kaur',
    fullName:     'Taranpreet Kaur',
    family:       'Ludhiana Family',
    grandparents: 'Beloved Granddaughter of Ludhiana Family',
    parents:      'Daughter of Sardarni Jasveer Kaur & Sardar Amarjeet Singh (Residents of Ludhiana)',
    bio:          'Blessed with grace, humility, and warmth, Taranpreet carries forward cherished heritage and noble values with deep love, joy, and devotion.',
    photo:        'assets/images/bride_portrait.png',
  },

  groom: {
    firstName:    'Jaspreet',
    lastName:     'Singh',
    fullName:     'Jaspreet Singh',
    family:       'Bhamra Family',
    grandparents: 'Paternal Grandson of Sardarni Kuldeep Kaur & Late Sardar Malkeet Singh',
    parents:      'Son of Sardarni Baljeet Kaur & Late Sardar Jagjeet Singh',
    bio:          'Grounded in Sikh values and integrity, Jaspreet embodies honor, generosity, and humility, upholding the beloved lineage of his family with devotion.',
    photo:        'assets/images/groom_portrait.png',
  },

  couplePhoto:  'assets/images/couple_gurdwara_hero.webp',  // Royal Sikh wedding Gurdwara hero image

  /* ── Wedding Date & Venue ────────────────────────────── */
  weddingDate:  '2026-11-11T20:00:00',

  venue: {
    name:           '<span class="venue-name-primary">Hotel Grand Palazzo</span><span class="venue-name-secondary">ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ</span>',
    address:        'Guru Gobind Singh Nagar, Daba Road,<br />Near Oswal Mill, Ludhiana, Punjab',
    displayDate:    'Wednesday, November 11, 2026 (ਬੁੱਧਵਾਰ 11 ਨਵੰਬਰ 2026)',
    displayTime:    'Jaggo: 8:00 PM Night (8:00 ਵਜੇ ਰਾਤ)',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Palazzo+Guru+Gobind+Singh+Nagar+Daba+Road+Near+Oswal+Mill+Ludhiana+Punjab',
  },

  swagatKarta: {
    title:    'Welcoming Families (ਸਵਾਗਤ ਕਰਤਾ)',
    families: ['ਭੰਮਰਾ ਪਰਿਵਾਰ (Bhamra Family)', 'ਮਠਾੜੂ ਪਰਿਵਾਰ (Matharoo Family)', 'ਲੋਟੇ ਪਰਿਵਾਰ (Lote Family)'],
  },

  gharDiRaunak: {
    title: 'Joy of the House (ਘਰ ਦੀ ਰੌਣਕ)',
    names: 'ਏਕਬੀਰ, ਗੁਰਨਿਵਾਜ਼, ਗੁਰਖ਼ਵਾਬ, ਗੁਰਮਨ (Ekbeer, Gurniwaz, Gurkhwaab, Gurman)',
  },

  darshanAbhilashi: {
    title:  'With Best Compliments (ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ)',
    names:  'All Relatives and Friends (ਸਾਰੇ ਰਿਸ਼ਤੇਦਾਰ ਅਤੇ ਮਿੱਤਰ)',
    phones: ['7998400013', '7998500013', '9815092114'],
  },

  punctuality: 'ਸਮੇਂ ਸਿਰ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕੀਤੀ ਜਾਵੇ (Please arrive on time)',

  rsvpDeadline: 'November 10, 2026',

  /* ── Music ───────────────────────────────────────────── */
  music: {
    src:    'assets/wedding-music.mp.mpeg',
    title:  'Rabb Ne Banaiyan Jodiya',
    artist: 'Devotional Music',
  },

  /* ── WhatsApp Sharing ────────────────────────────────── */
  websiteUrl: window.location.href,
  get whatsappMessage() {
    return (
      `🌸 *Jaggo Program Invitation* 🌸\n\n` +
      `॥ ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ॥\n` +
      `ਸਤਿਗੁਰ ਦਾਤੇ ਕਾਜ ਰਚਾਇਆ, ਆਪੇ ਮੇਹਰ ਕਰਾਈ॥\n` +
      `ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ, ਇਹ ਤਿਸ ਵਡਿਆਈ॥\n\n` +
      `ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ ਆਪ ਜੀ ਨੂੰ ਬੇਨਤੀ ਕਰਦੇ ਹਨ ਕਿ ਸਾਡੇ ਲਾਡਲੇ ਪੋਤਰੇ\n` +
      `*${this.groom.fullName}*\n` +
      `(ਸਪੁੱਤਰ ਸਰਦਾਰਨੀ ਬਲਜੀਤ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਜਗਜੀਤ ਸਿੰਘ)\n` +
      `ਦਾ ਸ਼ੁਭ ਅਨੰਦ ਕਾਰਜ\n` +
      `*${this.bride.fullName}*\n` +
      `(ਸਪੁੱਤਰੀ ਸਰਦਾਰਨੀ ਜਸਵੀਰ ਕੌਰ ਅਤੇ ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ ਨਿਵਾਸੀ ਲੁਧਿਆਣਾ) ਜੀ ਨਾਲ ਹੋਣ ਜਾ ਰਿਹਾ ਹੈ।\n\n` +
      `📅 ਮਿਤੀ / Day: Wednesday, November 11, 2026 (ਦਿਨ ਬੁੱਧਵਾਰ 11 ਨਵੰਬਰ 2026)\n` +
      `🎉 ਜਾਗੋ / Jaggo: 8:00 ਵਜੇ ਰਾਤ (8:00 PM Night)\n` +
      `📍 ਸਥਾਨ / Venue: Hotel Grand Palazzo, Guru Gobind Singh Nagar, Daba Road, Near Oswal Mill, Ludhiana\n\n` +
      `ਸਵਾਗਤ ਕਰਤਾ: ਭੰਮਰਾ ਪਰਿਵਾਰ, ਮਠਾੜੂ ਪਰਿਵਾਰ, ਲੋਟੇ ਪਰਿਵਾਰ\n` +
      `ਘਰ ਦੀ ਰੌਣਕ: ਏਕਬੀਰ, ਗੁਰਨਿਵਾਜ਼, ਗੁਰਖਵਾਬ, ਗੁਰਮਨ\n` +
      `ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ: ਸਾਰੇ ਰਿਸ਼ਤੇਦਾਰ ਅਤੇ ਮਿੱਤਰ\n` +
      `📞 Contacts: 79984-00013, 79985-00013, 98150-92114\n\n` +
      `✨ View the full interactive invitation here:\n${this.websiteUrl}`
    );
  },

  /* ── Events ──────────────────────────────────────────── */
  events: [
    {
      name:       'Jaggo Night (ਜਾਗੋ ਸਮਾਰੋਹ)',
      icon:       '🌟',
      date:       'Wednesday, November 11, 2026',
      time:       '8:00 PM Night (8:00 ਵਜੇ ਰਾਤ)',
      venue:      'Hotel Grand Palazzo',
      address:    'Guru Gobind Singh Nagar, Daba Road, Near Oswal Mill, Ludhiana',
      mapsLink:   'https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Palazzo+Guru+Gobind+Singh+Nagar+Daba+Road+Near+Oswal+Mill+Ludhiana+Punjab',
    },
  ],

};

/* ============================================================
   BILINGUAL TRANSLATION SYSTEM (English & Gurmukhi Punjabi)
   ============================================================ */
const TRANSLATIONS = {
  en: {
    pageTitle: '🌸 Jaspreet & Taranpreet — Jaggo Program Invitation',
    metaDesc: 'Jaggo Program • Wednesday, November 11, 2026 (8:00 PM Night) • Hotel Grand Palazzo, Ludhiana. Tap to view the interactive royal invitation.',
    
    // Envelope
    cardCoupleName: 'Jaspreet & Taranpreet',
    cardSubtext: 'Are getting married',
    cardDateBadge: '11 · 11 · 2026',
    openLabel: 'OPEN GATES',
    btnSkip: 'Skip →',

    // Hero
    royalTogether: 'Sardarni Kuldeep Kaur & Late Sardar Malkeet Singh cordially request your graceful presence',
    heroGroomName: 'Jaspreet',
    royalAmp: '&',
    heroBrideName: 'Taranpreet',
    royalInvitationSub: '(Son of Sardarni Baljeet Kaur & Late Sardar Jagjeet Singh) with (Daughter of Sardarni Jasvir Kaur & Sardar Amarjit Singh, Ludhiana). You are warmly invited to grace this auspicious celebration.',
    heroWeddingDate: 'Wednesday, November 11, 2026',
    heroVenue: 'Hotel Grand Palazzo • Ludhiana',
    heroBlessing: '<div class="hero-gurbani-quote">॥ ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥<br />“ਸਤਿਗੁਰ ਦਾਤੇ ਕਾਜ ਰਚਾਇਆ, ਆਪੇ ਮੇਹਰ ਕਰਾਈ॥<br />ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ, ਇਹ ਤਿਸ ਵਡਿਆਈ॥”</div>',
    heroMessage: '<div class="hero-invite-quote">With the divine blessings of our beloved elders,<br />we cordially invite you to be part of our sacred nuptial celebration.</div>',
    royalCountdownHeading: 'Auspicious Moment In',
    lblDays: 'Days',
    lblHours: 'Hours',
    lblMins: 'Mins',
    lblSecs: 'Secs',
    btnHeroEvents: 'Jaggo Program',
    btnHeroBlessings: 'With Blessings Of',
    heroScrollHint: 'Scroll',

    // Couple Section
    couplePre: 'The Beloved',
    coupleTitle: 'The Couple',
    coupleGroomRole: 'The Groom',
    coupleGroomName: 'Jaspreet Singh',
    coupleGroomParents: 'Son of Sardarni Baljeet Kaur & Late Sardar Jagjeet Singh (Grandson of Sardarni Kuldeep Kaur & Late Sardar Malkeet Singh)',
    coupleGroomBio: 'Grounded in Sikh values and integrity, Jaspreet embodies honor, generosity, and humility, upholding the beloved lineage of his family.',

    coupleBrideRole: 'The Bride',
    coupleBrideName: 'Taranpreet Kaur',
    coupleBrideParents: 'Daughter of Sardarni Jasvir Kaur & Sardar Amarjit Singh (Residents of Ludhiana)',
    coupleBrideBio: 'Blessed with grace, humility, and warmth, Taranpreet carries forward cherished values and rich cultural traditions with deep love and devotion.',

    // Events Section
    eventsPre: 'Jaggo Program',
    eventsTitle: 'Program Details (ਪ੍ਰੋਗਰਾਮ)',
    eventsBtnMap: '📍 View on Google Maps',
    events: [
      {
        name: 'Jaggo Night (ਜਾਗੋ ਸਮਾਰੋਹ)',
        icon: '🌟',
        date: 'Wednesday, November 11, 2026',
        time: '8:00 PM Night (8:00 ਵਜੇ ਰਾਤ)',
        venue: 'Hotel Grand Palazzo',
        address: 'Guru Gobind Singh Nagar, Daba Road, Near Oswal Mill, Ludhiana',
        mapsLink: 'https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Palazzo+Guru+Gobind+Singh+Nagar+Daba+Road+Near+Oswal+Mill+Ludhiana+Punjab',
      },
    ],

    // Countdown Section
    countdownPre: 'The Auspicious Day Is',
    countdownEventName: 'Almost Here!',
    countdownDateDisplay: 'Wednesday, November 11, 2026 · Hotel Grand Palazzo, Ludhiana',

    // Family Welcoming & Blessings Section
    rsvpPre: 'With Best Compliments & Warm Welcomes',
    rsvpTitle: '<span class="section-title-main">ਸਵਾਗਤ ਅਤੇ ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ</span><span class="section-title-sub">(Welcoming &amp; Well Wishers)</span>',
    namesGroomFamilyLabel: "Groom's Family (ਲਾੜਾ ਪਰਿਵਾਰ)",
    namesGroomMain: 'Jaspreet Singh',
    namesGroomGrandparentTitle: 'Grandparents (ਦਾਦਾ-ਦਾਦੀ ਜੀ)',
    namesGroomGrandparents: 'Sardarni Kuldeep Kaur & Late Sardar Malkeet Singh',
    namesGroomParentTitle: 'Parents (ਮਾਤਾ-ਪਿਤਾ ਜੀ)',
    namesGroomParentsCombined: 'Sardarni Baljeet Kaur & Late Sardar Jagjeet Singh',

    namesBrideFamilyLabel: "Bride's Family (ਲਾੜੀ ਪਰਿਵਾਰ)",
    namesBrideMain: 'Taranpreet Kaur',
    namesBrideGrandparentTitle: 'Blessings of Elders',
    namesBrideGrandparents: 'With Divine Blessings of Beloved Elders',
    namesBrideParentTitle: 'Parents (ਮਾਤਾ-ਪਿਤਾ ਜੀ)',
    namesBrideParentsCombined: 'Sardarni Jasvir Kaur & Sardar Amarjit Singh (Residents of Ludhiana)',

    namesHeritageBlessing: 'Waheguru Ji Mehar Karan • With Divine Blessings',
    namesBlessingText: 'ਸਵਾਗਤ ਕਰਤਾ: ਭੰਮਰਾ ਪਰਿਵਾਰ, ਮਠਾੜੂ ਪਰਿਵਾਰ, ਲੋਟੇ ਪਰਿਵਾਰ | ਘਰ ਦੀ ਰੌਣਕ: ਏਕਬੀਰ, ਗੁਰਨਿਵਾਜ਼, ਗੁਰਖ਼ਵਾਬ, ਗੁਰਮਨ',

    // Three Pillars from Card
    swagatTitle: 'ਸਵਾਗਤ ਕਰਤਾ (Welcoming Families)',
    swagatContent: '<p class="trio-item">ਭੰਮਰਾ ਪਰਿਵਾਰ (Bhamra Family)</p><p class="trio-item">ਮਠਾੜੂ ਪਰਿਵਾਰ (Matharoo Family)</p><p class="trio-item">ਲੋਟੇ ਪਰਿਵਾਰ (Lote Family)</p>',
    raunakTitle: 'ਘਰ ਦੀ ਰੌਣਕ (Joy of the House)',
    raunakContent: '<p class="trio-item highlighted-names">ਏਕਬੀਰ • ਗੁਰਨਿਵਾਜ਼</p><p class="trio-item highlighted-names">ਗੁਰਖ਼ਵਾਬ • ਗੁਰਮਨ</p><p class="trio-sub">Ekbeer, Gurniwaz, Gurkhwaab, Gurman</p>',
    darshanTitle: 'ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ (With Best Compliments)',
    darshanNames: 'ਸਾਰੇ ਰਿਸ਼ਤੇਦਾਰ ਅਤੇ ਮਿੱਤਰ<br><span class="en-sub">All Relatives &amp; Friends</span>',
    punctualityText: 'ਸਮੇਂ ਸਿਰ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕੀਤੀ ਜਾਵੇ • Please grace the occasion on time',

    // Venue Section
    venuePre: 'Sacred Nuptial Venue',
    venueTitle: 'Venue & Directions',
    venuePillBadge: 'Hotel Grand Palazzo • Nuptial Venue',
    venueName: '<span class="venue-name-primary">Hotel Grand Palazzo</span><span class="venue-name-secondary">ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ</span>',
    venueLocationLabel: 'Venue Location & Address',
    venueAddress: 'Guru Gobind Singh Nagar, Daba Road,<br />Near Oswal Mill, Ludhiana, Punjab',
    venueScheduleLabel: 'Date & Auspicious Program',
    venueDate: 'Wednesday, November 11, 2026',
    venueTime: 'Jaggo: 8:00 PM Night (8:00 ਵਜੇ ਰਾਤ)',
    venueMapsBtn: '📍 Get Directions',
    venueMapsNote: 'Opens Google Maps navigation to Hotel Grand Palazzo, Daba Road, Ludhiana.',
    venueMapPlaceholderTitle: 'Interactive Live Navigation',
    venueMapPlaceholderDesc: 'Guru Gobind Singh Nagar, Daba Road, Near Oswal Mill, Ludhiana',
    venueMapLink: 'Open in Google Maps ↗',

    // Footer
    footerNames: 'Jaspreet & Taranpreet',
    footerDate: '11 · 11 · 2026',
    footerMessage: 'Thank you for being a part of our celebration. We cherish your love, blessings, and presence as we begin this beautiful journey together.',
    btnWhatsappText: 'Share on WhatsApp',
    btnShareAllText: 'Share Invitation',
    btnBackTopText: '↑ Back to Top',
    footerCredit: 'Made with ❤️ for a lifetime of love — Jaspreet & Taranpreet',

    // Music
    musicTitle: 'Rabb Ne Banaiyan Jodiya',
    musicArtist: 'Devotional Music',

    // WhatsApp Message
    whatsappText: (url) =>
      `🌸 *Jaggo Program Invitation* 🌸\n\n` +
      `॥ ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ॥\n` +
      `ਸਤਿਗੁਰ ਦਾਤੇ ਕਾਜ ਰਚਾਇਆ, ਆਪੇ ਮੇਹਰ ਕਰਾਈ॥\n` +
      `ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ, ਇਹ ਤਿਸ ਵਡਿਆਈ॥\n\n` +
      `ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ ਆਪ ਜੀ ਨੂੰ ਬੇਨਤੀ ਕਰਦੇ ਹਨ ਕਿ ਸਾਡੇ ਲਾਡਲੇ ਪੋਤਰੇ\n\n` +
      `🤵 *Jaspreet Singh*\n` +
      `(ਸਪੁੱਤਰ ਸਰਦਾਰਨੀ ਬਲਜੀਤ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਜਗਜੀਤ ਸਿੰਘ)\n` +
      `ਦਾ ਸ਼ੁਭ ਅਨੰਦ ਕਾਰਜ\n` +
      `👰 *Taranpreet Kaur*\n` +
      `(ਸਪੁੱਤਰੀ ਸਰਦਾਰਨੀ ਜਸਵੀਰ ਕੌਰ ਅਤੇ ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ ਨਿਵਾਸੀ ਲੁਧਿਆਣਾ) ਜੀ ਨਾਲ ਹੋਣ ਜਾ ਰਿਹਾ ਹੈ। ਆਪ ਸਭ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕਰਨੀ ਜੀ।\n\n` +
      `📅 ਦਿਨ ਬੁੱਧਵਾਰ 11 ਨਵੰਬਰ 2026\n` +
      `🎉 ਜਾਗੋ: 8:00 ਵਜੇ ਰਾਤ (8:00 PM Night)\n` +
      `📍 ਸਥਾਨ: ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਨਗਰ, ਡਾਬਾ ਰੋਡ, ਨੇੜੇ ਓਸਵਾਲ ਮਿੱਲ, ਲੁਧਿਆਣਾ\n\n` +
      `ਸਵਾਗਤ ਕਰਤਾ: ਭੰਮਰਾ ਪਰਿਵਾਰ, ਮਠਾੜੂ ਪਰਿਵਾਰ, ਲੋਟੇ ਪਰਿਵਾਰ\n` +
      `ਘਰ ਦੀ ਰੌਣਕ: ਏਕਬੀਰ, ਗੁਰਨਿਵਾਜ਼, ਗੁਰਖ਼ਵਾਬ, ਗੁਰਮਨ\n` +
      `ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ: ਸਾਰੇ ਰਿਸ਼ਤੇਦਾਰ ਅਤੇ ਮਿੱਤਰ\n` +
      `📞 ਸੰਪਰਕ: 79984-00013, 79985-00013, 98150-92114\n\n` +
      `ਸਮੇਂ ਸਿਰ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕੀਤੀ ਜਾਵੇ।\n\n` +
      `✨ View the Royal Digital Invitation here:\n${url}`,
  },

  pa: {
    pageTitle: '🌸 ਜਸਪ੍ਰੀਤ ਅਤੇ ਤਰਨਪ੍ਰੀਤ — ਜਾਗੋ ਪ੍ਰੋਗਰਾਮ ਸੱਦਾ ਪੱਤਰ',
    metaDesc: 'ਜਾਗੋ ਪ੍ਰੋਗਰਾਮ • ਦਿਨ ਬੁੱਧਵਾਰ, 11 ਨਵੰਬਰ 2026 (ਰਾਤ 8:00 ਵਜੇ) • ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ, ਲੁਧਿਆਣਾ। ਸ਼ਾਹੀ ਸੱਦਾ ਪੱਤਰ ਦੇਖਣ ਲਈ ਕਲਿੱਕ ਕਰੋ।',

    // Envelope
    cardCoupleName: 'ਜਸਪ੍ਰੀਤ ਅਤੇ ਤਰਨਪ੍ਰੀਤ',
    cardSubtext: 'ਵਿਆਹ ਦੇ ਪਵਿੱਤਰ ਬੰਧਨ ਵਿੱਚ ਬੱਝਣ ਜਾ ਰਹੇ ਹਨ',
    cardDateBadge: '੧੧ · ੧੧ · ੨੦੨੬',
    openLabel: 'ਦਰਵਾਜ਼ੇ ਖੋਲ੍ਹੋ',
    btnSkip: 'ਅੱਗੇ ਵਧੋ →',

    // Hero
    royalTogether: 'ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ ਆਪ ਜੀ ਨੂੰ ਬੇਨਤੀ ਕਰਦੇ ਹਨ ਕਿ ਸਾਡੇ ਲਾਡਲੇ ਪੋਤਰੇ',
    heroGroomName: 'ਜਸਪ੍ਰੀਤ',
    royalAmp: 'ਸੰਗ',
    heroBrideName: 'ਤਰਨਪ੍ਰੀਤ',
    royalInvitationSub: "(ਸਪੁੱਤਰ ਸਰਦਾਰਨੀ ਬਲਜੀਤ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਜਗਜੀਤ ਸਿੰਘ) ਦਾ ਸ਼ੁਭ ਅਨੰਦ ਕਾਰਜ (ਸਪੁੱਤਰੀ ਸਰਦਾਰਨੀ ਜਸਵੀਰ ਕੌਰ ਅਤੇ ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ ਨਿਵਾਸੀ ਲੁਧਿਆਣਾ) ਜੀ ਦੀ ਸਪੁੱਤਰੀ ਨਾਲ ਵਿਆਹ ਹੋਣ ਜਾ ਰਿਹਾ ਹੈ ਆਪ ਸਭ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕਰਨੀ ਜੀ।",
    heroWeddingDate: 'ਦਿਨ ਬੁੱਧਵਾਰ, 11 ਨਵੰਬਰ 2026',
    heroVenue: 'ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ • ਲੁਧਿਆਣਾ',
    heroBlessing: '<div class="hero-gurbani-quote">॥ ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥<br />“ਸਤਿਗੁਰ ਦਾਤੇ ਕਾਜ ਰਚਾਇਆ, ਆਪੇ ਮੇਹਰ ਕਰਾਈ॥<br />ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ, ਇਹ ਤਿਸ ਵਡਿਆਈ॥”</div>',
    heroMessage: '<div class="hero-invite-quote">ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ ਆਪ ਜੀ ਨੂੰ ਬੇਨਤੀ ਕਰਦੇ ਹਨ ਕਿ ਸਾਡੇ ਲਾਡਲੇ ਪੋਤਰੇ ਦੇ ਵਿਆਹ ਸਮਾਗਮ ਵਿੱਚ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕਰਨੀ ਜੀ।</div>',
    royalCountdownHeading: 'ਸ਼ੁਭ ਮਹੂਰਤ ਵਿੱਚ ਬਾਕੀ ਸਮਾਂ',
    lblDays: 'ਦਿਨ',
    lblHours: 'ਘੰਟੇ',
    lblMins: 'ਮਿੰਟ',
    lblSecs: 'ਸਕਿੰਟ',
    btnHeroEvents: 'ਜਾਗੋ ਪ੍ਰੋਗਰਾਮ',
    btnHeroBlessings: 'ਵੱਡਿਆਂ ਦਾ ਆਸ਼ੀਰਵਾਦ',
    heroScrollHint: 'ਹੇਠਾਂ ਦੇਖੋ',

    // Couple Section
    couplePre: 'ਪਵਿੱਤਰ ਜੋੜੀ',
    coupleTitle: 'ਲਾੜਾ ਅਤੇ ਲਾੜੀ',
    coupleGroomRole: 'ਲਾੜਾ',
    coupleGroomName: 'ਜਸਪ੍ਰੀਤ ਸਿੰਘ',
    coupleGroomParents: 'ਸਰਦਾਰਨੀ ਬਲਜੀਤ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਜਗਜੀਤ ਸਿੰਘ ਦੇ ਸਪੁੱਤਰ (ਪੋਤਰੇ: ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ)',
    coupleGroomBio: 'ਗੁਰਸਿੱਖੀ ਜੀਵਨ ਜਾਂਚ ਅਤੇ ਦ੍ਰਿੜ੍ਹ ਇਰਾਦੇ ਵਾਲੇ ਜਸਪ੍ਰੀਤ ਪਰਿਵਾਰ ਦੇ ਮਾਣ-ਸਨਮਾਨ, ਇਮਾਨਦਾਰੀ, ਨਿਮਰਤਾ ਅਤੇ ਸੇਵਾ-ਭਾਵਨਾ ਦੇ ਪ੍ਰਤੀਕ ਹਨ।',

    coupleBrideRole: 'ਲਾੜੀ',
    coupleBrideName: 'ਤਰਨਪ੍ਰੀਤ ਕੌਰ',
    coupleBrideParents: 'ਸਰਦਾਰਨੀ ਜਸਵੀਰ ਕੌਰ ਅਤੇ ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ (ਨਿਵਾਸੀ ਲੁਧਿਆਣਾ) ਦੀ ਸਪੁੱਤਰੀ',
    coupleBrideBio: 'ਸੁਚੱਜੇ ਸੰਸਕਾਰਾਂ, ਨਿਮਰਤਾ ਅਤੇ ਨਿੱਘ ਨਾਲ ਭਰਪੂਰ, ਤਰਨਪ੍ਰੀਤ ਉੱਚੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਗੁਰਮਤਿ ਰੀਤਾਂ ਦੀ ਕਦਰਦਾਨ ਹੈ।',

    // Events Section
    eventsPre: 'ਜਾਗੋ ਪ੍ਰੋਗਰਾਮ',
    eventsTitle: 'ਪ੍ਰੋਗਰਾਮ ਦਾ ਵੇਰਵਾ',
    eventsBtnMap: '📍 ਨਕਸ਼ਾ ਤੇ ਰਸਤਾ ਦੇਖੋ',
    events: [
      {
        name: 'ਜਾਗੋ ਸਮਾਰੋਹ (Jaggo Night)',
        icon: '🌟',
        date: 'ਦਿਨ ਬੁੱਧਵਾਰ, 11 ਨਵੰਬਰ 2026',
        time: '8:00 ਵਜੇ ਰਾਤ',
        venue: 'ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ',
        address: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਨਗਰ, ਡਾਬਾ ਰੋਡ, ਨੇੜੇ ਓਸਵਾਲ ਮਿੱਲ, ਲੁਧਿਆਣਾ',
        mapsLink: 'https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Palazzo+Guru+Gobind+Singh+Nagar+Daba+Road+Near+Oswal+Mill+Ludhiana+Punjab',
      },
    ],

    // Countdown Section
    countdownPre: 'ਸ਼ੁਭ ਵਿਆਹ ਦਾ ਦਿਨ',
    countdownEventName: 'ਬਹੁਤ ਨੇੜੇ ਹੈ!',
    countdownDateDisplay: 'ਦਿਨ ਬੁੱਧਵਾਰ, 11 ਨਵੰਬਰ 2026 · ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ, ਲੁਧਿਆਣਾ',

    // Family Welcoming & Blessings Section
    rsvpPre: 'ਸ਼ੁਭ ਸਵਾਗਤ ਅਤੇ ਵੱਡਿਆਂ ਦਾ ਆਸ਼ੀਰਵਾਦ',
    rsvpTitle: '<span class="section-title-main">ਸਵਾਗਤ ਅਤੇ ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ</span>',
    namesGroomFamilyLabel: 'ਲਾੜਾ ਪਰਿਵਾਰ (ਭੰਮਰਾ ਪਰਿਵਾਰ)',
    namesGroomMain: 'ਜਸਪ੍ਰੀਤ ਸਿੰਘ',
    namesGroomGrandparentTitle: 'ਦਾਦਾ-ਦਾਦੀ ਜੀ',
    namesGroomGrandparents: 'ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ',
    namesGroomParentTitle: 'ਮਾਤਾ-ਪਿਤਾ ਜੀ',
    namesGroomParentsCombined: 'ਸਰਦਾਰਨੀ ਬਲਜੀਤ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਜਗਜੀਤ ਸਿੰਘ',

    namesBrideFamilyLabel: 'ਲਾੜੀ ਪਰਿਵਾਰ (ਲੁਧਿਆਣਾ)',
    namesBrideMain: 'ਤਰਨਪ੍ਰੀਤ ਕੌਰ',
    namesBrideGrandparentTitle: 'ਵੱਡਿਆਂ ਦਾ ਆਸ਼ੀਰਵਾਦ',
    namesBrideGrandparents: 'ਵਾਹਿਗੁਰੂ ਜੀ ਮਿਹਰ ਕਰਨ • ਵੱਡਿਆਂ ਦਾ ਨਿੱਘਾ ਆਸ਼ੀਰਵਾਦ',
    namesBrideParentTitle: 'ਮਾਤਾ-ਪਿਤਾ ਜੀ',
    namesBrideParentsCombined: 'ਸਰਦਾਰਨੀ ਜਸਵੀਰ ਕੌਰ ਅਤੇ ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ ਨਿਵਾਸੀ ਲੁਧਿਆਣਾ',

    namesHeritageBlessing: 'ਵਾਹਿਗੁਰੂ ਜੀ ਮਿਹਰ ਕਰਨ • ਵੱਡਿਆਂ ਦਾ ਨਿੱਘਾ ਆਸ਼ੀਰਵਾਦ',
    namesBlessingText: 'ਸਵਾਗਤ ਕਰਤਾ: ਭੰਮਰਾ ਪਰਿਵਾਰ, ਮਠਾੜੂ ਪਰਿਵਾਰ, ਲੋਟੇ ਪਰਿਵਾਰ | ਘਰ ਦੀ ਰੌਣਕ: ਏਕਬੀਰ, ਗੁਰਨਿਵਾਜ਼, ਗੁਰਖ਼ਵਾਬ, ਗੁਰਮਨ',

    // Three Pillars from Card
    swagatTitle: 'ਸਵਾਗਤ ਕਰਤਾ',
    swagatContent: '<p class="trio-item">ਭੰਮਰਾ ਪਰਿਵਾਰ</p><p class="trio-item">ਮਠਾੜੂ ਪਰਿਵਾਰ</p><p class="trio-item">ਲੋਟੇ ਪਰਿਵਾਰ</p>',
    raunakTitle: 'ਘਰ ਦੀ ਰੌਣਕ',
    raunakContent: '<p class="trio-item highlighted-names">ਏਕਬੀਰ • ਗੁਰਨਿਵਾਜ਼</p><p class="trio-item highlighted-names">ਗੁਰਖ਼ਵਾਬ • ਗੁਰਮਨ</p>',
    darshanTitle: 'ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ',
    darshanNames: 'ਸਾਰੇ ਰਿਸ਼ਤੇਦਾਰ ਅਤੇ ਮਿੱਤਰ',
    punctualityText: 'ਸਮੇਂ ਸਿਰ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕੀਤੀ ਜਾਵੇ',

    // Venue Section
    venuePre: 'ਸਮਾਗਮ ਦਾ ਸ਼ੁਭ ਸਥਾਨ',
    venueTitle: 'ਸਥਾਨ ਅਤੇ ਰਸਤਾ',
    venuePillBadge: 'ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ • ਸ਼ੁਭ ਸਥਾਨ',
    venueName: '<span class="venue-name-primary">ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ</span><span class="venue-name-secondary">Hotel Grand Palazzo</span>',
    venueLocationLabel: 'ਪੂਰਾ ਪਤਾ',
    venueAddress: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਨਗਰ, ਡਾਬਾ ਰੋਡ,<br />ਨੇੜੇ ਓਸਵਾਲ ਮਿੱਲ, ਲੁਧਿਆਣਾ, ਪੰਜਾਬ',
    venueScheduleLabel: 'ਮਿਤੀ ਅਤੇ ਸ਼ੁਭ ਸਮਾਂ',
    venueDate: 'ਦਿਨ ਬੁੱਧਵਾਰ, 11 ਨਵੰਬਰ 2026',
    venueTime: 'ਜਾਗੋ: 8:00 ਵਜੇ ਰਾਤ',
    venueMapsBtn: '📍 ਨਕਸ਼ਾ ਦੇਖੋ (Google Maps)',
    venueMapsNote: 'ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ, ਡਾਬਾ ਰੋਡ, ਲੁਧਿਆਣਾ ਪਹੁੰਚਣ ਲਈ ਗੂਗਲ ਮੈਪਸ ਵਰਤੋ।',
    venueMapPlaceholderTitle: 'ਲਾਈਵ ਨੈਵੀਗੇਸ਼ਨ',
    venueMapPlaceholderDesc: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਨਗਰ, ਡਾਬਾ ਰੋਡ, ਲੁਧਿਆਣਾ',
    venueMapLink: 'ਗੂਗਲ ਮੈਪਸ ਵਿੱਚ ਖੋਲ੍ਹੋ ↗',

    // Footer
    footerNames: 'ਜਸਪ੍ਰੀਤ ਅਤੇ ਤਰਨਪ੍ਰੀਤ',
    footerDate: '੧੧ · ੧੧ · ੨੦੨੬',
    footerMessage: 'ਸਾਡੀਆਂ ਖ਼ੁਸ਼ੀਆਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਆਪ ਜੀ ਦਾ ਤਹਿ ਦਿਲੋਂ ਧੰਨਵਾਦ। ਨਵੀਂ ਜ਼ਿੰਦਗੀ ਦੀ ਸ਼ੁਰੂਆਤ ਮੌਕੇ ਆਪ ਜੀ ਦਾ ਪਿਆਰ ਅਤੇ ਅਸੀਸਾਂ ਸਾਡੇ ਲਈ ਅਨਮੋਲ ਦਾਤ ਹਨ।',
    btnWhatsappText: "ਵਟਸਐਪ 'ਤੇ ਸਾਂਝਾ ਕਰੋ",
    btnShareAllText: 'ਸੱਦਾ ਪੱਤਰ ਸਾਂਝਾ ਕਰੋ',
    btnBackTopText: '↑ ਉੱਪਰ ਜਾਓ',
    footerCredit: 'ਪਿਆਰ ਅਤੇ ਸਤਿਕਾਰ ਸਹਿਤ — ਜਸਪ੍ਰੀਤ ਅਤੇ ਤਰਨਪ੍ਰੀਤ',

    // Music
    musicTitle: 'ਰੱਬ ਨੇਂ ਬਣਾਇਆਂ ਜੋੜੀਆ',
    musicArtist: 'ਸੰਗੀਤ',

    // WhatsApp Message
    whatsappText: (url) =>
      `🌸 *ਜਾਗੋ ਪ੍ਰੋਗਰਾਮ ਸੱਦਾ ਪੱਤਰ* 🌸\n\n` +
      `॥ ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ॥\n` +
      `ਸਤਿਗੁਰ ਦਾਤੇ ਕਾਜ ਰਚਾਇਆ, ਆਪੇ ਮੇਹਰ ਕਰਾਈ॥\n` +
      `ਦਾਸਾਂ ਕਾਰਜ ਆਪ ਸਵਾਰੇ, ਇਹ ਤਿਸ ਵਡਿਆਈ॥\n\n` +
      `ਸਰਦਾਰਨੀ ਕੁਲਦੀਪ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਮਲਕੀਤ ਸਿੰਘ ਆਪ ਜੀ ਨੂੰ ਬੇਨਤੀ ਕਰਦੇ ਹਨ ਕਿ ਸਾਡੇ ਲਾਡਲੇ ਪੋਤਰੇ\n\n` +
      `*ਜਸਪ੍ਰੀਤ ਸਿੰਘ*\n` +
      `(ਸਪੁੱਤਰ ਸਰਦਾਰਨੀ ਬਲਜੀਤ ਕੌਰ ਅਤੇ ਸਵ: ਸਰਦਾਰ ਜਗਜੀਤ ਸਿੰਘ)\n` +
      `ਦਾ ਸ਼ੁਭ ਅਨੰਦ ਕਾਰਜ\n` +
      `*ਤਰਨਪ੍ਰੀਤ ਕੌਰ*\n` +
      `(ਸਪੁੱਤਰੀ ਸਰਦਾਰਨੀ ਜਸਵੀਰ ਕੌਰ ਅਤੇ ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ ਨਿਵਾਸੀ ਲੁਧਿਆਣਾ)\n` +
      `ਜੀ ਦੀ ਸਪੁੱਤਰੀ ਨਾਲ ਵਿਆਹ ਹੋਣ ਜਾ ਰਿਹਾ ਹੈ ਆਪ ਸਭ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕਰਨੀ ਜੀ।\n\n` +
      `📅 ਦਿਨ ਬੁੱਧਵਾਰ 11 ਨਵੰਬਰ 2026\n` +
      `🎉 ਜਾਗੋ: 8:00 ਵਜੇ ਰਾਤ\n` +
      `📍 ਸਥਾਨ: ਹੋਟਲ ਗ੍ਰੈਂਡ ਪਲਾਜ਼ੋ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਨਗਰ, ਡਾਬਾ ਰੋਡ, ਨੇੜੇ ਓਸਵਾਲ ਮਿੱਲ, ਲੁਧਿਆਣਾ\n\n` +
      `ਸਵਾਗਤ ਕਰਤਾ: ਭੰਮਰਾ ਪਰਿਵਾਰ, ਮਠਾੜੂ ਪਰਿਵਾਰ, ਲੋਟੇ ਪਰਿਵਾਰ\n` +
      `ਘਰ ਦੀ ਰੌਣਕ: ਏਕਬੀਰ, ਗੁਰਨਿਵਾਜ਼, ਗੁਰਖ਼ਵਾਬ, ਗੁਰਮਨ\n` +
      `ਦਰਸ਼ਨ ਅਭਿਲਾਸ਼ੀ: ਸਾਰੇ ਰਿਸ਼ਤੇਦਾਰ ਅਤੇ ਮਿੱਤਰ\n` +
      `📞 ਸੰਪਰਕ: 79984-00013, 79985-00013, 98150-92114\n\n` +
      `ਸਮੇਂ ਸਿਰ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕੀਤੀ ਜਾਵੇ।\n\n` +
      `✨ ਪੂਰਾ ਸ਼ਾਹੀ ਸੱਦਾ ਪੱਤਰ ਦੇਖਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ:\n${url}`,
  }
};

let currentLang = 'en';

/* ============================================================
   APPLY ACTIVE TRANSLATIONS
   ============================================================ */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  if (t.pageTitle) document.title = t.pageTitle;

  // Envelope
  setText('env-card-couple-name', t.cardCoupleName);
  setText('card-subtext', t.cardSubtext);
  setText('card-date-badge', t.cardDateBadge);
  setText('open-label', t.openLabel);
  setText('btn-skip', t.btnSkip);

  // Hero
  setText('royal-together-text', t.royalTogether);
  setText('hero-groom-name', t.heroGroomName);
  setText('royal-amp', t.royalAmp);
  setText('hero-bride-name', t.heroBrideName);
  setText('royal-invitation-sub', t.royalInvitationSub);
  if (t.heroBlessing) setHTML('royal-blessing-text', t.heroBlessing);
  setText('hero-wedding-date', t.heroWeddingDate);
  setText('hero-venue', t.heroVenue);
  setHTML('hero-message', t.heroMessage);
  setText('royal-countdown-heading', t.royalCountdownHeading);
  setText('lbl-hc-days', t.lblDays);
  setText('lbl-hc-hours', t.lblHours);
  setText('lbl-hc-mins', t.lblMins);
  setText('lbl-hc-secs', t.lblSecs);
  setText('btn-hero-events', t.btnHeroEvents);
  setText('btn-hero-blessings', t.btnHeroBlessings);
  setText('hero-scroll-hint-text', t.heroScrollHint);

  // Couple
  setText('couple-pre', t.couplePre);
  setText('couple-title', t.coupleTitle);
  setText('couple-groom-role', t.coupleGroomRole);
  setText('couple-groom-name', t.coupleGroomName);
  setText('couple-groom-parents', t.coupleGroomParents);
  setText('couple-groom-bio', t.coupleGroomBio);
  setText('couple-bride-role', t.coupleBrideRole);
  setText('couple-bride-name', t.coupleBrideName);
  setText('couple-bride-parents', t.coupleBrideParents);
  setText('couple-bride-bio', t.coupleBrideBio);

  // Events header
  setText('events-pre', t.eventsPre);
  setText('events-title', t.eventsTitle);

  // Countdown
  setText('countdown-pre', t.countdownPre);
  setText('countdown-event-name', t.countdownEventName);
  setText('lbl-cd-days', t.lblDays);
  setText('lbl-cd-hours', t.lblHours);
  setText('lbl-cd-mins', t.lblMins);
  setText('lbl-cd-secs', t.lblSecs);
  setText('countdown-date-display', t.countdownDateDisplay);

  // Family Blessings
  setText('rsvp-pre', t.rsvpPre);
  setHTML('rsvp-title', t.rsvpTitle);

  // Groom's Lineage (Left)
  setText('names-groom-family-label', t.namesGroomFamilyLabel);
  setText('names-groom-main', t.namesGroomMain);
  setText('names-groom-grandparent-title', t.namesGroomGrandparentTitle);
  setText('names-groom-grandparents', t.namesGroomGrandparents);
  setText('names-groom-parent-title', t.namesGroomParentTitle);
  setText('names-groom-parents-combined', t.namesGroomParentsCombined);

  // Bride's Lineage (Right)
  setText('names-bride-family-label', t.namesBrideFamilyLabel);
  setText('names-bride-main', t.namesBrideMain);
  setText('names-bride-grandparent-title', t.namesBrideGrandparentTitle);
  setText('names-bride-grandparents', t.namesBrideGrandparents);
  setText('names-bride-parent-title', t.namesBrideParentTitle);
  setText('names-bride-parents-combined', t.namesBrideParentsCombined);

  setText('names-heritage-blessing', t.namesHeritageBlessing);
  setText('names-blessing-text', t.namesBlessingText);

  // Three Pillars from Card: Swagat, Raunak, Darshan
  setText('swagat-title', t.swagatTitle);
  setHTML('swagat-content', t.swagatContent);
  setText('raunak-title', t.raunakTitle);
  setHTML('raunak-content', t.raunakContent);
  setText('darshan-title', t.darshanTitle);
  setHTML('darshan-names', t.darshanNames);
  setText('punctuality-text', t.punctualityText);

  // Venue
  setText('venue-pre', t.venuePre);
  setText('venue-title', t.venueTitle);
  setText('venue-pill-badge', t.venuePillBadge);
  setHTML('venue-name-display', t.venueName);
  setText('venue-location-label', t.venueLocationLabel);
  setHTML('venue-address-display', t.venueAddress);
  setText('venue-schedule-label', t.venueScheduleLabel);
  setText('venue-date-display', t.venueDate);
  setText('venue-time-display', t.venueTime);
  setText('venue-maps-btn', t.venueMapsBtn);
  setText('venue-maps-note', t.venueMapsNote);
  setText('venue-map-placeholder-title', t.venueMapPlaceholderTitle);
  setText('venue-map-placeholder-desc', t.venueMapPlaceholderDesc);
  setText('venue-map-link', t.venueMapLink);

  // Footer
  setText('footer-names', t.footerNames);
  setText('footer-date', t.footerDate);
  setText('footer-message', t.footerMessage);
  setText('btn-whatsapp-text', t.btnWhatsappText);
  setText('btn-share-all-text', t.btnShareAllText);
  setText('btn-back-top-text', t.btnBackTopText);
  setText('footer-credit', t.footerCredit);

  // Music label
  const musicLabel = document.getElementById('music-label-display');
  if (musicLabel) {
    if (isMusicPlaying) {
      musicLabel.textContent = t.musicTitle;
    } else {
      musicLabel.textContent = lang === 'pa' ? 'ਸੰਗੀਤ ਬੰਦ ਹੈ • ਚਲਾਓ' : 'Music Paused • Play';
    }
  }
}

/* ============================================================
   SET & TOGGLE LANGUAGE
   ============================================================ */
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'pa') lang = 'en';
  currentLang = lang;

  if (document.body) {
    document.body.setAttribute('data-lang', lang);
  }

  const btnEn = document.getElementById('btn-lang-en');
  const btnPa = document.getElementById('btn-lang-pa');
  if (btnEn) {
    btnEn.classList.toggle('active', lang === 'en');
    btnEn.setAttribute('aria-pressed', String(lang === 'en'));
  }
  if (btnPa) {
    btnPa.classList.toggle('active', lang === 'pa');
    btnPa.setAttribute('aria-pressed', String(lang === 'pa'));
  }

  try {
    localStorage.setItem('wedding_lang', lang);
  } catch (e) {
    // localStorage restricted mode
  }

  applyTranslations(lang);
  renderEvents(lang);

  if (typeof observeDynamicElements === 'function') {
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(observeDynamicElements);
    } else {
      observeDynamicElements();
    }
  }
}

// Expose on window for programmatic control
if (typeof window !== 'undefined') {
  window.setLanguage = setLanguage;
  window.TRANSLATIONS = TRANSLATIONS;
}

function initLanguageToggle() {
  const btnEn = document.getElementById('btn-lang-en');
  const btnPa = document.getElementById('btn-lang-pa');

  btnEn?.addEventListener('click', () => {
    if (currentLang !== 'en') setLanguage('en');
  });

  btnPa?.addEventListener('click', () => {
    if (currentLang !== 'pa') setLanguage('pa');
  });

  // Check saved preference or URL query param (?lang=pa)
  let initialLang = 'en';
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'pa') {
      initialLang = 'pa';
    } else {
      initialLang = localStorage.getItem('wedding_lang') || 'en';
    }
  } catch (e) {}

  setLanguage(initialLang);
}

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

/** Safely set textContent on an element, if it exists */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/** Safely set innerHTML on an element */
function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/** Safely set href on an element */
function setHref(id, value) {
  const el = document.getElementById(id);
  if (el) el.href = value;
}

/** Pad numbers to two digits */
function pad(n) {
  return String(n).padStart(2, '0');
}

/** Calculate time remaining to a target date */
function getTimeRemaining(targetDate) {
  const now  = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) return null;

  const totalSecs = Math.floor(diff / 1000);
  const days    = Math.floor(totalSecs / 86400);
  const hours   = Math.floor((totalSecs % 86400) / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;

  return { days, hours, minutes, seconds };
}

/* ============================================================
   A. POPULATE CONFIG VALUES INTO DOM
   ============================================================ */
function populateConfig() {
  const C = WEDDING_CONFIG;

  // Envelope monogram
  setText('env-monogram', `${C.groom.firstName[0]} & ${C.bride.firstName[0]}`);
  setText('env-card-couple-name', `${C.groom.firstName} & ${C.bride.firstName}`);

  // Hero
  setText('hero-groom-name',    C.groom.firstName);
  setText('hero-bride-name',    C.bride.firstName);
  setText('hero-wedding-date',  C.venue.displayDate);
  setText('hero-venue',         `${C.venue.name} • Ludhiana`);

  // Couple section
  document.querySelectorAll('.nav-monogram, #nav-logo .nav-monogram').forEach(el => {
    el.innerHTML = `${C.groom.firstName[0]} &amp; ${C.bride.firstName[0]}`;
  });

  setText('couple-bride-name',    C.bride.fullName);
  setText('couple-bride-parents', `${C.bride.parents} (${C.bride.grandparents})`);
  setText('couple-bride-bio',     C.bride.bio);

  setText('couple-groom-name',    C.groom.fullName);
  setText('couple-groom-parents', C.groom.parents);
  setText('couple-groom-bio',     C.groom.bio);

  // Family section
  setText('names-bride-grandparents', C.bride.grandparents);
  setText('names-bride-parents-combined', C.bride.parents);
  setText('names-groom-parents-combined', C.groom.parents);
  if (C.darshanAbhilashi) {
    setText('darshan-title', C.darshanAbhilashi.title);
    setText('darshan-names', C.darshanAbhilashi.names);
  }

  // Couple images
  const brideImg = document.querySelector('[alt^="The Bride"]');
  const groomImg = document.querySelector('[alt^="The Groom"]');
  const coupleImg = document.querySelector('.hero-couple-img');
  if (brideImg)  brideImg.src  = C.bride.photo;
  if (groomImg)  groomImg.src  = C.groom.photo;
  if (coupleImg) {
    coupleImg.src = C.couplePhoto;
    coupleImg.onerror = function() {
      if (!this.src.endsWith('.jpg')) {
        this.src = 'assets/images/couple_gurdwara_hero.jpg';
      }
    };
  }

  // Venue
  setHTML('venue-name-display',    C.venue.name);
  setHTML('venue-address-display', C.venue.address);
  setText('venue-date-display',    C.venue.displayDate);
  setText('venue-time-display',    C.venue.displayTime);
  setHref('venue-maps-btn',        C.venue.googleMapsLink);
  setHref('venue-map-link',        C.venue.googleMapsLink);

  const venueIframe = document.querySelector('.venue-map-iframe');
  if (venueIframe) {
    venueIframe.src = 'https://maps.google.com/maps?q=Hotel+Grand+Palazzo+Guru+Gobind+Singh+Nagar+Daba+Road+Near+Oswal+Mill+Ludhiana+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed';
  }

  // RSVP deadline
  setText('rsvp-deadline', C.rsvpDeadline);

  // Footer
  setHTML('footer-names',
    `${C.bride.firstName} &amp; ${C.groom.firstName}`);

  const wd = new Date(C.weddingDate);
  const footerDate = `${pad(wd.getDate())} · ${pad(wd.getMonth() + 1)} · ${wd.getFullYear()}`;
  setText('footer-date', footerDate);

  // Countdown date display
  setText('countdown-date-display', `${C.venue.displayDate} · ${C.venue.name}, Ludhiana`);
}

/* ============================================================
   B. RENDER EVENTS
   ============================================================ */
function renderEvents(lang = currentLang) {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const events = t.events || WEDDING_CONFIG.events;
  const isPa = lang === 'pa';
  const btnText = t.eventsBtnMap || (isPa ? '📍 ਨਕਸ਼ਾ ਤੇ ਰਸਤਾ ਦੇਖੋ' : '📍 View on Google Maps');

  grid.innerHTML = events.map((ev, i) => `
    <article class="event-card reveal-scale is-visible" role="region" aria-label="${ev.name}">
      
      <!-- Ornate Gold Filigree Corners (Matching printed invitation card) -->
      <div class="card-corner cc-tl" aria-hidden="true"></div>
      <div class="card-corner cc-tr" aria-hidden="true"></div>
      <div class="card-corner cc-bl" aria-hidden="true"></div>
      <div class="card-corner cc-br" aria-hidden="true"></div>

      <!-- Top Auspicious Header -->
      <div class="event-card-top-crest">
        <div class="event-icon-wrap" aria-hidden="true">
          <span>🪔</span>
        </div>
        <p class="event-card-invocation">${isPa ? '॥ ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥' : '॥ Ik Onkar Satgur Prasad ॥'}</p>
        <span class="event-card-tag">${isPa ? 'ਸ਼ੁਭ ਪ੍ਰੋਗਰਾਮ' : 'Auspicious Program'}</span>
      </div>

      <!-- Grand Event Title -->
      <h3 class="event-name">${ev.name}</h3>
      <div class="event-flourish" aria-hidden="true">
        <span class="flourish-diamond">✦</span>
        <span class="flourish-dash"></span>
        <span class="flourish-gem">◈</span>
        <span class="flourish-dash"></span>
        <span class="flourish-diamond">✦</span>
      </div>

      <!-- Authentic Dotted Program Row (Just like on the physical card) -->
      <div class="event-dotted-row">
        <span class="event-dotted-label">${isPa ? 'ਜਾਗੋ' : 'Jaggo'}</span>
        <span class="event-dotted-dots" aria-hidden="true">····································</span>
        <span class="event-dotted-time">${isPa ? '8:00 ਵਜੇ ਰਾਤ' : '8:00 PM Night'}</span>
      </div>

      <!-- Auspicious Date Badge -->
      <div class="event-date-pill">
        <span class="pill-calendar-icon">📅</span>
        <span class="event-date-text">${ev.date}</span>
      </div>

      <!-- Venue Plaque with Ornate Border -->
      <div class="event-venue-card">
        <div class="venue-card-label">${isPa ? 'ਸਥਾਨ / Venue' : 'Venue / ਸਥਾਨ'}</div>
        <h4 class="event-venue-name">${ev.venue}</h4>
        <p class="event-address">${ev.address}</p>
      </div>

      <!-- Google Maps Button in Royal Navy & Gold -->
      <a href="${ev.mapsLink}"
         target="_blank"
         rel="noopener noreferrer"
         class="event-map-btn"
         aria-label="View location of ${ev.name} on Google Maps">
        <span>${btnText}</span>
      </a>

      <!-- Punctuality note at the bottom of the card -->
      <div class="event-card-punctuality">
        <span class="card-punctuality-icon">⏱️</span>
        <span class="card-punctuality-text">${isPa ? 'ਸਮੇਂ ਸਿਰ ਪਹੁੰਚਣ ਦੀ ਕ੍ਰਿਪਾਲਤਾ ਕੀਤੀ ਜਾਵੇ' : 'Please grace the occasion on time'}</span>
      </div>

    </article>
  `).join('');
}



/* ============================================================
   F. COUNTDOWN TIMERS
   ============================================================ */
function startCountdowns() {
  const target = new Date(WEDDING_CONFIG.weddingDate).getTime();

  if (isNaN(target)) {
    console.warn('Wedding date is invalid. Please check WEDDING_CONFIG.weddingDate');
    return;
  }

  function updateHeroCountdown() {
    const remaining = getTimeRemaining(target);
    if (!remaining) {
      setText('hc-days',  '00');
      setText('hc-hours', '00');
      setText('hc-mins',  '00');
      setText('hc-secs',  '00');
      return;
    }
    setText('hc-days',  pad(remaining.days));
    setText('hc-hours', pad(remaining.hours));
    setText('hc-mins',  pad(remaining.minutes));
    setText('hc-secs',  pad(remaining.seconds));
  }

  function updateMainCountdown() {
    const remaining    = getTimeRemaining(target);
    const timerEl      = document.getElementById('countdown-timer');
    const msgEl        = document.getElementById('countdown-message');
    const titleEl      = document.getElementById('countdown-event-name');

    if (!remaining) {
      // Wedding day or past!
      if (timerEl)  timerEl.style.display = 'none';
      if (titleEl)  titleEl.textContent   = '🎉 Today is the Big Day!';
      if (msgEl) {
        msgEl.style.display = 'block';
        const now     = new Date();
        const wedding = new Date(WEDDING_CONFIG.weddingDate);
        msgEl.textContent = now >= wedding
          ? `Wishing ${WEDDING_CONFIG.bride.firstName} & ${WEDDING_CONFIG.groom.firstName} a lifetime of love and happiness! 🌸`
          : '🎊 The wedding is today! Get ready to celebrate!';
      }
      return;
    }

    setText('cd-days',  pad(remaining.days));
    setText('cd-hours', pad(remaining.hours));
    setText('cd-mins',  pad(remaining.minutes));
    setText('cd-secs',  pad(remaining.seconds));
  }

  // Initial render
  updateHeroCountdown();
  updateMainCountdown();

  // Update every second
  setInterval(() => {
    updateHeroCountdown();
    updateMainCountdown();
  }, 1000);
}

/* ============================================================
   ROYAL OPEN CHIME (Soft Celestial Harp Arpeggio)
   ============================================================ */
function playOpenChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    // Pentatonic ascending royal harp notes (C5, E5, G5, B5, C6)
    const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + idx * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.12 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 1.25);
    });
  } catch (e) {
    // Audio context not allowed or failed silently
  }
}

/* ============================================================
   ROYAL ROSE PETAL & GOLDEN CONFETTI CELEBRATION SHOWER
   ============================================================ */
function triggerPetalShower(originX, originY) {
  // Skip if user prefers reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.getElementById('petal-shower-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.scale(dpr, dpr);

  canvas.classList.add('active');

  const burstX = (typeof originX === 'number' && !isNaN(originX)) ? originX : (width / 2);
  const burstY = (typeof originY === 'number' && !isNaN(originY)) ? originY : (height / 2);

  const particles = [];
  const isMobile = width < 768;

  // Velvet rose palette: deep crimson, royal burgundy, dark velvet ruby, soft rose
  const petalPalettes = [
    { base: '#7A0E22', mid: '#A11832', edge: '#4E0613' },
    { base: '#8F1528', mid: '#B5223C', edge: '#5C0918' },
    { base: '#6B091B', mid: '#8C1027', edge: '#400410' },
    { base: '#A81C36', mid: '#CD2E4C', edge: '#6B0B1D' },
  ];

  // Gold foil palette: metallic antique gold, bright champagne, rich golden bronze
  const goldPalettes = ['#FFE082', '#FFD54F', '#ECC870', '#DFBA65', '#C29633'];

  // 1. Center Burst Petals (outward and upward from wax seal)
  const burstCount = isMobile ? 22 : 36;
  for (let i = 0; i < burstCount; i++) {
    const angle = (Math.PI * 2 * (i / burstCount)) + (Math.random() - 0.5) * 0.4;
    const speed = Math.random() * 7 + 4;
    const pal = petalPalettes[Math.floor(Math.random() * petalPalettes.length)];
    particles.push({
      type: 'petal',
      x: burstX + (Math.random() - 0.5) * 20,
      y: burstY + (Math.random() - 0.5) * 20,
      vx: Math.cos(angle) * speed * (0.8 + Math.random() * 0.4),
      vy: Math.sin(angle) * speed - Math.random() * 4 - 2, // upward launch
      size: Math.random() * 7 + 10,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.08,
      flip: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.06 + 0.02,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.04 + 0.02,
      swayWidth: Math.random() * 1.5 + 0.5,
      gravity: 0.16,
      drag: 0.96,
      maxVy: Math.random() * 1.6 + 2.2,
      alpha: 1,
      palette: pal,
      curvature: Math.random() * 0.4 + 0.8,
    });
  }

  // 2. Center Burst Gold Foil Sparkles
  const goldBurstCount = isMobile ? 30 : 50;
  for (let i = 0; i < goldBurstCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 3;
    particles.push({
      type: Math.random() > 0.4 ? 'gold-foil' : 'gold-star',
      x: burstX + (Math.random() - 0.5) * 16,
      y: burstY + (Math.random() - 0.5) * 16,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 3 - 1,
      w: Math.random() * 4 + 4,
      h: Math.random() * 7 + 6,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.18,
      flip: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.12 + 0.05,
      gravity: 0.18,
      drag: 0.95,
      maxVy: Math.random() * 1.8 + 2.5,
      alpha: 1,
      color: goldPalettes[Math.floor(Math.random() * goldPalettes.length)],
      twinkle: Math.random() * Math.PI * 2,
    });
  }

  // 3. Canopy Sky Rain (gentle shower falling from top of screen)
  const canopyPetalCount = isMobile ? 32 : 55;
  for (let i = 0; i < canopyPetalCount; i++) {
    const pal = petalPalettes[Math.floor(Math.random() * petalPalettes.length)];
    particles.push({
      type: 'petal',
      x: Math.random() * width,
      y: -Math.random() * (height * 0.5) - 20,
      vx: (Math.random() - 0.5) * 1.2,
      vy: Math.random() * 1.8 + 1.6,
      size: Math.random() * 8 + 11,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.05,
      flip: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.05 + 0.015,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.035 + 0.015,
      swayWidth: Math.random() * 2 + 1,
      gravity: 0.08,
      drag: 0.99,
      maxVy: Math.random() * 1.5 + 2.4,
      alpha: 1,
      palette: pal,
      curvature: Math.random() * 0.4 + 0.8,
    });
  }

  // 4. Canopy Sky Gold Foil Rain
  const canopyGoldCount = isMobile ? 35 : 60;
  for (let i = 0; i < canopyGoldCount; i++) {
    particles.push({
      type: Math.random() > 0.4 ? 'gold-foil' : 'gold-star',
      x: Math.random() * width,
      y: -Math.random() * (height * 0.6) - 20,
      vx: (Math.random() - 0.5) * 1.5,
      vy: Math.random() * 2 + 2,
      w: Math.random() * 4 + 4,
      h: Math.random() * 8 + 6,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
      flip: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.1 + 0.03,
      gravity: 0.1,
      drag: 0.98,
      maxVy: Math.random() * 2 + 2.8,
      alpha: 1,
      color: goldPalettes[Math.floor(Math.random() * goldPalettes.length)],
      twinkle: Math.random() * Math.PI * 2,
    });
  }

  let animationFrameId;
  const startTime = performance.now();
  const maxDuration = 4800; // 4.8 seconds

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    const scaleY = Math.cos(p.flip);
    ctx.scale(1, Math.abs(scaleY) < 0.05 ? 0.05 : scaleY);

    ctx.beginPath();
    const sz = p.size;
    const cur = p.curvature;

    // Organic petal path
    ctx.moveTo(0, -sz * 1.05);
    ctx.bezierCurveTo(-sz * 0.85 * cur, -sz * 0.5, -sz * 1.05 * cur, sz * 0.5, 0, sz);
    ctx.bezierCurveTo(sz * 1.05 * cur, sz * 0.5, sz * 0.85 * cur, -sz * 0.5, 0, -sz * 1.05);
    ctx.closePath();

    // Differentiate front face vs underside of the petal
    const isFront = scaleY >= 0;
    const grad = ctx.createRadialGradient(0, 0, sz * 0.15, 0, 0, sz * 1.1);
    if (isFront) {
      grad.addColorStop(0, p.palette.mid);
      grad.addColorStop(0.65, p.palette.base);
      grad.addColorStop(1, p.palette.edge);
    } else {
      // Underside: softer, velvety slightly lighter tones with subtle sheen
      grad.addColorStop(0, '#C43553');
      grad.addColorStop(0.6, p.palette.mid);
      grad.addColorStop(1, p.palette.base);
    }

    ctx.fillStyle = grad;
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fill();

    // Central delicate petal vein line
    ctx.beginPath();
    ctx.moveTo(0, -sz * 0.7);
    ctx.quadraticCurveTo(sz * 0.08, 0, 0, sz * 0.8);
    ctx.strokeStyle = isFront ? 'rgba(255, 180, 195, 0.28)' : 'rgba(255, 210, 220, 0.35)';
    ctx.lineWidth = 0.9;
    ctx.stroke();

    ctx.restore();
  }

  function drawGold(g) {
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(g.rotation);
    const scaleY = Math.cos(g.flip);
    ctx.scale(1, Math.abs(scaleY) < 0.08 ? 0.08 : scaleY);

    g.twinkle += 0.12;
    const shimmer = 0.7 + Math.sin(g.twinkle) * 0.3;
    ctx.globalAlpha = Math.max(0, g.alpha * shimmer);

    if (g.type === 'gold-foil') {
      // Foil strip
      const grad = ctx.createLinearGradient(-g.w/2, -g.h/2, g.w/2, g.h/2);
      grad.addColorStop(0, '#FFF5D6');
      grad.addColorStop(0.35, g.color);
      grad.addColorStop(0.7, '#A27623');
      grad.addColorStop(1, '#FFF2CE');
      ctx.fillStyle = grad;
      ctx.fillRect(-g.w/2, -g.h/2, g.w, g.h);
    } else {
      // 4-point star sparkle ✦
      ctx.fillStyle = g.color;
      ctx.beginPath();
      const rad = g.w * 1.2;
      for (let j = 0; j < 4; j++) {
        const a1 = (j * Math.PI) / 2;
        ctx.lineTo(Math.cos(a1) * rad, Math.sin(a1) * rad);
        const a2 = a1 + Math.PI / 4;
        ctx.lineTo(Math.cos(a2) * (rad * 0.28), Math.sin(a2) * (rad * 0.28));
      }
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  function render(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, width, height);

    // Fade out over last 1.3 seconds
    const fadeOutStart = maxDuration - 1300;
    const overallFade = elapsed > fadeOutStart
      ? Math.max(0, 1 - (elapsed - fadeOutStart) / 1300)
      : 1;

    let activeCount = 0;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Physics update
      p.vx *= p.drag;
      p.vy = Math.min(p.vy + p.gravity, p.maxVy);
      p.x += p.vx;
      p.y += p.vy;

      p.rotation += p.rotSpeed;
      p.flip += p.flipSpeed;

      if (p.type === 'petal') {
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * p.swayWidth;
      }

      p.alpha = overallFade;

      // Draw particle if inside view bounds
      if (p.y > -60 && p.y < height + 80 && p.alpha > 0.01) {
        activeCount++;
        if (p.type === 'petal') {
          drawPetal(p);
        } else {
          drawGold(p);
        }
      }
    }

    if (elapsed < maxDuration && activeCount > 0) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      // Cleanup
      ctx.clearRect(0, 0, width, height);
      canvas.classList.remove('active');
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    }
  }

  animationFrameId = requestAnimationFrame(render);
}

/* ============================================================
   G. ENVELOPE ANIMATION
   ============================================================ */
/* ============================================================
   G. ENVELOPE ANIMATION
   ============================================================ */
function initEnvelope() {
  const openBtn   = document.getElementById('btn-open-invite');
  const skipBtn   = document.getElementById('btn-skip');
  const envScreen = document.getElementById('envelope-screen');
  const mainSite  = document.getElementById('main-site');
  const envCont   = document.getElementById('envelope-container');

  // Ensure scroll is at top and history doesn't auto-scroll to anchor or previous position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // Lock both html and body while envelope is active
  document.documentElement.classList.add('envelope-locked');
  document.body.classList.add('envelope-locked');

  // Prevent wheel and touch scrolling while envelope is locked
  const preventScroll = (e) => {
    if (document.body.classList.contains('envelope-locked')) {
      e.preventDefault();
    }
  };
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });

  function unlockSite() {
    window.scrollTo(0, 0);
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);

    document.documentElement.classList.remove('envelope-locked');
    document.body.classList.remove('envelope-locked');
    if (document.documentElement.style) document.documentElement.style.overflow = '';
    if (document.body?.style) document.body.style.overflow = '';

    if (mainSite) {
      mainSite.classList.remove('site-collapsed');
      mainSite.setAttribute('aria-hidden', 'false');
      mainSite.classList.add('visible');
    }
  }

  function finishEntrance() {
    unlockSite();
    if (envScreen) envScreen.style.display = 'none';
    if (typeof observeDynamicElements === 'function') {
      observeDynamicElements();
    }
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('scroll'));
  }

  function handleOpen() {
    if (!envCont || envCont.classList.contains('opening')) return;
    playOpenChime();
    playWeddingMusic();

    // 1. Add opening classes to trigger 3D door swing & inner portal illumination
    envCont.classList.add('opening');
    if (envScreen) envScreen.classList.add('opening');

    // 2. Trigger romantic rose petal & gold confetti shower
    const sealEl = document.getElementById('env-wax-seal');
    const sealRect = sealEl ? sealEl.getBoundingClientRect() : null;
    const originX = sealRect ? (sealRect.left + sealRect.width / 2) : (window.innerWidth / 2);
    const originY = sealRect ? (sealRect.top + sealRect.height / 2) : (window.innerHeight / 2);
    triggerPetalShower(originX, originY);

    // 3. At 1400ms, as the gates reach wide swing, start the slow walkthrough dissolve
    setTimeout(() => {
      if (envScreen) envScreen.classList.add('exit');
    }, 1400);

    // 4. At 2850ms, cleanly complete transition and unlock scrolling
    setTimeout(() => {
      finishEntrance();
    }, 2850);

    // 5. Gentle auto-scroll hint after entrance
    scheduleAutoScroll(4500);
  }

  if (openBtn) {
    openBtn.addEventListener('click', handleOpen);
  }

  if (envCont) {
    if (envCont.style) envCont.style.cursor = 'pointer';
    envCont.addEventListener('click', handleOpen);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      playWeddingMusic();
      triggerPetalShower(window.innerWidth / 2, window.innerHeight / 2);
      if (envScreen) {
        envScreen.classList.add('exit');
        setTimeout(finishEntrance, 350);
      } else {
        finishEntrance();
      }
      scheduleAutoScroll(3000);
    });
  }
}

/* ============================================================
   G2. GENTLE AUTOMATIC SLOW-SCROLL SYSTEM
   ============================================================ */
let isAutoScrolling = false;
let autoScrollAnimId = null;
let autoScrollTimeout = null;
let autoScrollAccumulatedY = 0;
let autoScrollLastTimestamp = 0;
const AUTO_SCROLL_SPEED = 42; // pixels per second (~0.7px per 60fps frame) — slow, regal & readable

function stopAutoScroll() {
  if (autoScrollTimeout) {
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = null;
  }
  if (!isAutoScrolling) return;
  isAutoScrolling = false;
  if (autoScrollAnimId) {
    cancelAnimationFrame(autoScrollAnimId);
    autoScrollAnimId = null;
  }
  document.documentElement.classList.remove('is-auto-scrolling');
  detachAutoScrollCancelListeners();
}

function handleUserScrollCancel() {
  stopAutoScroll();
}

function handleUserScrollKeydown(e) {
  // Cancel if navigation/scroll keys are pressed
  const scrollKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End'];
  if (scrollKeys.includes(e.code) || scrollKeys.includes(e.key)) {
    stopAutoScroll();
  }
}

function attachAutoScrollCancelListeners() {
  // Any user interaction (touch, wheel, click, key) hands full control back to user
  window.addEventListener('wheel', handleUserScrollCancel, { passive: true });
  window.addEventListener('touchstart', handleUserScrollCancel, { passive: true });
  window.addEventListener('touchmove', handleUserScrollCancel, { passive: true });
  window.addEventListener('pointerdown', handleUserScrollCancel, { passive: true });
  window.addEventListener('keydown', handleUserScrollKeydown, { passive: true });
}

function detachAutoScrollCancelListeners() {
  window.removeEventListener('wheel', handleUserScrollCancel);
  window.removeEventListener('touchstart', handleUserScrollCancel);
  window.removeEventListener('touchmove', handleUserScrollCancel);
  window.removeEventListener('pointerdown', handleUserScrollCancel);
  window.removeEventListener('keydown', handleUserScrollKeydown);
}

function startAutoScroll() {
  // Respect reduced motion accessibility setting
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // If user has already manually scrolled down the page (> 120px), don't hijack their reading
  if (window.scrollY > 120) {
    return;
  }

  // Prevent duplicate runs
  if (isAutoScrolling) return;
  isAutoScrolling = true;

  // Temporarily disable smooth scroll behavior in CSS so rAF does not fight native interpolation
  document.documentElement.classList.add('is-auto-scrolling');

  autoScrollAccumulatedY = window.scrollY;
  autoScrollLastTimestamp = performance.now();

  attachAutoScrollCancelListeners();

  function autoScrollStep(currentTime) {
    if (!isAutoScrolling) return;

    const deltaMs = currentTime - autoScrollLastTimestamp;
    autoScrollLastTimestamp = currentTime;

    // Safety guard against tab switching / long frame drops
    if (deltaMs > 0 && deltaMs < 200) {
      autoScrollAccumulatedY += (AUTO_SCROLL_SPEED * deltaMs) / 1000;
      window.scrollTo(0, autoScrollAccumulatedY);
    }

    // Detect if user scrolled independently (e.g. dragged desktop scrollbar thumb)
    if (Math.abs(window.scrollY - autoScrollAccumulatedY) > 40) {
      stopAutoScroll();
      return;
    }

    // Check if bottom of document reached
    const maxScroll = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    ) - window.innerHeight;

    if (window.scrollY >= maxScroll - 6) {
      stopAutoScroll();
      return;
    }

    autoScrollAnimId = requestAnimationFrame(autoScrollStep);
  }

  autoScrollAnimId = requestAnimationFrame((time) => {
    autoScrollLastTimestamp = time;
    autoScrollAccumulatedY = window.scrollY;
    autoScrollAnimId = requestAnimationFrame(autoScrollStep);
  });
}

function scheduleAutoScroll(delayMs = 3000) {
  if (autoScrollTimeout) {
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = null;
  }
  if (isAutoScrolling) {
    stopAutoScroll();
  }

  // Listen for user touch/scroll during the 3-second delay to cancel if they start browsing manually
  const cancelEarlyOnInteraction = () => {
    if (autoScrollTimeout) {
      clearTimeout(autoScrollTimeout);
      autoScrollTimeout = null;
    }
    window.removeEventListener('wheel', cancelEarlyOnInteraction);
    window.removeEventListener('touchmove', cancelEarlyOnInteraction);
  };
  window.addEventListener('wheel', cancelEarlyOnInteraction, { passive: true, once: true });
  window.addEventListener('touchmove', cancelEarlyOnInteraction, { passive: true, once: true });

  autoScrollTimeout = setTimeout(() => {
    window.removeEventListener('wheel', cancelEarlyOnInteraction);
    window.removeEventListener('touchmove', cancelEarlyOnInteraction);
    startAutoScroll();
  }, delayMs);
}

/* ============================================================
   H. ROYAL WEDDING MUSIC CONTROLLER
   ============================================================ */
let weddingAudio = null;
let isMusicPlaying = false;
let musicFadeInterval = null;

function initMusicController() {
  weddingAudio = document.getElementById('wedding-audio');
  const toggleBtn = document.getElementById('btn-toggle-music');

  if (!weddingAudio || !toggleBtn) return;

  weddingAudio.loop = true;
  weddingAudio.volume = 0;

  // Toggle button event
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWeddingMusic();
  });

  weddingAudio.addEventListener('play', () => {
    isMusicPlaying = true;
    updateMusicUI(true);
  });

  weddingAudio.addEventListener('pause', () => {
    isMusicPlaying = false;
    updateMusicUI(false);
  });
}

function playWeddingMusic() {
  if (!weddingAudio) {
    weddingAudio = document.getElementById('wedding-audio');
  }
  const controller = document.getElementById('music-controller');
  if (controller) {
    controller.classList.add('visible');
  }

  if (!weddingAudio) return;

  if (musicFadeInterval) clearInterval(musicFadeInterval);

  weddingAudio.volume = 0;
  const playPromise = weddingAudio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isMusicPlaying = true;
        updateMusicUI(true);

        // Smooth volume crossfade to 0.70
        let currentVol = 0;
        musicFadeInterval = setInterval(() => {
          if (currentVol < 0.7) {
            currentVol = Math.min(0.7, currentVol + 0.05);
            if (weddingAudio) weddingAudio.volume = currentVol;
          } else {
            clearInterval(musicFadeInterval);
          }
        }, 80);
      })
      .catch((err) => {
        console.log('Audio autoplay requires interaction or was blocked:', err);
        isMusicPlaying = false;
        updateMusicUI(false);
      });
  }
}

function pauseWeddingMusic() {
  if (!weddingAudio) return;
  if (musicFadeInterval) clearInterval(musicFadeInterval);

  let currentVol = weddingAudio.volume;
  musicFadeInterval = setInterval(() => {
    if (currentVol > 0.05) {
      currentVol = Math.max(0, currentVol - 0.1);
      if (weddingAudio) weddingAudio.volume = currentVol;
    } else {
      clearInterval(musicFadeInterval);
      if (weddingAudio) {
        weddingAudio.pause();
        weddingAudio.volume = 0;
      }
      isMusicPlaying = false;
      updateMusicUI(false);
    }
  }, 40);
}

function toggleWeddingMusic() {
  if (!weddingAudio) {
    weddingAudio = document.getElementById('wedding-audio');
  }
  if (!weddingAudio) return;

  if (isMusicPlaying && !weddingAudio.paused) {
    pauseWeddingMusic();
  } else {
    playWeddingMusic();
  }
}

function updateMusicUI(isPlaying) {
  const controller = document.getElementById('music-controller');
  const toggleBtn = document.getElementById('btn-toggle-music');
  const label = document.getElementById('music-label-display');
  if (!controller || !toggleBtn) return;

  const currentLang = document.body.getAttribute('data-lang') || 'en';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  if (isPlaying) {
    controller.classList.add('is-playing');
    controller.classList.remove('is-paused');
    toggleBtn.setAttribute('title', currentLang === 'pa' ? 'ਸੰਗੀਤ ਬੰਦ ਕਰੋ' : 'Pause Music');
    toggleBtn.setAttribute('aria-label', currentLang === 'pa' ? 'ਸੰਗੀਤ ਬੰਦ ਕਰੋ' : 'Pause Music');
    if (label) label.textContent = t.musicTitle || 'Gurbani & Wedding Melody';
  } else {
    controller.classList.remove('is-playing');
    controller.classList.add('is-paused');
    toggleBtn.setAttribute('title', currentLang === 'pa' ? 'ਸੰਗੀਤ ਚਲਾਓ' : 'Play Music');
    toggleBtn.setAttribute('aria-label', currentLang === 'pa' ? 'ਸੰਗੀਤ ਚਲਾਓ' : 'Play Music');
    if (label) label.textContent = currentLang === 'pa' ? 'ਸੰਗੀਤ ਬੰਦ ਹੈ • ਚਲਾਓ' : 'Music Paused • Play';
  }
}

/* ============================================================
   I. NAVIGATION
   ============================================================ */
function initNav() {
  const nav       = document.getElementById('site-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  // Scroll-based styling
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav on link click (mobile)
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   I. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initScrollReveal() {
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Skip if prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
    .forEach(el => observer.observe(el));
}

/* ============================================================
   J. RSVP FORM
   ============================================================ */
function initRsvp() {
  const form      = document.getElementById('rsvp-form');
  const successEl = document.getElementById('rsvp-success');
  const successMsg = document.getElementById('rsvp-success-msg');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateRsvp()) return;

    const data = {
      name:      document.getElementById('rsvp-name')?.value.trim(),
      phone:     document.getElementById('rsvp-phone')?.value.trim(),
      guests:    document.getElementById('rsvp-guests')?.value,
      attending: document.querySelector('input[name="attending"]:checked')?.value,
      message:   document.getElementById('rsvp-message')?.value.trim(),
    };

    // ──────────────────────────────────────────────────────────
    // INTEGRATION POINT:
    // To send this to a real backend, replace the block below
    // with an API call, for example:
    //
    // fetch('https://your-backend.com/api/rsvp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // }).then(res => res.json()).then(showSuccess).catch(console.error);
    //
    // OR using Formspree:
    // Change form's action="https://formspree.io/f/YOUR_FORM_ID"
    // and set method="POST" — remove the JS submit handler for Formspree.
    // ──────────────────────────────────────────────────────────

    console.log('[RSVP Data — connect to backend to save]:', data);
    showRsvpSuccess(data);
  });

  function validateRsvp() {
    let isValid = true;
    clearErrors();

    const name      = document.getElementById('rsvp-name')?.value.trim();
    const guests    = document.getElementById('rsvp-guests')?.value;
    const attending = document.querySelector('input[name="attending"]:checked');

    if (!name) {
      showError('err-name', 'Please enter your full name.');
      document.getElementById('rsvp-name')?.classList.add('is-error');
      isValid = false;
    }

    if (!guests) {
      showError('err-guests', 'Please select the number of guests.');
      document.getElementById('rsvp-guests')?.classList.add('is-error');
      isValid = false;
    }

    if (!attending) {
      showError('err-attending', 'Please let us know if you will attend.');
      isValid = false;
    }

    return isValid;
  }

  function showError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  function clearErrors() {
    ['err-name', 'err-guests', 'err-attending'].forEach(id => showError(id, ''));
    ['rsvp-name', 'rsvp-guests'].forEach(id => {
      document.getElementById(id)?.classList.remove('is-error');
    });
  }

  function showRsvpSuccess(data) {
    if (form)      form.style.display  = 'none';
    if (successEl) successEl.style.display = 'block';

    const attending = data.attending === 'yes';
    const msg = attending
      ? `We are thrilled that you'll be joining us, ${data.name}! Your presence will make our celebration even more special. See you on ${WEDDING_CONFIG.venue.displayDate}! 🌸`
      : `Thank you for letting us know, ${data.name}. We'll miss having you there, but we're grateful for your warm wishes and love. 💌`;

    if (successMsg) successMsg.textContent = msg;
  }

  // Live validation — remove error on input
  document.getElementById('rsvp-name')?.addEventListener('input', () => {
    showError('err-name', '');
    document.getElementById('rsvp-name')?.classList.remove('is-error');
  });

  document.getElementById('rsvp-guests')?.addEventListener('change', () => {
    showError('err-guests', '');
    document.getElementById('rsvp-guests')?.classList.remove('is-error');
  });

  document.querySelectorAll('input[name="attending"]').forEach(radio => {
    radio.addEventListener('change', () => showError('err-attending', ''));
  });
}


/* ============================================================
   L. WHATSAPP & SOCIAL MEDIA SHARING SYSTEM
   ============================================================ */
function initWhatsApp() {
  const btn = document.getElementById('btn-whatsapp');
  const btnShare = document.getElementById('btn-share-all');
  const toastEl = document.getElementById('toast-notify');

  function showToast(text) {
    if (!toastEl) return;
    toastEl.textContent = text;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  function getSharePayload() {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    const url = window.location.href;
    const msgText = typeof t.whatsappText === 'function'
      ? t.whatsappText(url)
      : WEDDING_CONFIG.whatsappMessage;
    return {
      title: '🌸 Jaspreet & Taranpreet — Royal Wedding Invitation',
      text: msgText,
      url: url,
    };
  }

  // 1. Direct WhatsApp Button
  if (btn) {
    btn.addEventListener('click', () => {
      const payload = getSharePayload();
      const msg = encodeURIComponent(payload.text);
      // api.whatsapp.com/send works seamlessly across mobile apps and desktop WhatsApp Web
      const waUrl = `https://api.whatsapp.com/send?text=${msg}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 2. Share Invitation Button (WhatsApp, Instagram, Telegram, SMS, or Copy)
  if (btnShare) {
    btnShare.addEventListener('click', async () => {
      const payload = getSharePayload();

      if (navigator.share) {
        try {
          await navigator.share({
            title: payload.title,
            text: payload.text,
            url: payload.url,
          });
          return;
        } catch (err) {
          // User dismissed native share sheet, continue
        }
      }

      // Fallback: copy to clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(payload.text);
          const toastMsg = currentLang === 'pa'
            ? '✨ ਵਿਆਹ ਦਾ ਸੱਦਾ ਪੱਤਰ ਕਾਪੀ ਹੋ ਗਿਆ! ਕਿਸੇ ਵੀ ਸੋਸ਼ਲ ਮੀਡੀਆ ਐਪ ਵਿੱਚ ਪੇਸਟ ਕਰੋ।'
            : '✨ Invitation message copied! Paste it in any chat or social media app.';
          showToast(toastMsg);
          return;
        } catch (e) {
          // Clipboard blocked
        }
      }

      // Fallback 2: open WhatsApp
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(payload.text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 3. Sync absolute Open Graph and Twitter image URLs dynamically if hosted
  try {
    const origin = window.location.origin;
    if (origin && !origin.startsWith('file://')) {
      const fullUrl = window.location.href;
      const fullImgUrl = `${origin}/assets/images/og-wedding-card.jpg`;

      const ogUrl = document.querySelector('meta[property="og:url"]');
      const ogImg = document.querySelector('meta[property="og:image"]');
      const ogSecImg = document.querySelector('meta[property="og:image:secure_url"]');
      const twImg = document.querySelector('meta[name="twitter:image"]');

      if (ogUrl) ogUrl.setAttribute('content', fullUrl);
      if (ogImg) ogImg.setAttribute('content', fullImgUrl);
      if (ogSecImg) ogSecImg.setAttribute('content', fullImgUrl);
      if (twImg) twImg.setAttribute('content', fullImgUrl);
    }
  } catch (e) {
    // Non-critical fallback
  }
}

/* ============================================================
   M. BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('btn-back-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    stopAutoScroll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   N. RE-OBSERVE DYNAMICALLY ADDED ELEMENTS
   ============================================================ */
function observeDynamicElements() {
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // If reduced motion, ensure all are visible immediately
    document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
    .forEach(el => observer.observe(el));
}

/* ============================================================
   O. AMBIENT ROYAL GOLDEN STARDUST PARTICLES ENGINE
   ============================================================ */
function initAmbientParticles() {
  const canvas = document.getElementById('ambient-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particleCount = window.innerWidth < 768 ? 32 : 55;
  const particles = [];

  const colors = [
    'rgba(245, 222, 155, ',
    'rgba(212, 175, 55, ',
    'rgba(255, 248, 220, ',
    'rgba(238, 198, 102, ',
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      fadeSpeed: Math.random() * 0.012 + 0.005,
      fadingIn: Math.random() > 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkleOffset: Math.random() * Math.PI * 2,
    });
  }

  let animationFrameId;
  let isRunning = true;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      if (typeof cancelAnimationFrame === 'function') cancelAnimationFrame(animationFrameId);
    } else {
      isRunning = true;
      animate();
    }
  });

  function animate() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Update position
      p.y -= p.speedY;
      p.x += p.speedX;

      // Wrap around edges
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      // Twinkle alpha
      if (p.fadingIn) {
        p.alpha += p.fadeSpeed;
        if (p.alpha >= 0.8) p.fadingIn = false;
      } else {
        p.alpha -= p.fadeSpeed;
        if (p.alpha <= 0.15) p.fadingIn = true;
      }

      // Draw particle with gentle glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();

      // For larger particles, add a soft outer blur halo
      if (p.size > 1.8) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.alpha * 0.25) + ')';
        ctx.fill();
      }
    }

    if (typeof requestAnimationFrame === 'function') {
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  // Start animation if not reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
  }
}

/* ============================================================
   INIT — Entry Point
   ============================================================ */
function init() {
  try {
    initAmbientParticles();
    populateConfig();
    initLanguageToggle();
    startCountdowns();
    initEnvelope();
    initMusicController();
    initNav();
    initRsvp();
    initWhatsApp();
    initBackToTop();

    // Observe after dynamic content is rendered
    requestAnimationFrame(() => {
      initScrollReveal();
      observeDynamicElements();
    });

  } catch (err) {
    console.error('[Wedding Invitation] Initialization error:', err);
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
