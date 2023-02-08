import Link from "next/link";
import LoginButton from "./login-button";

export default function ({children, home}) {
  return (
    <header>
      <nav>
        <span>O Hacer O Prenda!</span>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create">Crear</Link>
          </li>
          <li>
            <Link href="/tasks">Lista</Link>
          </li>
          <li>
            <LoginButton></LoginButton>
          </li>
        </ul>
      </nav>
      {home && <h1>¡O hacer O prenda!</h1>}
      {children}
    </header>
  );
}
