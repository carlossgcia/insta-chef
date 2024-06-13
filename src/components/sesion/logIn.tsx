import router from 'next/router';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        
        alert('Inicio de sesión exitoso');
        
        router.push('/');
      } else {
       
        alert('Error en inicio de sesión');
      }
    } catch (error) {
      alert('Error en inicio de sesión');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} id='login'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce el nombre de usuario"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
