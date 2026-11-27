// Every clickable region on the office scene.
//
// Coordinates are in px against the 1920x1080 source artwork
// (public/images/office/scene-complete.jpg) — this matches the
// fixed-layout stage size in MainLayout.astro, so no conversion
// is needed.
//
// These are FIRST-PASS ESTIMATES eyeballed from the reference art.
// Once you drop in your real per-element cropped PNGs, open the
// site with ?debug=1 (outlines every hotspot) and nudge top/left/
// width/height here until each box hugs its element.
//
// label   — for your own reference / alt text, not shown on screen
// href    — where the click goes
// x,y     — top-left corner in px
// w,h     — width/height in px
// note    — opens the hand-note popup instead of navigating
// bio     — opens a character card popup (DeskBio.astro) instead of navigating

export const hotspots = [
  {
    id: 'about',
    label: 'About (filing cabinet drawer)',
    href: '/about',
    x: 145,
    y: 315,
    w: 210,
    h: 185,
    note: {
      title: 'About',
      body: [
        'The Kali Hypothesis is an ARG+ project that blends mystery, science, and real-world exploration.',
        'Players join the Detectives to uncover clues, solve puzzles, and explore how stories, behaviour, and information interconnect.',
        'Guided by Kali – the ghost cat – the project spans location-based adventures, interactive media, and original research, inviting you to look closer, question deeper, and discover the bigger picture.',
      ],
    },
  },
  {
    id: 'story',
    label: 'Story (filing cabinet drawer)',
    href: '/story',
    x: 145,
    y: 500,
    w: 210,
    h: 155,
    note: {
      title: 'Story',
      body: [
        'Six months ago, a case file arrived with no sender. Inside: a photograph of an office that didn’t exist, a maze with no exit drawn in the margins, and a name written in the corner — Kali.',
        'The Detectives who took the case found the office wasn’t fictional at all. It was real, hidden behind an ordinary door, filled with clues that only made sense once you stopped reading them and started noticing them — a marker left facedown, a drawer that wouldn’t quite close, a photograph that had been moved.',
        'The case hasn’t closed. It’s still being worked, in public, in real locations, through real objects — this website is one of the filing cabinets. What’s inside gets added to as the Detectives find it.',
      ],
    },
  },
  {
    id: 'shows',
    label: 'Shows (filing cabinet drawer)',
    href: '/shows',
    x: 145,
    y: 655,
    w: 210,
    h: 155,
    note: {
      title: 'Shows',
      body: [
        'Shows are where the case leaves the screen. In Part 1 you first solve a treasure hunt game on your phone to find the venue — the entry point is Helix Core, a Genome Interface Access Point.',
        'Inside, the venue is a reverse escape room. Players solve puzzles to gain access to the rooms, and clues are hidden within two displays: one at human height, the other at the height of a cat. To finish, players insert a code within the Nucleus.',
        'Completing Part 1 gives access to Part 2: the alternating reality game (ARG+) and its secret second venue, where teams can become either detectives or viral agents.',
      ],
    },
  },
  {
    id: 'collectibles',
    label: 'Collectibles (filing cabinet drawer)',
    href: '/collectibles',
    x: 145,
    y: 810,
    w: 210,
    h: 245,
    note: {
      title: 'Collectibles',
      body: [
        'Every collectible is a numbered limited edition and comes with a certificate of authentication.',
        'Acrylic light box dioramas, custom made to order with LED strips. Limited edition posters, hand screenprinted on quality cartridge paper. T-shirts in a range of sizes, with tighter-fit and child options. Shadow boxes, pre-made or as cut-yourself card sheets.',
        'Table cut-outs, made from acrylic with their own stands. Cards, as flat cards or pop-ups. Fridge magnets, individually or in packs. Stickers, in a wide variety of collectible packs.',
      ],
    },
  },
  {
    id: 'monitor',
    label: 'Monitor — portal to AR viewer',
    href: '/ar',
    x: 800,
    y: 430,
    w: 320,
    h: 220,
  },
  {
    id: 'photo-frame',
    label: 'Framed photo on the wall',
    href: '/story',
    x: 1250,
    y: 120,
    w: 380,
    h: 280,
  },
  {
    id: 'ar-zone',
    label: 'AR Zone (bookshelf)',
    href: '/ar-zone',
    x: 1470,
    y: 530,
    w: 190,
    h: 50,
  },
  {
    id: 'guerrilla-marketing',
    label: 'Guerrilla Marketing Campaign (bookshelf)',
    href: '/guerrilla-marketing',
    x: 1450,
    y: 580,
    w: 210,
    h: 150,
  },
  {
    id: 'd2-notes',
    label: 'D2 Notes (bookshelf)',
    href: '/d2-notes',
    x: 1500,
    y: 730,
    w: 160,
    h: 120,
  },
  {
    id: 'forum',
    label: 'Forum (bookshelf)',
    href: '/forum',
    x: 1450,
    y: 850,
    w: 210,
    h: 150,
  },
  {
    id: 'desk-drawer-d1',
    label: 'Desk drawer D1',
    href: '/d1',
    bio: '/images/Bio%20Menu/D1-bio.png',
    x: 1138,
    y: 732,
    w: 165,
    h: 76,
  },
  {
    id: 'desk-drawer-d2',
    label: 'Desk drawer D2',
    href: '/d2',
    bio: '/images/Bio%20Menu/D2-bio.png',
    x: 1138,
    y: 808,
    w: 165,
    h: 75,
  },
  {
    id: 'desk-drawer-d3',
    label: 'Desk drawer D3',
    href: '/d3',
    bio: '/images/Bio%20Menu/D3-bio.png',
    x: 1138,
    y: 883,
    w: 165,
    h: 76,
  },
  {
    id: 'desk-drawer-d4',
    label: 'Desk drawer D4',
    href: '/d4',
    x: 1138,
    y: 959,
    w: 165,
    h: 86,
  },
  {
    id: 'arg-plus',
    label: 'ARG+ folder on the desk',
    href: '/arg-plus',
    x: 1160,
    y: 590,
    w: 140,
    h: 70,
  },
  {
    id: 'desk-sculpture',
    label: 'Sculpture / model on the desk',
    href: '/collectibles',
    x: 640,
    y: 465,
    w: 140,
    h: 190,
  },
  {
    id: 'logo',
    label: 'Magnifying glass + logo',
    href: '/',
    x: 100,
    y: 20,
    w: 360,
    h: 240,
  },
  {
    id: 'cat-mask',
    label: 'Cat mask on top of the cabinet',
    href: '/about',
    x: 270,
    y: 295,
    w: 120,
    h: 50,
  },
];
