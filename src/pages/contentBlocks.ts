export type RawContentBlock = {
  company: string;
  keywords: string[];
  bullet: string;
};

export type StructuredContentBlock = Omit<RawContentBlock, "keywords"> & {
  keywordSet: Set<string>;
};

const content: RawContentBlock[] = [
  {
    company: "Dropps",
    keywords: ["React", "react.js", "KPI"],
    bullet: `Using *Market Research*, *React.js*, and *react-query* constructed a new subscription portal that improved subscriber AOV `,
  },
  {
    company: "Dropps",
    keywords: ["Ab", "A/B", "Growthbook"],
    bullet: `Launched over 100+ A/B test (Growthbook) which together improved AOV 70% while keeping other KPIs stable. My most successful test was a post purchase funnel which increased checkout AOV 28%`,
  },
  {
    company: "Dropps",
    keywords: ["Node.js", "Algorithm"],
    bullet: `Developed serverless packing automation to determine the smallest possible box a dropps order could fit within.`,
  },
];

export const getDeepContenBlocksCopy = (): StructuredContentBlock[] => {
  return content.reduce((acc, current) => {
    const { keywords, company, bullet } = current;
    const keywordSet = new Set(keywords.map((w) => w.toLocaleLowerCase()));
    acc.push({ keywordSet, company, bullet });
    return acc;
  }, [] as StructuredContentBlock[]);
};
