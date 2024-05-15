import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type RecetaCardProps = {
    receta: string;
    ingredientes: string;
    usuario: string;
    imagen: string;
    id: number;
};

const RecetaCard: React.FC<RecetaCardProps> = ({ receta, ingredientes, usuario, imagen, id }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/receta/${id}`);
    };

    return (
        <div className="card mb-3" style={{ maxWidth: '100%', cursor: 'pointer' }} onClick={handleClick}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Image src={`/img/recetas/${imagen}`} className="img-fluid rounded-start" alt={receta} width={90} height={90}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{receta}</h5>
                        <p className="card-text"><strong>Ingredientes:</strong> {ingredientes}</p>
                        <p className="card-text"><small className="text-muted">Publicado por: {usuario}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecetaCard;


