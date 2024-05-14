import { getConnection } from '../../lib/db';

export async function obtenerRecetaPorId(id) {
    const connection = await getConnection();
    try {
        const [results] = await connection.query(`
            SELECT 
                r.idReceta AS id,
                r.titulo AS Receta, 
                GROUP_CONCAT(i.nombre SEPARATOR ', ') AS Ingredientes, 
                u.nombre AS Usuario,
                r.imagen AS Imagen
            FROM recetas r
            JOIN usuarios u ON r.idUsuario = u.idUsuario
            JOIN recetas_ingredientes ri ON r.idReceta = ri.idReceta
            JOIN ingredientes i ON ri.idIngrediente = i.idIngrediente
            WHERE r.idReceta = ?
            GROUP BY r.idReceta, u.nombre
        `, [id]);
        return results;
    } catch (error) {
        throw new Error('Error fetching data');
    } finally {
        connection.end();
    }
}

export async function obtenerTodasLasRecetas() {
    const connection = await getConnection();
    try {
        const [results] = await connection.query(`
            SELECT 
                r.idReceta AS id,
                r.titulo AS Receta, 
                GROUP_CONCAT(i.nombre SEPARATOR ', ') AS Ingredientes, 
                u.nombre AS Usuario,
                r.imagen AS Imagen
            FROM recetas r
            JOIN usuarios u ON r.idUsuario = u.idUsuario
            JOIN recetas_ingredientes ri ON r.idReceta = ri.idReceta
            JOIN ingredientes i ON ri.idIngrediente = i.idIngrediente
            GROUP BY r.idReceta, u.nombre
        `);
        return results;
    } catch (error) {
        throw new Error('Error fetching data');
    } finally {
        connection.end();
    }
}

export default async function handler(req, res) {
    const { query: { id } } = req;

    if (Array.isArray(id)) {
        return res.status(400).json({ error: 'ID de receta inválido' });
    }

    try {
        if (id) {
            const receta = await obtenerRecetaPorId(parseInt(id, 10));
            res.status(200).json(receta);
        } else {
            const recetas = await obtenerTodasLasRecetas();
            res.status(200).json(recetas);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
