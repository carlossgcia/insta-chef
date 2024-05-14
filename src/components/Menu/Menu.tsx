import style from './Menu.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavCollapse = () => {
        setExpanded(!expanded);
    };

    return (

        <Navbar expanded={expanded} expand="lg" className='container menu'>
            <Navbar.Brand href="#">
                <Image className={style.logo} src="/img/Logo.png" alt="Logo" height={100} width={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavCollapse} />

            <Navbar.Collapse className='justify-content-between'>
                <Nav >
                    <NavDropdown title="Recetas" id="collasible-nav-dropdown" className={style.links}>
                        <Link href="#" className='dropdown-item'>Subopción 1.1</Link>
                        <Link href="#" className="dropdown-item">Subopción 1.2</Link>
                        <NavDropdown.Divider />
                        <Link href="#" className="dropdown-item">Subopción 1.3</Link>
                    </NavDropdown>
                    <NavDropdown title="Intolerancias" id="collasible-nav-dropdown" className={style.links}>
                        <Link href="#" className="dropdown-item">Subopción 2.1</Link>
                        <Link href="#" className="dropdown-item">Subopción 2.2</Link>
                        <NavDropdown.Divider />
                        <Link href="#" className="dropdown-item">Subopción 2.3</Link>
                    </NavDropdown>

                    <Link href="/sobre-nosotros" className={`align-center ${style.links}`}>Sobre Nosotros</Link>
                    <Link href="/tips" className={`align-center ${style.links}`} >Tips</Link>

                </Nav>
                <Nav>
                    <Link href="#"  >
                        <Image src="/img/carrito.png" alt="Carrito" height={40} width={50} className='m-4' />
                    </Link>
                    <div className='align-center'>
                        <Link href="#"  >
                            <Image src="/img/user_icon.png" alt="Iniciar sesión" height={40} width={40} className='m-4' />
                        </Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Menu;
