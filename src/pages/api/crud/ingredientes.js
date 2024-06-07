
import pool from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Solo se permiten solicitudes GET' });
  }

  try {
    const connection = await pool.getConnection();
    const [ingredients] = await connection.execute('SELECT idIngrediente, nombre FROM ingredientes ORDER BY nombre');
    connection.release();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los ingredientes', error });
  }
}
