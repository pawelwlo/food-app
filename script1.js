

const params = new URLSearchParams(window.location.search);

const title = params.get('title');
const img = params.get('img');
const id = params.get('id');
const instructions = document.getElementById('instr');
const ingredients = document.getElementById('li-ingredients');

document.getElementById('title').textContent = title;
document.getElementById('image').src = img;






fetch(`https://api.apilayer.com/spoonacular/recipes/${id}/information?includeNutrition=true`, requestOptions)
  .then(response => response.json())
  .then(result => {
    const array = result.extendedIngredients;
    let ingredientsList = '';
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].original);
      ingredientsList += `<li>${array[i].original}</li>`;
    }
    console.log(result);
    ingredients.innerHTML = ingredientsList;
    instructions.innerHTML = result.instructions;
  })
  .catch(error => console.log('error', error));


