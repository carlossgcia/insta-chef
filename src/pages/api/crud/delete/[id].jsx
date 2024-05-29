// En tu archivo de manejo de rutas (por ejemplo, api/recipes/[id].js)
import pool from '@/lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== 'DELETE') {
    res.status(405).end(); // Método no permitido
    return;
  }

  try {
    await pool.execute('DELETE FROM recetas WHERE idReceta = ?', [id]);
    res.status(204).end(); // No content
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ error: 'Error deleting recipe' });
  }
}
