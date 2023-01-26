import getPostContent from "../../lib/dummyjson";

export default async function handler(req, res) {
  try {
    const content = await getPostContent(
      Math.floor(Math.random() * (20 - 1 + 1)) + 1
    );
    res.status(200).json({ content });
  } catch (error) {
    res.status(error.code).json({ error: error.toString() });
  }
}
