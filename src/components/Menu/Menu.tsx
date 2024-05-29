import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies, destroyCookie } from 'nookies';

import style from './Menu.module.css';
import { useRouter } from 'next/navigation';

const Menu = () => {
    const [expanded, setExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const cookies = parseCookies();
        const userData = cookies.userData;

        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setUser({ name: parsedUserData.nombre, id: parsedUserData.idUsuario });
            /*  console.log(parsedUserData) //aqui mostramos todo del usuario
             */
        } else {
            setUser(null);
        }
    }, []);
    /* console.log(user)  */
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
                                <button onClick={() => {
                                    router.push(`/perfil/${user.id}`);
                                }} className='btn .btn-custom '> <span className='m-4 fw-bold' style={{ color: "#2b2c30" }}>¡Bienvenido, {user.name}!</span>
                                </button>
                                <button onClick={() => {
                                    router.push("/crud/agregar-receta")
                                }} className='btn btn-link '><Image src="/img/menus/agregar.png" alt="Publicar" height={30} width={30} className='m-4' /></button>

                                <button onClick={handleLogout} className='btn btn-link '> <Image src="/img/menus/cerrar_sesion.png" alt="Cerrar sesión" height={30} width={30} className='m-4' /></button>

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
