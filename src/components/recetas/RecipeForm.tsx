import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function RecipeForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [preparation, setPreparation] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchIngredients = async () => {
            const res = await fetch('/api/crud/ingredientes');
            const data = await res.json();
            setIngredients(data);
        };
        fetchIngredients();
    }, []);

    const handleIngredientChange = (ingredientId) => {
        if (selectedIngredients.includes(ingredientId)) {
            setSelectedIngredients(selectedIngredients.filter(id => id !== ingredientId));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredientId]);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/crud/agregar-receta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, image, preparation, selectedIngredients }),
        });
        if (res.ok) {
            alert('Receta añadida con éxito');
            setTitle('');
            setDescription('');
            setImage('');
            setPreparation('');
            setSelectedIngredients([]);

            router.push('/')
        } else {
            alert('Error al añadir la receta');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Título</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    id="description"

                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Imagen</label>
                <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    id="image"
                    onChange={handleImageChange}
                    required
                />
                {image && (
                    <img src={image} alt="Preview" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="preparation" className="form-label">Preparación</label>
                <textarea
                    className="form-control"
                    id="preparation"
                    rows="5"
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label>Ingredientes</label>
                <div className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {ingredients.map((ingredient) => (
                        <div key={ingredient.idIngrediente} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`ingredient-${ingredient.idIngrediente}`}
                                value={ingredient.idIngrediente}
                                checked={selectedIngredients.includes(ingredient.idIngrediente)}
                                onChange={() => handleIngredientChange(ingredient.idIngrediente)}
                            />
                            <label className="form-check-label" htmlFor={`ingredient-${ingredient.idIngrediente}`}>
                                {ingredient.nombre}
                            </label>
                        </div>
                    ))}
                </div>

            </div>
            <button type="submit" className="btn btn-primary">Añadir Receta</button>
        </form>
    );
}
