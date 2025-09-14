import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

function AddRecipeForm() {
  const [recipe, setRecipe] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.trim()) return;
    addRecipe(recipe);
    setRecipe('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a recipe"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
