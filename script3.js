
    const ingr_1 = document.getElementById('ingredients-1')
    const ingr_title_1 = document.getElementById('ingr-title-1')    
    const ingr_2 = document.getElementById('ingredients-2')
    const ingr_title_2 = document.getElementById('ingr-title-2') 
    const ingr_3 = document.getElementById('ingredients-3')
    const ingr_title_3 = document.getElementById('ingr-title-3') 
    const ingr_4 = document.getElementById('ingredients-4')
    const ingr_title_4 = document.getElementById('ingr-title-4') 
    const ingr_5 = document.getElementById('ingredients-5')
    const ingr_title_5 = document.getElementById('ingr-title-5') 
    const ingr_6 = document.getElementById('ingredients-6')
    const ingr_title_6 = document.getElementById('ingr-title-6') 
    const ingr_7 = document.getElementById('ingredients-7')
    const ingr_title_7 = document.getElementById('ingr-title-7') 
    const ingr_8 = document.getElementById('ingredients-8')
    const ingr_title_8 = document.getElementById('ingr-title-8') 
    const ingr_9 = document.getElementById('ingredients-9')
    const ingr_title_9 = document.getElementById('ingr-title-9') 


    function showIngredients_1() {
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        ingr_title_1.innerHTML = "Ingredients" 
        ar = response.results[0].sections[0].components
        let myar = ar;
        for (let i = 0; i < myar.length; i++) {
            console.log((myar[i].raw_text))
            
            ingr_1.innerHTML += ((myar[i].raw_text) + "<br>")
            showIngredients_1 = undefined;
}
      
    })
    .catch(err => console.error(err)); }

    function showIngredients_2() {
        fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            ingr_title_2.innerHTML = "Ingredients" 
            ar = response.results[0].sections[0].components
            let myar = ar;
            for (let i = 0; i < myar.length; i++) {
                console.log((myar[i].raw_text))
            
                ingr_2.innerHTML += ((myar[i].raw_text) + "<br>")
                showIngredients_2 = undefined;
    }
          
        })
        .catch(err => console.error(err)); }

        function showIngredients_3() {
            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                ingr_title_3.innerHTML = "Ingredients" 
                ar = response.results[0].sections[0].components
                let myar = ar;
                for (let i = 0; i < myar.length; i++) {
                    console.log((myar[i].raw_text))
                
                    ingr_3.innerHTML += ((myar[i].raw_text) + "<br>")
                    showIngredients_3 = undefined;
        }
              
            })
            .catch(err => console.error(err)); }

            function showIngredients_4() {
                fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    ingr_title_4.innerHTML = "Ingredients" 
                    ar = response.results[0].sections[0].components
                    let myar = ar;
                    for (let i = 0; i < myar.length; i++) {
                        console.log((myar[i].raw_text))
                    
                        ingr_4.innerHTML += ((myar[i].raw_text) + "<br>")
                        showIngredients_4 = undefined;
            }
                  
                })
                .catch(err => console.error(err)); }

                function showIngredients_5() {
                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response)
                        ingr_title_5.innerHTML = "Ingredients" 
                        ar = response.results[0].sections[0].components
                        let myar = ar;
                        for (let i = 0; i < myar.length; i++) {
                            console.log((myar[i].raw_text))
                        
                            ingr_5.innerHTML += ((myar[i].raw_text) + "<br>")
                            showIngredients_5 = undefined;
                }
                      
                    })
                    .catch(err => console.error(err)); }

                    function showIngredients_6() {
                        fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response)
                            ingr_title_6.innerHTML = "Ingredients" 
                            ar = response.results[0].sections[0].components
                            let myar = ar;
                            for (let i = 0; i < myar.length; i++) {
                                console.log((myar[i].raw_text))
                            
                                ingr_6.innerHTML += ((myar[i].raw_text) + "<br>")
                                showIngredients_6 = undefined;
                    }
                          
                        })
                        .catch(err => console.error(err)); }

                        function showIngredients_7() {
                            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                            .then(response => response.json())
                            .then(response => {
                                console.log(response)
                                ingr_title_7.innerHTML = "Ingredients" 
                                ar = response.results[0].sections[0].components
                                let myar = ar;
                                for (let i = 0; i < myar.length; i++) {
                                    console.log((myar[i].raw_text))
                                
                                    ingr_7.innerHTML += ((myar[i].raw_text) + "<br>")
                                    showIngredients_7 = undefined;
                        }
                              
                            })
                            .catch(err => console.error(err)); }

                            function showIngredients_8() {
                                fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                .then(response => response.json())
                                .then(response => {
                                    console.log(response)
                                    ingr_title_8.innerHTML = "Ingredients" 
                                    ar = response.results[0].sections[0].components
                                    let myar = ar;
                                    for (let i = 0; i < myar.length; i++) {
                                        console.log((myar[i].raw_text))
                                    
                                        ingr_8.innerHTML += ((myar[i].raw_text) + "<br>")
                                        showIngredients_8 = undefined;
                            }
                                  
                                })
                                .catch(err => console.error(err)); }

                                function showIngredients_9() {
                                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                    .then(response => response.json())
                                    .then(response => {
                                        console.log(response)
                                        ingr_title_9.innerHTML = "Ingredients" 
                                        ar = response.results[0].sections[0].components
                                        let myar = ar;
                                        for (let i = 0; i < myar.length; i++) {
                                            console.log((myar[i].raw_text))
                                        
                                            ingr_9.innerHTML += ((myar[i].raw_text) + "<br>")
                                            showIngredients_9 = undefined;
                                }
                                      
                                    })
                                    .catch(err => console.error(err)); }
     