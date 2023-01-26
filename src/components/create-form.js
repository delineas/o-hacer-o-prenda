import { useState } from "react";
import getPostContent from "../lib/dummyjson";
import SubmitButton from "./submit-button";

function getDummyContent(setContent, setIsLoading) {
  fetch("/api/dummyjson-post")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((data) => {
      console.log(data.content);
      setContent(data.content);
    })
    .catch((error) => {
      setContent("");
      alert(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}

function getOpenAIContent(setContent, setIsLoading, topic) {
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
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((json) => {
      setContent(json.text);
    })
    .catch((error) => {
      setContent("");
      alert(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}

export default function () {
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleRestart() {
    setContent("");
    setTopic("");
    setIsLoading(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    getDummyContent(setContent, setIsLoading, topic);
    //getOpenAIContent(setContent, setIsLoading, topic);
  }

  return (
    <form>
      <label htmlFor="topic">Tema de la lista</label>
      <input
        type="text"
        name="topic"
        onChange={(e) => setTopic(event.target.value)}
      />

      <br />
      {content == "" && (
        <SubmitButton onClick={handleSubmit} isLoading={isLoading}>
          {isLoading ? "Esperando..." : "¡Genera!"}
        </SubmitButton>
      )}

      {content != "" && (
        <>
          <textarea
            value={content}
            onChange={() => setContent(event.target.value)}
            rows="10"
          ></textarea>
          <SubmitButton onClick={handleSubmit} isLoading={isLoading}>
            {isLoading ? "Esperando..." : "Repetir"}
          </SubmitButton>{" "}
          <SubmitButton onClick={handleRestart} isLoading={isLoading}>
            Empezar
          </SubmitButton>
        </>
      )}
    </form>
  );
}
