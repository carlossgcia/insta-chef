import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const RecetasUsuario = ({ idUsuario }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`/api/users/recetas?id=${idUsuario}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setRecipes([]);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [idUsuario]);
 
  const handleUpdateRecipe = async (idReceta) => {

    router.push(`/crud/update-receta/${idReceta}`);
    
  }


  const handleDeleteRecipe = async (idReceta) => {
    
    try {
      const response = await fetch(`/api/crud/delete/${idReceta}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setRecipes(recipes.filter((recipe) => recipe.idReceta !== idReceta));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  if (loading) {
    return <p>Cargando tus recetas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Recetas del Usuario</h1>
      {recipes.length === 0 ? (
        <p>No hay recetas para este usuario.</p>
      ) : (
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe.idReceta} className="col-md-4 mb-4">
              <div className="card">
                <img src={`/img/recetas/${recipe.imagen}`} className="card-img-top" alt={recipe.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.titulo}</h5>
                  <p className="card-text">{recipe.descripcion}</p>
                  <p className="card-text"><small className="text-muted">{recipe.fechaPublicacion}</small></p>
                  <button className="btn btn-primary m-2" onClick={() => handleUpdateRecipe(recipe.idReceta)}>Editar</button>
                  <button className="btn btn-danger m-2" onClick={() => handleDeleteRecipe(recipe.idReceta)}>Borrar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default RecetasUsuario;
