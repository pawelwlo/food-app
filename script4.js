const nutrition_1 = document.getElementById('nutritions-1')
const cal_1 = document.getElementById('calories-1')
const carbs_1 = document.getElementById('carbs-1')
const fat_1 = document.getElementById('fat-1')
const protein_1 = document.getElementById('protein-1')
const sugar_1 = document.getElementById('sugar-1')

const nutrition_2 = document.getElementById('nutritions-2')
const cal_2 = document.getElementById('calories-2')
const carbs_2 = document.getElementById('carbs-2')
const fat_2 = document.getElementById('fat-2')
const protein_2 = document.getElementById('protein-2')
const sugar_2 = document.getElementById('sugar-2')

const nutrition_3 = document.getElementById('nutritions-3')
const cal_3 = document.getElementById('calories-3')
const carbs_3 = document.getElementById('carbs-3')
const fat_3 = document.getElementById('fat-3')
const protein_3 = document.getElementById('protein-3')
const sugar_3 = document.getElementById('sugar-3')

const nutrition_4 = document.getElementById('nutritions-4')
const cal_4 = document.getElementById('calories-4')
const carbs_4 = document.getElementById('carbs-4')
const fat_4 = document.getElementById('fat-4')
const protein_4 = document.getElementById('protein-4')
const sugar_4 = document.getElementById('sugar-4')

const nutrition_5 = document.getElementById('nutritions-5')
const cal_5 = document.getElementById('calories-5')
const carbs_5 = document.getElementById('carbs-5')
const fat_5 = document.getElementById('fat-5')
const protein_5 = document.getElementById('protein-5')
const sugar_5 = document.getElementById('sugar-5')

const nutrition_6 = document.getElementById('nutritions-6')
const cal_6 = document.getElementById('calories-6')
const carbs_6 = document.getElementById('carbs-6')
const fat_6 = document.getElementById('fat-6')
const protein_6 = document.getElementById('protein-6')
const sugar_6 = document.getElementById('sugar-6')

const nutrition_7 = document.getElementById('nutritions-7')
const cal_7 = document.getElementById('calories-7')
const carbs_7 = document.getElementById('carbs-7')
const fat_7 = document.getElementById('fat-7')
const protein_7 = document.getElementById('protein-7')
const sugar_7 = document.getElementById('sugar-7')

const nutrition_8 = document.getElementById('nutritions-8')
const cal_8 = document.getElementById('calories-8')
const carbs_8 = document.getElementById('carbs-8')
const fat_8 = document.getElementById('fat-8')
const protein_8 = document.getElementById('protein-8')
const sugar_8 = document.getElementById('sugar-8')

const nutrition_9 = document.getElementById('nutritions-9')
const cal_9 = document.getElementById('calories-9')
const carbs_9 = document.getElementById('carbs-9')
const fat_9 = document.getElementById('fat-9')
const protein_9 = document.getElementById('protein-9')
const sugar_9 = document.getElementById('sugar-9')


    function showNutritions_1() {
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        nutrition_1.innerHTML = "Nutrition Facts"
        cal_1.innerHTML = response.results[0].nutrition.calories + " calories"
        carbs_1.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
        fat_1.innerHTML = response.results[0].nutrition.fat + " fat"
        protein_1.innerHTML = response.results[0].nutrition.protein + " calories"
        sugar_1.innerHTML = response.results[0].nutrition.sugar + " calories"
        
      
    })
    .catch(err => console.error(err)); }

    function showNutritions_2() {
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
    .then(response => response.json())
    .then(response => {
            console.log(response)
            
            nutrition_2.innerHTML = "Nutrition Facts"
            cal_2.innerHTML = response.results[0].nutrition.calories + " calories"
            carbs_2.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
            fat_2.innerHTML = response.results[0].nutrition.fat + " fat"
            protein_2.innerHTML = response.results[0].nutrition.protein + " calories"
            sugar_2.innerHTML = response.results[0].nutrition.sugar + " calories"
            
          
        })
        .catch(err => console.error(err)); }

        function showNutritions_3() {
            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                console.log("test");
                nutrition_3.innerHTML = "Nutrition Facts"
                cal_3.innerHTML = response.results[0].nutrition.calories + " calories"
                carbs_3.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                fat_3.innerHTML = response.results[0].nutrition.fat + " fat"
                protein_3.innerHTML = response.results[0].nutrition.protein + " calories"
                sugar_3.innerHTML = response.results[0].nutrition.sugar + " calories"
                
              
            })
            .catch(err => console.error(err)); }

            function showNutritions_4() {
                fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    console.log("test");
                    nutrition_4.innerHTML = "Nutrition Facts"
                    cal_4.innerHTML = response.results[0].nutrition.calories + " calories"
                    carbs_4.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                    fat_4.innerHTML = response.results[0].nutrition.fat + " fat"
                    protein_4.innerHTML = response.results[0].nutrition.protein + " calories"
                    sugar_4.innerHTML = response.results[0].nutrition.sugar + " calories"
                    
                  
                })
                .catch(err => console.error(err)); }

                function showNutritions_5() {
                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response)
                        console.log("test");
                        nutrition_5.innerHTML = "Nutrition Facts"
                        cal_5.innerHTML = response.results[0].nutrition.calories + " calories"
                        carbs_5.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                        fat_5.innerHTML = response.results[0].nutrition.fat + " fat"
                        protein_5.innerHTML = response.results[0].nutrition.protein + " calories"
                        sugar_5.innerHTML = response.results[0].nutrition.sugar + " calories"
                        
                      
                    })
                    .catch(err => console.error(err)); }

                    function showNutritions_6() {
                        fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response)
                            console.log("test");
                            nutrition_6.innerHTML = "Nutrition Facts"
                            cal_6.innerHTML = response.results[0].nutrition.calories + " calories"
                            carbs_6.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                            fat_6.innerHTML = response.results[0].nutrition.fat + " fat"
                            protein_6.innerHTML = response.results[0].nutrition.protein + " calories"
                            sugar_6.innerHTML = response.results[0].nutrition.sugar + " calories"
                            
                          
                        })
                        .catch(err => console.error(err)); }

                        function showNutritions_7() {
                            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                            .then(response => response.json())
                            .then(response => {
                                console.log(response)
                                console.log("test");
                                nutrition_7.innerHTML = "Nutrition Facts"
                                cal_7.innerHTML = response.results[0].nutrition.calories + " calories"
                                carbs_7.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                                fat_7.innerHTML = response.results[0].nutrition.fat + " fat"
                                protein_7.innerHTML = response.results[0].nutrition.protein + " calories"
                                sugar_7.innerHTML = response.results[0].nutrition.sugar + " calories"
                                
                              
                            })
                            .catch(err => console.error(err)); }

                            function showNutritions_8() {
                                fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                .then(response => response.json())
                                .then(response => {
                                    console.log(response)
                                    console.log("test");
                                    nutrition_8.innerHTML = "Nutrition Facts"
                                    cal_8.innerHTML = response.results[0].nutrition.calories + " calories"
                                    carbs_8.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                                    fat_8.innerHTML = response.results[0].nutrition.fat + " fat"
                                    protein_8.innerHTML = response.results[0].nutrition.protein + " calories"
                                    sugar_8.innerHTML = response.results[0].nutrition.sugar + " calories"
                                    
                                  
                                })
                                .catch(err => console.error(err)); }

                                function showNutritions_9() {
                                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                    .then(response => response.json())
                                    .then(response => {
                                        console.log(response)
                                        console.log("test");
                                        nutrition_9.innerHTML = "Nutrition Facts"
                                        cal_9.innerHTML = response.results[0].nutrition.calories + " calories"
                                        carbs_9.innerHTML = response.results[0].nutrition.carbohydrates + " carbohydrates"
                                        fat_9.innerHTML = response.results[0].nutrition.fat + " fat"
                                        protein_9.innerHTML = response.results[0].nutrition.protein + " calories"
                                        sugar_9.innerHTML = response.results[0].nutrition.sugar + " calories"
                                        
                                      
                                    })
                                    .catch(err => console.error(err)); }
     