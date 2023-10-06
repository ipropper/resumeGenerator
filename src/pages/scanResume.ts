import {
  StructuredContentBlock,
  getDeepContenBlocksCopy,
} from "./contentBlocks";

export const scanJobDescription = (jobDescription: string) => {
  const copy = getDeepContenBlocksCopy();
  const finalContent: StructuredContentBlock[] = [];
  const detectedKeywords: string[] = [];
  jobDescription
    .toLocaleLowerCase()
    .split(" ")
    .forEach((word) => {
      // keywords can be more than 1 word
      const hasResult = copy.findIndex((b) => b.keywordSet.has(word));
      if (hasResult !== -1) {
        finalContent.push(copy[hasResult]);
        detectedKeywords.push(word);
        copy.splice(hasResult, 1);
      }
    });
  return { detectedKeywords, finalContent };
};
