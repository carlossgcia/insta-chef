import { Container, Row, Col } from 'react-bootstrap';
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import Login from "@/components/sesion/logIn";
import Register from "@/components/sesion/register";

const Home: React.FC = () => {


    return (
        <>
            <div className='cuerpo-menu sticky-top mb-3'>
                <Menu />
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={5} className="border-right">
                        <Login />
                    </Col>
                    <Col md={5}>
                        <Register />
                    </Col>
                </Row>
            </Container>
            <div className='mt-3'>
                <Footer />
            </div>
        </>
    );
}

export default Home;