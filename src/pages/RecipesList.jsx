import { useEffect, useState } from "react";
import recipesData from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard";

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          image={recipe.image}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}
