import Head from 'next/head'
import CreateForm from '../components/create-form'
import LoginButton from '../components/login-button';
import Header from '../components/header';

function Create() {
  return (
    <>
      <Head>
        <title>Crea tu tarea con IA!</title>
      </Head>
      <Header>
        <h2>
          Crea tu tarea con IA
        </h2>
      </Header>
      <main>
        <CreateForm></CreateForm>
      </main>
    </>
  );
}

export default Create;