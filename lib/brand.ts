export const brand = {
  name: "The Mighty Giants",
  tagline: "Hip Hop Puppeteers",
  colors: {
    mightyBlack: "#000000",
    mightyYellow: "#FFD400",
    mightyWhite: "#FFFFFF"
  },
  social: {
    youtube: "https://www.youtube.com/@TheMightyGiants",
    instagram: "https://www.instagram.com/itsthemightygiants/",
    tiktok: "https://www.tiktok.com/@themightygiants",
    twitch: "https://www.twitch.tv/themightygiants"
  }
};

export type Character = {
  name: string;
  image: string;
  shortBio: string;
  longBio: string;
  /** Longer narrative history for expanded profile */
  backstory: string;
  /** Puppeteer / performer Instagram */
  instagramUrl?: string;
  /** CSS object-position for face framing (e.g. "center 18%") */
  imageObjectPosition?: string;
};

export const characters: Character[] = [
  {
    name: "Woeski",
    image: "/images/headshots/Woes-puppet.jpg",
    shortBio: "MC energy, storytelling, and culture-first humor.",
    longBio:
      "DJ, MC, muralist, and creator of the Mighty Giants universe. Woeski anchors the movement with raw style and vision.",
    backstory:
      "Woeski grew up painting walls and writing rhymes in the same breath. The puppet version is the loud, fearless side of that kid who never left the cipher—here to hold space for the culture and push every set, interview, and sketch with heart.",
    imageObjectPosition: "center 20%",
    instagramUrl: "https://www.instagram.com/woes/"
  },
  {
    name: "Jayski",
    image: "/images/headshots/Jayski-puppet.jpg",
    shortBio: "Sharp punchlines and host-ready charisma.",
    longBio:
      "Jayski drives interviews, skits, and live banter with witty bars and fearless personality.",
    backstory:
      "Jayski is the voice that keeps the room honest and laughing. On camera or on stage, the puppet is pure host energy—timing, jokes, and real questions pulled from a lifetime of loving hip-hop and performance.",
    imageObjectPosition: "center 22%",
    instagramUrl: "https://www.instagram.com/jayski_one/"
  },
  {
    name: "R2D3",
    image: "/images/headshots/Ritchie-puppet.jpg",
    shortBio: "Tech flavor, DJ vibes, and playful curiosity.",
    longBio:
      "R2D3 blends digital flavor with classic hip-hop instincts, bridging old-school DJ culture and modern media.",
    backstory:
      "R2D3 is where wires meet wax—half studio brain, half party energy. The character exists to remix the old with the new: turntables, streams, and whatever gear shows up next, always in service of the groove.",
    imageObjectPosition: "center 18%",
    instagramUrl: "https://www.instagram.com/ritchramirezart/"
  },
  {
    name: "Silent John",
    image: "/images/headshots/Silent-John-puppet.jpg",
    shortBio: "The quiet strategist with heavyweight presence.",
    longBio:
      "Silent John is the steady force in the crew, shaping direction, production, and the bigger mission behind every episode.",
    backstory:
      "Silent John doesn’t need the most lines to move the story. Behind the scenes and in the cut, this puppet represents the planner, the protector of the vision, and the one who makes sure the Giants show up sharp every time.",
    imageObjectPosition: "center 25%",
    instagramUrl: "https://www.instagram.com/silentjohn/"
  },
  {
    name: "Shandroid",
    image: "/images/headshots/Shan-puppet.jpg",
    shortBio: "Creative spark and rhythmic comedy timing.",
    longBio:
      "Shandroid brings vocal flair and visual personality, helping every segment hit with style and heart.",
    backstory:
      "Shandroid is color, motion, and melody in puppet form—built for hooks, hype, and the weird beautiful moments between songs. The backstory is simple: show up creative, stay kind, and never mail in a performance.",
    imageObjectPosition: "center 20%",
    instagramUrl: "https://www.instagram.com/shancrafted/"
  }
];

export const services = [
  {
    title: "Podcast",
    text: "Culture-forward episodes featuring real voices from the DJ and hip-hop community."
  },
  {
    title: "Puppet Comedy",
    text: "Bold skits, street humor, and character-driven storytelling built for all ages."
  },
  {
    title: "DJ Culture Interviews",
    text: "Conversations with selectors, artists, and creators shaping the sound of the city."
  }
];

export const mediaEmbeds = [
  "https://youtube.com/embed/YKFk8Qs2kyI?rel=0&showinfo=0&autoplay=0&loop=0&muted=0&controls=1",
  "https://www.youtube.com/embed/BhMaV2fjLhk",
  "https://www.youtube.com/embed/GQ69l9Ili7o",
  "https://www.youtube.com/embed/tltHrSUGnyw"
];
