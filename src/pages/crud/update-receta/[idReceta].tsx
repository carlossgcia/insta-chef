import Menu from '@/components/Menu/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


interface Recipe {
  idReceta: string;
  titulo: string;
  descripcion: string;
  nombre: string;
  preparacion: string;
}

const UpdateReceta = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { idReceta } = router.query;
 
  useEffect(() => {
    if (idReceta) {
      fetch(`/api/crud/editar/${idReceta}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data);
          setLoading(false);
          
        })
        .catch((error) => {
          setError('Error fetching recipe');
          setLoading(false);
        });
    }
  }, [idReceta]);
  console.log(recipe);
  const handleUpdateRecipe = async (idReceta: string) => {
    if (recipe) {
      try {
        const response = await fetch(`/api/editar/${idReceta}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipe),
        });

        if (!response.ok) {
          throw new Error('Error updating recipe');
        }

        alert('Recipe updated successfully');
        router.push('/');
      } catch (error) {
        setError('Error updating recipe');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecipe({ ...recipe!, [e.target.name]: e.target.value });
  };

  if (loading) return <p>Cargando recetas</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Menu />
      <div className="container mt-5">
        <h1 className="mb-4">Update Recipe</h1>
        {recipe && (
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateRecipe(recipe.idReceta);
          }}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={recipe.titulo}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                className="form-control"
                value={recipe.descripcion}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredients" className="form-label">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                className="form-control"
                rows={5}
                value={recipe.nombre}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="instructions" className="form-label">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                className="form-control"
                rows={5}
                value={recipe.preparacion}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Update Recipe</button>
          </form>
        )}
      </div></>
  );
};

export default UpdateReceta;
