import React from 'react';

import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';

const About: React.FC = () => {
    return (
        <>
            <div className='cuerpo-menu sticky-top'>
                <Menu />
            </div>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Nuestra Misión</h2>
                <p className="lead">En InstaChef, creemos que la cocina es más que una tarea diaria; es una forma de expresión, una manera de conectar con los demás y una fuente inagotable de creatividad. Nuestra misión es proporcionar una plataforma donde cada persona pueda descubrir nuevas recetas, técnicas y tendencias culinarias, al mismo tiempo que comparte sus propias creaciones y conocimientos.</p>

                <h2 className="text-center mb-4">¿Qué Ofrecemos?</h2>
                <ul className=" mb-4">
                    <li className="list-group-item"><strong>Recetas y Tutoriales:</strong> Accede a una vasta colección de recetas de todo el mundo, desde los clásicos hasta las últimas tendencias. Nuestros tutoriales detallados te guiarán paso a paso para que puedas replicar cualquier plato con confianza.</li>
                    <li className="list-group-item"><strong>Comunidad Interactiva:</strong> Conéctate con otros entusiastas de la cocina, comparte tus platos favoritos y recibe feedback constructivo. Participa en debates, grupos y eventos especiales para llevar tus habilidades culinarias al siguiente nivel.</li>
                    <li className="list-group-item"><strong>Perfiles de Chefs:</strong> Crea y personaliza tu propio perfil de chef donde puedes mostrar tus recetas, fotos de tus platos y tus historias culinarias. Sigue a otros chefs y aprende de sus experiencias y técnicas.</li>
                    <li className="list-group-item"><strong>Desafíos y Concursos:</strong> Participa en nuestros desafíos culinarios y concursos mensuales para poner a prueba tus habilidades y ganar premios exclusivos. ¡Es una excelente manera de motivarte y de divertirte mientras cocinas!</li>
                    <li className="list-group-item"><strong>Consejos y Trucos:</strong> Encuentra consejos y trucos de cocina de expertos y miembros de la comunidad que te ayudarán a mejorar tus habilidades y a resolver cualquier duda que puedas tener en la cocina.</li>
                </ul>

                <h2 className="text-center mb-4">Nuestro Compromiso</h2>
                <p className="lead">Estamos comprometidos con la calidad y la diversidad. Celebramos todas las cocinas y culturas, y trabajamos para que nuestra plataforma sea inclusiva y accesible para todos. En InstaChef, cada receta y cada historia tiene un lugar especial.</p>

                <h2 className="text-center mb-4">Únete a Nosotros</h2>
                <p className="lead">InstaChef es más que una red social; es un lugar donde puedes aprender, enseñar y, sobre todo, disfrutar de la cocina. Te invitamos a unirte a nuestra comunidad y a compartir tu amor por la gastronomía con personas de todo el mundo.</p>

                <h2 className="text-center mb-4">Contacto</h2>
                <p className="lead">Si tienes alguna pregunta, sugerencia o necesitas ayuda, no dudes en contactarnos en <a href="mailto:contacto@instachef.com">contacto@instachef.com</a>. Estamos aquí para ayudarte.</p>
            </div>     <div className='mt-4'>
                <Footer />
            </div></>
    );
}

export default About;
