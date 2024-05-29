import { GetServerSideProps } from 'next';
import pool from '@/lib/db';
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import PerfilUsuario from '@/components/Perfil/Perfilusuario';
import RecetasUsuario from '@/components/RecetaCard/RecetasUsuario';

const Perfil = ({ user }) => {
  if (!user) {
    return <div>Usuario no encontrado.</div>;
  }

  return (
    <>
      <div className='cuerpo-menu sticky-top'>
        <Menu />
      </div>
      <div className='container'>
        <PerfilUsuario user={user} />
        <RecetasUsuario idUsuario={user.idUsuario} />
      </div>
      <Footer />
    </>
  );
};

export default Perfil;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  let user = null;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE idUsuario = ?', [id]);
    if (rows.length > 0) {
      user = rows[0];
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }

  return {
    props: {
      user,
    },
  };
};
