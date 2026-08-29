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
  },
  {
    id: 'story',
    label: 'Story (filing cabinet drawer)',
    href: '/story',
    x: 145,
    y: 500,
    w: 210,
    h: 155,
  },
  {
    id: 'shows',
    label: 'Shows (filing cabinet drawer)',
    href: '/shows',
    x: 145,
    y: 655,
    w: 210,
    h: 155,
  },
  {
    id: 'collectibles',
    label: 'Collectibles (filing cabinet drawer)',
    href: '/collectibles',
    x: 145,
    y: 810,
    w: 210,
    h: 245,
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
