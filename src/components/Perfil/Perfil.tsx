// components/Perfil.js

const Perfil = ({ user }) => {
    return (
      <div>
        <p>Nombre: {user.name}</p>
        {/* Otros detalles del perfil */}
      </div>
    );
  }
  
  export default Perfil;
  