import { useState } from "react";
import getPostContent from "../lib/dummyjson";

export default function () {

  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    fetch("/api/dummyjson-post")
      .then(response => response.json())
      .then(data => {
        setContent(data.content)
      })

    setContent(content)
    setIsLoading(false);
  }

  return (
    <form>
      <label htmlFor="topic">Tema de la lista</label>
      <input type="text" id="topic" name="topic" size="28" />

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
          <button type="submit" onClick={() => setContent("")}>
            Empezar
          </button>
        </>
      )}
    </form>
  );
}