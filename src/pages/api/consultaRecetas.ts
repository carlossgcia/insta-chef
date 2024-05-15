import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';
import { Receta } from '@/types/receta';

const getRecetas = async (): Promise<Receta[]> => {
    const [rows] = await pool.query<any[]>(
        `SELECT c.idReceta, c.titulo, c.descripcion, c.imagen, u.nombre as nombreUsuario, GROUP_CONCAT(i.nombre SEPARATOR ', ') as ingredientes
        FROM recetas_ingredientes r 
        JOIN recetas c ON r.idReceta = c.idReceta 
        JOIN ingredientes i ON r.idIngrediente = i.idIngrediente 
        JOIN usuarios u ON c.idUsuario = u.idUsuario 
        GROUP BY c.idReceta;`
    );

    const recetas: Receta[] = rows.map(row => ({
        idReceta: row.idReceta,
        nombreUsuario: row.nombreUsuario,
        titulo: row.titulo,
        descripcion: row.descripcion,
        ingredientes: row.ingredientes,
        imagen: row.imagen
    }));
   
    return recetas;
};


const getRecetaById = async (id: number): Promise<Receta | null> => {
    const [rows] = await pool.query<any[]>(
        `SELECT r.idReceta, r.idUsuario, r.titulo, r.descripcion, r.imagen, u.nombre as nombreUsuario, GROUP_CONCAT(i.nombre SEPARATOR ', ') as ingredientes 
        FROM recetas r
        LEFT JOIN recetas_ingredientes ri ON r.idReceta = ri.idReceta
        LEFT JOIN ingredientes i ON ri.idIngrediente = i.idIngrediente
        LEFT JOIN usuarios u ON r.idUsuario = u.idUsuario
        WHERE r.idReceta = ?
        GROUP BY r.idReceta`, [id]
    );

    const receta: Receta | null = rows.length ? {
        idReceta: rows[0].idReceta,
        titulo: rows[0].titulo,
        descripcion: rows[0].descripcion,
        ingredientes: rows[0].ingredientes,
        imagen: rows[0].imagen,
        nombreUsuario: rows[0].nombreUsuario
    } : null;

    return receta;
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id } = req.query;
        if (id) {
            const receta = await getRecetaById(Number(id));
            if (receta) {
                res.status(200).json(receta);
            } else {
                res.status(404).json({ message: 'Receta no encontrada' });
            }
        } else {
            const recetas = await getRecetas();
            res.status(200).json(recetas);
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
