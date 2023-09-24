import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { scanJobDescription } from "./scanResume";
import { StructuredContentBlock } from "./contentBlocks";

const IndexPage: React.FC<PageProps> = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [keyWords, setKeywords] = useState<string[]>([]);
  const [finalContent, setFinalContent] = useState<StructuredContentBlock[]>(
    []
  );

  const handleClick = (jobDescrption: string) => {
    setLoading(true);
    const { finalContent, detectedKeywords } =
      scanJobDescription(jobDescrption);
    setKeywords(detectedKeywords);
    setFinalContent(finalContent);
    setLoading(false);
  };
  return (
    <main>
      <div>Paste Job Description</div>
      <div className="flex flex-col">
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <button disabled={loading} onClick={() => handleClick(content)}>
          {loading ? "Loading...." : "Scan Job Descritpion"}
        </button>
      </div>
      {keyWords.length > 0 && finalContent.length > 0 && (
        <div className="flex flex-col">
          <div>keywords: {'"' + keyWords.join('","') + '"'}</div>
          <div> content:</div>
          {finalContent.map((c) => {
            return <div key={c.bullet + c.company}>{c.bullet}</div>;
          })}
        </div>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
