
import pool from '@/lib/db';

export default async function handler(req, res) {
  const { id } = req.query;
console.log(id)
  try {
    const [rows] = await pool.execute(
      'SELECT r.idReceta, r.titulo, r.descripcion, r.fechaPublicacion, r.imagen, r.preparacion, u.nombre FROM recetas r JOIN usuarios u ON r.idUsuario = u.idUsuario WHERE r.idUsuario = ?',
      [id]
    );
    console.log(rows)
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
    res.status(500).json({ error: 'Error al obtener las recetas' });
  }
}
