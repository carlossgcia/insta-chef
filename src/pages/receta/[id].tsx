import Menu from '@/components/Menu/Menu';
import RecetaDetalles from '@/components/RecetaCard/RecetaDetalles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


type RecetaDetalle = {
    id: number;
    Receta: string;
    Ingredientes: string;
    Usuario: string;
    Imagen: string;
};

export default function RecetaDetalle() {
    const router = useRouter();
    const { id } = router.query;
    const [receta, setReceta] = useState<RecetaDetalle | null>(null);

    useEffect(() => {
        async function fetchRecetas() {
            try {
                const response = await fetch(`/api/consultaId/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setReceta(data);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        }

        fetchRecetas();
    }, []);
    console.log(receta)
    return (
        <div>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>
            <div className="container">

            <RecetaDetalles
                    idReceta={receta?.idReceta}
                    titulo={receta?.titulo}
                    descripcion={receta?.descripcion}
                    ingredientes={receta?.ingredientes}
                    imagen={receta?.imagen}
                />

            </div>
        </div>
    );
}
