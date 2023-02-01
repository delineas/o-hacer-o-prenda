import PocketBase from "pocketbase"

export const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE);

export async function getTasks() {
  return await pb.collection("tasks").getFullList(200, {
    sort: "-created",
  });
}

export async function getTask(id) {
  const record = await pb.collection("tasks").getOne(id);
  return record;
}

export async function createTask({ topic, content }) {
  const data = {
    title: topic,
    body: content,
  };

  const record = await pb.collection("tasks").create(data);
  return record;
}