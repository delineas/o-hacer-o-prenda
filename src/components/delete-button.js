import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function DeleteButton({id}) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleDelete(event) {
    event.preventDefault();
    fetch(`/api/tasks/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((result) => {
        alert('Borrado!');
        router.push('/tasks');
      })
      .catch(console.log)
  }

  if (session) {
    return <button onClick={handleDelete}>Borrar</button>;
  } else {
    return <></>;
  }
}