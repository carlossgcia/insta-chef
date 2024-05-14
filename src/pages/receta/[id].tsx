import Menu from '@/components/Menu/Menu';
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
        if (id) {
            fetch(`/api/receta/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Receta no encontrada');
                    }
                    return response.json();
                })
                .then(data => {
                    setReceta(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);

    if (!receta) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>
            <div className="container">
                <h1>{receta.Receta}</h1>
                <img src={`/img/receta/${receta.Imagen}`} alt={receta.Receta} />
                <p><strong>Ingredientes:</strong> {receta.Ingredientes}</p>
                <p><strong>Publicado por:</strong> {receta.Usuario}</p>
            </div>
        </div>
    );
}
