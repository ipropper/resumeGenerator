import { scanJobDescription } from "../pages/scanResume";

test("detect if we can match this resume", () => {
  const jobDescription = `i want to hire a react.js developer real bad`;
  const { detectedKeywords, finalContent } = scanJobDescription(jobDescription);
  expect(detectedKeywords).toBe(["react.js"]);
});
