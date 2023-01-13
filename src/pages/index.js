import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Index() {
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
          <form>
            <label for="topic">Tema de la lista</label>
            <input type="text" id="topic" name="topic" size="28" />

            <br />
            <button type="submit" id="show">
              ¡Genera!
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Index;