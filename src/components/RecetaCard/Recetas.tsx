import Link from 'next/link';
import { useEffect, useState } from 'react';
import RecetaCard from './RecetaCard';
import 'bootstrap/dist/css/bootstrap.min.css';

type RecetaConIngredientesYUsuario = {
    Receta: string;
    Ingredientes: string;
    Usuario: string;
    Imagen: string;
    id: number;
};

export default function Recetas() {
    const [recetas, setRecetas] = useState<RecetaConIngredientesYUsuario[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecetas() {
            try {
                const response = await fetch('/api/recetas');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecetas(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        }

        fetchRecetas();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <h1>Recetas con Ingredientes</h1>
            <div className="row">
                {recetas.map((receta, index) => (
                    <div className="col-md-6" key={receta.id}>
                        <Link href={`/receta/${receta.id}`} passHref>
                            <a>
                                <RecetaCard
                                    receta={receta.Receta}
                                    ingredientes={receta.Ingredientes}
                                    usuario={receta.Usuario}
                                    imagen={receta.Imagen}
                                    id={receta.id}
                                />
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
