const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '556f1841aemshdc5c0c020cdd1cap15952fjsn85fae9dda4f9',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const ingredient_1 = document.querySelector('.ingredient-1')
const img_1 = document.querySelector('.img-1')
const img_2 = document.querySelector('.img-2')
const img_3 = document.querySelector('.img-3')
const img_4 = document.querySelector('.img-4')
const img_5 = document.querySelector('.img-5')
const img_6 = document.querySelector('.img-6')
const img_7 = document.querySelector('.img-7')
const img_8 = document.querySelector('.img-8')
const img_9 = document.querySelector('.img-9')

li_1 = document.getElementById('li1')
li_2 = document.getElementById('li2')
li_3 = document.getElementById('li3')
li_4 = document.getElementById('li4')
li_5 = document.getElementById('li5')
li_6 = document.getElementById('li6')
li_7 = document.getElementById('li7')
li_8 = document.getElementById('li8')
li_9 = document.getElementById('li9')


const btn = document.querySelector('.btn');
const input = document.getElementById('ingredient-1');

function getRecipe() {
fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
		li_1.innerHTML = response.results[0].name 
		img_1.src = response.results[0].thumbnail_url 
		li_2.innerHTML = response.results[1].name
		img_2.src = response.results[1].thumbnail_url
		li_3.innerHTML = response.results[2].name
		img_3.src = response.results[2].thumbnail_url
		li_4.innerHTML = response.results[3].name
		img_4.src = response.results[3].thumbnail_url
		li_5.innerHTML = response.results[4].name
		img_5.src = response.results[4].thumbnail_url
		li_6.innerHTML = response.results[5].name
		img_6.src = response.results[5].thumbnail_url
		li_7.innerHTML = response.results[6].name
		img_7.src = response.results[6].thumbnail_url
		li_8.innerHTML = response.results[7].name
		img_8.src = response.results[7].thumbnail_url
		li_9.innerHTML = response.results[8].name
		img_9.src = response.results[8].thumbnail_url
		
        
        
        
    })
	.catch(err => console.error(err));
	

}

    
	input.addEventListener('keyup', (e) => {
		
		if (e.keyCode === 13) {
			getRecipe();
		 
		}
	  });
	
	  btn.addEventListener('click', getRecipe)

	

