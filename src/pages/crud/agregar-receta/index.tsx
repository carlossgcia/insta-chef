import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';

import React from 'react';
import RecipeForm from '@/components/recetas/RecipeForm';


const Agregar: React.FC = () => {


    return (
        <>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>

            <div className='container'>
                <RecipeForm />
            </div>
            <Footer />
        </>
    );
}

export default Agregar;