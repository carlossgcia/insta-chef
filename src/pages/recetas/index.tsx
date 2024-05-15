import Menu from '../../components/Menu/Menu';
import Footer from '@/components/Footer/Footer';

import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Receta } from '@/types/receta';

import React from 'react';
import RecetaCard from '@/components/RecetaCard/RecetaCard';

function Recetas() {
    const [recetas, setRecetas] = useState<Receta[]>([]);

    useEffect(() => {
        async function fetchRecetas() {
            try {
                const response = await fetch(`/api/consultaTodasRecetas/todasRecetas`);

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
            <h1 className='text-center mt-4'>Recetas Publicadas</h1>
            <div className="row mt-4">
                {recetas.map((receta) => (
                    <div className="col-md-4" key={receta.idReceta}>
                        <RecetaCard
                            descripcion={receta.descripcion}
                            titulo={receta.titulo}
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

const Home: React.FC = () => {

    return (
        <>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>

            <div className='container mb-4'>
                <Recetas />
            </div>
            <Footer />
        </>
    );
}

export default Home;
