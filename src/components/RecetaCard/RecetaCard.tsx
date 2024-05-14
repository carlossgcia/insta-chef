import React from 'react';

type RecetaCardProps = {
    receta: string;
    ingredientes: string;
    usuario: string;
    imagen: string;
    id: number;
};

const RecetaCard: React.FC<RecetaCardProps> = ({ receta, ingredientes, usuario, imagen, id }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '100%' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`/img/recetas/${imagen}`} className="img-fluid rounded-start" alt={receta} />
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

