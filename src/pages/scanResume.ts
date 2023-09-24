import {
  StructuredContentBlock,
  getDeepContenBlocksCopy,
} from "./contentBlocks";

export const scanJobDescription = (resume: string) => {
  const copy = getDeepContenBlocksCopy();
  const finalContent: StructuredContentBlock[] = [];
  const detectedKeywords: string[] = [];
  resume.split("").forEach((word) => {
    const formattedWord = word.toLocaleLowerCase();
    // keywords can be more than 1 word
    const hasResult = copy.findIndex((b) => b.keywordSet.has(formattedWord));
    if (hasResult !== -1) {
      finalContent.push(copy[hasResult]);
      detectedKeywords.push(word);
      copy.splice(hasResult, 1);
    }
  });
  return { detectedKeywords, finalContent };
};
