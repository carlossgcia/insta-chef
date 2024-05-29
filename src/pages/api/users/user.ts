import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const sessionId = req.cookies.sessionId;      
      if (!sessionId) {
        return res.status(401).json({ message: 'Unauthorized' });
      } 
      const [rows] = await pool.query('SELECT nombre FROM usuarios WHERE idUsuario = ?', [sessionId]);
      if (rows.length === 0) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // Obtener el nombre del usuario de la consulta
      const userName = rows[0].nombre;

    
      const user = {
        name: userName
      };

  
      const encodedUserData = JSON.stringify(user);

      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
