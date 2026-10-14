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
import heroImage from '../images/header-background.webp';
import beijingHousingImage from '../images/portfolio/beijing-housing.jpg';
import conditionalGanImage from '../images/portfolio/conditional-gan.jpg';
import dataCentreImage from '../images/portfolio/data-centre.jpg';
import devopsContainersImage from '../images/portfolio/devops-containers.jpg';
import documentEngineImage from '../images/portfolio/document-engine.jpg';
import hackathonImage from '../images/portfolio/hackathon.jpg';
import igniteImage from '../images/portfolio/ignite.jpg';
import iotWaterImage from '../images/portfolio/iot-water.jpg';
import postgresDataMartImage from '../images/portfolio/postgres-data-mart.jpg';
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
  title: 'Alex Guo — IT Manager & Systems Architect',
  description: 'Personal resume website for Alex Guo, IT Manager and MCS student at Victoria University of Wellington.',
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
  Testimonials: 'testimonials',
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
        Wellington-based <strong className="text-stone-100">IT Manager &amp; Systems Architect</strong> with{' '}
        <strong className="text-stone-100">12+ years</strong> of progressive experience and four internal promotions
        at a US-headquartered multinational. Holder of{' '}
        <strong className="text-stone-100">10+ industry certifications</strong> across project management, cloud
        systems, cybersecurity, and networking.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently completing a{' '}
        <strong className="text-stone-100">Master of Computer Science at Victoria University of Wellington</strong>,
        deepening expertise in AI and data-driven systems. Open to part-time and volunteer opportunities.
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
  description: `Results-driven IT leader with 12+ years of progressive experience and four internal promotions
  from Helpdesk Technician to IT Manager at a US-headquartered multinational manufacturer. Proven track record
  in leading large-scale infrastructure projects, building cross-functional teams, and delivering process
  automation with measurable ROI. Currently completing a Master of Computer Science at VUW Wellington,
  deepening expertise in AI and data-driven systems.`,
  aboutItems: [
    {label: 'Location', text: 'Wellington, New Zealand', Icon: MapIcon},
    {label: 'Visa', text: 'Student Visa · 25h/wk (term) · Full-time holidays', Icon: CalendarIcon},
    {label: 'Post-Study', text: 'Open Work Visa eligible Feb 2027', Icon: FlagIcon},
    {label: 'Interests', text: 'AI, DevOps, Cybersecurity, Conservation', Icon: SparklesIcon},
    {label: 'Study', text: 'Victoria University of Wellington', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to part-time & volunteer opportunities', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Infrastructure & Virtualisation',
    skills: [
      {name: 'VMware vSphere', level: 9},
      {name: 'Hyper-V', level: 9},
      {name: 'Windows Server', level: 9},
      {name: 'Linux (RHEL/CentOS)', level: 8},
      {name: 'Data Centre Planning', level: 9},
    ],
  },
  {
    name: 'Networking & Security',
    skills: [
      {name: 'Cisco / HPE / FortiNet', level: 8},
      {name: 'MPLS / VPN / Wireless', level: 8},
      {name: 'ISO 9001/14000 Compliance', level: 8},
      {name: 'CompTIA Security+', level: 7},
      {name: 'CTF Competitions', level: 6},
    ],
  },
  {
    name: 'Programming & Scripting',
    skills: [
      {name: 'Python', level: 6},
      {name: 'VBA (Advanced)', level: 9},
      {name: 'JavaScript / PHP', level: 6},
      {name: 'SQL', level: 7},
      {name: 'R', level: 5},
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {name: 'Docker / Podman', level: 6},
      {name: 'Git / GitHub Actions', level: 6},
      {name: 'Hadoop / Spark (PySpark)', level: 5},
      {name: 'Nginx / MySQL / SSL', level: 7},
      {name: 'CI/CD Pipelines', level: 6},
    ],
  },
];

/**
 * Portfolio section — Selected Projects
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Beijing Housing Price Prediction',
    context: 'AIML427 Big Data · Individual project',
    description:
      'Distributed Spark MLlib pipeline on the ECS Hadoop/YARN cluster. Cleaned 318K Lianjia listings and engineered 45 Beijing-specific features (ring roads, floor taboos, tax policy) with a leakage-free design. Test R² 0.805; feature scaling cut training time 6.6×.',
    tags: ['PySpark', 'Spark MLlib', 'Hadoop / HDFS', 'Feature engineering'],
    image: beijingHousingImage,
  },
  {
    title: 'Sales Data Mart & OLAP',
    context: 'SWEN432 Advanced Database Design',
    description:
      'Built a star-schema data mart (time dimension + sales fact) from an operational book-order database, then answered business questions with OLAP aggregates, materialised views and window functions. Load reconciled to the cent against source totals.',
    tags: ['PostgreSQL', 'SQL', 'Data warehousing'],
    image: postgresDataMartImage,
  },
  {
    title: 'Conditional DCGAN',
    context: 'AIML431 Current Topics in AI',
    description:
      'Implemented a DCGAN for EMNIST handwritten characters, then extended it to a conditional GAN that generates a chosen character class on demand, with 3- and 7-class experiments.',
    tags: ['PyTorch', 'GANs', 'Deep learning'],
    image: conditionalGanImage,
  },
  {
    title: 'Smart Water IoT Architecture',
    context: 'SWEN428 Internet of Things',
    description:
      'Consultancy-style RFP response for a regional water network with 3,500 km of pipes: a hybrid LoRaWAN + cellular design, three traffic classes and a 15-year battery feasibility estimate.',
    tags: ['IoT', 'LoRaWAN', 'Solution architecture'],
    image: iotWaterImage,
  },
  {
    title: 'Containerised WordPress Stack',
    context: 'SWEN426 DevOps',
    description:
      'Built a custom CI container image and containerised WordPress with nginx and MySQL using Podman Compose, with persistent storage and a GitLab issue → merge-request workflow.',
    tags: ['Podman', 'Containers', 'GitLab', 'nginx'],
    image: devopsContainersImage,
  },
  {
    title: 'VUW Hackathon — 2nd Place',
    context: 'Team project · Apr 2026',
    description:
      'Three-day team build of “glasshouse”, a full-stack web app with a Python/Supabase backend and a React + TypeScript frontend. Awarded second place.',
    tags: ['Teamwork', 'React', 'Python'],
    url: 'https://github.com/joshuapinpin/glasshouse',
    image: hackathonImage,
  },
  {
    title: 'Ignite Consulting Project',
    context: 'Student consulting · supported by Deloitte',
    description:
      'Part of a student consulting team that researched and presented “Bridging the Gap” — a proposal for making student talent accessible to small organisations.',
    tags: ['Consulting', 'Research', 'Presentation'],
    image: igniteImage,
  },
  {
    title: 'Document Automation Engine',
    context: 'Flexfab · Process automation',
    description:
      'VBA + NLP engine that cut document processing from 4 hours to 8 minutes, saving ~3,500 work-hours a year. Two registered software copyrights.',
    tags: ['VBA', 'NLP', 'Automation'],
    image: documentEngineImage,
  },
  {
    title: 'Data Centre & Network Infrastructure',
    context: 'Flexfab · IT leadership',
    description:
      'Led a Class C data-centre renovation with UPS integration, finished 2 months ahead of schedule. Rolled out multi-site Fortinet wireless for 300+ devices and security training for 200+ staff (95% pass rate).',
    tags: ['Data centre', 'Networking', 'Security'],
    image: dataCentreImage,
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
      name: 'Zealandia Conservation Volunteer',
      text: 'Contributing to conservation operations at one of the world\'s first fully fenced urban ecosanctuaries — supporting habitat restoration and wildlife protection for Wellington\'s native species including kiwi, tuatara, and kākā. (Apr 2026 – Present)',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop',
    },
    {
      name: 'VUW Hackathon — Team 2nd Place',
      text: 'Competed alongside a cross-disciplinary team over 3 days (Apr 1–3, 2026). Collaborated closely under intense time pressure to design and implement an end-to-end technical solution, securing 2nd place in the group stage.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=200&fit=crop',
    },
    {
      name: 'VuwCTF Cybersecurity Competition',
      text: 'Ranked 20th out of 100+ participating teams (Aug 2026). Worked closely in a cross-functional team throughout this demanding 2-day CTF event, solving multiple hard-difficulty challenges in cryptography, forensics, and web exploitation.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I\'m currently open to part-time roles and volunteer research opportunities in Wellington. Feel free to reach out by email or connect on LinkedIn.',
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
