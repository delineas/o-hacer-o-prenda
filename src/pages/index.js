import Head from 'next/head'
import { Inter } from '@next/font/google'
import CreateForm from '../components/create-form'
import LoginButton from '../components/login-button';

const inter = Inter({ subsets: ['latin'] })

function Index() {
  return (
    <>
      <Head>
        <title>O Hacer O Prenda!</title>
      </Head>
      <header>
        <h1>¡O hacer O prenda!</h1>
        <h2>
          Genera listas de tareas con <mark>Inteligencia Artificial</mark>
        </h2>
        <br />
      </header>
      <main>
        <LoginButton></LoginButton>
        <CreateForm></CreateForm>
      </main>
    </>
  );
}

export default Index;