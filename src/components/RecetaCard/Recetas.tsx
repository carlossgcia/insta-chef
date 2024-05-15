import { useEffect, useState } from 'react';
import RecetaCard from './RecetaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Receta } from '@/types/receta';

export default function Recetas() {
    const [recetas, setRecetas] = useState<Receta[]>([]);

    useEffect(() => {
        async function fetchRecetas() {
            try {
                const response = await fetch(`/api/consultaRecetas`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecetas(data);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        }

        fetchRecetas();
    }, []);
    
    return (
        <div className="container">
            <h1>Recetas con Ingredientes</h1>
            <div className="row">
                {recetas.map((receta) => (
                    <div className="col-md-6" key={receta.idReceta}>
                        <RecetaCard
                            receta={receta.titulo}
                            ingredientes={receta.ingredientes}
                            usuario={receta.nombreUsuario}
                            imagen={receta.imagen}
                            id={receta.idReceta}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
