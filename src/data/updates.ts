export type UpdateType = "news" | "action-alert" | "victory" | "setback" | "event";

export interface Update {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type: UpdateType;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
  relatedProjectId?: string;
  featured?: boolean;
  tags: string[];
}

export const updates: Update[] = [
  {
    id: "1",
    slug: "city-council-hearing-october-2025",
    title: "Massive City Council Hearing Puts Pressure on Administration",
    excerpt:
      "Over 50 residents testified at yesterday's city council hearing on Hyde Park Avenue, sharing stories of near-misses and demanding action.",
    content: `Over 50 residents packed yesterday's city council hearing on Hyde Park Avenue safety, sharing emotional testimony about the dangers they face daily on this critical corridor.

Parents described "harrowing" school commutes where they must cross four lanes of fast-moving traffic with young children. Seniors spoke of being stranded at bus stops with no safe way to cross. Cyclists testified about close calls with speeding drivers.

The hearing comes after the Wu administration announced in July that it would proceed with repaving only, implementing neither of the two safety alternatives presented in May. This decision has galvanized the community.

"We are not asking for the moon," said one Forest Hills resident. "We are asking for the city to keep its promises and implement basic safety measures that were designed years ago."

Councilors pressed the administration's representatives on the timeline for any safety improvements, receiving only vague assurances about "continued engagement" and "further study."

The Boston Better Streets Coalition will continue to organize and advocate until real action is taken. Join us at our next community meeting to plan next steps.`,
    type: "news",
    date: "2025-10-15",
    author: "BBSC Team",
    relatedProjectId: "hyde-park-avenue",
    featured: true,
    tags: ["Hyde Park Avenue", "City Council", "Community Testimony"],
  },
  {
    id: "2",
    slug: "wu-administration-delays-again",
    title: "Wu Administration Delays Hyde Park Ave Improvements Until 2026",
    excerpt:
      "Despite community outcry, the city has announced that safety designs for Hyde Park Avenue will be delayed until at least 2026.",
    content: `In a disappointing but not surprising announcement, the Wu administration has confirmed that meaningful safety improvements to Hyde Park Avenue will be delayed until at least 2026.

The announcement came during a community meeting where residents had expected to hear about the implementation timeline for Alternative 2—the "road diet" option that had overwhelming community support.

Instead, officials announced that the scheduled repaving would proceed without any safety modifications, and that "further engagement" would be needed before any design could move forward.

This represents yet another broken promise in a project that began in 2019. The administration's decision appears driven by political calculation rather than public safety.

"We have been 'engaged' for six years," said one frustrated resident. "Someone was killed here. How many more studies do we need?"

The coalition is calling on all supporters to contact their city councilors and the Mayor's office to express their disappointment and demand action.`,
    type: "setback",
    date: "2025-07-20",
    author: "BBSC Team",
    relatedProjectId: "hyde-park-avenue",
    tags: ["Hyde Park Avenue", "Delays", "Administration"],
  },
  {
    id: "3",
    slug: "community-safety-walk-april-2025",
    title: "Safety Walk Documents Dangers on Hyde Park Avenue",
    excerpt:
      "Over 100 residents participated in our safety walk, documenting hazards and sharing stories along the corridor.",
    content: `More than 100 community members joined our Safety Walk along Hyde Park Avenue on Saturday, documenting dangerous conditions and sharing their experiences navigating this treacherous corridor.

Participants walked the full length of the segment scheduled for repaving, stopping at key intersections to photograph hazards and record testimony. The documentation will be submitted to the city as part of our ongoing advocacy.

Highlights from the walk included:
- The crosswalk at Forest Hills Station where Glenn Inghram was killed
- Multiple bus stops with no safe crossing options
- Intersections with poor visibility and confusing lane markings
- Areas where speeding is endemic due to wide lanes

"Walking this route really opens your eyes," said one participant. "You realize how hostile this street is to anyone not in a car."

The safety walk was covered by local media and generated significant social media attention. Thank you to everyone who participated!`,
    type: "event",
    date: "2025-04-12",
    author: "BBSC Team",
    image: "/images/hero-community.jpg",
    imageAlt: "Community members gathered for safety walk on Hyde Park Avenue",
    relatedProjectId: "hyde-park-avenue",
    tags: ["Hyde Park Avenue", "Community Event", "Documentation"],
  },
  {
    id: "4",
    slug: "petition-reaches-700-signatures",
    title: "Petition for Hyde Park Ave Safety Reaches 700+ Signatures",
    excerpt:
      "Our petition demanding immediate safety improvements has crossed 700 signatures, demonstrating strong community support.",
    content: `We are thrilled to announce that our petition demanding immediate safety improvements on Hyde Park Avenue has surpassed 700 signatures!

This milestone demonstrates the depth of community support for making this dangerous corridor safer. The petition calls on the city to:

1. Implement Alternative 2 (road diet with bike lanes) on the segment scheduled for repaving
2. Install immediate interim safety measures including speed tables and improved crosswalks
3. Commit to a clear timeline for full corridor improvements
4. Hold regular public updates on progress

The petition has been presented to the Boston Transportation Department and shared with city councilors. It represents one of the largest community mobilizations on a street safety issue in recent Boston history.

If you haven't signed yet, please do so today. And share with your neighbors—every signature strengthens our voice.`,
    type: "victory",
    date: "2024-12-01",
    author: "BBSC Team",
    relatedProjectId: "hyde-park-avenue",
    tags: ["Hyde Park Avenue", "Petition", "Community Support"],
  },
  {
    id: "5",
    slug: "glenn-inghram-memorial",
    title: "Remembering Glenn Inghram: One Month Later",
    excerpt:
      "One month after Glenn Inghram was killed at Forest Hills, we reflect on his life and renew our commitment to change.",
    content: `One month ago today, Glenn Inghram was killed by an MBTA bus while crossing Hyde Park Avenue at Forest Hills Station. He was a beloved member of the Forest Hills community, and his death has galvanized a movement.

Glenn was crossing in a marked crosswalk when he was struck. The intersection has long been known as dangerous, with inadequate signal timing and poor visibility. Despite years of community complaints, no meaningful improvements had been made.

In the weeks since Glenn's death, over 500 residents have signed our petition demanding action. We have organized community meetings, met with city officials, and begun documenting the full extent of dangerous conditions along the corridor.

But we know that signatures and meetings are not enough. Real change requires sustained pressure and political will. Glenn's death must not be in vain.

We will continue to fight for the safety improvements that could have saved Glenn's life. We owe it to him, and to everyone who must navigate Boston's dangerous streets.

Rest in power, Glenn.`,
    type: "news",
    date: "2024-11-15",
    author: "BBSC Team",
    relatedProjectId: "hyde-park-avenue",
    tags: ["Hyde Park Avenue", "Memorial", "Vision Zero"],
  },
  {
    id: "6",
    slug: "action-alert-contact-your-councilor",
    title: "ACTION ALERT: Contact Your City Councilor Today",
    excerpt:
      "The city is making decisions about Hyde Park Avenue right now. Your voice can make a difference.",
    content: `URGENT: The city is finalizing plans for Hyde Park Avenue repaving, and we need your help to ensure safety improvements are included.

The Boston Transportation Department will present options to city leadership in the coming weeks. This is our window to make our voices heard.

**What you can do:**

1. **Contact your city councilor** - Find them at boston.gov/city-council. Tell them you support Alternative 2 for Hyde Park Avenue and want safety improvements included in the repaving project.

2. **Email the Mayor's office** - mayor@boston.gov. Express your support for safer streets and your disappointment with delays.

3. **Attend the next BTD community meeting** - Check our events page for details.

4. **Share on social media** - Use #SaferHydePark and tag @MayorWu

**Sample message:**

"I am a Boston resident and I urge you to support safety improvements on Hyde Park Avenue. The community has clearly expressed support for Alternative 2, and with repaving scheduled this year, there is no excuse for further delay. Someone was killed here. How many more tragedies must occur before the city acts?"

Every message matters. Please take action today!`,
    type: "action-alert",
    date: "2025-06-01",
    author: "BBSC Team",
    relatedProjectId: "hyde-park-avenue",
    featured: true,
    tags: ["Action Alert", "Hyde Park Avenue", "Contact Officials"],
  },
];

export const getUpdateBySlug = (slug: string): Update | undefined => {
  return updates.find((u) => u.slug === slug);
};

export const getFeaturedUpdates = (): Update[] => {
  return updates.filter((u) => u.featured);
};

export const getUpdatesByType = (type: UpdateType): Update[] => {
  return updates.filter((u) => u.type === type);
};

export const getRecentUpdates = (count: number = 3): Update[] => {
  return [...updates]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
