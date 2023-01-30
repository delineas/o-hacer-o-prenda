import Link from "next/link";
import { getTask } from "../../lib/pocketbase";

export async function getServerSideProps(context) {
  const task = await getTask(context.params.id);

  return {
    props: {
      task: Object.assign({}, task),
    },
  };
}

export default function TaskDetail({ task }) {
  return (
    <>
      <header>
        <Link href="/">{"<"} Volver</Link>
      </header>
      <main>
        <h1>{task.title}</h1>
        <p>
          <em>{new Date(Date.parse(task.created)).toLocaleDateString("es")}</em>
        </p>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: task.body.replace(/\n/g, "<br />"),
          }}
        />
      </main>
    </>
  );
}