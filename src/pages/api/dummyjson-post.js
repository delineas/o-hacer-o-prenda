import getPostContent from "../../lib/dummyjson";

export default async function handler(req, res) {
  const content = await getPostContent(5);
  res.status(200).json({ content })
}
