import React from 'react';

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';


const Tips: React.FC = () => {
    return (
        <>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Consejos de Cocina</h1>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100">
                            <img src="/img/tips/tip1.jpg" className="card-img-top" alt="Tip 1" />
                            <div className="card-body">
                                <h3 className="card-title"> Organización</h3>
                                <p className="card-text">Organiza tus ingredientes y utensilios antes de empezar a cocinar. Esto te ayudará a ahorrar tiempo y evitará errores.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100">
                            <img src="/img/tips/tip3.jpg" className="card-img-top" alt="Tip 2" />
                            <div className="card-body">
                                <h3 className="card-title">Dale sabor a tus Platos</h3>
                                <p className="card-text">Experimenta con diferentes hierbas, especias y condimentos para agregar más sabor a tus platos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100">
                            <img src="/img/tips/tip2.jpg" className="card-img-top" alt="Tip 3" />
                            <div className="card-body">
                                <h3 className="card-title">Control de Temperatura</h3>
                                <p className="card-text">Aprende a controlar la temperatura de tu cocina y de tus utensilios para evitar quemaduras y platos mal cocidos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <Footer />
            </div>
        </>
    );
}


export default Tips;
