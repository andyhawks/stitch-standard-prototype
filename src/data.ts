export interface Article {
  id: string;
  category: string;
  section: string;
  title: string;
  excerpt: string;
  fullText: string;
  author: string;
  authorRole: string;
  authorSlug: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  keyTakeaways?: string[];
  recommendedArticleIds?: string[];
}

export interface SocialLedgerEvent {
  id: string;
  label: string;
  title: string;
  location: string;
  dates: string;
  venue: string;
  description: string;
  programStructure?: string;
  dressCode?: string;
  socialEditor?: string;
  readTime?: string;
  date: string;
}

export interface SocialLedgerArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export interface StandardIssueItem {
  id: string;
  name: string;
  maker: string;
  category: string;
  material: string;
  tags: string[];
  legacy: boolean;
  image: string;
  description: string;
  origin?: string;
  construction?: string;
  materialDetail?: string;
  color?: string;
  sole?: string;
  last?: string;
  fitting?: string;
  availability?: string;
  supplyRisk?: string;
  retailPrice?: string;
  materialConstruction?: string;
  tenYearTest?: string;
  verdict?: string;
  detailImages?: string[];
  author?: string;
  authorRole?: string;
  date?: string;
  readTime?: string;
}

export interface Contributor {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  featuredEssayId: string;
}

export const sections = ["culture", "style", "lifestyle", "presence", "purpose", "perspective"];

export const allArticles: Article[] = [
  {
    id: "economy-of-attention",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "The Economy of Attention: On the Craft of Listening",
    excerpt:
      "In an era defined by the scarcity of attention and the currency of distraction, the act of listening has become a radical gesture. It is not merely the passive reception of sound, but the deliberate, generous allocation of one's focus to another human being.",
    fullText:
      "In an era defined by the scarcity of attention and the currency of distraction, the act of listening has become a radical gesture. It is not merely the passive reception of sound, but the deliberate, generous allocation of one's focus to another human being. To listen well is to resist the tyranny of response, to refuse the reflex of interruption, and to acknowledge that attention is, perhaps, the most profound form of generosity we can offer.\n\nThe modern world conspires against the listener. Notifications fragment our focus, social media rewards the loudest voice, and the cult of productivity treats silence as wasted time. Yet the measured gentleman understands that listening is not passive—it is an act of profound engagement.\n\nConsider the difference between hearing and listening. Hearing is involuntary, a biological function. Listening is a choice, a discipline, a practice that requires the same dedication we bring to any craft worth mastering. The listener must quiet the internal monologue, resist the urge to formulate a response while the other person is still speaking, and remain genuinely open to being changed by what they hear.\n\nThis is not weakness. This is strength of the most refined kind. The man who listens well commands more respect than the man who speaks loudly. He gathers intelligence while others broadcast noise. He builds trust while others build walls.\n\nThe art of listening extends beyond conversation. It applies to music, to nature, to the subtle signals that objects and spaces communicate to those patient enough to attend. A well-made shoe speaks of its construction to the man who knows how to listen. A room tells you about its inhabitants before a word is exchanged.\n\nIn the economy of attention, the listener is the true investor—placing his most valuable resource where it will yield the deepest returns.",
    author: "Eleanor Pemberton",
    authorRole: "Staff Writer",
    authorSlug: "eleanor-pemberton",
    date: "January 20, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=500&fit=crop&q=80",
    featured: true,
    keyTakeaways: [
      "Listening is an active discipline, not passive reception",
      "Attention is the most valuable resource we can offer",
      "The measured gentleman prioritizes depth over breadth",
    ],
    recommendedArticleIds: ["practice-of-presence", "dinner-table"],
  },
  {
    id: "measured-man",
    category: "PERSPECTIVE / ESSAY",
    section: "perspective",
    title: "The Measured Man: On Competence Over Performance",
    excerpt:
      "In an age of perpetual optimization and relentless performance metrics, we find ourselves asking: what does it mean to be measured?",
    fullText:
      "In an age of perpetual optimization and relentless performance metrics, we find ourselves asking: what does it mean to be measured? Not measured in the quantitative sense—not the endless tracking of steps, sleep cycles, and productivity scores—but measured in temperament, in judgment, in the capacity for restraint.\n\nThis is not a manifesto against ambition. Rather, it is a consideration of competence over performance, of stewardship over consumption, of the long view over the immediate gratification. The measured man is not passive; he is deliberate. He does not avoid risk; he calculates it. He does not reject the new; he evaluates it against the proven.\n\nPerformance culture demands that we be seen doing. It confuses activity with achievement, visibility with value. The measured approach, by contrast, prioritizes outcomes over optics. It values the quiet accumulation of skill, the patient development of judgment, the unglamorous work of maintenance and repair.\n\nConsider the difference between a man who buys a new suit every season and one who maintains a small rotation of well-made garments. The former performs consumption; the latter practices stewardship. One is constantly acquiring; the other is perpetually refining.\n\nThis philosophy extends beyond wardrobe to all domains of life. The objects we choose, the skills we develop, the relationships we maintain—all benefit from a measured approach. We ask not \"What is new?\" but \"What endures?\" Not \"What impresses?\" but \"What serves?\"\n\nThe measured man builds slowly. He learns the difference between price and value, between trend and tradition, between fashion and style. He understands that true competence—in craft, in conduct, in character—cannot be performed. It can only be cultivated.",
    author: "Russell Wentworth",
    authorRole: "Editor-in-Chief",
    authorSlug: "russell-wentworth",
    date: "February 21, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=80",
    keyTakeaways: [
      "Prioritize competence over performance",
      "Practice stewardship, not consumption",
      "Choose objects that endure over those that impress",
      "Build skills slowly and deliberately",
      "Value maintenance and refinement",
    ],
    recommendedArticleIds: ["stewardship-over-ownership", "case-for-fewer-things"],
  },
  {
    id: "practice-of-presence",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "The Practice of Presence: Finding Stillness in Motion",
    excerpt:
      "An exploration of mindful attention in an age designed for distraction. How the measured gentleman cultivates awareness without becoming self-conscious.",
    fullText:
      "An exploration of mindful attention in an age designed for distraction. How the measured gentleman cultivates awareness without becoming self-conscious.\n\nPresence is not performance. It is not the studied nonchalance of the influencer or the aggressive eye contact of the salesman. True presence is the quiet confidence that comes from being fully engaged with the current moment—neither rehearsing the past nor anxiously scripting the future.\n\nThe practice begins with the body. How you enter a room, how you hold a glass, how you sit in a chair—these are not superficial concerns but expressions of inner composure. The man who is present moves with economy and purpose. He does not fidget, does not check his phone, does not scan the room for someone more important to talk to.\n\nThis is increasingly rare, and therefore increasingly valuable. In a world of divided attention, the person who offers their full focus becomes magnetic. Not through effort, but through the simple, radical act of being where they are.",
    author: "Marcus Ashford",
    authorRole: "Contributing Editor",
    authorSlug: "marcus-ashford",
    date: "February 15, 2026",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "morning-routine",
    category: "STYLE / ESSAY",
    section: "style",
    title: "The Morning Routine Reconsidered",
    excerpt:
      "There is a difference between ritual and habit, between structure and rigidity. The morning routine can itself become a form of tyranny.",
    fullText:
      "There is a difference between ritual and habit, between structure and rigidity. The morning routine—so often prescribed as a cure for modern chaos—can itself become a form of tyranny if we confuse discipline with dogma.\n\nThe measured morning is not about optimization. It is about intention. It begins not with an alarm but with awareness—the gradual recognition that a new day has presented itself, and with it, the opportunity to engage with the world on one's own terms.\n\nConsider the elements: the making of coffee (not the consumption, but the making), the selection of clothing appropriate to the day's demands, the brief review of one's commitments. Each of these acts, performed with attention rather than automation, transforms routine into ritual.\n\nThe key distinction is consciousness. A habit is performed without thought; a ritual is performed with full awareness. The former saves time; the latter enriches it.",
    author: "Marcus Ashford",
    authorRole: "Contributing Editor",
    authorSlug: "marcus-ashford",
    date: "January 22, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "handwritten-note",
    category: "LIFESTYLE / ESSAY",
    section: "lifestyle",
    title: "In Defense of the Handwritten Note",
    excerpt:
      "The handwritten note is an anachronism in the best sense: a practice that refuses to optimize itself out of existence.",
    fullText:
      "The handwritten note is an anachronism in the best sense: a practice that refuses to optimize itself out of existence. In an age of instant communication, it represents the deliberate choice of friction, the acknowledgment that some things are worth the time they take.\n\nConsider what a handwritten note communicates beyond its words: I thought of you. I took the time. I chose paper over pixels, permanence over convenience. This is not nostalgia—it is strategy. In a world drowning in digital noise, the physical letter arrives with the force of singularity.\n\nThe materials matter. Good stationery is not an affectation but a form of respect—for the recipient, for the message, and for the act of writing itself. A heavy cotton card, a reliable pen, an envelope that requires intention to open: these are the instruments of a practice that rewards patience.\n\nThe measured gentleman keeps a supply of correspondence cards and uses them regularly. Not for every occasion, but for the ones that matter: a genuine thank you, a note of condolence, a word of encouragement that arrives unexpectedly and is therefore remembered.",
    author: "Russell Wentworth",
    authorRole: "Editor-in-Chief",
    authorSlug: "russell-wentworth",
    date: "December 16, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "field-watch",
    category: "LIFESTYLE / ESSAY",
    section: "lifestyle",
    title: "The Field Watch",
    excerpt:
      "Why the field watch remains the most honest timepiece—a tool designed for legibility, durability, and quiet competence.",
    fullText:
      "Why the field watch remains the most honest timepiece—a tool designed for legibility, durability, and quiet competence rather than ostentation.\n\nIn a world of smartwatches and luxury complications, the field watch persists as a statement of values. It tells time. It does so reliably, legibly, and without pretension. There is a profound integrity in an object that does exactly what it claims to do and nothing more.\n\nThe origins are military: a watch designed to be read at a glance in difficult conditions, to survive rough handling, and to require minimal maintenance. These are not merely historical curiosities—they are design principles that remain urgently relevant.\n\nThe measured man appreciates the field watch not for what it says about his wealth, but for what it says about his priorities: function over fashion, reliability over novelty, quiet competence over loud display.",
    author: "James Lowell",
    authorRole: "Objects Editor",
    authorSlug: "james-lowell",
    date: "January 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "letters-from-readers",
    category: "PRESENCE / ESSAY",
    section: "presence",
    title: "Letters from Readers",
    excerpt:
      "A curated selection of correspondence from our readership, reflecting on craft, competence, and the quiet pursuit of the measured life.",
    fullText:
      "A curated selection of correspondence from our readership, reflecting on craft, competence, and the quiet pursuit of the measured life.\n\nWe receive letters. Not many, but the ones that arrive carry weight. They are written by people who have taken the time to reflect, to compose, and to share something of themselves with a publication they trust. This is a privilege we do not take lightly.\n\nThis month's selection touches on themes that recur throughout our correspondence: the challenge of maintaining standards in a world that rewards speed over quality, the quiet satisfaction of mastering a skill that no one else may notice, and the ongoing negotiation between tradition and progress.",
    author: "Eleanor Pemberton",
    authorRole: "Staff Writer",
    authorSlug: "eleanor-pemberton",
    date: "January 8, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "well-made-garment",
    category: "PERSPECTIVE / ESSAY",
    section: "perspective",
    title: "The Well-Made Garment",
    excerpt:
      "Understanding construction as a form of respect—for materials, for the wearer, and for the tradition of making things that last.",
    fullText:
      "Understanding construction as a form of respect—for materials, for the wearer, and for the tradition of making things that last.\n\nA well-made garment is an argument. It argues that time matters, that materials have integrity, that the person who wears it deserves more than the appearance of quality. It argues against disposability, against the tyranny of trends, against the notion that clothing is merely costume.\n\nThe signs of quality are not always visible. A floating canvas in a jacket, a hand-rolled edge on a tie, a properly set sleeve—these details are felt more than seen. They communicate themselves through drape, through movement, through the way a garment ages.\n\nThe measured man learns to read these signs. He develops an eye for construction and a hand for fabric. He understands that the most expensive garment is not always the best made, and that true quality often whispers rather than shouts.",
    author: "Julian Mercer",
    authorRole: "Style & Tailoring",
    authorSlug: "julian-mercer",
    date: "January 5, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "gentlemans-library",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "The Gentleman's Library: An Annotated List",
    excerpt:
      "A library is not a collection of books one has read, but rather a curated set of texts one intends to consult throughout a lifetime.",
    fullText:
      "A library is not a collection of books one has read, but rather a curated set of texts one intends to consult throughout a lifetime. These volumes represent not cultural capital to be displayed, but intellectual tools to be employed.\n\nThe measured gentleman's library is not large. It is deliberate. Each volume earns its place not through prestige but through utility—the frequency with which it is consulted, the depth of insight it continues to yield, the conversations it provokes.\n\nA proper library should contain works that challenge as well as comfort, that provoke as well as confirm. It should span disciplines and centuries, connecting the reader to a tradition of thought that extends far beyond the present moment.",
    author: "Sebastian Marlowe",
    authorRole: "Literary Editor",
    authorSlug: "sebastian-marlowe",
    date: "December 8, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "walking-as-philosophy",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "Walking as Philosophy",
    excerpt:
      "The peripatetic philosophers understood something we have forgotten: that thinking and walking are complementary activities.",
    fullText:
      "The peripatetic philosophers understood something we have forgotten: that thinking and walking are complementary activities. The rhythm of footfall, the changing scenery, the physical engagement with space—all contribute to a particular quality of thought.\n\nWalking is not exercise. Or rather, it is not merely exercise. It is a mode of engagement with the world that activates a different quality of attention than sitting at a desk or staring at a screen. The walker notices things: the quality of light, the texture of a building facade, the rhythm of a neighborhood.",
    author: "Marcus Ashford",
    authorRole: "Contributing Editor",
    authorSlug: "marcus-ashford",
    date: "November 18, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "dinner-table",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "The Dinner Table as Democratic Space",
    excerpt:
      "The dinner table remains one of the few spaces where hierarchy can be suspended without being abolished.",
    fullText:
      "The dinner table remains one of the few spaces where hierarchy can be suspended without being abolished, where conversation can be both structured and spontaneous. Good hosting is not about preference, but about the creation of conditions for genuine exchange.\n\nThe table is a technology. Its shape determines the quality of conversation: round tables democratize, long tables create hierarchies, square tables encourage intimacy. The measured host understands these dynamics and deploys them intentionally.",
    author: "Eleanor Pemberton",
    authorRole: "Staff Writer",
    authorSlug: "eleanor-pemberton",
    date: "November 6, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "case-for-fewer-things",
    category: "PERSPECTIVE / ESSAY",
    section: "perspective",
    title: "The Case for Fewer, Better Things",
    excerpt: "On the discipline of editing one's possessions and the freedom it provides.",
    fullText:
      "On the discipline of editing one's possessions and the freedom it provides.\n\nThe accumulation of objects is the default mode of consumer culture. We acquire without intention, retain without evaluation, and store without purpose. The result is not abundance but noise—a visual and psychological clutter that drains attention and diminishes the quality of daily life.\n\nThe alternative is not minimalism, which too often becomes its own form of performance. The alternative is curation: the deliberate selection of objects that serve, that endure, and that improve with use.",
    author: "Russell Wentworth",
    authorRole: "Editor-in-Chief",
    authorSlug: "russell-wentworth",
    date: "February 14, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "craft-and-character",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "On Craft and Character",
    excerpt: "How the objects we make and maintain reflect the character we cultivate.",
    fullText:
      "How the objects we make and maintain reflect the character we cultivate.\n\nThere is a relationship between the care we give to objects and the care we give to ourselves. The man who polishes his shoes is not vain—he is practicing a form of attention that extends to every domain of his life. The discipline of maintenance is the discipline of character.",
    author: "James Lowell",
    authorRole: "Objects Editor",
    authorSlug: "james-lowell",
    date: "February 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "stewardship-over-ownership",
    category: "PERSPECTIVE / ESSAY",
    section: "perspective",
    title: "Stewardship Over Ownership",
    excerpt: "A different relationship with possessions—one that emphasizes care, maintenance, and eventual passing on.",
    fullText:
      "A different relationship with possessions—one that emphasizes care, maintenance, and eventual passing on.\n\nOwnership implies dominion. Stewardship implies responsibility. The distinction matters because it changes how we relate to everything we possess—from a wristwatch to a house to a tradition.\n\nThe steward understands that he is a temporary custodian. The objects in his care were made by someone, will outlast him, and will eventually pass to someone else. This awareness transforms consumption into conservation, acquisition into preservation.",
    author: "Russell Wentworth",
    authorRole: "Editor-in-Chief",
    authorSlug: "russell-wentworth",
    date: "January 30, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "letters-and-lessons",
    category: "LIFESTYLE / ESSAY",
    section: "lifestyle",
    title: "Letters & Lessons",
    excerpt: "A monthly column on the gentle art of learning from correspondence with readers and friends.",
    fullText: "A monthly column on the gentle art of learning from correspondence with readers and friends.\n\nEvery month, we receive letters that challenge our assumptions, deepen our understanding, and remind us why this publication exists. This column is our attempt to honour that exchange.",
    author: "Eleanor Pemberton",
    authorRole: "Staff Writer",
    authorSlug: "eleanor-pemberton",
    date: "February 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "room-with-intent",
    category: "CULTURE / ESSAY",
    section: "culture",
    title: "A Room With Intent",
    excerpt: "A meditation on how the spaces we inhabit shape the quality of our inner life.",
    fullText: "A meditation on how the spaces we inhabit shape the quality of our inner life.\n\nThe rooms we occupy are not neutral containers. They are active participants in our daily experience, shaping mood, focus, and the quality of our interactions. The measured gentleman pays attention to his environment not out of vanity, but out of an understanding that space shapes thought.",
    author: "Marcus Ashford",
    authorRole: "Contributing Editor",
    authorSlug: "marcus-ashford",
    date: "February 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "hosts-table",
    category: "PRESENCE / ESSAY",
    section: "presence",
    title: "The Host's Table",
    excerpt: "On the responsibility and privilege of gathering people around a shared meal.",
    fullText: "On the responsibility and privilege of gathering people around a shared meal.\n\nTo host is to take responsibility for the experience of others. It is an act of generosity that requires planning, attention, and the willingness to subordinate one's own preferences to the comfort of guests.",
    author: "Camille Grosvenor",
    authorRole: "Social Editor",
    authorSlug: "camille-grosvenor",
    date: "February 6, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "etiquette-of-permanence",
    category: "PERSPECTIVE / ESSAY",
    section: "perspective",
    title: "Etiquette of Permanence",
    excerpt: "How the manners we practice reflect the values we hold most dear.",
    fullText: "How the manners we practice reflect the values we hold most dear.\n\nEtiquette is not about rules. It is about the values those rules encode: consideration for others, respect for shared spaces, and the understanding that social life requires a framework of mutual obligation.",
    author: "Russell Wentworth",
    authorRole: "Editor-in-Chief",
    authorSlug: "russell-wentworth",
    date: "February 2, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "trusted-cobalt",
    category: "PURPOSE / ESSAY",
    section: "purpose",
    title: "The Trusted Cobalt",
    excerpt: "A night-blue meditation on objects, loyalty, and the colour of dependability.",
    fullText: "A night-blue meditation on objects, loyalty, and the colour of dependability.\n\nCertain colours carry meaning beyond aesthetics. Cobalt blue—deep, steady, unwavering—has long been associated with reliability and trust. It is the colour of a well-worn blazer, of a favourite pen, of the sky at the moment before twilight gives way to night.",
    author: "James Lowell",
    authorRole: "Objects Editor",
    authorSlug: "james-lowell",
    date: "January 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&h=280&fit=crop&q=80",
  },
];

export const socialLedgerEvents: SocialLedgerEvent[] = [
  {
    id: "athenaeum-club",
    label: "EVENT",
    title: "The Athenaeum Club Evening",
    location: "London",
    dates: "Thu 4 Dec 2025 – Tue 01 Mar 2026",
    venue: "Hotel Sooford, 6 Via Traunter Plateau, St Moritz, 7500",
    description:
      "The Athenaeum Club, one of London's most distinguished private clubs, will host an evening dedicated to the craft of conversation and the art of intellectual exchange. This gathering brings together thinkers, makers, and stewards from various disciplines for an evening of structured dialogue.\n\nFounded in 1824, the Athenaeum has long served as a meeting place for those engaged in serious intellectual and artistic pursuits. This evening continues that tradition, focusing on contemporary questions of craftsmanship, competence, and the measured life.",
    programStructure:
      "The evening begins at 7:00 PM with aperitifs in the Morning Room, followed by a seated dinner at 8:00 PM. Between courses, four brief presentations (10 minutes each) will explore the theme of stewardship across different domains—objects, land, knowledge, and community.\n\nAfter dinner, guests will disperse into smaller salons for guided conversations. These are not panels or lectures but structured dialogues designed to foster genuine exchange rather than performance.",
    dressCode:
      "The club requests formal evening attire. More importantly, attendees are asked to observe the club's long-standing norms: active listening, generous interpretation, and the understanding that ideas here are explored rather than debated for victory.\n\nMobile devices should remain silent and out of sight. Photography is not permitted. The evening is designed to be experienced, not documented.",
    socialEditor: "Camille Grosvenor",
    readTime: "8 min read",
    date: "March 12, 2026",
  },
  {
    id: "spring-salon",
    label: "EVENT",
    title: "Spring Salon at the Frick",
    location: "New York",
    dates: "March 18, 2026",
    venue: "The Frick Collection, New York",
    description: "An intimate evening of conversation and contemplation at one of New York's most treasured cultural institutions.",
    date: "March 18, 2026",
  },
  {
    id: "craft-heritage",
    label: "EVENT",
    title: "Craft & Heritage Symposium",
    location: "Edinburgh",
    dates: "March 24, 2026",
    venue: "Edinburgh Castle",
    description: "A gathering of craftspeople, historians, and stewards exploring the intersection of heritage and contemporary practice.",
    date: "March 24, 2026",
  },
  {
    id: "dinner-chatsworth",
    label: "EVENT",
    title: "Dinner Party at Chatsworth",
    location: "Derbyshire",
    dates: "April 2, 2026",
    venue: "Chatsworth House",
    description: "An evening of structured conversation in one of England's great houses.",
    date: "April 2, 2026",
  },
  {
    id: "book-club",
    label: "EVENT",
    title: "Book Club: Epistles Evening",
    location: "Paris",
    dates: "April 15, 2026",
    venue: "Shakespeare and Company, Paris",
    description: "A reading and discussion evening focused on the lost art of letter writing.",
    date: "April 15, 2026",
  },
];

export const socialLedgerArticles: SocialLedgerArticle[] = [
  {
    id: "art-of-salon",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Art of the Salon: Curating Conversation in Modern Times",
    excerpt: "An exploration of how intentional gathering spaces foster genuine exchange and intellectual generosity in an age of performative socializing.",
    author: "Eleanor Pemberton",
    authorSlug: "eleanor-pemberton",
    date: "February 20, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80",
    featured: true,
  },
  {
    id: "dinner-party-as-democratic",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Dinner Party as Democratic Ritual",
    excerpt: "On hosting guests in the spirit of genuine exchange.",
    author: "Camille Grosvenor",
    authorSlug: "camille-grosvenor",
    date: "Feb 8, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "guide-to-hosting",
    category: "SOCIAL LEDGER / ESSAY",
    title: "A Guide to Hosting Well",
    excerpt: "Hospitality as a practice of generosity.",
    author: "Eleanor Pemberton",
    authorSlug: "eleanor-pemberton",
    date: "Feb 4, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "lost-art-of-letter",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Lost Art of the Letter",
    excerpt: "Why correspondence still matters in a digital age.",
    author: "Russell Wentworth",
    authorSlug: "russell-wentworth",
    date: "Jan 30, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "building-community",
    category: "SOCIAL LEDGER / ESSAY",
    title: "Building Community Through Ritual",
    excerpt: "On the power of repeated gathering.",
    author: "Marcus Ashford",
    authorSlug: "marcus-ashford",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "ethics-of-invitation",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Ethics of Invitation",
    excerpt: "Who we include defines who we are.",
    author: "Camille Grosvenor",
    authorSlug: "camille-grosvenor",
    date: "Jan 18, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=400&h=280&fit=crop&q=80",
  },
  {
    id: "supper-club",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Return of the Supper Club",
    excerpt: "The supper club represents a return to something more fundamental: the home as a site of hospitality.",
    author: "Marcus Ashford",
    authorSlug: "marcus-ashford",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
  {
    id: "meaningful-introductions",
    category: "SOCIAL LEDGER / ESSAY",
    title: "A Field Guide to Meaningful Introductions",
    excerpt: "The art of introduction is not about credentials or accomplishments, but about creating the conditions for genuine connection.",
    author: "Eleanor Pemberton",
    authorSlug: "eleanor-pemberton",
    date: "February 5, 2026",
    readTime: "7 min read",
  },
  {
    id: "weekend-guest",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Social Contract of the Weekend Guest",
    excerpt: "To be a good houseguest is to understand that hospitality is not a service to be consumed.",
    author: "Russell Wentworth",
    authorSlug: "russell-wentworth",
    date: "January 27, 2026",
    readTime: "11 min read",
  },
  {
    id: "architecture-of-gathering",
    category: "SOCIAL LEDGER / ESSAY",
    title: "On the Architecture of Gathering",
    excerpt: "The spaces we create for coming together shape the quality of our interactions.",
    author: "Sebastian Marlowe",
    authorSlug: "sebastian-marlowe",
    date: "January 20, 2026",
    readTime: "10 min read",
  },
  {
    id: "calendar-values",
    category: "SOCIAL LEDGER / ESSAY",
    title: "The Calendar as Statement of Values",
    excerpt: "What we choose to attend, whom we gather with, and how we allocate our social energy are among the most consequential decisions we make.",
    author: "Eleanor Pemberton",
    authorSlug: "eleanor-pemberton",
    date: "January 15, 2026",
    readTime: "8 min read",
  },
  {
    id: "conversational-courage",
    category: "SOCIAL LEDGER / ESSAY",
    title: "Cultivating Conversational Courage",
    excerpt: "The willingness to be uncertain, to change one's mind, to admit ignorance, and to hold an idea wherever it leads.",
    author: "Marcus Ashford",
    authorSlug: "marcus-ashford",
    date: "January 6, 2026",
    readTime: "11 min read",
  },
];

export const standardIssueItems: StandardIssueItem[] = [
  {
    id: "longwing-blucher",
    name: "The Longwing Blucher",
    maker: "Alden",
    category: "Shoe",
    material: "Shell Cordovan",
    tags: ["Shoe", "Shell Cordovan"],
    legacy: true,
    origin: "Middleborough, Massachusetts, USA",
    construction: "Goodyear Welt",
    materialDetail: "Horween Shell Cordovan (Color 8)",
    color: "Color 8",
    sole: "Double Oak Leather",
    last: "Barrie Last",
    fitting: "Trubalance, D Width",
    availability: "Fully resolvable",
    supplyRisk: "PLANNED (90+ years)",
    retailPrice: "$775 USD",
    description:
      "There are dress shoes, and then there are shoes that transcend category. The Alden longwing blucher in Color 8 shell cordovan occupies that rare territory—formal enough for tailoring, casual enough for denim, and constructed with such integrity that it improves with age rather than deteriorates.",
    materialConstruction:
      "Shell cordovan is not leather in the conventional sense. Sourced from a specific membrane beneath a horse's hide, it requires months of vegetable tanning and rare finishing. The result is a material that resists water, creases rather than cracks, and develops a distinctive rolling patina that is impossible to replicate.\n\nAlden's Goodyear welt construction means the shoe can be fully resoled, extending its lifespan indefinitely. The double oak leather sole provides structure and durability while remaining flexible. The Barrie last—Alden's most accommodating shape—balances formality with comfort, suitable for extended wear without discomfort.",
    tenYearTest:
      "We acquired this pair in 2016. Ten years on, after numerous resoles, two restorations, and constant rotation, they look better than when we first put them on. The shell has developed a deep, complex patina that shifts from burgundy to near-black depending on light. The uppers remain structurally sound with no sign of separation or deterioration.\n\nThis is the essential criterion: an object that improves with use, that rewards stewardship, that becomes more valuable—aesthetically and functionally—over time.",
    verdict:
      "At $775, these shoes require consideration. By some measures (cost per wear over a decade or longer), they represent exceptional value. More importantly, they embody the principles we advocate: competence in construction, permanence in design, and the quiet satisfaction of owning something that need not be replaced.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&h=500&fit=crop&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&q=80",
    ],
    author: "Henry Kumar",
    authorRole: "Content Editor",
    date: "January 16, 2026",
    readTime: "8 min read",
  },
  {
    id: "submariner",
    name: "The Submariner",
    maker: "Rolex",
    category: "Watch",
    material: "Steel",
    tags: ["Watch", "Steel"],
    legacy: true,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=500&fit=crop&q=80",
    description: "The definitive tool watch, unchanged in essential character for seven decades.",
  },
  {
    id: "original-briefcase",
    name: "The Original Briefcase",
    maker: "Filson",
    category: "Bag",
    material: "Canvas",
    tags: ["Bag", "Canvas"],
    legacy: true,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=500&fit=crop&q=80",
    description: "Rugged, repairable, and resistant to fashion—a briefcase for the long haul.",
  },
  {
    id: "twill-chore-jacket",
    name: "The Twill Chore Jacket",
    maker: "Drake's",
    category: "Outerwear",
    material: "Cotton",
    tags: ["Outerwear", "Cotton"],
    legacy: false,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=500&fit=crop&q=80",
    description: "The working jacket elevated to its essential form.",
  },
  {
    id: "chelsea-boot",
    name: "The Chelsea Boot",
    maker: "Edward Green",
    category: "Shoe",
    material: "Leather",
    tags: ["Shoe", "Leather"],
    legacy: true,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&h=500&fit=crop&q=80",
    description: "The boot that bridges formality and ease with characteristic restraint.",
  },
  {
    id: "three-piece-suit",
    name: "The Three-Piece Suit",
    maker: "Anderson & Sheppard",
    category: "Tailoring",
    material: "Wool",
    tags: ["Tailoring", "Wool"],
    legacy: true,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=500&fit=crop&q=80",
    description: "Savile Row's most enduring silhouette, cut for movement and longevity.",
  },
];

export const contributors: Contributor[] = [
  { slug: "russell-wentworth", name: "Russell Wentworth", role: "Editor-in-Chief", bio: "Russell Wentworth is the founding editor of The Stitch & Standard. His work focuses on the intersection of craft, competence, and considered living.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80", featuredEssayId: "handwritten-note" },
  { slug: "julian-mercer", name: "Julian Mercer", role: "Style & Tailoring", bio: "Julian Mercer brings three decades of experience in bespoke tailoring and menswear to his role as Style Editor.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80", featuredEssayId: "well-made-garment" },
  { slug: "camille-grosvenor", name: "Camille Grosvenor", role: "Social Editor", bio: "Camille Grosvenor curates The Social Ledger, bringing her expertise in hospitality and social architecture to the magazine.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80", featuredEssayId: "hosts-table" },
  { slug: "james-lowell", name: "James Lowell", role: "Objects Editor", bio: "James Lowell oversees The Standard Issue, evaluating objects for durability, repairability, and timeless design.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80", featuredEssayId: "field-watch" },
  { slug: "marcus-ashford", name: "Marcus Ashford", role: "Contributing Editor", bio: "Marcus Ashford writes on presence, philosophy, and the art of intentional living.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80", featuredEssayId: "morning-routine" },
  { slug: "eleanor-pemberton", name: "Eleanor Pemberton", role: "Staff Writer", bio: "Eleanor Pemberton covers culture, conversation, and the social dimensions of the measured life.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80", featuredEssayId: "economy-of-attention" },
  { slug: "sebastian-marlowe", name: "Sebastian Marlowe", role: "Literary Editor", bio: "Sebastian Marlowe curates the magazine's literary coverage, from annotated reading lists to essays on the written word.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80", featuredEssayId: "gentlemans-library" },
];
