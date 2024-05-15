import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';
import { Receta } from '@/types/receta';


//Solo por orden de publicacion
const getRecetas = async (): Promise<Receta[]> => {
    const [rows] = await pool.query<any[]>(
        ` SELECT c.idReceta, c.titulo, c.descripcion, c.imagen, u.nombre as nombreUsuario, GROUP_CONCAT(i.nombre SEPARATOR ', ') as ingredientes
        FROM recetas_ingredientes r 
        JOIN recetas c ON r.idReceta = c.idReceta 
        JOIN ingredientes i ON r.idIngrediente = i.idIngrediente 
        JOIN usuarios u ON c.idUsuario = u.idUsuario 
        GROUP BY c.idReceta`
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


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {

        const recetas = await getRecetas();
        res.status(200).json(recetas);

    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
