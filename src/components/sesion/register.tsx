import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [rol, setRol] = useState<number>(1); // Por defecto 1 para rol de usuario
  const [imagen, setImagen] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/register/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
          telefono,
          rol,
          imagen,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert('User registered successfully');
      } else {
        console.error(data);
        alert('Error registering user');
      }
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit} id='registro'>
        <Form.Group controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter nombre"
            value={nombre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter teléfono"
            value={telefono}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter imagen URL"
            value={imagen}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setImagen(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
