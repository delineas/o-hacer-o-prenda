export default async function getPostContent(postId) {
  const response = await fetch(
    `https://dummyjson.com/posts/${postId}?key=API_KEY_MOLACANTIDAD`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  return json.body;
}
