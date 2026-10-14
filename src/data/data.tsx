import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import studyBuddyImage from '../images/community/study-buddy.jpg';
import zealandiaImage from '../images/community/zealandia.jpg';
import heroImage from '../images/header-background.webp';
import beijingHousingImage from '../images/portfolio/beijing-housing.jpg';
import bleSensorNetworkImage from '../images/portfolio/ble-sensor-network.jpg';
import branchNetworkImage from '../images/portfolio/branch-network.jpg';
import conditionalGanImage from '../images/portfolio/conditional-gan.jpg';
import conferenceSystemImage from '../images/portfolio/conference-system.jpg';
import dataCentreImage from '../images/portfolio/data-centre.jpg';
import devopsContainersImage from '../images/portfolio/devops-containers.jpg';
import documentEngineImage from '../images/portfolio/document-engine.jpg';
import hackathonImage from '../images/portfolio/hackathon.jpg';
import igniteImage from '../images/portfolio/ignite.jpg';
import incidentInvestigationImage from '../images/portfolio/incident-investigation.jpg';
import iotWaterImage from '../images/portfolio/iot-water.jpg';
import neo4jGraphImage from '../images/portfolio/neo4j-graph.jpg';
import postgresDataMartImage from '../images/portfolio/postgres-data-mart.jpg';
import reconOsintImage from '../images/portfolio/recon-osint.jpg';
import securityAwarenessImage from '../images/portfolio/security-awareness.jpg';
import wirelessCoverageImage from '../images/portfolio/wireless-coverage.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alex Guo — Software Implementation · Databases · IT & Security',
  description:
    'Resume of Alex Guo: Master of Computer Science student at Victoria University of Wellington with 12+ years in IT. Open to internships and graduate roles in Wellington.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'community',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alex Guo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Wellington-based <strong className="text-stone-100">IT professional</strong> focused on{' '}
        <strong className="text-stone-100">software implementation, databases and security</strong>. 12+ years at a
        US-headquartered multinational, promoted four times from Helpdesk Technician to IT Manager, with{' '}
        <strong className="text-stone-100">10+ certifications</strong> including PMP and Security+.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently completing a{' '}
        <strong className="text-stone-100">Master of Computer Science at Victoria University of Wellington</strong>,
        graduating February 2027. Open to internships (full-time Dec 2026 – Feb 2027) and graduate roles.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `IT professional with 12+ years at a US-headquartered manufacturer, promoted four times from
  Helpdesk Technician to IT Manager. I deliver software and infrastructure projects end to end, work closely with
  users, and automate what slows them down. Now completing a Master of Computer Science at VUW, with a focus on
  databases, big data, AI and security.`,
  aboutItems: [
    {label: 'Location', text: 'Wellington, New Zealand', Icon: MapIcon},
    {label: 'Availability', text: 'Full-time Dec 2026 – Feb 2027 (student visa)', Icon: CalendarIcon},
    {label: 'Post-Study', text: 'Open Work Visa eligible Feb 2027', Icon: FlagIcon},
    {label: 'Interests', text: 'Databases, AI, DevOps, Security, Conservation', Icon: SparklesIcon},
    {label: 'Study', text: 'Victoria University of Wellington', Icon: AcademicCapIcon},
    {label: 'Looking for', text: 'Internships & graduate roles in Wellington', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Databases',
    skills: [
      {name: 'SQL (queries, views, window functions)', level: 8},
      {name: 'SQL Server', level: 8},
      {name: 'PostgreSQL', level: 8},
      {name: 'MySQL', level: 8},
      {name: 'Neo4j / NoSQL', level: 6},
    ],
  },
  {
    name: 'Programming & Data',
    skills: [
      {name: 'VBA (Advanced)', level: 9},
      {name: 'Python', level: 7},
      {name: 'PySpark / Spark MLlib', level: 6},
      {name: 'JavaScript / PHP', level: 6},
      {name: 'R', level: 5},
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {name: 'Linux / Nginx / SSL', level: 7},
      {name: 'Docker / Podman', level: 6},
      {name: 'Git / GitLab / GitHub Actions', level: 6},
      {name: 'CI/CD Pipelines', level: 6},
      {name: 'Hadoop / HDFS', level: 5},
    ],
  },
  {
    name: 'Infrastructure & Security',
    skills: [
      {name: 'VMware vSphere / Hyper-V', level: 9},
      {name: 'Windows Server / RHEL', level: 8},
      {name: 'Cisco / HPE / FortiNet', level: 8},
      {name: 'ISO 9001/14000 Compliance', level: 8},
      {name: 'CompTIA Security+', level: 7},
    ],
  },
];

/**
 * Portfolio section — Selected Projects
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Beijing Housing Price Prediction',
    slug: 'beijing-housing-price-prediction',
    category: 'university',
    context: 'AIML427 Big Data · Individual project',
    description:
      'Distributed Spark MLlib pipeline on the ECS Hadoop/YARN cluster. Cleaned 318K Lianjia listings and engineered 45 Beijing-specific features (ring roads, floor taboos, tax policy) with a leakage-free design. Test R² 0.805; feature scaling cut training time 6.6×.',
    tags: ['PySpark', 'Spark MLlib', 'Hadoop / HDFS', 'Feature engineering'],
    image: beijingHousingImage,
  },
  {
    title: 'BLE Sensor Network on Real Hardware',
    slug: 'ble-sensor-network',
    category: 'university',
    context: 'SWEN428 Internet of Things · Project 2',
    description:
      'Bluetooth Low Energy gateway, sensors and relay in C on RIOT OS, measured on the FIT IoT-LAB testbed: 100/100 discoveries under 100 ms.',
    tags: ['C', 'RIOT OS', 'BLE / NimBLE', 'FIT IoT-LAB'],
    image: bleSensorNetworkImage,
  },
  {
    title: 'Graph Analytics & Anomaly Hunt in Neo4j',
    slug: 'neo4j-graph-analytics',
    category: 'university',
    context: 'SWEN432 Advanced Databases · 99/100',
    description:
      'Cypher and Graph Data Science on a 6,583-node network; traced 62 anomalous centrality scores to their root cause and found 101+ duplicate records.',
    tags: ['Neo4j', 'Cypher', 'Graph Data Science'],
    image: neo4jGraphImage,
  },
  {
    title: 'Incident Investigation with ACH',
    slug: 'incident-investigation-ach',
    category: 'university',
    context: 'CYBR471 Cybersecurity Attack & Defence',
    description:
      'Weighed 21 evidence records with Analysis of Competing Hypotheses to judge how a server was breached, then wrote a 200-word decision brief.',
    tags: ['Incident response', 'ACH', 'Threat intelligence'],
    image: incidentInvestigationImage,
  },
  {
    title: 'Sales Data Mart & OLAP',
    slug: 'sales-data-mart',
    category: 'university',
    context: 'SWEN432 Advanced Database Design',
    description:
      'Built a star-schema data mart (time dimension + sales fact) from an operational book-order database, then answered business questions with OLAP aggregates, materialised views and window functions. Load reconciled to the cent against source totals.',
    tags: ['PostgreSQL', 'SQL', 'Data warehousing'],
    image: postgresDataMartImage,
  },
  {
    title: 'Recon, OSINT & Boot2Root',
    slug: 'recon-osint-boot2root',
    category: 'university',
    context: 'CYBR471 Cybersecurity Attack & Defence',
    description:
      'Authorised reconnaissance, a passive OSINT assessment, bounded Nmap enumeration and hands-on Boot2Root exploitation.',
    tags: ['Kali Linux', 'OSINT', 'Nmap'],
    image: reconOsintImage,
  },
  {
    title: 'Conditional DCGAN',
    slug: 'conditional-dcgan',
    category: 'university',
    context: 'AIML431 Current Topics in AI',
    description:
      'Implemented a DCGAN for EMNIST handwritten characters, then extended it to a conditional GAN that generates a chosen character class on demand, with 3- and 7-class experiments.',
    tags: ['PyTorch', 'GANs', 'Deep learning'],
    image: conditionalGanImage,
  },
  {
    title: 'Smart Water IoT Architecture',
    slug: 'smart-water-iot-architecture',
    category: 'university',
    context: 'SWEN428 Internet of Things',
    description:
      'Consultancy-style RFP response for a regional water network with 3,500 km of pipes: a hybrid LoRaWAN + cellular design, three traffic classes and a 15-year battery feasibility estimate.',
    tags: ['IoT', 'LoRaWAN', 'Solution architecture'],
    image: iotWaterImage,
  },
  {
    title: 'Containerised WordPress Stack',
    slug: 'containerised-wordpress-stack',
    category: 'university',
    context: 'SWEN426 DevOps',
    description:
      'Built a custom CI container image and containerised WordPress with nginx and MySQL using Podman Compose, with persistent storage and a GitLab issue → merge-request workflow.',
    tags: ['Podman', 'Containers', 'GitLab', 'nginx'],
    image: devopsContainersImage,
  },
  {
    title: 'VUW Hackathon — 2nd Place',
    slug: 'vuw-hackathon-glasshouse',
    category: 'university',
    context: 'Team project · Apr 2026',
    description:
      'Three-day team build of “glasshouse”, a full-stack web app with a Python/Supabase backend and a React + TypeScript frontend. Awarded second place.',
    tags: ['Teamwork', 'React', 'Python'],
    image: hackathonImage,
  },
  {
    title: 'Ignite Consulting Project',
    slug: 'ignite-consulting-project',
    category: 'university',
    context: 'Ignite Consultants · Combustion 2026',
    description:
      'One-day consulting challenge for client Summer of Tech. Our team researched and pitched “Bridging the Gap”, a proposal for making student talent accessible to small organisations.',
    tags: ['Consulting', 'Research', 'Presentation'],
    image: igniteImage,
  },
  {
    title: 'Document Automation Engine',
    slug: 'document-automation-engine',
    category: 'industry',
    context: 'Flexfab · Sep 2018',
    description:
      'VBA + NLP engine that cut document processing from 4 hours to 8 minutes, saving ~3,500 work-hours a year. Two registered software copyrights.',
    tags: ['VBA', 'NLP', 'Automation'],
    image: documentEngineImage,
  },
  {
    title: 'Data Centre Renovation & UPS',
    slug: 'data-centre-renovation',
    category: 'industry',
    context: 'Flexfab · Nov 2024 – Jan 2025',
    description:
      'Led a renovation to national Class C standard: consolidated server cabinets and integrated APC 15 kVA + Schneider UPS. Finished 2 months ahead of schedule and commended by the IT VP.',
    tags: ['Data centre', 'UPS / power', 'Project management'],
    image: dataCentreImage,
  },
  {
    title: 'Multi-Site Wireless Coverage',
    slug: 'multi-site-wireless-coverage',
    category: 'industry',
    context: 'Flexfab · Jun 2019',
    description:
      '14 FortiAP-423E-S access points across 5,000+ sqm of factory floor, supporting 300+ concurrent devices with zero production-line downtime.',
    tags: ['Fortinet', 'Wireless', 'Site survey'],
    image: wirelessCoverageImage,
  },
  {
    title: 'Cybersecurity Awareness Programme',
    slug: 'cybersecurity-awareness-programme',
    category: 'industry',
    context: 'Flexfab · Aug 2024',
    description:
      'Designed and delivered security training for 200+ employees, reaching a 95% post-test pass rate, and set up ongoing spot checks.',
    tags: ['Security awareness', 'Training', 'ISO 9001/14000'],
    image: securityAwarenessImage,
  },
  {
    title: 'New Branch Infrastructure',
    slug: 'new-branch-infrastructure',
    category: 'industry',
    context: 'Flexfab · Jul 2021',
    description:
      'Designed a scalable Cisco/HP network for a new branch, deployed a Siemens HiPath 1100 PBX, and supervised structured cabling and user onboarding.',
    tags: ['Cisco / HP', 'Telephony', 'Structured cabling'],
    image: branchNetworkImage,
  },
  {
    title: 'Conference System Integration',
    slug: 'conference-system-integration',
    category: 'industry',
    context: 'Flexfab · May 2023',
    description:
      'Designed and deployed an integrated AV and video-conferencing solution in-house. Meeting disruptions fell 82% and outsourcing costs dropped by ¥150K.',
    tags: ['AV / video conferencing', 'Yamaha / Philips / Lenovo', 'Vendor management'],
    image: conferenceSystemImage,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Feb 2026 – Feb 2027 (expected)',
    location: 'Victoria University of Wellington',
    title: 'Master of Computer Science',
    content: (
      <p>
        Artificial Intelligence · Big Data · DevOps · Database Systems · Cybersecurity · IoT · NoSQL.{' '}
        <br />
        🏆 VUW Hackathon Team 2nd Place (Apr 2026) ·<br />
        🏆 VuwCTF Ranked 20th out of 100+ teams (Aug 2026).
      </p>
    ),
  },
  {
    date:'',
    location: 'South China Normal University',
    title: 'Bachelor of Engineering in Computer Network',
    content: <p>Foundation in network engineering, computer systems, and software development.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2013 – Aug 2025',
    location: 'Flexfab Rubber Products (Dongguan) Co., Ltd. · US-headquartered',
    title: 'IT Manager (Four Internal Promotions)',
    content: (
      <p>
        Sole IT lead for a 500+ user multinational manufacturing site. Promoted four times: Technician →
        Jr. Engineer → Mid Engineer → Supervisor → Manager. Reduced annual operating costs by 15%,
        deployed VMware/Hyper-V (reliability +20%), led cybersecurity training with 95% pass rate
        (200+ employees), and built VBA automation saving ~3,500 work-hours/year.
        Managed MPLS/Aryaka/OKTA dedicated lines, FortiVPN, and led data-centre renovation to Class C standard.
      </p>
    ),
  },
  {
    date: 'Mar 2013 – Aug 2013',
    location: 'ASUS Computer (Shanghai) Co., Ltd.',
    title: 'Circuit Board Technician',
    content: (
      <p>
        Diagnosed and repaired circuit boards (NICs, routers, switches) achieving a 98% success rate.
        Developed post-repair QA testing protocols to ensure reliability before return to service.
      </p>
    ),
  },
  {
    date: 'Feb 2011 – Mar 2013',
    location: 'Sinopec Shengli Branch · Shandong, China',
    title: 'Construction Technician',
    content: (
      <p>
        Deployed and maintained petroleum engineering equipment on-site.
        Ranked 1st in annual safety training evaluations.
      </p>
    ),
  },
];

/**
 * Testimonial section — repurposed for Volunteer & Community
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'VuwCTF 2026 — 22nd of 123 teams',
      period: '31 Jul – 2 Aug 2026 · Jeopardy-style CTF, no AI allowed',
      text: 'Finished in the top 18% with team Jackson_Sue_Mtao (2,317 points) and personally contributed 8/11 of the team’s points, across cryptography, forensics and web exploitation challenges.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop',
      link: {label: 'See the CTFtime scoreboard', href: 'https://ctftime.org/event/3311'},
    },
    {
      name: 'Study Buddy Programme',
      period: 'Victoria University of Wellington · 2026',
      text: 'Joined a study buddy programme for students from many different countries, helping each other settle into university life in Wellington.',
      image: (studyBuddyImage as unknown as {src: string}).src,
    },
    {
      name: 'Zealandia Conservation Volunteer',
      period: 'Apr 2026 – present',
      text: 'Volunteering at one of the world’s first fully fenced urban ecosanctuaries, supporting habitat restoration and protection for native species including kiwi, tuatara and kākā.',
      image: (zealandiaImage as unknown as {src: string}).src,
    },
    {
      name: 'Kitea Impact Programme & Ako in Action',
      period: 'Victoria University of Wellington · 2026',
      text: 'Took part in two VUW community programmes, working alongside people from different backgrounds and learning the values that underpin community life in Aotearoa.',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I\'m open to internships (full-time Dec 2026 – Feb 2027) and graduate roles in IT implementation, data and security in Wellington. Feel free to reach out by email or connect on LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'mingtao.guo@outlook.com',
      href: 'mailto:mingtao.guo@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'Wellington, New Zealand',
      href: 'https://www.google.com/maps/place/Wellington,+New+Zealand',
    },
    {
      type: ContactType.Github,
      text: 'github.com/DontDecorateYourDream',
      href: 'https://github.com/DontDecorateYourDream',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/DontDecorateYourDream'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mingtao-guo-332398300'},
];
