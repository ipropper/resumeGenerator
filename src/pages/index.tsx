import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StructuredContentBlock } from "./contentBlocks";
import { LabeledTextArea } from "../components/labeledTextArea";
import { Button } from "../components/button";
import { queryAi } from "../modules/generate";

const IndexPage: React.FC<PageProps> = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [keyWords, setKeywords] = useState<string[]>([]);
  const [finalContent, setFinalContent] = useState<StructuredContentBlock[]>(
    []
  );

  const handleClick = async (jobDescrption: string) => {
    setLoading(true);
    //const resp = await queryAi("hello");
    //setAiResponse(resp);

    /*const { finalContent, detectedKeywords } =
      scanJobDescription(jobDescrption);
    setKeywords(detectedKeywords);
    setFinalContent(finalContent);*/
    setLoading(false);
  };
  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col space-y-4">
          <LabeledTextArea
            label="Enter Resume"
            value={resume}
            onChange={(e) => setResume(e.currentTarget.value)}
          />
          <LabeledTextArea
            label="Enter Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.currentTarget.value)}
          />
          <Button
            disabled={loading}
            onClick={() => handleClick(jobDescription)}
            loading={loading}
          >
            Scan Job Descritpion
          </Button>
        </div>
        {aiResponse}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
