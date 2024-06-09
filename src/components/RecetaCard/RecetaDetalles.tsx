import Image from 'next/image';
import React from 'react';

type RecetaDetallesProps = {
    idReceta: number;
    titulo: string;
    descripcion: string;
    ingredientes: string;
    imagen: string;
    preparacion: string
};

const RecetaDetalles: React.FC<RecetaDetallesProps> = ({ idReceta, titulo, descripcion, ingredientes, imagen, preparacion }) => {
    return (
        <div className="receta-detalles container">
            <h1 className="receta-detalles-titulo mt-4 text-center display-4">{titulo}</h1>
            <div className="receta-detalles-imagen d-flex align-items-center justify-content-center mt-3">
                <Image src={`/img/recetas/${imagen}`} alt={titulo} className="img-fluid rounded shadow" width={600} height={500} />
            </div>
            <div className="receta-detalles-contenido mt-5">
                <div className="receta-detalles-ingredientes p-4 rounded shadow">
                    <h2 className="mb-3">Ingredientes</h2>
                    <p className="lead">{ingredientes}</p>
                </div>
                <div className="receta-detalles-descripcion mt-4  p-4 rounded shadow">
                    <h3 className="mb-3">Descripción</h3>
                    <p className="lead">{descripcion}</p>
                </div>
                <div className="receta-detalles-preparacion mt-4  p-4 rounded shadow">
                    <h3 className="mb-3">Preparación</h3>
                    <p className="lead">{preparacion}</p>
                </div>
            </div>
        </div>
    );
};

export default RecetaDetalles;
