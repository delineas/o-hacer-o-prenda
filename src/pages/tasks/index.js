import Link from "next/link";
import Header from "../../components/header";
import { getTasks } from "../../lib/pocketbase";
import DeleteButton from "../../components/delete-button";

export async function getServerSideProps() {
  const tasks = await getTasks();

  return {
    props: {
      tasks: tasks.map((task) => Object.assign({}, task)),
    },
  };
}

export default function TasksPage({ tasks }) {
  return (
    <>
      <Header>
        <h2>Lista de tareas generadas por IA</h2>
      </Header>
      <main>
        <section>
          <table>
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Fecha</th>
                <th>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <tr>
                    <td>
                      <Link href={`/tasks/${task.id}`}>{task.title}</Link>
                    </td>
                    <td>
                      {new Date(Date.parse(task.created)).toLocaleDateString(
                        "es"
                      )}
                    </td>
                    <td><DeleteButton id={task.id}></DeleteButton></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
