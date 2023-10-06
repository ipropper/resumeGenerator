export type RawContentBlock = {
  company: string;
  title: string;
  keywords: string[];
  bullet: string;
};

export type StructuredContentBlock = Omit<RawContentBlock, "keywords"> & {
  keywordSet: Set<string>;
};

// will need to bring in open AI here
const SweTagline = `Software engineer with 9+ years of fullstack and DevOps experience.`;

const droppsSeniorDirector = {
  role: "Senior Director Of Engineering And Product",
  startDate: "March 2021",
  endDate: "present",
  company: "Dropps.com",
  explainerTagline:
    "Head of Engineering & Product at Dropps.com a direct to consumer (dtc) e-commerce cleaning company.",
  snippets: [
    {
      required: true,
      keywords: ["Management", "Colaboration"],
      bullet: `Grew website division to a cross-functional team of 10. Directly managed heads of Engineering, User Experience (UX), and Information Technology (IT). Collaborated with C-suite.Founded and led cross-functional national team of 11.
       Directly managed heads of Engineering, User Experience (UX), and Information Technology (IT).
       Collaborated with our Chief Operating Officer (COO), Chief Marketing Officer (CMO).`,
    },
    {
      keywords: [
        "node.js",
        "algroithm",
        "AWS",
        "amazon web services",
        "GCP",
        "Google Cloud Functions",
        "Cloud Functions",
        "Serverless Functions",
      ],
      bullet: `Developed `,
    },
    {
      keywords: ["React", "react.js", "KPI", "AOV", "Market Research"],
      bullet: `Reduced Subscription Related Tickets 80%`,
    },
    {
      keywords: ["Ab Test", "Growthbook"],
      bullet: `Increased checkout AOV 70%, and subscription AOV 10% by way of over 100 AB tests. 
      The most succesful test was a post purchase funnel which increased checkout AOV 28%`,
    },
    {
      keywords: ["Node.js", "Algorithm"],
      bullet: `Developed serverless packing automation to determine the smallest possible box a dropps order could fit within.`,
    },
  ],
};

const droppsDirector = {
  role: "Director Of Engineering",
  startDate: "October 2019",
  endDate: "March 2021",
  company: "Dropps.com",
  snippets: [],
};

const indeedProductDeveloper = {
  role: "Director Of Engineering",
  startDate: "October 2019",
  endDate: "July 2021",
  company: "Indeed.com",
  snippets: [
    {
      required: true,
      keywords: [],
      bullet: `Successfully migrated all core job posting components and infrastructure from Google Closure to React.js, reducing front-end onboarding from 1.5 months to 1 week`,
    },
  ],
};

// don't support mult-word keywords yet... comming soon
const content: RawContentBlock[] = [
  {
    company: "Dropps",
    title: "Senior Director Of Engineer And Data",
    keywords: ["React", "react.js", "KPI", "AOV", "Market Research"],
    bullet: `Using *Market Research*, *React.js*, and *react-query* constructed a new subscription portal that improved subscriber AOV `,
  },
  {
    company: "Dropps",
    title: "Senior Director Of Engineer And Data",
    keywords: ["Ab", "A/B", "Growthbook"],
    bullet: `Launched over 100+ A/B test (Growthbook) which together improved AOV 70% while keeping other KPIs stable. My most successful test was a post purchase funnel which increased checkout AOV 28%`,
  },
  {
    company: "Dropps",
    title: "Senior Director Of Engineer And Data",
    keywords: ["Node.js", "Algorithm"],
    bullet: `Developed serverless packing automation to determine the smallest possible box a dropps order could fit within.`,
  },
];

export const getDeepContenBlocksCopy = (): StructuredContentBlock[] => {
  return content.reduce((acc, current) => {
    const { keywords, company, bullet } = current;
    const keywordSet = new Set(keywords.map((w) => w.toLocaleLowerCase()));
    acc.push({ keywordSet, company, bullet, title });
    return acc;
  }, [] as StructuredContentBlock[]);
};
