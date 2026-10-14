import {StaticImageData} from 'next/image';

import gan3ClassImage from '../images/projects/gan-3-class.jpg';
import gan7ClassImage from '../images/projects/gan-7-class.jpg';
import ganEpochImage from '../images/projects/gan-epoch-progression.jpg';
import igniteBenefitsImage from '../images/projects/ignite-benefits.jpg';
import igniteStageImage from '../images/projects/ignite-stage.jpg';

/**
 * Long-form content for each project page (/projects/[slug]).
 * Keyed by the `slug` of the matching portfolio item in data.tsx.
 */
export interface ProjectDetail {
  summary: string;
  facts: {label: string; value: string}[];
  metrics?: {value: string; label: string}[];
  sections: {heading: string; paragraphs?: string[]; points?: string[]}[];
  stack: string[];
  gallery?: {image: string | StaticImageData; caption: string}[];
  links?: {label: string; href: string}[];
}

const flexfab = 'Flexfab Rubber Products (Dongguan) — US-headquartered manufacturer, 500+ users';

export const projectDetails: Record<string, ProjectDetail> = {
  'beijing-housing-price-prediction': {
    summary:
      'A distributed machine-learning pipeline that predicts the price per square metre of second-hand homes in Beijing, built with Spark MLlib and run on the university Hadoop cluster.',
    facts: [
      {label: 'Course', value: 'AIML427 Big Data · Victoria University of Wellington'},
      {label: 'Type', value: 'Individual project'},
      {label: 'When', value: 'Trimester 1, 2026'},
    ],
    metrics: [
      {value: '318K', label: 'listings processed'},
      {value: '45', label: 'engineered features'},
      {value: '0.805', label: 'test R²'},
      {value: '6.6×', label: 'faster training'},
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'The dataset is a 56 MB scrape of Lianjia, China’s largest second-hand housing platform: 318,851 listings and 26 columns of messy real-world data. Missing values hide as the text "nan", some floor fields lose their total-floor number, and dates arrive in two formats. The pipeline had to run as a distributed job on the ECS Hadoop/YARN cluster without crashing on any of it.',
        ],
      },
      {
        heading: 'What I did',
        points: [
          'Built a fault-tolerant loader that reads every column as text and converts numbers with try_cast, so a bad value becomes NULL instead of stopping the job.',
          'Designed a leakage-free pipeline: split the data 70/30 first, then fitted every statistic (3σ outlier bounds, median imputation, string encodings, scaling and PCA) on the training set only.',
          'Engineered 45 Beijing-specific features: distance to Tiananmen, the CBD and Zhongguancun, ring-road zone, culturally unlucky floors (4, 14 and 18), seasonal buying flags such as Spring Festival, and five-year tax-exemption status.',
          'Ran 16 experiments with L2-regularised linear regression, comparing raw and standardised features and PCA at k = 10 to 40.',
        ],
      },
      {
        heading: 'Results',
        points: [
          'Test R² of 0.805 with a train–test gap of only 0.002, so the model generalises rather than overfits.',
          'Standardising the features left accuracy unchanged but cut training time from 4.0 s to 0.6 s. Well-conditioned data let Spark use its direct Cholesky solver instead of falling back to iterative L-BFGS.',
          'Showed why PCA must come after scaling: on raw features one large-valued column dominated, so PCA reported "100% variance" while ignoring useful signals. On scaled features, k = 30 components (98% of variance) came within 0.013 R² of the full model.',
        ],
      },
    ],
    stack: ['PySpark', 'Spark MLlib', 'Hadoop YARN', 'HDFS', 'Kerberos', 'Python'],
  },

  'sales-data-mart': {
    summary:
      'A star-schema data mart in PostgreSQL that turns an operational book-order database into fast answers to business questions.',
    facts: [
      {label: 'Course', value: 'SWEN432 Advanced Database Design & Implementation'},
      {label: 'Type', value: 'Individual assignment'},
      {label: 'When', value: 'Trimester 2, 2026'},
    ],
    metrics: [
      {value: '1,469', label: 'fact rows loaded'},
      {value: '184', label: 'time-dimension keys'},
      {value: '$270,540', label: 'reconciled to the cent'},
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'An operational database of customers, orders, order lines and books is built for transactions, not analysis. The task was to design a data mart for sales reporting, then write and tune the queries a business would actually ask.',
        ],
      },
      {
        heading: 'What I did',
        points: [
          'Designed a star schema in PostgreSQL 18: a new time dimension and sales fact table, with customers and books reused as dimensions.',
          'Loaded 1,469 fact rows and proved the load was complete: total sales in the mart ($270,540.00) match the source data exactly.',
          'Diagnosed why two existing aggregate views returned surprising results, then wrote OLAP queries such as the six biggest spenders of 2022 and sales per country per year with a ROLLUP.',
          'Built materialised views, compared query plans with EXPLAIN ANALYZE, and rewrote a slow data-mart query to run faster.',
          'Used window functions to rank customers and books.',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'This is the everyday work behind reporting systems: model the data well, prove the numbers are right, and make the queries fast enough that people actually use them.',
        ],
      },
    ],
    stack: ['PostgreSQL 18', 'SQL', 'Star schema', 'OLAP / ROLLUP', 'Materialised views', 'Window functions'],
  },

  'conditional-dcgan': {
    summary:
      'A deep convolutional GAN that learns to draw handwritten characters, extended so you can ask it for a specific character.',
    facts: [
      {label: 'Course', value: 'AIML431 Current Topics in AI'},
      {label: 'Type', value: 'Individual assignment'},
      {label: 'When', value: 'Trimester 2, 2026'},
    ],
    metrics: [
      {value: '7', label: 'classes generated on demand'},
      {value: '100', label: 'epochs per single-class model'},
      {value: '3', label: 'bugs found and fixed'},
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Generate realistic EMNIST handwritten characters from random noise, then go further and control which character the model produces.',
        ],
      },
      {
        heading: 'What I did',
        points: [
          'Implemented the full DCGAN in PyTorch: data loading, a convolutional discriminator, a transposed-convolution generator and the adversarial training loop.',
          'Extended it to a conditional DCGAN that takes a class label, trained on 3 classes (50 epochs) and 7 classes (25 epochs).',
          'Trained single-character models on the letter "U" and the character "0" for 100 epochs each to compare how the data affects convergence.',
          'Found and fixed three issues that changed how the results should be read: weight initialisation that was never applied, a loss-curve axis bug that showed only the first ~1.3 epochs, and hidden files that crashed the data loader.',
        ],
      },
      {
        heading: 'Results',
        points: [
          'Both conditional models generate the requested class reliably, with at least 20 samples per class.',
          'Confirmed a key lesson about GANs: loss values do not directly reflect image quality, so evaluation has to look at the images themselves.',
        ],
      },
    ],
    stack: ['PyTorch', 'DCGAN / cGAN', 'CNNs', 'EMNIST', 'Python'],
    gallery: [
      {image: gan7ClassImage, caption: 'Conditional model: seven character classes, each generated on request.'},
      {image: gan3ClassImage, caption: 'Conditional model trained on three classes, after 50 epochs.'},
      {image: ganEpochImage, caption: 'Single-class model for the letter “U”: epoch 11 vs epoch 100.'},
    ],
  },

  'smart-water-iot-architecture': {
    summary:
      'An end-to-end IoT design, written as a consultancy response to an RFP, that lets a regional water authority find leaks and faults before customers do.',
    facts: [
      {label: 'Course', value: 'SWEN428 Internet of Things'},
      {label: 'Type', value: 'Individual consultancy project'},
      {label: 'When', value: 'Trimester 2, 2026'},
    ],
    metrics: [
      {value: '3,500 km', label: 'of pipeline covered'},
      {value: '500–700', label: 'devices planned'},
      {value: '<9%', label: 'battery used over 15 years'},
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'The authority runs 3,500 km of pipelines, 12 pump stations and 18 reservoirs, but finds faults through scheduled inspections and customer complaints. Most of the network, everything between the treatment plant and the customer, is invisible until something breaks.',
        ],
      },
      {
        heading: 'What I designed',
        points: [
          'Three traffic classes: routine telemetry (every minute to every hour), operational data such as inspection files and firmware, and critical events such as rapid pressure loss, pump failure or unauthorised access.',
          'A hybrid network: battery-powered LoRaWAN sensors in underground valve chambers, a LoRaWAN gateway plus fog computer at each pump station and reservoir, and cellular backhaul to a self-hosted network server.',
          'Local rules on each fog computer, so anomalies are flagged without a cloud round trip. Data is buffered through outages and critical events are sent first on reconnection.',
          'Integration with SCADA, asset and maintenance systems over MQTT, REST and SFTP, keeping large files off the low-bandwidth radio link.',
          'A radio and MCU energy estimate of about 1.69 Ah over 15 years, under 9% of rated battery capacity.',
        ],
      },
      {
        heading: 'Recommendation',
        paragraphs: [
          'Start with an RF and traffic pilot at two contrasting sites, measure link margin and outage recovery, then scale to the estimated 500–700 devices. This moves the authority from complaint-driven repairs to continuous, condition-based monitoring.',
        ],
      },
    ],
    stack: ['LoRaWAN', 'Cellular backhaul', 'Fog computing', 'MQTT', 'REST', 'SFTP', 'SCADA integration'],
  },

  'containerised-wordpress-stack': {
    summary:
      'A best-practice container setup for WordPress, plus a custom image for the CI pipeline, built with Podman and a GitLab merge-request workflow.',
    facts: [
      {label: 'Course', value: 'SWEN426 DevOps'},
      {label: 'Type', value: 'Individual assignment'},
      {label: 'When', value: 'Trimester 1, 2026'},
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Build a container image for use in a CI pipeline, then containerise a WordPress site following best-practice recommendations as far as practicable.',
        ],
      },
      {
        heading: 'What I did',
        points: [
          'Built and ran a custom container image with everything the CI pipeline needs.',
          'Composed WordPress (PHP-FPM), MySQL and nginx with Podman Compose, each service in its own container.',
          'Kept the WordPress database on a persistent volume so content survives rebuilds.',
          'Worked the way a real team does: an issue and merge request for each part, regular commits, and squash-and-merge into a protected main branch.',
        ],
      },
    ],
    stack: ['Podman', 'Podman Compose', 'nginx', 'WordPress / PHP-FPM', 'MySQL', 'GitLab', 'Linux'],
  },

  'vuw-hackathon-glasshouse': {
    summary:
      '“glasshouse”, a transparent fundraising tracker built in three days, which won second place at the VUW Hackathon 2026.',
    facts: [
      {label: 'Event', value: 'VUW Hackathon 2026'},
      {label: 'Type', value: 'Team project'},
      {label: 'When', value: '1–3 April 2026'},
      {label: 'Result', value: '2nd place'},
    ],
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'Donors rarely see what happens to their money. glasshouse lets an organiser create a fundraiser with a target, log every transaction with its payee, description and receipt, and share a donor view that shows exactly where the money went.',
        ],
      },
      {
        heading: 'How it was built',
        points: [
          'React + TypeScript frontend (Vite) with pages for sign-in, creating a fundraiser, editing the spending tracker and the public donor view.',
          'Python FastAPI backend with Supabase for authentication and data, plus tests for auth, fundraisers, transactions and a risk-check demo.',
          'I worked as part of the team, contributing to the frontend under hackathon time pressure.',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Supabase', 'Python'],
    links: [{label: 'View the code on GitHub', href: 'https://github.com/joshuapinpin/glasshouse'}],
  },

  'ignite-consulting-project': {
    summary:
      'Combustion 2026, the first Combustion consulting challenge run by Ignite Consultants Wellington. Our team built and pitched a proposal for the client, Summer of Tech, on making student talent accessible to small organisations.',
    facts: [
      {label: 'Event', value: 'Combustion 2026 · Ignite Consultants Wellington'},
      {label: 'Client', value: 'Summer of Tech'},
      {label: 'Type', value: 'Team consulting challenge'},
      {label: 'Ignite partner', value: 'Deloitte'},
    ],
    sections: [
      {
        heading: 'The brief',
        paragraphs: [
          'Summer of Tech connects tech students with employers. Large firms have graduate programmes, but small organisations often lack the time and networks to find student talent. Teams had one intensive day to research the problem and pitch a solution to the client.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Researched how small organisations currently find students and where the barriers are.',
          'Built our proposal, “Bridging the Gap: making student talent accessible to small organisations”, covering how the model would work, its benefits, and what it is worth to students, small organisations and Summer of Tech.',
          'Presented the proposal to the client and the audience as a team.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Summer of Tech plans to discuss all of the teams’ proposals in depth. For me it was a fast, practical exercise in the consulting skills I used for 12 years as the link between users, management and US headquarters: frame a fuzzy problem, understand every stakeholder, and land a clear recommendation.',
        ],
      },
    ],
    stack: ['Consulting', 'Stakeholder research', 'Business case', 'Pitching'],
    gallery: [
      {
        image: igniteStageImage,
        caption: 'Presenting “Bridging the Gap: making student talent accessible to small organisations”.',
      },
      {image: igniteBenefitsImage, caption: 'Walking through the benefits of the proposal.'},
    ],
  },

  'data-centre-renovation': {
    summary:
      'A renovation that brought the site’s data centre up to national Class C standard with resilient UPS power, delivered two months early.',
    facts: [
      {label: 'Company', value: flexfab},
      {label: 'Role', value: 'IT Manager, project lead'},
      {label: 'When', value: 'Nov 2024 – Jan 2025'},
    ],
    metrics: [
      {value: 'Class C', label: 'national data-centre standard'},
      {value: '2 months', label: 'ahead of schedule'},
      {value: '15 kVA', label: 'APC UPS integrated'},
    ],
    sections: [
      {
        heading: 'What I did',
        points: [
          'Planned and led the renovation to national Class C data-centre standard.',
          'Consolidated server cabinets to simplify cooling, cabling and maintenance.',
          'Integrated an APC 15 kVA UPS with Schneider equipment for resilient power.',
          'Coordinated vendors and the schedule as the site’s sole IT lead.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: ['Finished two months ahead of schedule and commended by the company’s IT Vice President.'],
      },
    ],
    stack: ['Data-centre planning', 'UPS / power', 'Server consolidation', 'Vendor management', 'Project management'],
  },

  'cybersecurity-awareness-programme': {
    summary:
      'Company-wide security training that turned staff into the first line of defence, backed by ongoing spot checks.',
    facts: [
      {label: 'Company', value: flexfab},
      {label: 'Role', value: 'IT Manager, designer and trainer'},
      {label: 'When', value: 'Aug 2024'},
    ],
    metrics: [
      {value: '200+', label: 'employees trained'},
      {value: '95%', label: 'post-test pass rate'},
      {value: '−30%', label: 'security incidents (wider programme)'},
    ],
    sections: [
      {
        heading: 'What I did',
        points: [
          'Designed the training content and delivered it to more than 200 employees.',
          'Measured understanding with a post-training test: 95% passed.',
          'Set up an ongoing spot-check mechanism so the habits stuck after the training ended.',
          'Ran it as part of a security policy programme aligned with ISO 9001/14000 that reduced incidents by 30%.',
        ],
      },
    ],
    stack: ['Security awareness', 'Training design', 'Security policy', 'ISO 9001/14000'],
  },

  'conference-system-integration': {
    summary:
      'An in-house integrated AV and video-conferencing system that made meetings reliable and avoided outsourcing.',
    facts: [
      {label: 'Company', value: flexfab},
      {label: 'Role', value: 'IT Manager, designer and implementer'},
      {label: 'When', value: 'May 2023'},
    ],
    metrics: [
      {value: '−82%', label: 'meeting disruptions'},
      {value: '¥150K', label: 'outsourcing cost avoided'},
    ],
    sections: [
      {
        heading: 'What I did',
        points: [
          'Designed an integrated AV solution using Yamaha, Philips and Lenovo equipment.',
          'Deployed and configured it in-house instead of outsourcing the work.',
          'Supported it alongside the site’s Polycom and Cisco RoomKit video conferencing.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: ['Meeting disruptions fell by 82% and the company avoided ¥150K in outsourcing costs.'],
      },
    ],
    stack: ['AV integration', 'Video conferencing', 'Yamaha / Philips / Lenovo', 'Polycom / Cisco RoomKit'],
  },

  'new-branch-infrastructure': {
    summary: 'Complete IT infrastructure for a new branch: network, telephony, cabling and user onboarding.',
    facts: [
      {label: 'Company', value: flexfab},
      {label: 'Role', value: 'IT Supervisor, project lead'},
      {label: 'When', value: 'Jul 2021'},
    ],
    sections: [
      {
        heading: 'What I did',
        points: [
          'Designed a scalable Cisco/HP network for the new branch.',
          'Deployed a Siemens HiPath 1100 PBX for telephony.',
          'Supervised the structured cabling installation.',
          'Onboarded users so the branch was productive from day one.',
        ],
      },
    ],
    stack: ['Cisco', 'HP networking', 'Siemens HiPath PBX', 'Structured cabling', 'User onboarding'],
  },

  'multi-site-wireless-coverage': {
    summary: 'Enterprise Wi-Fi across more than 5,000 sqm of factory floor without stopping production.',
    facts: [
      {label: 'Company', value: flexfab},
      {label: 'Role', value: 'IT Engineer, designer and implementer'},
      {label: 'When', value: 'Jun 2019'},
    ],
    metrics: [
      {value: '14', label: 'FortiAP-423E-S access points'},
      {value: '5,000+ sqm', label: 'covered'},
      {value: '300+', label: 'concurrent devices'},
      {value: '0', label: 'production-line downtime'},
    ],
    sections: [
      {
        heading: 'What I did',
        points: [
          'Planned coverage and placed 14 Fortinet FortiAP-423E-S access points across multiple factory buildings.',
          'Rolled the network out around production so no line had to stop.',
          'Delivered reliable connectivity for more than 300 concurrent devices.',
        ],
      },
    ],
    stack: ['Fortinet', 'FortiAP', 'Enterprise wireless', 'Network design'],
  },

  'document-automation-engine': {
    summary:
      'A VBA and NLP engine that took a four-hour document task down to eight minutes and earned two registered software copyrights.',
    facts: [
      {label: 'Company', value: flexfab},
      {label: 'Role', value: 'IT Engineer, designer and developer'},
      {label: 'When', value: 'Sep 2018'},
    ],
    metrics: [
      {value: '4 h → 8 min', label: 'per document'},
      {value: '~3,500', label: 'work-hours saved a year'},
      {value: '2', label: 'registered software copyrights'},
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: ['Business users spent around four hours producing each document by hand.'],
      },
      {
        heading: 'What I did',
        points: [
          'Worked with the users to understand the documents and the rules behind them.',
          'Built an automation engine in VBA with NLP techniques to generate the documents.',
          'Rolled out related VBA reporting tools that halved data-report processing time.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'Each document now takes about eight minutes, saving roughly 3,500 work-hours a year. The work was registered as two software copyrights.',
        ],
      },
    ],
    stack: ['VBA', 'NLP', 'Excel / Office automation', 'Process automation'],
  },
};
