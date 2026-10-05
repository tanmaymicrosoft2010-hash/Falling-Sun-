import { EventConfig } from '../types';

export const eventConfig: EventConfig = {
  name: "FALLING SUN",
  tagline: "BUILD SOMETHING WORTH REMEMBERING.",
  format: "12H + 12H // 2 DAYS",
  totalHours: "24 HOURS TOTAL (12H + 12H)",
  edition: "2026 EDITION",
  statusText: "SYSTEM ONLINE // RECRUITMENT OPEN",
  coordinates: "28°32'N 77°14'E",

  // Configurable URLs
  whatsappUrl: "https://chat.whatsapp.com/DBIttoQufGgC6yVIiS30Qz",
  instagramUrl: "https://www.instagram.com/fallingsun.in?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",

  // Registration portal state (single source of truth)
  registrationOpensAt: "2026-01-01T00:00:00",
  registrationUrl: "https://fallingsun.fillout.com/register",

  tracks: [
    {
      id: "game-development",
      number: "01",
      title: "GAME DEVELOPMENT",
      tagline: "CREATE WORLDS. BUILD MECHANICS. MAKE SOMETHING PLAYABLE.",
      description:
        "Step beyond consuming games and engineer interactive realities. From 2D procedural roguelikes to 3D atmospheric simulations and physics experiments, build experiences that challenge players and push creative coding boundaries.",
      focusAreas: [
        "Core Gameplay Loops & Mechanics",
        "Procedural Generation & Shaders",
        "Physics Systems & State Machines",
        "Original Audio & Atmospheric Design"
      ],
      tools: ["Godot", "Unity", "Unreal Engine", "Phaser / WebGL", "Raylib / C++"],
      colorAccent: "#FDB813",
      // CONFIRM WITH ORGANIZER
      subThemes: ["Physics", "Procedural worlds", "Atmosphere", "Multiplayer", "etc."],
    },
    {
      id: "web-development",
      number: "02",
      title: "WEB DEVELOPMENT",
      tagline: "ARCHITECT INTERFACES. SHIP CODE. CRAFT EXPERIENCES.",
      description:
        "Reimagine what digital applications can achieve on the modern web. Build blistering fast client-side applications, collaborative real-time canvases, AI integrations, or experimental editorial interfaces that challenge conventional web paradigms.",
      focusAreas: [
        "Real-Time Collaborative Systems",
        "Creative Digital Experiences & Canvas",
        "Modern Full-Stack Applications",
        "Micro-Interactions & Motion Design"
      ],
      tools: ["React / Next.js", "TypeScript", "Three.js / WebGL", "Node.js / Bun", "Tailwind CSS"],
      colorAccent: "#EDEDED",
      // CONFIRM WITH ORGANIZER
      subThemes: ["Real-time apps", "Full-stack tools", "AI-powered apps", "Dashboards", "etc."],
    },
    {
      id: "robotics",
      number: "03",
      title: "ROBOTICS",
      tagline: "BRIDGE HARDWARE & SOFTWARE. WIRE SENSORS. BRING CODE TO LIFE.",
      description:
        "Breathe life into physical components. Combine microcontrollers, sensors, actuators, and intelligent algorithms to build robots, automated telemetry systems, drone avionics, or kinetic machines that directly interface with reality.",
      focusAreas: [
        "Autonomous Navigation & Kinematics",
        "Microcontroller Firmware & Embedded C",
        "Sensor Fusion & Telemetry Logs",
        "Computer Vision & Edge Inference"
      ],
      tools: ["Arduino / ESP32", "Raspberry Pi", "ROS / Micro-ROS", "OpenCV", "Python / C++"],
      colorAccent: "#FF5722",
      // CONFIRM WITH ORGANIZER
      subThemes: ["Drones", "Line followers", "Sensors and IoT", "Automation", "etc."],
    },
  ],

  miniTracks: [
    {
      id: "creative-skills",
      number: "M1",
      title: "CREATIVE SKILLS",
      tagline: "MODEL IT. EDIT IT. DESIGN IT. SHIP IT FINISHED.",
      description:
        "For makers who design more than they code. Show us a finished piece, not a rough sketch.",
      focusAreas: [
        "3D Modeling & Texturing",
        "Video Editing & Post Production",
        "Graphic Design & Layout",
        "Motion Graphics & Animation"
      ],
      tools: ["Blender", "Figma", "DaVinci Resolve", "After Effects", "Illustrator"],
      colorAccent: "#F2327F",
      subThemes: ["3D modeling", "Video editing", "Graphic design", "Motion and animation", "etc."],
    },
    {
      id: "many-more",
      number: "M2",
      title: "AND MANY MORE",
      tagline: "MORE MINI-TRACKS DROP BEFORE KICKOFF.",
      description:
        "We're curating additional mini-tracks between now and the opening ceremony. Watch the official WhatsApp channel for announcements.",
      focusAreas: [
        "Announcements via WhatsApp",
        "Community voting",
        "Surprise bounties",
        "Bonus mini-challenges"
      ],
      tools: ["Stay tuned"],
      colorAccent: "#FDB813",
      subThemes: ["TBA", "etc."],
    },
  ],

  schedule: [
    {
      dayNumber: "DAY 01",
      title: "IGNITION & ARCHITECTURE",
      duration: "12 HOURS HACKING",
      dateLabel: "24 OCTOBER 2026 — DAY 01",
      events: [
        {
          time: "TBA",
          title: "Check-in & Badge Verification",
          description: "Participant arrival, credential validation, kit allocation, and workstation setup.",
          stage: "Registration",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Opening Ceremony & Keynote",
          description: "Event kick-off, track deep dives, rules briefing, and official prompt release.",
          stage: "Opening",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Hacking Sprint 01 Begins",
          description: "Clock starts for the first 12-hour build window. Repositories initialized.",
          stage: "Build",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Mentor Check-In & Architecture Review",
          description: "Industry mentors circulate to review system blueprints, hardware pinouts, and tech stacks.",
          stage: "Mentoring",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Mid-Sprint Refuel & Sync",
          description: "High-energy refuel window, lightning mini-challenges, and hardware debugging.",
          stage: "Break",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Day 01 Checkpoint & Overnight Pause",
          description: "Code commit snapshot, hardware safety storage, and rest cycle before Day 02.",
          stage: "Break",
          status: "TBA",
        },
      ],
    },
    {
      dayNumber: "DAY 02",
      title: "SYNTHESIS & JUDGING",
      duration: "12 HOURS HACKING",
      dateLabel: "25 OCTOBER 2026 — DAY 02",
      events: [
        {
          time: "TBA",
          title: "Sprint 02 Resume & Re-ignition",
          description: "Hackers return to workstations for the final 12-hour push and feature completion.",
          stage: "Build",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Final Mentoring & Polish",
          description: "Fine-tuning builds, hardware calibration, and pitch deck preparation.",
          stage: "Mentoring",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Code Freeze & Final Submissions",
          description: "Hard stop. All repositories locked, videos uploaded, and hardware setups secured.",
          stage: "Submission",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Live Demos & Stage Presentations",
          description: "Teams present their builds live to the judging panel with live QA.",
          stage: "Judging",
          status: "TBA",
        },
        {
          time: "TBA",
          title: "Awards Ceremony & Closing",
          description: "Celebration, announcement of track champions, prize distribution, and closing remarks.",
          stage: "Results",
          status: "TBA",
        },
      ],
    },
  ],

  prizes: [
    {
      id: "p1",
      rank: "01",
      title: "BEST GAMEPLAY",
      category: "GAME DEVELOPMENT",
      description: "For the entry that is the most fun to actually play — tight controls, a clear game loop, and the kind of balance that makes people queue up for another round.",
      status: "TBA",
    },
    {
      id: "p2",
      rank: "02",
      title: "BEST ART / GRAPHICS / STORY",
      category: "GAME DEVELOPMENT",
      description: "Awarded where the visuals, audio direction, or narrative carry the project — the team that made players feel something, not just press buttons.",
      status: "TBA",
    },
    {
      id: "p3",
      rank: "03",
      title: "BEST OVERALL GAME",
      category: "GAME DEVELOPMENT",
      description: "The most complete game of the event, judged on how well looks, replayability, audio, and fun hold together from first frame to last.",
      status: "TBA",
    },
    {
      id: "p4",
      rank: "04",
      title: "BEST FRONTEND",
      category: "WEB DEVELOPMENT",
      description: "For the interface people actually enjoy using — considered layout, honest interactions, and details that survive more than a quick demo.",
      status: "TBA",
    },
    {
      id: "p5",
      rank: "05",
      title: "BEST BACKEND",
      category: "WEB DEVELOPMENT",
      description: "For the engineering nobody sees but everybody feels — clean APIs, sensible data modelling, and a server that does not fall over under load.",
      status: "TBA",
    },
    {
      id: "p6",
      rank: "06",
      title: "BEST OVERALL WEB PROJECT",
      category: "WEB DEVELOPMENT",
      description: "The strongest end-to-end web build, judged on how convincingly UX, frontend, backend, and the original idea work as one product.",
      status: "TBA",
    },
    {
      id: "p7",
      rank: "07",
      title: "BEST ENGINEERING & TINKERING",
      category: "HARDWARE",
      description: "For teams who opened things up, wired things up, and made them behave — rewarded for clever problem-solving over expensive parts.",
      status: "TBA",
    },
    {
      id: "p8",
      rank: "08",
      title: "BEST TECHNICAL DESIGN & INTEGRATION",
      category: "HARDWARE",
      description: "For a build where hardware and software genuinely belong together — clean schematics, sensible integration, and logic you can follow.",
      status: "TBA",
    },
    {
      id: "p9",
      rank: "09",
      title: "BEST FUNCTIONAL PROTOTYPE",
      category: "HARDWARE",
      description: "A prototype that does the job, with its software integration proven. Schematics, tinkering, and simulation count — your code logic has to hold up, a full working simulation is not required.",
      status: "TBA",
    },
    {
      id: "p10",
      rank: "10",
      title: "CERTIFICATES FOR EVERYONE",
      category: "REWARDS & PERKS",
      description: "Every participant receives an official Falling Sun participation certificate, while winners, mentors and contributors receive specialised certificates recognising their role.",
      status: "TBA",
    },
    {
      id: "p11",
      rank: "11",
      title: "PARTICIPANT HAMPERS",
      category: "REWARDS & PERKS",
      description: "Every participant receives a curated Falling Sun hamper: stickers & collectibles, custom 3D-printed goodies, event merchandise, partner goodies, tech accessories & stationery, plus surprise rewards.",
      status: "TBA",
    },
    {
      id: "p12",
      rank: "12",
      title: "PREMIUM DIGITAL REWARDS",
      category: "REWARDS & PERKS",
      description: "Unlock a growing collection of vouchers, premium subscriptions, software credits, developer tools, learning resources, and domains from our technology ecosystem.",
      status: "TBA",
    },
    {
      id: "p13",
      rank: "13",
      title: "DEVELOPER CREDITS & TOOLS",
      category: "REWARDS & PERKS",
      description: "Selected participants and winners receive cloud credits, API credits, development tools, and premium platforms to keep building after the hackathon.",
      status: "TBA",
    },
    {
      id: "p14",
      rank: "14",
      title: "DOMAINS & PREMIUM SUBSCRIPTIONS",
      category: "REWARDS & PERKS",
      description: "Selected builders can receive premium domains, hosting/deployment benefits, and software subscriptions to take their projects further.",
      status: "TBA",
    },
    {
      id: "p15",
      rank: "15",
      title: "SPECIAL TRACK & PARTNER PRIZES",
      category: "REWARDS & PERKS",
      description: "Technology partners introduce their own special awards, challenges, and bounties — win based on innovation, technical excellence, creativity, and real-world impact.",
      status: "TBA",
    },
  ],

  team: [
    {
      id: "girijesh-mishra",
      name: "Girijesh Kr Mishra",
      role: "Principal",
      bio: "Guiding the academic vision and institutional mentorship for Falling Sun.",
      image: "/team/girijesh-mishra.png",
      isPlaceholder: false,
      section: "backbone",
    },
    {
      id: "aniket-gaba",
      name: "Aniket Gaba",
      role: "Faculty Advisor",
      bio: "Advising on event execution, schedule orchestration, and operational alignment.",
      image: "/team/aniket-gaba.jpeg",
      isPlaceholder: false,
      section: "backbone",
    },
    {
      id: "kamal-yadav",
      name: "Kamal Yadav",
      role: "Faculty Advisor",
      bio: "Advising on technical curriculum, judging standards, and student development.",
      image: "/team/kamal-yadav.png",
      isPlaceholder: false,
      section: "backbone",
    },
    {
      id: "antesh-chauhan",
      name: "Antesh Chauhan",
      role: "Faculty Advisor",
      bio: "Overseeing participant experience, coordination, and on-ground event support.",
      image: "/team/antesh-chauhan.png",
      isPlaceholder: false,
      section: "backbone",
    },
    {
      id: "tanmay-singh",
      name: "Tanmay Singh",
      role: "Lead Organizer",
      bio: "Lead Organizer orchestrating technical architecture, event execution, and track curriculum.",
      image: "/team/tanmay-singh.jpeg",
      isPlaceholder: false,
    },
    {
      id: "ayush-sharma",
      name: "Ayush Sharma",
      role: "Lead Organizer",
      bio: "Lead Organizer heading branding, digital presence, community alliances, and live operations.",
      image: "/team/ayush-sharma.jpeg",
      isPlaceholder: false,
    },
    {
      id: "kartik-patel",
      name: "Kartik Patel",
      role: "Lead Organizer",
      bio: "Lead Organizer steering vision, platform infrastructure, and high-impact hacker experience for Falling Sun.",
      image: "/team/kartik-patel.jpeg",
      isPlaceholder: false,
    },
    {
      id: "dev-priya",
      name: "Dev Priya",
      role: "Lead Organizer",
      bio: "Lead Organizer heading participant workflows, registration onboarding, and event communications.",
      image: "/team/dev-priya.jpeg",
      isPlaceholder: false,
    },
    {
      id: "anand",
      name: "Anand",
      role: "Organizer",
      bio: "Organizing guest relations, event coordination, and participant hospitality.",
      image: "/team/anand.jpeg",
      isPlaceholder: false,
    },
    {
      id: "aditya-kashyap",
      name: "Aditya Kashyap",
      role: "Organizer",
      bio: "Organizing technical troubleshooting, venue systems, and judging schedules.",
      image: "/team/aditya-kashyap.jpeg",
      isPlaceholder: false,
    },
    {
      id: "divyansh",
      name: "Divyansh",
      role: "Organizer",
      bio: "Organizing on-site hardware testbenches, mentoring support, and logistics.",
      image: "/team/divyansh.jpeg",
      isPlaceholder: false,
    },
    {
      id: "adarsh",
      name: "Adarsh",
      role: "Event Incharge",
      bio: "Managing event operations, participant coordination, and on-ground logistics.",
      image: "/team/adarsh.jpeg",
      isPlaceholder: false,
    },
  ],

  faqs: [
    {
      id: "f0",
      question: "Who can participate?",
      answer: "Falling Sun welcomes builders under 18, and participants over 18 are also free to join.",
      category: "Eligibility",
    },
    {
      id: "f1",
      question: "WHAT IS FALLING SUN?",
      answer:
        "FALLING SUN is a premier hackathon where ambitious young technologists gather for 2 days (12 hours + 12 hours) to build real, working projects in Game Development, Web Development, and Robotics, with additional mini-tracks such as Creative Skills. It is engineered to give builders high-end creative freedom without corporate templates.",
      category: "General",
    },
    {
      id: "f2",
      question: "IS IT OPEN TO ALL SKILL LEVELS?",
      answer:
        "Yes. Self-taught creators and young builders of all skill levels are welcome.",
      category: "Eligibility",
    },
    {
      id: "f3",
      question: "HOW DOES THE 12H + 12H SCHEDULE WORK?",
      answer:
        "Instead of an exhausting non-stop sleep deprivation marathon, Falling Sun runs across two dedicated 12-hour building blocks over 2 days. Day 01 provides 12 hours of deep architecture and building, followed by rest, and Day 02 provides 12 hours of rapid iteration, polish, and live presentations.",
      category: "Format",
    },
    {
      id: "f4",
      question: "WHAT ARE THE TRACKS?",
      answer:
        "The hackathon is centered around three main tracks: (1) Game Development — building original playable titles, procedural systems, and game mechanics; (2) Web Development — engineering modern interactive web applications and digital interfaces; and (3) Robotics — programming microcontrollers, sensors, and physical computing prototypes. Alongside these, we run mini-tracks such as Creative Skills — 3D modeling, video editing, and graphic design for makers who ship finished pieces — with more to be announced.",
      category: "Tracks",
    },
    {
      id: "f5",
      question: "CAN I PARTICIPATE DUO OR AS A TEAM?",
      answer:
        "You may register in a duo or form a team of up to 4 members. If you don't have a team beforehand, our official WhatsApp community will host dedicated team-formation sessions before the opening ceremony.",
      category: "Participation",
    },
    {
      id: "f6",
      question: "WHEN WILL THE EXACT SCHEDULE & DATES BE ANNOUNCED?",
      answer:
        "All verified dates, hourly milestones, venue specifics, and keynote timings will be published directly through our official WhatsApp announcement channel. Be sure to join the community to receive immediate notifications.",
      category: "Schedule",
    },
    {
      id: "f7",
      question: "WHEN WILL PRIZES BE REVEALED?",
      answer:
        "Prize tiers, sponsor bounties, and category perks are actively being curated and will be unveiled through WhatsApp prior to the competition start.",
      category: "Prizes",
    },
    {
      id: "f8",
      question: "WHAT SHOULD I BRING TO THE HACKATHON?",
      answer:
        "Bring your laptop, charger, testing hardware/peripherals (for Game Dev and Robotics, bring your controllers, dev boards, sensors, and cables), personal identification (student ID or government ID), and uninhibited curiosity.",
      category: "Preparation",
    },
    {
      id: "f9",
      question: "HOW DOES REGISTRATION WORK?",
      answer:
        "Registration is completed online. Click the 'REGISTER NOW' button on our website to access the application portal. Once accepted, you will receive an invitation link to the participant WhatsApp group.",
      category: "Registration",
    },
    {
      id: "f10",
      question: "WHAT IF I HAVE NEVER ATTENDED A HACKATHON BEFORE?",
      answer:
        "Falling Sun is built to celebrate curiosity and craft. Mentors with deep technical backgrounds will be present throughout both 12-hour sprints to help you debug code, unblock hardware, and refine your pitch.",
      category: "Mentorship",
    },
    {
      id: "f11",
      question: "HOW IS MY PROJECT JUDGED?",
      answer:
        "Your total is Ray Score + Trial Points + Judges Points. Ray Score is out of 20 — games are marked on Looks, Replayability, Audio and Fun, while web and native software are marked on UX, Frontend, Backend and Ideation (5 points each). Trials are optional. Judges Points are out of 25 and come from our invited judges during the live demo.",
      category: "Judging",
    },
    {
      id: "f12",
      question: "WHAT ARE THE TRIALS AND HOW DO THEY SCORE?",
      answer:
        "A team can attempt up to 2 skill-based trials and 1 tool-based trial. Skill-based trials (Robotics, Video Editing, 3D Design, Graphic Design, Pixel Art, AI/ML) are worth 10 points each and checked by 2 volunteers scoring 1–10 stars. Tool-based trials (Ziva, Render deployment, Cloudflare backend, GitHub best practices, Mini Micro) are a fixed 5 points, checked by 1 volunteer.",
      category: "Judging",
    },
    {
      id: "f13",
      question: "DO WE NEED FULLY WORKING HARDWARE TO SCORE?",
      answer:
        "No. We will try to put real-life tools in front of you, but hardware entries can be judged on schematics, tinkering, and simulation ideas. Showing that your code logic works is enough — a full working simulation is not required.",
      category: "Judging",
    },
  ],
};

