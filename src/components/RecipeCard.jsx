function RecipeCard({ title, image, cookTime, ingredients }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img src={image} alt={title} width="100%" />
      <h3>{title}</h3>
      <p>Cook Time: {cookTime} mins</p>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default RecipeCard;
