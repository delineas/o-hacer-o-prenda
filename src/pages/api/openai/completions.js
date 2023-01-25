import { completions } from "../../../lib/openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const text = await completions(
      process.env.OPENAI_API_KEY,
      req.body.topic,
      process.env.OPENAI_MAX_TOKENS
    );
    return res.status(200).json({ text });
  }

  res.status(405);
}
