import Head from 'next/head'
import CreateForm from '../components/create-form'
import LoginButton from '../components/login-button';
import Link from 'next/link';
import Header from '../components/header';

function Index() {

  return (
    <>
      <Head>
        <title>O Hacer O Prenda!</title>
      </Head>
      <Header home>
        <h2>
          Genera listas de tareas con <mark>Inteligencia Artificial</mark>
        </h2>
      </Header>
      <main>
        
      </main>
    </>
  );
}

export default Index;