import { completions } from "../../../lib/openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const text = await completions(
        process.env.OPENAI_API_KEY,
        req.body.topic,
        process.env.OPENAI_MAX_TOKENS
      );
      return res.status(200).json({ text });
    } catch (error) {
      res.status(error.code).json({ error: error.toString() });
    }
  }

  res.status(405);
}
