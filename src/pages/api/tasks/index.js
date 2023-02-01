import { getToken } from "next-auth/jwt";
import { unstable_getServerSession } from "next-auth/next";
import { createTask, pb } from "../../../lib/pocketbase";
import { authOptions } from "../auth/[...nextauth]";

const secret = process.env.JWT_SECRET;

export default async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not allowed" });
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  const token = await getToken({req, secret});
  
  if(!token?.accessToken) {
    return res.status(403).json({ error: "Forbidden" });
  }

  pb.authStore.save(token.accessToken, token.user);

  if (session) {
    const response = await createTask({
      topic: req.body.topic,
      content: req.body.content
    });
    return res.send({
      status: response
    })

  return res.status(403).send({
    error:
      "KO You must be signed in to view the protected content on this page.",
  });

};
