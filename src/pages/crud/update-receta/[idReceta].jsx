import Menu from '@/components/Menu/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UpdateReceta = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { idReceta } = router.query;

  useEffect(() => {
    if (idReceta) {
      fetch(`/api/crud/editar/${idReceta}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data);
          setLoading(false);
          console.log("Recipe fetched successfully:", data);
        })
        .catch((error) => {
          setError('Error fetching recipe');
          setLoading(false);
        });
    }
  }, [idReceta]);

  const handleUpdateRecipe = async (idReceta) => {
    if (recipe) {
      try {
        const response = await fetch(`/api/crud/editar/${idReceta}`, {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
    console.log(recipe)
  };

  if (loading) return <p>Cargando recetas</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Menu />
      <div className="container mt-5">
        <h1 className="mb-4">Update Recipe</h1>
        {recipe && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Updating recipe:", recipe);
              handleUpdateRecipe(recipe);
            }}
          >
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Title</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                className="form-control"
                value={recipe.titulo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Description</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                className="form-control"
                value={recipe.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Ingredients</label>
              <textarea
                id="nombre"
                name="nombre"
                className="form-control"
                rows={5}
                value={recipe.nombre}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="preparacion" className="form-label">Instructions</label>
              <textarea
                id="preparacion"
                name="preparacion"
                className="form-control"
                rows={5}
                value={recipe.preparacion}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Update Recipe</button>
          </form>
        )}
      </div>
    </>
  );
};

export default UpdateReceta;
