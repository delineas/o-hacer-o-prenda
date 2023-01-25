import { useState } from "react";
import getPostContent from "../lib/dummyjson";

export default function () {

  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    fetch("/api/openai/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setContent(json.text);
      })
      .catch(error => {
        setContent("")
        alert(error)
      })
      .finally(() => {
        setIsLoading(false);
      });

    // fetch("/api/dummyjson-post")
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error(response.statusText);
    //   })
    //   .then(data => {
    //     setContent(data.content);
    //   })
    //   .catch(error => {
    //     setContent("")
    //     alert(error)
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   })
  }

  return (
    <form>
      <label htmlFor="topic">Tema de la lista</label>
      <input type="text" id="topic" name="topic" size="28" onChange={(e) => setTopic(event.target.value)} />

      <br />
      {content == "" && (
        <button type="submit" id="show" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Esperando...' : '¡Genera!'}
        </button>
      )}

      {content != "" && (
        <>
          <textarea defaultValue={content} rows="10"></textarea>
          <button type="submit" onClick={handleSubmit}>
            Repetir
          </button>{" "}
          <button type="submit" onClick={() => { setContent(""); setTopic("");} }>
            Empezar
          </button>
        </>
      )}
    </form>
  );
}