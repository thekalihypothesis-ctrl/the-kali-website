// Memo entries, newest first. Each is its own page at /news/<slug> —
// see src/pages/news/[slug].astro. news.astro is just the index of
// clickable case-file cards (uses `teaser`, not the full body/sections).
//
// Two shapes are supported:
//  - { slug, tag, title, teaser, body: string[] }
//    A plain article: one paragraph per string. Renders as a single
//    page.
//  - { slug, tag, title, teaser, dateline, intro: string[], sections: [...] }
//    A glossary/reference-style entry, reproducing a source document's
//    own structure (sheets of term/tagline/definition) instead of
//    rewriting it into prose. Each section is its own clickable "part"
//    page at /news/<slug>/<section.slug> (see
//    src/pages/news/[slug]/[part].astro) — the /news/<slug> page is an
//    index of those parts, not the full content. Each section is
//    { slug, heading, note?, terms: [{ term, tagline, definition }] }.

export const articles = [
  {
    slug: 'bct-glossary',
    tag: 'Case-Board Glossary',
    title: 'Behaviour Code Theory: Working Glossary',
    teaser: 'A four-sheet glossary of internal terminology — BCT, BCC, XDU, Quadons — recovered and reproduced sheet by sheet.',
    dateline: '14 August 1989',
    intro: [
      'A four-sheet glossary surfaced among the case materials — internal terminology for something called Behaviour Code Theory (BCT). It reads like documentation for a system still being built, not a finished one: several entries end in "remains to be defined."',
      'Reproduced here exactly as found, sheet by sheet.',
    ],
    sections: [
      {
        slug: 'sheet-01',
        heading: 'Sheet 01 — Architecture & operations',
        note: 'Flowchart reference: I > IS > P > OS > O, with F returning to relevant stages.',
        terms: [
          { term: 'BCT', tagline: 'Behaviour Code Theory', definition: 'Conceptual framework for describing how conditions, processes, relationships and feedback contribute to behaviours.' },
          { term: 'BCC', tagline: 'Behaviour Code Calculus', definition: 'Proposed code representation for processes and their combinations. Located principally in Process (P) in the working architecture.' },
          { term: 'XDU', tagline: 'Edit / Decide / Update', definition: 'X: Edit Playhead. D: Decider. U: Updater. Selects and adjusts candidates, considers suitability, and updates retained information.' },
          { term: 'I / Input', tagline: 'Incoming material', definition: 'Signals, observations, records or other information made available to the system.' },
          { term: 'IS / Input Sort', tagline: 'Before processing', definition: 'Sorts and interprets inputs against relevant requirements, conditions and retained information; supports process selection.' },
          { term: 'P / Process', tagline: 'Operation', definition: 'Applies selected code. Its effects depend on the code, its relationships and the conditions in which it operates.' },
          { term: 'OS / Output Sort', tagline: 'After processing', definition: 'Organises results, assigns or references records, and routes information towards output, memory and feedback.' },
          { term: 'O / Output', tagline: 'Produced result', definition: 'What an operation makes available. An output can become another process’s input.' },
          { term: 'F / Feedback', tagline: 'Information returned', definition: 'Information about an operation or its effects, returned to inform evaluation and subsequent activity.' },
          { term: 'Behaviour', tagline: 'Working description', definition: 'The act of doing something in a particular way. In BCT, behaviours comprise processes; processes can generate behaviours.' },
          { term: 'Enable / activate', tagline: 'Availability / operation', definition: 'Enable makes an operation available. Activate begins it. An enabled code need not be suitable for the present application.' },
          { term: 'Playhead', tagline: 'Candidate editing', definition: 'Receives R&C, checks existing matches, then analyses and adjusts near matches. Exact editing and execution rules remain to be defined.' },
        ],
      },
      {
        slug: 'sheet-02',
        heading: 'Sheet 02 — Code & relationships',
        note: 'Reading rule: code identity, its current application and its annotations are distinct.',
        terms: [
          { term: 'Quadon', tagline: 'Four-glyph code', definition: 'A tetraglyph using 0, 1, + and minus. Four choices at each of four positions yield 256 possible Quadons.' },
          { term: 'Glyph', tagline: 'Alphabet element', definition: 'One symbol within a Quadon. Functional meanings are defined by the model; a drawn curve alone does not establish function.' },
          { term: 'Pairing relationships', tagline: 'Overlapping adjacent pairs', definition: 'G1-G2, G2-G3 and G3-G4. The central pair links the interior positions. Four is the chosen architecture, not proven universal minimality.' },
          { term: 'Co-binary', tagline: 'Working framework', definition: 'Interaction between the 0/1 and plus/minus pairs. Intended to examine combinations and relationships beyond a single binary classification.' },
          { term: 'Code fragment', tagline: 'Selected portion', definition: 'A portion of code considered for an application. Analysis can subdivide it into shorter fragments, Quadons or glyph relationships.' },
          { term: 'Sub-code', tagline: 'Contextual qualification', definition: 'Records such as: avoid x for y under conditions C. This leaves x available for z, subject to verification. Syntax remains open.' },
          { term: 'Ghost code / ghosting', tagline: 'Provisional possibilities', definition: 'A probabilistic developing structure, with requirement-generated blanks and possible insertions. It is not a predetermined correct completion.' },
          { term: 'Behavioural chain', tagline: 'Linked processes', definition: 'An ordered succession of processes or behaviours. Timing, interfaces and context affect how successive parts work together.' },
          { term: 'Behavioural network', tagline: 'Multiple connections', definition: 'Interacting chains or nodes. Overlapping networks need not give every relationship the same role, strength or activity.' },
          { term: 'Relationship', tagline: 'Connection with consequences', definition: 'A relation through which elements constrain, enable or affect one another. Its availability is distinct from its active occurrence.' },
          { term: 'Annotation', tagline: 'Instance qualification', definition: 'A value attached to a code application, such as intensity or duration. It modifies the represented instance without automatically changing code identity.' },
          { term: 'Code dynamics', tagline: 'Change and interaction', definition: 'How code operates through time: sequence, activation, inhibition, delay, recurrence and changing relationships. Not simply its static appearance.' },
        ],
      },
      {
        slug: 'sheet-03',
        heading: 'Sheet 03 — Requirements & evaluation',
        note: 'Decision rule: acceptance permits operation; it does not declare certainty.',
        terms: [
          { term: 'R&C', tagline: 'Requirements and conditions', definition: 'The package against which the playhead retrieves and evaluates candidate code. Its exact field structure remains to be specified.' },
          { term: 'Requirement', tagline: 'What needs addressing', definition: 'A demand inherited from earlier activity or exposed by a mismatch or dependency. It may change as operations generate new conditions.' },
          { term: 'Condition', tagline: 'Relevant circumstance', definition: 'A state or circumstance affecting an operation. Distinguish what is currently true from the criterion that should be satisfied.' },
          { term: 'Satisfaction criterion', tagline: 'What counts as sufficient', definition: 'The basis for judging whether a requirement has been met. Criteria, tolerances and observation periods need explicit definitions.' },
          { term: 'Suitability', tagline: 'Context-dependent fit', definition: 'How well code meets the current R&C. Unsuitable for one application does not mean unusable for every application.' },
          { term: 'Probability rating', tagline: 'Estimated suitability', definition: 'A provisional estimate informed by previous applications and current probing. Record its basis; confidence is not guaranteed by fewer candidates.' },
          { term: 'Probing', tagline: 'Investigative operation', definition: 'Tests candidates, relationships or conditions to expose informative differences. May lead to decomposition, revision or a change of perspective.' },
          { term: 'Challenge', tagline: 'Contribution to evaluation', definition: 'A question, discrepancy or alternative that changes the developing assessment. The systems need not reach separate verdicts first.' },
          { term: 'Acceptance threshold', tagline: 'Permission to activate', definition: 'The level of support required to proceed under current R&C, time and risk. Evaluation can continue after it is crossed.' },
          { term: 'Threshold region', tagline: 'Proposed operating range', definition: 'A threshold may vary by region or domain. Extreme conditions may shift it outside its normal range. A precise definition is still open.' },
          { term: 'Risk', tagline: 'Possible adverse consequence', definition: 'Considered alongside suitability and the cost of waiting. Adaptive and distorted judgement can coexist under pressure.' },
          { term: 'Quality control', tagline: 'Evaluation applied', definition: 'Evaluation regulates acceptance, adjustment, suspension and retention. It also examines feedback and whether the assessment criteria are adequate.' },
        ],
      },
      {
        slug: 'sheet-04',
        heading: 'Sheet 04 — Feedback & memory assets',
        note: 'Archive architecture: S-I within XDU; compares FPA reports with independent records.',
        terms: [
          { term: 'FPA', tagline: 'Feedback Processing Analyser', definition: 'Analyses process and outcome feedback for XDU. In the archived costing model, applies schedules and calculates estimates, settlements and repair options.' },
          { term: 'S-I Plugin', tagline: 'Sentinel-Integrity Plugin', definition: 'Safeguard within XDU. Compares FPA reports with independent memory and Sort states. Flags discrepancies or interrupts commitment; the Decider retains selection.' },
          { term: 'IS / OS feedback', tagline: 'Two reference points', definition: 'Feedback associated with Input Sort and Output Sort. Compare relevant expectations and effects across the proper operation and time interval.' },
          { term: 'Working feedback', tagline: 'Immediate use', definition: 'Feedback available to adjust ongoing evaluation or operation. The same information may also be retained for future reference.' },
          { term: 'Stored feedback asset', tagline: 'Retained experience', definition: 'Feedback preserved with context: source, R&C, timing, outcome, uncertainty and significant filtering decisions.' },
          { term: 'Feedback evaluation', tagline: 'Assess the evidence', definition: 'Checks relevance, reliability, coverage and interpretation. Agreement can share a blind spot; disagreement can reveal an omitted condition.' },
          { term: 'Feedback filtering', tagline: 'Selection and routing', definition: 'Selects what is passed, retained or prioritised. Storage choices and significance judgements are distinct; important exclusions need a trace.' },
          { term: 'Memory analogy', tagline: 'RAM / ROM distinction', definition: 'Working and retained feedback resemble working and persistent memory. Accumulating feedback usually needs writable storage, not literal read-only ROM.' },
          { term: 'Catalogue / Bio', tagline: 'Stable reference record', definition: 'Quadon identity, working meaning and baseline curve reference, with versioned conventions. Application records carry their own conditions and annotations.' },
          { term: 'Key-P-T-C-S', tagline: 'Record schema: first part', definition: 'KeyCode; Properties; Timeline; Conditions; Security. Describes an indexed asset and its context.' },
          { term: 'R-N-F-XYZ', tagline: 'Record schema: second part', definition: 'Rating; Network; Feedback; storage location: X physical, Y digital, Z XR. Here R is Rating, not requirements; X is not the playhead.' },
          { term: 'Duration / intensity', tagline: 'Curve annotations', definition: 'Duration extends line length; intensity changes angle in the current illustrations. Duration scale 0-10; intensity 0-12. Units and mappings must be stated.' },
        ],
      },
    ],
  },
  {
    slug: 'behaviour-coding',
    tag: 'Research Notes',
    title: 'Behaviour Coding',
    teaser: 'The idea that patterns of action, not just words, carry meaning — and how the Detectives read them.',
    body: [
      'Behaviour Coding is the layer underneath every clue in this case — the idea that patterns of action, not just words, carry meaning. A hesitation before a choice, a route retraced twice, a message left unsent: the Detectives treat these as data, not noise.',
      'Kali doesn’t speak in sentences. She speaks in sequences — a paw print here, a knocked-over object there — and Behaviour Coding is how those sequences get translated into leads worth following.',
      'This isn’t just narrative flavour. It’s the actual research thread running underneath The Kali Hypothesis: how real choices, timing, and habits encode information, and whether that information can be read back.',
    ],
  },
];
