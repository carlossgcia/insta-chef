import fs from 'fs-extra';
import path from 'path';
import pool from '@/lib/db';
import { parseCookies } from 'nookies';


export default async function handler(req, res) {


  const { title, description, preparation, selectedIngredients } = req.body;
  let { image } = req.body;

  if (!title || !description || !image || !preparation || !selectedIngredients || selectedIngredients.length === 0) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    let imageName;

    if (image) {
      const publicDir = path.join(process.cwd(), 'public', 'img', 'recetas');
      imageName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.jpg`;
      const imagePath = path.join(publicDir, imageName);

      await fs.ensureDir(publicDir);

      await fs.writeFile(imagePath, image, 'base64');

      
    }

    const cookies = parseCookies({ req });
    const userData = cookies.userData;

    if (!userData) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const user = JSON.parse(userData);

    const connection = await pool.getConnection();
    await connection.beginTransaction();

    const [result] = await connection.execute(
      'INSERT INTO recetas (idUsuario, titulo, descripcion, imagen, preparacion) VALUES (?, ?, ?, ?, ?)',
      [user.idUsuario, title, description, imageName, preparation]
    );

    const recipeId = result.insertId;


    for (const ingredientId of selectedIngredients) {
      await connection.execute(
        'INSERT INTO recetas_ingredientes (idReceta, idIngrediente) VALUES (?, ?)',
        [recipeId, ingredientId]
      );
    }

    await connection.commit();
    connection.release();

    res.status(200).json({ message: 'Receta añadida con éxito' });

  } catch (error) {
    console.error('Error al añadir la receta:', error);
    res.status(500).json({ message: 'Error al añadir la receta' });
  }
}
