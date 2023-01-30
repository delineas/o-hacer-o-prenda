import Link from "next/link";
import { getTasks } from "../../lib/pocketbase";


export const revalidate = 3600; // revalidate every hour

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <>
      <header>
        <h1>¡O hacer O prenda!</h1>
        <h2>
          Genera listas de tareas con <mark>Inteligencia Artificial</mark>
        </h2>
        <br />
      </header>
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
              {
                tasks.map((task) => {
                  return (
                    <tr>
                      <td>
                        <Link href={`/tasks/${task.id}`}>{task.title}</Link>
                      </td>
                      <td>
                        {new Date(Date.parse(task.created)).toLocaleDateString("es")}
                      </td>
                      <td>{task.id}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}