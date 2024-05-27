import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, email, password, telefono, rol, imagen } = req.body;

    // Cifrar la contraseña con MD5
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    try {
      const [result] = await pool.query(
        'INSERT INTO usuarios (nombre, email, password, telefono) VALUES (?, ?, ?, ?)',
        [nombre, email, hashedPassword, telefono]
      );
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
