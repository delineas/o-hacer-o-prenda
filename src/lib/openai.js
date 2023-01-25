export async function completions(
  API_KEY,
  prompt,
  max_tokens = 5
) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Genera una lista de 10 tareas sobre ${prompt}`,
        max_tokens: Number(max_tokens),
      }),
    });
    const { choices } = await response.json();
    if (choices.length <= 0) {
      throw new Error("No results.");
    }
    return choices[0].text;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}