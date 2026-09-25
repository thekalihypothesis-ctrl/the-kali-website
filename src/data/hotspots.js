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
        'Shows are where the case leaves the screen. Each one is a live, location-based event — part scavenger hunt, part performance — where the Detectives (that’s you) follow a lead into a real place at a real time.',
        'No two shows run the same script. What you find depends on who shows up, what they notice, and what they choose to do with it — the case reacts to the room, not the other way around.',
        'Dates and locations get posted here and on the office monitor’s NEXT EVENT feed once they’re locked in. Check back — the window between announcement and show is usually short on purpose.',
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
        'Every case generates evidence, and some of it is built to hold in your hands. The first piece is the case file itself — a printed cover that comes alive under the AR Viewer, revealing the maze hidden inside its artwork.',
        'Future collectibles follow the same rule: they have to work as physical objects first, digital extensions second. A book that’s actually readable. A marker that’s actually a marker. Nothing exists purely to be scanned.',
        'What’s been found so far gets listed here as it’s confirmed — check the AR Zone on the shelf for the pieces that are live right now.',
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
    x: 1150,
    y: 745,
    w: 150,
    h: 55,
  },
  {
    id: 'desk-drawer-d2',
    label: 'Desk drawer D2',
    href: '/d2',
    x: 1150,
    y: 800,
    w: 150,
    h: 55,
  },
  {
    id: 'desk-drawer-d3',
    label: 'Desk drawer D3',
    href: '/d3',
    x: 1150,
    y: 855,
    w: 150,
    h: 80,
  },
  {
    id: 'desk-drawer-kali',
    label: 'Desk drawer KALI',
    href: '/kali',
    x: 1150,
    y: 935,
    w: 150,
    h: 95,
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
