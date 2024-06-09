import React from 'react';
import styles from './Footer.module.css'; 

const Footer: React.FC = () => {
    return (
        <footer className={`mt-auto py-3 bg-dark text-white ${styles.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Enlaces útiles</h5>
                        <ul className="list-unstyled">
                            <li><a className={styles.a} href="/">Inicio</a></li>
                            <li><a className={styles.a} href="/recetas">Recetas</a></li>
                            <li><a className={styles.a} href="/sobre-nosotros">Sobre nosotros</a></li>
                            <li><a className={styles.a} href="/tips">Tips</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Contacto</h5>
                        <address>
                            <strong>Correo electrónico:</strong> info@instachef.com<br />
                            <strong>Teléfono:</strong> +620918700<br />
                        </address>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2024 InstaChef</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
