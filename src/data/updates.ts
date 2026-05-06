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
    id: "10",
    slug: "hyde-park-safety-walk-recap-april-2026",
    title: "Following Up on the Hyde Park Avenue Safety Walk",
    excerpt:
      "More than 70 residents gathered with city officials, councillors, and Mayor Wu for a constructive conversation about making Hyde Park Avenue safer.",
    content: `Thank you to everyone who attended the Hyde Park Avenue "safety walk & talk" on Saturday April 25 at Forest Hills station!

![Community members gathered at Forest Hills station](/images/safety-walk-recap-1.jpg)

We gathered more than 70 residents of all ages, city officials, Councillors Weber and Pepen, and Mayor Wu for a lively yet civil and constructive conversation. Volunteers then reached out to businesses by Forest Hills for outreach and support for a safe HPA (and almost all of them signed support letters). Here is some [media coverage](https://www.universalhub.com/2026/mayor-outlines-ideas-making-hyde-park-avenue-safer-near-forest-hills-t) and a [video of the event](https://www.youtube.com/watch?v=cgWSh6rJ_NM).

![Residents speaking at the safety walk event](/images/safety-walk-recap-2.jpg)

Residents pressed the administration for a safer Hyde Park Avenue that prioritizes pedestrians, bus commuters, accessibility, and children, and people on bikes and wheels. They spoke, again, of near-misses, of not being able to take their kids to school safely, of witnessing car drivers going 50mph routinely, blowing past red lights and pedestrian crossings. The city's response was, broadly, that they are pretty much unwilling to reduce car traffic volume or speed on HPA.

We wrote an email in response to the meeting (please see the letter below) and have not received an answer. So, **[we designed a video game](https://www.bostonbetterstreets.org/game/index.html)** to let everyone experience what it feels like crossing Hyde Park Avenue. Enjoy!

## Two Asks

**1) Email Mayor Wu, Nick Gove, and your city councillors** to reiterate the need for meaningful safety improvements on HPA like the ones that were outlined in a design completed in 2020. You can elaborate on any of the points of our letter, or add your own perspective.

**2) Help us continue to reach out to local businesses** to keep them involved in a shared vision of making HPA a vibrant corridor through business hubs. Please let us know if you can do that, and we can send you the letter we have been sharing with them.

Thank you for your continuous engagement for safe streets.

---

## Letter Written After the April 25 Meeting

Dear Mayor Wu:

Thank you again for attending the Hyde Park Ave safety walk this past weekend. As frustrated as we are about the lawless, life-threatening chaos of this corridor and the City's inaction, we do genuinely appreciate you showing up and engaging with our community members.

In your remarks, you asked us to have faith that city government—and specifically, your administration—can get things done. You also asked us to trust that a change in your team's personnel does not mean a change to your philosophy or agenda for safe streets.

So, after the walk, we asked ourselves, "What could Mayor Wu's team do to regain our trust?" And, in turn, "What could we do to demonstrate a commitment to constructive engagement?"

**Here's what we ask of you, Nick Gove, and Mohammed Missouri:**

**The City's 30% designs from 2020 must be the starting point for further discussions of Hyde Park Avenue.** The City began outreach on this corridor in 2019. Since then, planners, traffic consultants, and community members have all had their say (more than once). Just this week, you published a Climate Action Plan, that cites an increase in trips taken in single occupancy vehicles and a City-wide objective to reduce city congestion by supporting public transit, biking, walking infrastructure. This action plan explicitly mentions Hyde Park Avenue as a priority corridor for bus lanes. We flatly refuse to engage in blank slate discussions, nor will we sit through another workshop in which we're asked to put sticky notes on a map of the corridor, as we have done on more than five occasions and in countless individual and group meetings with BTD staff. "Faster, more reliable bus service" was the City's primary goal for this corridor—in 2019 and 2024—and nothing about that should change.

**Safety improvements this year (2026).** You committed to safety improvements in the fall, as part of the planned repaving. Show us engineering drawings of safety improvements consistent with the vision of the existing, 30% designs; if you fail to come up with any, please do not do the repaving, either. We refuse to have our lives cast as the necessary casualties of a high-throughput, high-speed corridor for the convenience of far-away, private vehicle commuters.

**Actual, credible enforcement of reckless traffic endangerment.** Red light cameras, speed traps, and criminal charges—these are credible. VMS signs, verbal warnings, and commitments of future BPD staffing—are not.

**"Could this (public) meeting have been an email?"** We are fundamentally, philosophically opposed to further public meetings. Not only are they racist and exclusionary to begin with, they're also a waste of time and city resources. If there are, as you put it, "details to get right" in those 30% design plans and communities to be consulted—bus riders? school-age children? small businesses?—by all means consult them. We expect you to publish engineering drawings and committed timelines before you ask for more of our time.

**Hold yourselves accountable.** In your remarks, you mentioned a lack of engagement from the MBTA; gestured at converting the MBTA's parking facility into housing; creating a bike path along the railroad on land which the city does not own; and proposed reconsidering the existence of Ukraine Way (which is the purview of DCR). These are unrelated ideas that are definitively not prerequisites for the 30% designs published in 2020. Please stick to what the City controls and has already made progress on.

**In return for your commitments, here are some of ours:**

**We will center bus riders as the transportation users of this corridor most affected by chronic congestion.** Our primary transportation objective for this corridor is faster, more reliable, and more accessible bus service. Knowing that the MBTA will soon be able to enforce bus lane violations automatically gives us hope that all other roadway users—pedestrians, cyclists, children on school buses, ambulances—will reap the safety benefits of buses being given the priority that residents who rely on public transit deserve.

**We are ready to support you in "getting the details right"—and supporting targeted outreach.** We know that more Bostonians support your safe streets agenda than oppose it—and that this is true in all neighborhoods, amongst all racial and ethnic groups, and at all income and education levels. We also know that the only group for which this is not true is residents aged 55+. We stand ready to help the City with outreach to specific groups. We have, for example, already visited 40+ businesses along Hyde Park Avenue to collect letters of support. Tell us how we can help you; and, in turn, we commit to helping the City when it comes time to defend trade-offs (e.g., the loss of a few parking spaces, a few minutes added to rush hour car commutes) that may invite some amount of vocal opposition.

**We will continue to fight to make Boston the best city for raising a family.** We believe in your vision, and we want your administration to live up to its promise. Boston should be welcoming, accessible, affordable, and functional for all of its residents—and those who would seek to build their life here. We will continue to advocate for policies and infrastructure that support these objectives.

We hope to hear from you with concrete next steps soon.

Yours,
Ben Siegel, the other organizers of the Hyde Park Avenue Safety Walk,
and the more than 700 residents of streets surrounding Hyde Park Avenue who have been asking for action for more than five years`,
    type: "news",
    date: "2026-04-28",
    author: "BBSC Team",
    image: "/images/safety-walk-recap-1.jpg",
    imageAlt: "Community members gathered at Forest Hills station for the Hyde Park Avenue safety walk",
    relatedProjectId: "hyde-park-avenue",
    featured: true,
    tags: ["Hyde Park Avenue", "Safety Walk", "Mayor Wu", "Community Action"],
  },
  {
    id: "9",
    slug: "hyde-park-ave-safety-walk-april-2026",
    title: "Join Us: Hyde Park Ave Safety Walk on April 25th",
    excerpt:
      "Rally with elected officials and advocacy groups to demand action from City Hall. We'll visit businesses along Hyde Park Avenue to build support for safer streets.",
    content: `After countless public meetings and community advocacy, we have an opportunity to show the Mayor and the City that residents demand safer streets.

**On Saturday, April 25th**, we will rally with elected officials and advocacy groups to demand action from our City!

This time, we will be visiting businesses along Hyde Park Avenue to ask for their support in convincing the Mayor that the public wants safer streets.

## Event Details

- **When:** Saturday, April 25th at Noon
- **Where:** Forest Hills Station
- **What:** Community safety walk and business outreach

We will provide you with letters addressed to each business, as well as a script to help you. The goal is to get letters of support signed by every business and deliver these letters to the Mayor.

## Sign Up

[**Fill out this form to confirm your attendance**](https://docs.google.com/forms/d/e/1FAIpQLSemMdPPy-7SJ0p5nr-EE9mgctE6f0fJATBc9CtYJ2BPdgX5Xw/viewform) and let us know what languages you speak.

Thank you for all the work you have done to support safety improvements for Hyde Park Ave. Together, we can show the Mayor that Boston families deserve better.`,
    type: "event",
    date: "2026-04-10",
    author: "BBSC Team",
    image: "/images/safetywalk.jpg",
    imageAlt: "Hyde Park Ave Safety Walk poster",
    relatedProjectId: "hyde-park-avenue",
    featured: true,
    tags: ["Hyde Park Avenue", "Community Event", "Take Action"],
  },
  {
    id: "8",
    slug: "city-polling-shows-broad-support-for-bike-projects",
    title: "Internal City Hall Polling Reveals Broad Support for Bike Projects, Blue Hill Ave Transit",
    excerpt:
      "Leaked internal polling shows Boston residents overwhelmingly support bike lanes and bus rapid transit—but the Wu administration buried the results and abandoned the projects anyway.",
    content: `Internal City of Boston polling documents obtained by [Streetsblog Massachusetts](https://mass.streetsblog.org/2026/04/09/internal-city-hall-polling-reveals-broad-support-for-bike-projects-blue-hill-ave-bus-rapid-transit) show that a strong majority of city residents support the proposed Blue Hill Avenue bus transitway project, and that a plurality of residents support bike lane projects—even when it comes at the expense of car lanes and on-street parking.

## The Polling the City Hid

The city collected opinions from roughly 1,600 city residents who participated in a digital survey conducted in the first quarter of 2025, as Mayor Wu was beginning to gear up her re-election campaign and as her administration was launching its secretive "30-day review" of bike lane and bus lane projects.

The survey was carefully designed to get a representative sample of Boston's population in terms of age groups, gender, race and ethnicity, and neighborhoods of residence.

**The results never left City Hall—until now.**

## What the Data Shows

- **Blue Hill Avenue:** Far more respondents support the busway project than oppose it, across every age group—even among respondents aged 55 or older
- **Neighborhood support:** While the project has considerably more supporters than opponents in every neighborhood across the city, even in neighborhoods near Blue Hill Avenue, supporters outnumber opponents 48% to 31%
- **Bike lanes:** A plurality of residents support bike lane projects, even when it means removing parking or car lanes

## The Betrayal

This internal polling directly contradicts the narrative the Wu administration used to justify abandoning these projects. The mayor claimed the projects were too controversial, that the community was divided, that she needed to "balance" competing interests.

The data shows otherwise. Boston residents want safer streets. They support bike lanes. They support bus rapid transit.

The administration knew this—and chose to ignore it.

Read the full report: [Streetsblog Massachusetts](https://mass.streetsblog.org/2026/04/09/internal-city-hall-polling-reveals-broad-support-for-bike-projects-blue-hill-ave-bus-rapid-transit)`,
    type: "news",
    date: "2026-04-09",
    author: "BBSC Team",
    featured: true,
    tags: ["Blue Hill Avenue", "Polling", "Mayor Wu", "BTD"],
  },
  {
    id: "7",
    slug: "michelle-wu-doesnt-want-to-talk-about-transportation-anymore",
    title: "Michelle Wu Doesn't Want to Talk About Transportation Anymore",
    excerpt:
      "The mayor who promised bold climate leadership just spent her second inauguration speech talking about literally everything except the streets killing Boston residents.",
    content: `*The mayor who promised bold climate leadership just spent her second inauguration speech talking about literally everything except the streets killing Boston residents.*

[Mayor Michelle Wu stood before Boston this morning](https://www.bostonglobe.com/2025/12/31/metro/michelle-wu-boston-city-council-inauguration-2026/), took the oath of office for her second term, and delivered a sweeping vision for the city's future. She talked about Trump. She talked about schools. She talked about housing and standing as "a beacon for freedom."

Transportation? The thing that was supposed to be her signature issue? The climate emergency she campaigned on? The safe streets she promised?

Not. One. Word.

## Mission Accomplished: 50 Miles of Asphalt

Two days before Wu's transportation-free inauguration speech, [her Transportation Department released their triumphant year-end report](https://x.com/BostonBTD/status/2001402296169545856): 50 miles of street resurfacing, a new record for roadway "improvements."

Not a single word about pedestrian safety. Not a mention of the bike lanes rotting in planning hell. Not a whisper about Hyde Park Avenue, Blue Hill Avenue, or any of the stalled projects communities have been screaming for while watching their neighbors get run down.

Just asphalt. Smooth, beautiful asphalt for cars to speed on.

This is what Boston's transportation policy has become under Wu: fresh pavement and radio silence. And if you're wondering what happened to the bold Vision Zero promises, the complete streets revolution, the climate emergency action? Ask Jascha Franklin-Hodge, Wu's former Chief of Streets.

Actually, you can't. She canned him in December 2025 after spending a year systematically blocking him from doing the job she hired him to do. Franklin-Hodge—a nationally respected transportation innovator—got to watch his boss abandon every safety project that might upset a suburban driver or displease a developer, then got shown the door for his trouble.

The message was clear: This administration isn't interested in transformation anymore. It's interested in smooth roads and political positioning.

## What Political Courage Actually Looks Like

Let's travel 200 miles south, where a real leader just showed Wu how it's done.

[Three days into his term, Mayor Zohran Mamdani stood on McGuinness Boulevard in Brooklyn](https://nyc.streetsblog.org/2026/01/03/mamdani-announces-full-mcguinness-road-diet-finishing-a-job-halted-by-adams) and announced the completion of a stalled street safety project that the corrupt Adams administration had killed. The McGuinness road diet is back: one travel lane each direction, protected bike lanes, traffic calming. A project the community fought a decade to win.

"The parents and families of Greenpoint can breathe a sigh of relief," said Transportation Alternatives' Ben Furnas.

Day. Three.

Mamdani didn't commission another study. He didn't form a working group. He didn't wait to see which way the political winds were blowing. He kept his promise.

## The Great Retreat

Remember 2021 Michelle Wu? The one who ran on Vision Zero and climate emergency and bold transportation leadership? The one who was going to transform Boston's streets?

She's read the room. And apparently decided that her political future depends on keeping suburban drivers happy and real estate developers comfortable—the same developers who bankrolled her embarrassingly weak opponent, Josh Kraft, hoping he'd kill her bike lane plans.

Turns out they didn't need Kraft. Wu killed them herself.

Under new BTD leadership, the department has quietly shelved every ambitious safety project and retreated to the one thing that offends nobody: repaving roads. They've made a calculated bet that you won't notice the bait-and-switch. That you'll see "50 miles" and think they accomplished something instead of asking: 50 miles of what, exactly?

The vision that was promised—complete streets, protected infrastructure, streets designed for people instead of cars—has been quietly abandoned. What we get instead: press releases about smooth pavement and silence when parents ask why their kids still can't safely cross the street.

## Reading the Tea Leaves

Here's the political math Wu's clearly doing: Bike lanes cost her votes in West Roxbury and Roslindale. Protected crossings piss off drivers from Newton cutting through Hyde Park. Restaurant owners who think two parking spaces matter more than human lives? They donate to campaigns.

Meanwhile, the families begging for safe streets don't have PACs. The parents who want their kids to bike to school don't write big checks. The communities that have been fighting for these projects for years? They'll vote for her anyway, right?

So Wu pivoted. Threw some soaring anti-Trump rhetoric into her inauguration speech. Promised to fix schools. Talked about housing. And bet that transportation advocates would be too polite—or too naive—to call out the betrayal.

She's clearly eyeing higher office. Governor, maybe. Senator if the timing works. And she's learned the same lesson every ambitious Boston politician learns: bold transportation policy is a liability when you're courting suburban voters and developer money.

Better to fire the guy who believed in the mission and pretend you never made those promises.

## Two Mayors, One Choice

The contrast with Mamdani is stark. He inherited a stalled project and revived it within 72 hours. Wu has had *four years* and somehow can't find the political will to complete a single major safety project.

Mamdani is delivering on campaign promises. Wu is delivering platitudes.

Mamdani is showing what happens when a politician prioritizes promises over positioning. Wu is showing what happens when someone's already thinking three elections ahead.

The tragedy is that Wu had everything she needed. She had the mandate—a landslide reelection. She had the council—full of her allies. She had the moral clarity—people are literally dying on Boston streets. She even had Franklin-Hodge, who knew how to do this work.

She could have been the mayor who finally made this city safe for everyone, not just people in cars.

Instead, she's running the same play every ambitious Massachusetts Democrat runs: Talk progressive in Cambridge, govern for the suburbs, and hope the coalition that elected you doesn't notice until you've moved on to the next job.

## So What Now?

Mayor Wu gave an entire inauguration speech today without mentioning transportation. Her department closed out the year bragging about *asphalt* while people die on Boston streets. The bike lanes she promised are gathering dust. The complete streets projects are stalled indefinitely. The leader she hired to make it happen? Gone.

And she's betting we won't connect the dots. That we'll be too distracted by her Trump fights to notice she's abandoned her transportation agenda. That we'll accept smooth roads and soaring rhetoric as a substitute for the safe streets she promised.

But we're connecting the dots. We see the suburban drivers who opposed bike lanes getting exactly what they wanted. We see the real estate interests who funded Kraft getting their preferred outcome anyway. We see a mayor who talked transformation until it threatened her next campaign.

Mamdani just showed Boston what political courage looks like. He kept his promise when it was hard. He delivered for his community when it would have been easier to wait.

Where's our McGuinness moment, Mayor Wu? When do Boston's kids get the safe streets you promised them?

Or should we just accept that you're already running for your next job, and our streets aren't part of that campaign plan?

---

**Take Action:** [Contact Mayor Wu](mailto:mayor@boston.gov) and ask her directly: Why didn't transportation merit a single word in your inauguration speech?`,
    type: "setback",
    date: "2026-01-05",
    author: "BBSC Team",
    image: "/images/leadership.jpg",
    imageAlt: "Political leadership illustration",
    featured: true,
    tags: ["Mayor Wu", "Inauguration", "Vision Zero", "NYC Comparison", "BTD"],
  },
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
