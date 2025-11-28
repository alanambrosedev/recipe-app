import { useEffect, useState } from "react";
import recipesData from "../data/recipes.json";

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
          <p>Cook Time: {recipe.cookTime} mins</p>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
