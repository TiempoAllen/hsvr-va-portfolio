/**
 * All copy for the landing page lives here.
 * Edit this file to make the page yours — no component changes needed.
 */

export const profile = {
  name: "Honey Sheene Repunte",
  shortName: "Honey Sheene",
  firstName: "Honey",
  role: "Virtual Assistant",
  tagline:
    "for Instagram, TikTok and the busywork behind them. You keep the vision — I'll keep the calendar, the captions and the inbox.",
  intro:
    "Virtual assistant for Instagram, TikTok and executive support. I help founders and small business owners who are behind on posting and buried in email.",
  location: "Remote · Philippines · GMT+8",
  availability: "2 client slots open",
  email: "hello@honeysheene.com",
  calendarUrl: "https://calendly.com/your-link/discovery-call",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/_hunvr/" },
  ],
};

/** Hero card: a sample week of posting across both platforms. */
export const postingPlan = [
  { day: "Mon", platform: "Instagram", format: "Reel", status: "Scheduled ✓" },
  { day: "Tue", platform: "TikTok", format: "Trend video", status: "Scheduled ✓" },
  { day: "Wed", platform: "Instagram", format: "Carousel", status: "Approved" },
  { day: "Thu", platform: "TikTok", format: "Tips video", status: "In CapCut" },
  { day: "Fri", platform: "Instagram", format: "Story set", status: "Drafted" },
] as const;

export const about = {
  heading: "Two lanes, one person.",
  paragraphs: [
    "I'm Honey, a virtual assistant working remotely from the Philippines. For the past year I've helped founders and small business owners who are behind on posting and buried in email.",
    "Most of my days are spent on Instagram and TikTok — planning posts, writing captions, editing Reels and short videos in CapCut, and keeping comments and DMs answered. The rest goes to inboxes and calendars. I ask before I guess, I write down how I work as I go, and I hold a four-hour overlap with US mornings so you're never waiting on me.",
  ],
  highlight: "Instagram + TikTok",
  chips: ["1 year as a VA", "2 accounts managed", "Replies in under 3 hrs"],
};

/** The six numbered cards under "What I can take off your plate". */
export const offers = [
  {
    lane: "Social",
    title: "Instagram & TikTok calendars",
    text: "Both platforms planned a month ahead and approved in one sitting, so posting never depends on a free evening.",
  },
  {
    lane: "Social",
    title: "Captions, Reels & TikToks",
    text: "Captions in your voice, carousels designed in Canva, and short videos edited in CapCut.",
  },
  {
    lane: "Social",
    title: "Community care",
    text: "Comments and DMs answered daily from a reply playbook we agree on together.",
  },
  {
    lane: "Executive",
    title: "Inbox & calendar",
    text: "Morning inbox triage with replies drafted for your yes or no. Meetings batched, buffers held.",
  },
  {
    lane: "Executive",
    title: "Travel & follow-ups",
    text: "Flights and hotels booked and confirmed. Meeting notes and follow-ups sent the same day.",
  },
  {
    lane: "Executive",
    title: "Light admin & SOPs",
    text: "Simple invoices, receipts filed, and written SOPs so the way you work survives a sick day.",
  },
] as const;

/** "The numbers so far" — figures read straight off the screenshots in public/results. */
export const results = {
  period: "Jul 18 – Oct 16",
  stats: [
    { value: "2,010,310", label: "views", change: "+142.8% vs. Jul 18" },
    { value: "6,359", label: "followers", change: "+215.6% vs. Jul 18" },
    { value: "687,727", label: "Instagram views in 90 days", change: "97.2% from non-followers" },
    { value: "+1,374", label: "net Instagram followers in 90 days", change: "676K views from Reels" },
  ],
  screenshots: {
    insights: {
      src: "/results/instagram-insights-90-days.webp",
      width: 1008,
      height: 2000,
      alt: "Instagram Insights, last 90 days: 687,727 views, +1,374 net followers, 97.2% of views from non-followers, 676K views from Reels",
    },
    followers: {
      src: "/results/followers-growth.png",
      width: 527,
      height: 332,
      alt: "Followers: 6,359, up 215.6% vs. Jul 18",
    },
    views: {
      src: "/results/views-growth.png",
      width: 668,
      height: 674,
      alt: "Views: 2,010,310, up 142.8% vs. Jul 18",
    },
  },
};

export const platforms = [
  {
    name: "Instagram",
    title: "Feed, Reels and Stories that keep showing up.",
    items: [
      "Feed posts and carousels designed in Canva",
      "Reels edited in CapCut, with covers that match the grid",
      "Story sets, polls and Highlights kept up to date",
      "Scheduled ahead in Meta Business Suite and Later",
      "Comments and DMs answered every day",
    ],
  },
  {
    name: "TikTok",
    title: "Short videos that ride the trend without losing your voice.",
    items: [
      "Weekly trend and sound research for your niche",
      "Hooks and on-screen text written for the first three seconds",
      "Videos edited in CapCut, captioned and hashtagged",
      "A steady posting schedule, planned alongside your Instagram",
      "Comments replied to while the video is still getting views",
    ],
  },
] as const;

export const platformStats = [
  { value: "2", label: "accounts managed end to end" },
  { value: "1 yr", label: "posting for founders and small businesses" },
  { value: "305K", label: "accounts reached in 90 days on Instagram" },
];

/** "Writing in your voice" — swap these for captions from real client accounts. */
export const captions = [
  {
    platform: "Instagram",
    kind: "Carousel caption",
    label: "Launch announcement",
    body: "Booking a session shouldn't take twelve messages.\nSo we made it take one.\n\nSwipe through to see how our new online booking works — pick a date, pay your deposit, get a reminder the day before. That's it.\n\nNovember slots are open now. Link in bio.",
    tags: "#smallbusiness #bookonline #studiolife #supportlocal",
  },
  {
    platform: "Instagram",
    kind: "Reel caption",
    label: "Behind the scenes",
    body: "Ever wondered what happens before we open?\n\nCoffee, the playlist, and a very serious debate about which mug is the best mug. (It's the chipped blue one. Don't argue.)\n\nTell us your non-negotiable morning ritual below — we're reading every one.",
    tags: "#behindthescenes #smallbusinesslife #morningroutine",
  },
  {
    platform: "TikTok",
    kind: "Hook + caption",
    label: "Trend + tips video",
    hook: "3 things I stopped doing as a founder — and got my evenings back",
    body: "Number two surprised me the most.\n\nWhich one are you still doing? Be honest.",
    tags: "#founderlife #productivitytips #smallbusinesstips #coachingbusiness",
  },
] as const;

export const dmSample = {
  label: "Pricing question",
  question: "hi! how much are your 1:1 sessions?",
  reply:
    "Hi Sam, thanks so much for asking!\n\nPricing depends on which package fits you best, so the easiest way is a free 15-minute call — no pressure, just a chat. You can grab a time here: [booking link]\n\nTalk soon!",
  outcome: "→ booked a call for Thursday",
};

export const packages = [
  {
    name: "Social only",
    hours: "20 hrs / week",
    price: "$250",
    featured: false,
    includes: "Calendar and captions · design and scheduling · comments and DMs · monthly report",
  },
  {
    name: "Both lanes",
    hours: "40 hrs / week",
    price: "$480",
    featured: true,
    badge: "Save $30 vs. booking both separately",
    includes:
      "Everything in both lanes · one point of contact · same-day turnaround on flagged items · SOPs as we go",
  },
  {
    name: "Executive only",
    hours: "20 hrs / week",
    price: "$260",
    featured: false,
    includes: "Inbox and calendar · travel and bookings · notes and follow-ups · invoicing and expenses",
  },
];
