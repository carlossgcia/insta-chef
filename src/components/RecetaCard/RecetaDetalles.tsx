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
        <div className="receta-detalles">
            <h1 className="receta-detalles-titulo mt-4 text-center">{titulo}</h1>
            <div className="receta-detalles-imagen d-flex align-items-center justify-content-center mt-3">
                <Image src={`/img/recetas/${imagen}`} alt={titulo} width={600} height={500} />
            </div>
            <div className="receta-detalles-contenido mt-4">

                <div className="receta-detalles-ingredientes">
                    <h2>Ingredientes:</h2>
                    <p>{ingredientes}</p>
                    <h3>Descripcion</h3>
                <p className="receta-detalles-descripcion">{descripcion}</p>
                </div>
                <h3>Preparacion</h3>
                <p className="receta-detalles-descripcion">{preparacion}</p>

            </div>
        </div>
    );
};

export default RecetaDetalles;
