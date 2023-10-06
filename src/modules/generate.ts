import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // TODO: Use OAUTH on client or perform requests on backend.
  dangerouslyAllowBrowser: true,
});

export const queryAi = async (content: string) => {
  if (!process.env.OPENAI_API_KEY) {
    return "api key not found";
  }
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo",
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);

  return chatCompletion.choices[0].message.content || "no response";
};
