
import pool from '@/lib/db';

export default async function handler(req, res) {
  const { idReceta } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const [rows] = await pool.query(`SELECT r.idReceta, r.descripcion, r.preparacion, r.titulo, i.nombre
        FROM recetas r
        LEFT JOIN recetas_ingredientes ri ON r.idReceta = ri.idReceta 
        LEFT JOIN ingredientes i ON ri.idIngrediente = i.idIngrediente 
        WHERE r.idReceta = ?;`, [idReceta]);
        if (rows.length === 0) {
          return res.status(404).json({ message: 'Recipe not found' });
        }
        return res.status(200).json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: 'Error selecting recipe', error });
      }

    case 'PUT':
      const { titulo, descripcion, preparacion, idReceta } = req.body;
      try {
        await pool.query('UPDATE recetas SET titulo = ?, descripcion = ?, preparacion = ? WHERE idReceta= ?', [titulo, descripcion, preparacion, preparacion, idReceta]);
        return res.status(200).json({ message: 'Recipe updated successfully' });
      } catch (error) {
        return res.status(500).json({ message: 'Error updating recipe', error });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
