import Perfil from '@/components/Perfil/Perfil';
import Head from 'next/head';

const Perfiles = () => {

  const user = {
    name: 'Usuario Ejemplo',
    
  };

  return (
    <div>
      <Head>
        <title>Mi Perfil - Next.js</title>
        <meta name="description" content="Descripción de la página de perfil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Mi Perfil</h1>
        <Perfil user={user} />
      </main>
    </div>
  );
}

export default Perfiles;
