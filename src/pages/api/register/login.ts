import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';
import crypto from 'crypto';
import { setCookie } from 'nookies';

interface User {
  idUsuario: number;
  nombre: string;
  email: string;
  password: string;
  telefono: string;

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [email, hashedPassword]);
      
      if (rows.length > 0) {
        const user: User = {
          idUsuario: rows[0].idUsuario,
          nombre: rows[0].nombre,
          email: rows[0].email,
          password: rows[0].password,
          telefono: rows[0].telefono,
          };

        const sessionId = crypto.randomBytes(16).toString('hex');
        
        setCookie({ res }, 'sessionId', sessionId, {
          maxAge: 30 * 24 * 60 * 60, 
          path: '/', 
        });
        setCookie({ res }, 'userData', JSON.stringify(user), {
          maxAge: 30 * 24 * 60 * 60, 
          path: '/', 
        });
        
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).json({ message: 'Error in login' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
