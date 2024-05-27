import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');

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

        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert('Usuario registrado correctamente');
      } else {
        console.error(data);
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error(error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div>
      <h2>Registrate si no tienes cuenta</h2>
      <Form onSubmit={handleSubmit} id='registro'>
        <Form.Group className='mt-2' controlId="formBasicNombre">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce un nombre de usuario"
            value={nombre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mt-2' controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce un email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mt-2' controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mt-2' controlId="formBasicConfirmPassword">
          <Form.Label>Confirma la Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma la Contraseña"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mt-2' controlId="formBasicTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce el teléfono"
            value={telefono}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Registrar
        </Button>
      </Form>
    </div>
  );
};

export default Register;
