import PocketBase from "pocketbase";

export default async function handler(req, res) {

  const pb = new PocketBase("http://127.0.0.1:8090");

  const records = await pb
    .collection("tasks")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    });

  res.json({records})
}