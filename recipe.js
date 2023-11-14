// Example recipe data
let recipes = [
    { name: "Spaghetti Bolognese", difficulty: "Medium", time: "45 minutes", ingredients: ["Spaghetti", "Ground beef", "Tomato sauce"], instructions: "Cook the spaghetti. Brown the ground beef and add tomato sauce. Mix with cooked spaghetti." },
    // Add more recipes as needed
  ];
  
  // Function to generate recipe cards
  function generateRecipeCards() {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';
  
    recipes.forEach((recipe, index) => {
      const card = createRecipeCard(recipe);
      recipeContainer.appendChild(card);
    });
  }
  
  // Function to create a recipe card element
  function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
  
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
  
    const frontFace = document.createElement('div');
    frontFace.classList.add('card-face', 'front-face');
    frontFace.innerHTML = `
      <h3>${recipe.name}</h3>
      <p>Difficulty: ${recipe.difficulty}</p>
      <p>Time: ${recipe.time}</p>
    `;
  
    const backFace = document.createElement('div');
    backFace.classList.add('card-face', 'back-face');
    backFace.innerHTML = `
      <h3>${recipe.name}</h3>
      <h4>Ingredients:</h4>
      <ul>
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      <h4>Instructions:</h4>
      <p>${recipe.instructions}</p>
    `;
  
    cardInner.appendChild(frontFace);
    cardInner.appendChild(backFace);
    card.appendChild(cardInner);
  
    return card;
  }
  
  // Function to save recipes to Local Storage
  function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  
  // Function to load recipes from Local Storage
  function loadRecipes() {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      recipes = JSON.parse(savedRecipes);
    }
  }
  
  // Function to add a new recipe
  function addRecipe() {
    const form = document.getElementById('recipeForm');
  
    // Get values from the form
    const name = form.recipeName.value;
    const difficulty = form.recipeDifficulty.value;
    const time = form.recipeTime.value;
    const ingredients = form.recipeIngredients.value.split(',').map(item => item.trim());
    const instructions = form.recipeInstructions.value;
  
    // Create a new recipe object
    const newRecipe = {
      name,
      difficulty,
      time,
      ingredients,
      instructions,
    };
  
    // Add the new recipe to the recipes array
    recipes.push(newRecipe);
  
    // Save recipes to Local Storage
    saveRecipes();
  
    // Clear the form
    form.reset();
  
    // Close the modal
    closeAddRecipeModal();
  
    // Generate updated recipe cards
    generateRecipeCards();
  }
  
  // Function to open the add recipe modal
  function openAddRecipeModal() {
    const modal = document.getElementById('addRecipeModal');
    modal.style.display = 'block';
  }
  
  // Function to close the add recipe modal
  function closeAddRecipeModal() {
    const modal = document.getElementById('addRecipeModal');
    modal.style.display = 'none';
  }
  
  // Generate recipe cards when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    // Load recipes from Local Storage
    loadRecipes();
  
    // Generate recipe cards
    generateRecipeCards();
  });
  