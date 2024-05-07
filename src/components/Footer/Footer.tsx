// Footer.tsx

import React from 'react';
import styles from './Footer.module.css'; // Importa los estilos del módulo CSS

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* Contenido del pie de página */}
                <p>© {new Date().getFullYear()} Red Social de Cocina</p>
                <div className={styles['social-links']}>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
