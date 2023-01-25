export default async function getPostContent(postId) {
  const response = await fetch(
    `https://dummyjson.com/posts/${postId}?key=${process.env.API_KEY_MOLACANTIDAD}`
  );
  if (!response.ok) {
    const {statusText, status} = response;
    const error = new Error(statusText);
    error.code = status;
    throw error;
  }
  const json = await response.json();
  return json.body;
}
