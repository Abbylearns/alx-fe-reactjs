import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() =>
              favorites.includes(recipe.id)
                ? alert('Already in favorites')
                : addFavorite(recipe.id)
            }
          >
            ❤️ Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
