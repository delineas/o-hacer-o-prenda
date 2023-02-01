import Head from 'next/head'
import { Inter } from '@next/font/google'
import CreateForm from '../components/create-form'
import LoginButton from '../components/login-button';

const inter = Inter({ subsets: ['latin'] })

function Create() {
  return (
    <>
      <Head>
        <title>Crea tu tarea con IA!</title>
      </Head>
      <header>
        <h1>Crea tu tarea con IA</h1>
      </header>
      <main>
        <LoginButton></LoginButton>
        <CreateForm></CreateForm>
      </main>
    </>
  );
}

export default Create;