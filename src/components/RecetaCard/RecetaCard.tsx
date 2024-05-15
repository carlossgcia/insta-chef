import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type RecetaCardProps = {
    titulo: string;
    ingredientes: string;
    usuario: string;
    imagen: string;
    id: number;
    descripcion: string;
};

const RecetaCard: React.FC<RecetaCardProps> = ({ titulo, ingredientes, usuario, imagen, id , descripcion }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/receta/${id}`);
    };

    return (
       <div className="card mb-3" style={{ cursor: 'pointer' }} onClick={handleClick}>
  <div className="row g-0">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <img src={`/img/recetas/${imagen}`} className="img-fluid rounded" alt={titulo} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text"><strong>Ingredientes:</strong> {ingredientes}</p>
        <p className="card-text">{descripcion}</p>
        <p className="card-text"><small className="text-muted">Publicado por: {usuario}</small></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default RecetaCard;


