import { scanJobDescription } from "../pages/scanResume";
import { test, expect } from "@jest/globals";

test("detect if we can match this resume", () => {
  const jobDescription = `i want to hire a react.js developer real bad`;
  const { detectedKeywords, finalContent } = scanJobDescription(jobDescription);
  expect(detectedKeywords).toStrictEqual(["react.js"]);
});
