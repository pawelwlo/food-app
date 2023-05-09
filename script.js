const myHeaders = new Headers();
myHeaders.append("apikey", "e6WKJDmtgxGPCSbexOl9Joancv1lqTKC");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const btnEl = document.getElementById('button');
const subEl = document.querySelector('input');

const list = document.createElement('ul');
const link = document.createElement('a');



function renderTask(title, img, id) {
  const li = document.createElement('li');
  const link = document.createElement('a'); 
  
  link.href = `recipe.html?title=${encodeURIComponent(title)}&img=${encodeURIComponent(img)}&id=${encodeURIComponent(id)}`;
  link.innerHTML = `<div class="link_inner">
  <div id="title" >${title}</div>
  <img id="image" src="${img}" />
  </div>
    
    
  `;
  
  li.appendChild(link); 
  
  list.appendChild(li);
}

function getRecipe() {
  fetch(`https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${subEl.value}`, requestOptions)
    .then(response => response.json())
    .then(results => {
      console.log(results);
      
      const arr = results.results;

      
        
      for (let i = 0; i < arr.length; i++) {
        renderTask(arr[i].title, arr[i].image, arr[i].id);
      }
      document.body.appendChild(list);
    })
    .catch(error => console.log('error', error));
}
input.addEventListener('keyup', (e) => {
		
  if (e.keyCode === 13) {
    getRecipe();
   
  }
  });
btnEl.addEventListener('click', getRecipe);
