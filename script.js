const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '556f1841aemshdc5c0c020cdd1cap15952fjsn85fae9dda4f9',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const ingredient1 = document.querySelector('.ingredient-1')
const ingredient2 = document.querySelector('.ingredient-2')
const recipe1 = document.querySelector('.recipe1')
const recipe2 = document.querySelector('.recipe2')
const recipe3 = document.querySelector('.recipe3')
const btn = document.querySelector('.btn')

function getRecipe () {
    fetch(`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${ingredient1.value}`, options)
	.then(data => data.json())
	.then(data => {
		console.log(data)
	recipe1.innerHTML = data.results[0].display
	recipe2.innerHTML = data.results[1].display
	recipe3.innerHTML = data.results[2].display})

	// .then(data => {
	// 	recipe.innerText = data.results
	// })
	.catch(err => console.error(err));
    }


    btn.addEventListener('click', getRecipe)
	
