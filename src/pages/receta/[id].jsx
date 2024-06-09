import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Menu from '@/components/Menu/Menu';
import RecetaDetalles from '@/components/RecetaCard/RecetaDetalles';
import Footer from '@/components/Footer/Footer';

export default function RecetaDetalle() {
    const router = useRouter();
    const { id } = router.query;
    const [receta, setReceta] = useState(null);

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

        if (id) {
            fetchRecetas();
        }
    }, [id]);

    return (
        <div>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>
            <div className="container">
                {receta && (
                    <RecetaDetalles
                        idReceta={receta.idReceta}
                        titulo={receta.titulo}
                        descripcion={receta.descripcion}
                        ingredientes={receta.ingredientes}
                        imagen={receta.imagen}
                        preparacion={receta.preparacion}
                    />
                )}
            </div>
            <div className='mt-4'>
                <Footer />
            </div>
            
        </div>
    );
}
