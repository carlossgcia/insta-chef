import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';
import { Receta } from '@/types/receta';

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
         
            console.log("no")
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
