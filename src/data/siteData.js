import profileStanding from '../../branding/profile-standing.png';
import profileSeated from '../../branding/profile-seated.png';

// 18 Verified Portfolio Images
import crimeDocImg from '../../photos/portfolio/crime-documentary.png';
import scamFraudImg from '../../photos/portfolio/scam-fraud.png';
import warHistoryImg from '../../photos/portfolio/war-history.png';
import historicalDocImg from '../../photos/portfolio/historical-documentaries.png';
import politicalDocImg from '../../photos/portfolio/political-documentaries.png';
import aiFuturisticDocImg from '../../photos/portfolio/ai-futuristic-documentaries.png';
import financeDocImg from '../../photos/portfolio/finance-economic-deep-dives.png';
import aviationDocImg from '../../photos/portfolio/aviation-engineering-investigations.png';
import nbaSportsImg from '../../photos/portfolio/nba-player-game-stories.png';
import athleteSportsImg from '../../photos/portfolio/championship-athlete-storylines.png';
import horrorTrueCrimeImg from '../../photos/portfolio/horror-mystery-true-crime.png';
import celebrityDocImg from '../../photos/portfolio/celebrity-biographies-exposes.png';
import luxuryLifestyleImg from '../../photos/portfolio/luxury-lifestyle-content.png';
import travelExplorationImg from '../../photos/portfolio/travel-exploration-channels.png';
import aiHealthImg from '../../photos/portfolio/ai-health-wellness-explainers.png';
import talkingHeadImg from '../../photos/portfolio/talking-head-personal-brand.png';
import podcastImg from '../../photos/portfolio/multi-cam-podcast-production.png';
import toolVideosImg from '../../photos/portfolio/tool-educational-youtube-videos.png';

// 3 Homepage Featured Spotlight Images
import docFacelessSpotlightImg from '../../photos/featured/documentary-faceless-spotlight.png';
import sportsNbaSpotlightImg from '../../photos/featured/sports-nba-spotlight.png';
import creatorPodcastToolsSpotlightImg from '../../photos/featured/creator-podcast-tools-spotlight.png';

export const spotlightImages = {
  documentaryFaceless: docFacelessSpotlightImg,
  sportsNba: sportsNbaSpotlightImg,
  creatorPodcastTools: creatorPodcastToolsSpotlightImg
};

export const personalInfo = {
  name: "Muhammad Junaid Khattak",
  role: "Video Editor & YouTube Content Specialist",
  eyebrow: "Video Editing • YouTube Content • Channel Management",
  headline: {
    line1: "Videos That Hold Attention.",
    line2: "Channels Built to Grow."
  },
  subheadline: "I help YouTube creators and brands turn ideas into high-quality, retention-focused content — from scripting and video editing to complete YouTube channel management.",
  profileStanding,
  profileSeated,
  upworkUrl: "https://www.upwork.com/freelancers/youtubegrowthexpert3730",
  linkedinUrl: "https://www.linkedin.com/in/junaid-khattak3730/",
  stats: [
    { label: "Content Niches Handled", value: "18+" },
    { label: "Long-Form Specialization", value: "100%" },
    { label: "End-to-End Workflow", value: "Full-Cycle" },
    { label: "Focus", value: "Retention & Pacing" }
  ]
};

export const aboutData = {
  heading: "More Than Just an Editor.",
  bio: [
    "I'm Muhammad Junaid Khattak, a professional video editor and YouTube content specialist focused on long-form storytelling.",
    "I've worked across documentary, faceless, sports, finance, crime, history, celebrity, educational and creator-led content.",
    "My work goes beyond editing. I can support the complete YouTube content pipeline — from scripts and creative direction to production, editing, publishing workflows and ongoing channel management.",
    "My goal is simple: create content that looks professional, tells the story clearly and keeps viewers watching."
  ],
  pillars: [
    { label: "Narrative & Retention", desc: "Pacing structured to hold audience attention from the first second." },
    { label: "Versatile Niche Range", desc: "Proven execution across documentary, sports, faceless, and creator channels." },
    { label: "End-to-End Operation", desc: "From ideation and scripts to multi-track editing, packaging, and uploads." }
  ]
};

export const servicesData = [
  {
    id: "01",
    title: "Video Editing",
    tagline: "Retention & Storytelling",
    description: "Professional long-form YouTube editing built around storytelling, retention and visual clarity. Includes documentary editing, faceless content, cinematic pacing, motion graphics, stock footage, archival visuals, photo animation and creator-led videos.",
    deliverables: [
      "Documentary & Cinematic pacing",
      "Dynamic motion graphics & sound design",
      "Stock & archival photo animation",
      "Faceless & Creator-led video formats"
    ],
    accent: "Editing"
  },
  {
    id: "02",
    title: "YouTube Channel Management",
    tagline: "Content Operations & Growth",
    description: "Complete support for YouTube content operations — helping manage the workflow from content planning to finished videos and publishing. Built for creators and businesses that need more than just an individual editor.",
    deliverables: [
      "End-to-end publishing pipeline",
      "Upload scheduling & metadata coordination",
      "Content consistency & quality control",
      "Workflow management for creators & brands"
    ],
    accent: "Management"
  },
  {
    id: "03",
    title: "Script Writing",
    tagline: "Research & Structure",
    description: "Research-driven long-form scripts structured for clear storytelling, viewer retention and natural visual opportunities. Designed to make production smooth and the final edit gripping.",
    deliverables: [
      "Hook-focused introductory scripting",
      "Thorough factual & narrative research",
      "Visual cues & pacing markers built in",
      "Retention-optimized narrative arcs"
    ],
    accent: "Scripting"
  },
  {
    id: "04",
    title: "Content Strategy & Production",
    tagline: "Creative Direction & Pipeline",
    description: "Creative direction and production support that connects the idea, script, visuals, editing and publishing into one consistent workflow.",
    deliverables: [
      "Concept development & ideation",
      "Visual style & creative direction",
      "Asset sourcing & production setup",
      "Holistic channel content roadmaps"
    ],
    accent: "Strategy"
  }
];

export const portfolioCategories = [
  { id: "all", name: "All Work", count: 18 },
  { id: "documentary", name: "Documentary Storytelling", count: 8 },
  { id: "sports", name: "Sports Storytelling", count: 2 },
  { id: "faceless", name: "Faceless YouTube", count: 5 },
  { id: "creator", name: "Creator Content", count: 3 }
];

export const portfolioProjects = [
  // 01. Crime Documentary
  {
    id: "crime-doc",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "Crime Documentary Series",
    image: crimeDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Tense investigative pacing, archival restoration, dramatic audio design & kinetic documents.",
    driveUrl: "https://drive.google.com/drive/folders/1ePiMjSIY8v4OfXqOiW9lfWYrjF_h7bjF?usp=drive_link",
    tags: ["Crime", "Investigative", "Sound Design", "Archival"],
    accentColor: "#ccff00",
    timecode: "18:42:00",
    fps: "24 FPS"
  },
  // 02. Scam & Fraud
  {
    id: "scam-fraud",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "Scam & Fraud Exposed",
    image: scamFraudImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Deep-dive financial crime breakdown, custom UI reconstructions, and fast-paced evidence reveals.",
    driveUrl: "https://drive.google.com/drive/folders/1QcOBWUYaaAk8POua_3fp8l-W0cZbYkk7?usp=drive_link",
    tags: ["Scam & Fraud", "Financial Crime", "UI Mockups", "Motion Graphics"],
    accentColor: "#ccff00",
    timecode: "22:15:00",
    fps: "30 FPS"
  },
  // 03. War History
  {
    id: "war-history",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "War History & Conflict Chronicles",
    image: warHistoryImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Tactical map animations, historical colorization treatments, and immersive battle audio landscapes.",
    driveUrl: "https://drive.google.com/drive/folders/1P3VCI5WPHxv7d2UgOr4ancKsqHvLnPlH?usp=drive_link",
    tags: ["War History", "Map Animations", "Historical Colorization", "Cinematic"],
    accentColor: "#ccff00",
    timecode: "31:08:00",
    fps: "24 FPS"
  },
  // 04. Historical Documentaries
  {
    id: "historical-doc",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "Historical Documentaries",
    image: historicalDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Photo parallax, 2.5D archival camera projection, textured typography, and period-authentic tone.",
    driveUrl: "https://drive.google.com/drive/folders/1CDHEb7PG5t9NJQnT4_MseyMeJ5YpGRYn?usp=sharing",
    tags: ["History", "Photo Parallax", "Archival Animation", "Storytelling"],
    accentColor: "#ccff00",
    timecode: "26:40:00",
    fps: "24 FPS"
  },
  // 05. Political Documentaries
  {
    id: "political-doc",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "Political Documentaries",
    image: politicalDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Sharp narrative editing, newspaper clipping transitions, audio commentary mixing, and bold chapter title cards.",
    driveUrl: "https://drive.google.com/drive/folders/1EbcgK4frfrKF0O-bG9HWo7wkfcirG94p?usp=sharing",
    tags: ["Politics", "Geopolitics", "Chapter Design", "Pacing"],
    accentColor: "#ccff00",
    timecode: "19:50:00",
    fps: "24 FPS"
  },
  // 06. AI & Futuristic Documentaries
  {
    id: "ai-documentary",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "AI & Futuristic Documentaries",
    image: aiFuturisticDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Futuristic HUD graphics, synthesized generative visuals, high-tech soundscapes, and tech-philosophy rhythm.",
    driveUrl: "https://drive.google.com/drive/folders/1raQSOEly5vVFjQWMGTqPmnKEV04GXFyG?usp=drive_link",
    tags: ["AI Tech", "Futuristic HUD", "Soundscapes", "Generative Visuals"],
    accentColor: "#ccff00",
    timecode: "15:20:00",
    fps: "60 FPS"
  },
  // 07. Finance & Economic Deep Dives
  {
    id: "finance-doc",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "Finance & Economic Deep Dives",
    image: financeDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Chart animations, stock market ticker graphics, financial report breakdown, and clear informational hierarchy.",
    driveUrl: "https://drive.google.com/drive/folders/15c_LqSNanAMPG9R_UCfe0eNvtf9JXCRv?usp=sharing",
    tags: ["Finance", "Economics", "Chart Motion", "Information Design"],
    accentColor: "#ccff00",
    timecode: "14:10:00",
    fps: "30 FPS"
  },
  // 08. Aviation & Engineering Investigations
  {
    id: "aviation-doc",
    category: "documentary",
    categoryLabel: "Documentary Storytelling",
    title: "Aviation & Engineering Investigations",
    image: aviationDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Flight path animations, cockpit transcript sync, technical 3D breakdown cues, and high-stakes tension.",
    driveUrl: "https://drive.google.com/drive/folders/1jinCmGguDb72qGUXtm6qpRMd7Mzppfq4?usp=drive_link",
    tags: ["Aviation", "Engineering", "Flight Paths", "Investigation"],
    accentColor: "#ccff00",
    timecode: "21:30:00",
    fps: "30 FPS"
  },
  // 09. NBA Player & Game Stories
  {
    id: "nba-sports",
    category: "sports",
    categoryLabel: "Sports Storytelling",
    title: "NBA Player & Game Stories",
    image: nbaSportsImg,
    aspect: "16:9 60FPS",
    duration: "Long-form / High Energy",
    style: "Fast-paced broadcast cuts, dynamic speed ramps, player stat popouts, and hype-driven audio pacing.",
    driveUrl: "https://drive.google.com/drive/folders/13yoR1sk0eJgJkHtYX40vdutEF3RtI7CT?usp=sharing",
    tags: ["NBA", "Basketball", "Speed Ramps", "Hype Edits"],
    accentColor: "#ccff00",
    timecode: "12:45:00",
    fps: "60 FPS"
  },
  // 10. Championship & Athlete Storylines
  {
    id: "sports-general",
    category: "sports",
    categoryLabel: "Sports Storytelling",
    title: "Championship & Athlete Storylines",
    image: athleteSportsImg,
    aspect: "16:9 60FPS",
    duration: "Long-form",
    style: "Cinematic sports documentary treatment, emotional slow-motion moments, and commentary-driven climaxes.",
    driveUrl: "https://drive.google.com/drive/folders/18-7b4vq_fbPI9WLExYeE6_RFuUrHsFd9?usp=sharing",
    tags: ["Athletics", "Championship", "Cinematic Sports", "Sound Effects"],
    accentColor: "#ccff00",
    timecode: "16:15:00",
    fps: "60 FPS"
  },
  // 11. Horror, Mystery & True Crime
  {
    id: "faceless-horror-crime",
    category: "faceless",
    categoryLabel: "Faceless YouTube",
    title: "Horror, Mystery & True Crime",
    image: horrorTrueCrimeImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Dark atmospheric color grading, creepy ambient sound design, photo pulse animation, and lingering suspense.",
    driveUrl: "https://drive.google.com/drive/folders/1Os3U2nZqW4wk9ZcraJhK-j4U7nNYMRP2?usp=sharing",
    tags: ["Faceless", "Horror", "Mystery", "Atmospheric"],
    accentColor: "#ccff00",
    timecode: "25:10:00",
    fps: "24 FPS"
  },
  // 12. Celebrity Biographies & Exposés
  {
    id: "celebrity-doc",
    category: "faceless",
    categoryLabel: "Faceless YouTube",
    title: "Celebrity Biographies & Exposés",
    image: celebrityDocImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Pop-culture kinetic typography, red-carpet photo cutouts, timeline transitions, and engaging modern rhythm.",
    driveUrl: "https://drive.google.com/drive/folders/1W1sRjbZuIiKGh49cRv08yR3cdXa16DpZ?usp=drive_link",
    tags: ["Celebrity", "Pop Culture", "Photo Cutouts", "Pacing"],
    accentColor: "#ccff00",
    timecode: "17:35:00",
    fps: "30 FPS"
  },
  // 13. Luxury & Lifestyle Content
  {
    id: "lifestyle-celebrity",
    category: "faceless",
    categoryLabel: "Faceless YouTube",
    title: "Luxury & Lifestyle Content",
    image: luxuryLifestyleImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "High-end visual aesthetic, clean typography, luxury motion pacing, and rich B-roll assembly.",
    driveUrl: "https://drive.google.com/drive/folders/1Q7hDpT3T-eYldDrki32maQ2hcHfSB0R7?usp=sharing",
    tags: ["Lifestyle", "Luxury", "Minimalist Motion", "Cinematic"],
    accentColor: "#ccff00",
    timecode: "11:20:00",
    fps: "30 FPS"
  },
  // 14. Travel & Exploration Channels
  {
    id: "travel-stories",
    category: "faceless",
    categoryLabel: "Faceless YouTube",
    title: "Travel & Exploration Channels",
    image: travelExplorationImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Location maps, vibrant color enhancement, immersive natural soundscapes, and informative geographical callouts.",
    driveUrl: "https://drive.google.com/drive/folders/1TRoNk3q74RCKCGuoEh4xskbtAUH07CnG?usp=drive_link",
    tags: ["Travel", "Geographic", "Color Grading", "Visual Storytelling"],
    accentColor: "#ccff00",
    timecode: "13:50:00",
    fps: "60 FPS"
  },
  // 15. AI Health & Wellness Explainers
  {
    id: "ai-health",
    category: "faceless",
    categoryLabel: "Faceless YouTube",
    title: "AI Health & Wellness Explainers",
    image: aiHealthImg,
    aspect: "16:9 4K",
    duration: "Long-form",
    style: "Scientific diagrams, 3D anatomical overlays, medical fact callouts, and trustworthy pacing.",
    driveUrl: "https://drive.google.com/drive/folders/12N1Fx3jEKIEeFlgaSvTVP4LUOkIt4mUP?usp=drive_link",
    tags: ["AI Health", "Science", "Diagrams", "Educational"],
    accentColor: "#ccff00",
    timecode: "10:45:00",
    fps: "30 FPS"
  },
  // 16. Talking Head & Personal Brand
  {
    id: "talking-head",
    category: "creator",
    categoryLabel: "Creator Content",
    title: "Talking Head & Personal Brand",
    image: talkingHeadImg,
    aspect: "16:9 4K",
    duration: "Creator Long-form",
    style: "Seamless jump-cut smoothing, zoom reframing, kinetic B-roll integration, on-screen callouts, and high retention cuts.",
    driveUrl: "https://drive.google.com/drive/folders/1ios1NsdRKRCs0rXbiz8kBn7sUxQDu_EZ?usp=sharing",
    tags: ["Talking Head", "Reframing", "B-Roll Sync", "High Retention"],
    accentColor: "#ccff00",
    timecode: "09:30:00",
    fps: "60 FPS"
  },
  // 17. Multi-Cam Podcast Production
  {
    id: "podcast-editing",
    category: "creator",
    categoryLabel: "Creator Content",
    title: "Multi-Cam Podcast Production",
    image: podcastImg,
    aspect: "16:9 4K",
    duration: "Long-form Show",
    style: "Multi-camera speaker switching, live waveform overlays, chapter lower-thirds, and crisp audio leveling.",
    driveUrl: "https://drive.google.com/drive/folders/1m0PgEO0L655Mie2mLTj3ntfUkeKMPXpw?usp=sharing",
    tags: ["Podcast", "Multi-Cam", "Audio Mastering", "Lower Thirds"],
    accentColor: "#ccff00",
    timecode: "45:00:00",
    fps: "30 FPS"
  },
  // 18. Tool & Educational YouTube Videos
  {
    id: "tool-videos",
    category: "creator",
    categoryLabel: "Creator Content",
    title: "Tool & Educational YouTube Videos",
    image: toolVideosImg,
    aspect: "16:9 4K",
    duration: "Tutorial / Breakdown",
    style: "Crisp screen recording zooms, UI highlight callouts, step-by-step cursor tracking, and clean structured layout.",
    driveUrl: "https://drive.google.com/drive/folders/1ZNdSOAgVlGiE3v47X-qKt7_FvaPb2Sn0?usp=sharing",
    tags: ["Software & Tools", "Tutorials", "Screen Zooms", "Educational"],
    accentColor: "#ccff00",
    timecode: "14:15:00",
    fps: "60 FPS"
  }
];

export const workflowSteps = [
  {
    step: "01",
    title: "Research & Ideas",
    subtitle: "Finding High-Demand Angles",
    description: "Identifying and shaping content opportunities with proven retention potential and strong audience appeal before a single frame is cut.",
    icon: "Sparkles"
  },
  {
    step: "02",
    title: "Script Writing",
    subtitle: "Hook-First Narrative Architecture",
    description: "Turning research into structured, gripping scripts with clear visual markers, natural cliffhangers, and seamless narrative pacing.",
    icon: "FileText"
  },
  {
    step: "03",
    title: "Creative Direction",
    subtitle: "Visual Style & Moodboard",
    description: "Planning the visual treatment, color palette, graphic motifs, audio direction, and asset sourcing to ensure an unmistakably premium aesthetic.",
    icon: "Compass"
  },
  {
    step: "04",
    title: "Video Editing",
    subtitle: "Multi-Layer Timeline Assembly",
    description: "Crafting the final story with rhythmic cutting, dynamic motion graphics, 2.5D archival parallax, and layered cinematic sound design.",
    icon: "Film"
  },
  {
    step: "05",
    title: "Thumbnail & Creative",
    subtitle: "High-CTR Visual Packaging",
    description: "Aligning thumbnail concepts and title packaging directly with the video hook to maximize click-through rate and early viewer trust.",
    icon: "Layout"
  },
  {
    step: "06",
    title: "Publishing Workflow",
    subtitle: "Metadata, Chapters & Delivery",
    description: "Structuring SEO-optimized titles, tags, descriptive chapter timestamps, end screens, and release-ready masters for seamless publication.",
    icon: "UploadCloud"
  },
  {
    step: "07",
    title: "Channel Management",
    subtitle: "Consistent Content Operations",
    description: "Keeping the full YouTube operation running consistently on schedule — coordinating assets, schedules, and continuous workflow improvements.",
    icon: "TrendingUp"
  }
];

export const channelManagementData = {
  heading: "Built for More Than One Video.",
  subheading: "Complete Content Operations for Growing Channels",
  copy: "Great YouTube channels need consistency behind the scenes. I work as an integral part of the content operation — coordinating scripts, production, editing, packaging, and publishing workflows so creators and brands can focus on growth rather than micromanaging every step.",
  channels: [
    {
      name: "Business Machines",
      handle: "@Business_Machines",
      url: "https://www.youtube.com/@Business_Machines",
      role: "YouTube Content / Channel Management & Video Production Support",
      focus: "Business, tech & industry documentary formats",
      status: "Active Collaboration"
    },
    {
      name: "StarSpillMedia",
      handle: "@StarSpillMedia",
      url: "https://www.youtube.com/@StarSpillMedia",
      role: "YouTube Content / Channel Management & Video Production Support",
      focus: "Pop culture, media analysis & entertainment storytelling",
      status: "Active Collaboration"
    },
    {
      name: "Fashion By Hania",
      handle: "@FashionByHania",
      url: "https://www.youtube.com/@FashionByHania",
      role: "YouTube Channel & Content Management Experience",
      focus: "Style, aesthetic lifestyle & creator-led programming",
      status: "Verified Channel Experience"
    },
    {
      name: "Sanas Mehndi Creations",
      handle: "@SanasMehndiCreations",
      url: "https://www.youtube.com/@SanasMehndiCreations",
      role: "YouTube Channel & Content Management Experience",
      focus: "Artistic content, audience engagement & video consistency",
      status: "Verified Channel Experience"
    }
  ]
};

export const editingCapabilities = [
  { name: "Documentary Editing", tag: "Narrative & Archival", highlight: true },
  { name: "Faceless YouTube Editing", tag: "High Retention Formats", highlight: true },
  { name: "Cinematic Storytelling", tag: "Color, Pacing & Tone", highlight: false },
  { name: "Motion Graphics", tag: "Custom UI, Maps & Lower Thirds", highlight: true },
  { name: "Stock Footage Storytelling", tag: "Seamless B-Roll Assembly", highlight: false },
  { name: "Archival & Photo Animation", tag: "2.5D Parallax & Restoration", highlight: true },
  { name: "Talking Head Editing", tag: "Retention Cuts & Reframing", highlight: false },
  { name: "Podcast Editing", tag: "Multi-Cam Switching & Mastering", highlight: false },
  { name: "Sports Content", tag: "NBA & High Energy Pacing", highlight: true },
  { name: "Long-Form YouTube Content", tag: "15-45+ Min Retention Focus", highlight: true }
];

export const testimonialsData = [
  {
    client: "James",
    role: "Client",
    service: "Video Editing & YouTube Content Production",
    feedback: "Junaid is easy to work with, understands the creative direction quickly, and turns feedback into clean, polished edits. Communication is smooth, and he stays focused on delivering the video in the style the project needs.",
    initial: "J"
  },
  {
    client: "Sabine",
    role: "Client",
    service: "Long-Form YouTube & Documentary Editing",
    feedback: "Junaid pays close attention to detail and takes feedback seriously. He is patient with revisions and works carefully to keep every video consistent with the required style, pacing, and overall quality.",
    initial: "S"
  },
  {
    client: "Demetra",
    role: "Client",
    service: "Video Editing & Ongoing Content Support",
    feedback: "Junaid is reliable, responsive, and flexible when working on ongoing creative projects. He communicates clearly, understands the brief, and helps keep the content workflow moving smoothly from idea to final delivery.",
    initial: "D"
  }
];

export const experienceHighlights = [
  {
    number: "18+",
    title: "Content Niches Mastered",
    description: "Deep hands-on experience across crime, history, sports, AI, politics, finance, podcasts, and faceless formats."
  },
  {
    number: "100%",
    title: "Long-Form YouTube Focus",
    description: "Specialized in long-format retention, storytelling pacing, and high-watch-time narrative structure."
  },
  {
    number: "7-Step",
    title: "Full Production Pipeline",
    description: "Equipped to handle research, script writing, editing, motion graphics, audio design, and channel management."
  },
  {
    number: "Multi-Channel",
    title: "Operational Management",
    description: "Proven experience managing end-to-end publishing consistency for growing YouTube creator operations."
  }
];
