import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies, destroyCookie } from 'nookies';

import style from './Menu.module.css';

const Menu = () => {
    const [expanded, setExpanded] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const cookies = parseCookies();
        const userData = cookies.userData;

             if (userData) {
            const parsedUserData = JSON.parse(userData);
            setUser({ name: parsedUserData.nombre });
        } else {
            setUser(null);
        }
    }, []);

    const handleNavCollapse = () => {
        setExpanded(!expanded);
    };

    const handleLogout = () => {
        destroyCookie(null, 'sessionId');
        destroyCookie(null, 'userData');
        setUser(null);
    };

    return (
        <Navbar expanded={expanded} expand="lg" className='container menu'>
            <Navbar.Brand href="../">
                <Image className={style.logo} src="/img/Logo.png" alt="Logo" height={100} width={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavCollapse} />

            <Navbar.Collapse className='justify-content-between'>
                <Nav>
                    <NavDropdown title="Recetas" id="collasible-nav-dropdown" className={style.links}>
                        <Link href="/recetas" className='dropdown-item'>Subopción 1.1</Link>
                        <Link href="#" className="dropdown-item">Subopción 1.2</Link>
                        <NavDropdown.Divider />
                        <Link href="#" className="dropdown-item">Subopción 1.3</Link>
                    </NavDropdown>
                    <Link href="/sobre-nosotros" className={`align-center ${style.links}`}>Sobre Nosotros</Link>
                    <Link href="/tips" className={`align-center ${style.links}`} >Tips</Link>

                </Nav>
                <Nav>

                    <div className='align-center'>
                        {user ? (
                            <>
                                <span className='m-4 fw-bold' style={{ color: "#2b2c30" }}>¡Bienvenido, {user.name}!</span>

                                <button onClick={handleLogout} className='btn btn-link m-4'>Cerrar sesión</button>
                                <button onClick={() => console.log("publicar")} className='btn btn-link m-4'>Publicar</button>

                            </>
                        ) : (
                            <Link href="/logIn" >
                                <Image src="/img/user_icon.png" alt="Iniciar sesión" height={40} width={40} className='m-4' />
                            </Link>
                        )}
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;
