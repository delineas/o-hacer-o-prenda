import { useState } from "react";

export default function () {

  const [content, setContent] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dummyjson.com/posts/1?key=API_KEY_MOLACANTIDAD')
      .then(response => response.json())
      .then(data => setContent(data.body))
  }

  return (
    <form>
      <label for="topic">Tema de la lista</label>
      <input type="text" id="topic" name="topic" size="28" />

      <br />
      {content == '' && (
        <button type="submit" id="show" onClick={handleSubmit}>
          ¡Genera!
        </button>
      )}

      {content != "" && (
        <>
          <textarea value={content} rows="20"></textarea>
          <button type="submit">Repetir</button>
          <button type="submit">Empezar</button>
        </>
      )}
    </form>
  );
}