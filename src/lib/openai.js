export async function completions(apiKey, prompt, maxTokens = 5) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Genera una lista de 10 tareas sobre ${prompt}`,
      max_tokens: Number(maxTokens),
    }),
  });
  if (!response.ok) {
    const { statusText, status } = response;
    const error = new Error(statusText);
    error.code = status;
    throw error;
  }
  const { choices } = await response.json();
  if (choices.length <= 0) {
    const error = new Error("No results");
    error.code = 404;
    throw error;
  }
  return choices[0].text;
}
