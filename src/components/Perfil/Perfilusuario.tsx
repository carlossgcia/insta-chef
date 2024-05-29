// components/PerfilUsuario.tsx
import { User } from '../types';

interface PerfilUsuarioProps {
  user: User;
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({ user }) => {
  return (
    <>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {user.nombre}</p>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.telefono}</p>
      {user.imagen && <img src={user.imagen} alt={`Imagen de ${user.nombre}`} />}
    </>
  );
};

export default PerfilUsuario;
