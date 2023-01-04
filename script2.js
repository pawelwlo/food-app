


const instr_1 = document.getElementById('instructions-1')
const instr_title_1 = document.getElementById('instr-title-1')
const instr_2 = document.getElementById('instructions-2')
const instr_title_2 = document.getElementById('instr-title-2')
const instr_3 = document.getElementById('instructions-3')
const instr_title_3 = document.getElementById('instr-title-3')
const instr_4 = document.getElementById('instructions-4')
const instr_title_4 = document.getElementById('instr-title-4')
const instr_5 = document.getElementById('instructions-5')
const instr_title_5 = document.getElementById('instr-title-5')
const instr_6 = document.getElementById('instructions-6')
const instr_title_6 = document.getElementById('instr-title-6')
const instr_7 = document.getElementById('instructions-7')
const instr_title_7 = document.getElementById('instr-title-7')
const instr_8 = document.getElementById('instructions-8')
const instr_title_8 = document.getElementById('instr-title-8')
const instr_9 = document.getElementById('instructions-9')
const instr_title_9 = document.getElementById('instr-title-9')



const button = document.querySelector('.button')




function showInstructionsLink_1() {
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            instr_title_1.innerHTML = "How to prepare:"
            arr = response.results[0].instructions
            let myarr = arr;
            for (let i = 0; i < myarr.length; i++) {
                console.log((myarr[i].display_text))
            
                instr_1.innerHTML += ((myarr[i].display_text) + "<br>")
              
    }       showInstructionsLink_1 = undefined;
          
        })
        .catch(err => console.error(err));} 


        function showInstructionsLink_2() {
            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    instr_title_2.innerHTML = "How to prepare:"
                    arr = response.results[1].instructions
                    let myarr = arr;
                    for (let i = 0; i < myarr.length; i++) {
                        console.log((myarr[i].display_text))
                    
                        instr_2.innerHTML += ((myarr[i].display_text) + "<br>")
                        showInstructionsLink_2 = undefined;
            }
                  
                })
                .catch(err => console.error(err));} 
          
                
                function showInstructionsLink_3() {
                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response)
                            instr_title_3.innerHTML = "How to prepare:"
                            arr = response.results[2].instructions
                            let myarr = arr;
                            for (let i = 0; i < myarr.length; i++) {
                                console.log((myarr[i].display_text))
                            
                                instr_3.innerHTML += ((myarr[i].display_text) + "<br>")
                                showInstructionsLink_3 = undefined;
                    }
                          
                        })
                        .catch(err => console.error(err));} 
                        function showInstructionsLink_4() {
                            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                .then(response => response.json())
                                .then(response => {
                                    console.log(response)
                                    instr_title_4.innerHTML = "How to prepare:"
                                    arr = response.results[3].instructions
                                    let myarr = arr;
                                    for (let i = 0; i < myarr.length; i++) {
                                        console.log((myarr[i].display_text))
                                    
                                        instr_4.innerHTML += ((myarr[i].display_text) + "<br>")
                                        showInstructionsLink_4 = undefined;
                            }
                                  
                                })
                                .catch(err => console.error(err));} 

                                function showInstructionsLink_5() {
                                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                        .then(response => response.json())
                                        .then(response => {
                                            console.log(response)
                                            instr_title_6.innerHTML = "How to prepare:"
                                            arr = response.results[4].instructions
                                            let myarr = arr;
                                            for (let i = 0; i < myarr.length; i++) {
                                                console.log((myarr[i].display_text))
                                            
                                                instr_5.innerHTML += ((myarr[i].display_text) + "<br>")
                                                showInstructionsLink_5 = undefined;
                                    }
                                          
                                        })
                                        .catch(err => console.error(err));} 
        
                                        function showInstructionsLink_6() {
                                            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                                .then(response => response.json())
                                                .then(response => {
                                                    console.log(response)
                                                    instr_title_6.innerHTML = "How to prepare:"
                                                    arr = response.results[5].instructions
                                                    let myarr = arr;
                                                    for (let i = 0; i < myarr.length; i++) {
                                                        console.log((myarr[i].display_text))
                                                    
                                                        instr_6.innerHTML += ((myarr[i].display_text) + "<br>")
                                                        showInstructionsLink_6 = undefined;
                                            }
                                                  
                                                })
                                                .catch(err => console.error(err));} 
                                                function showInstructionsLink_7() {
                                                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                                        .then(response => response.json())
                                                        .then(response => {
                                                            console.log(response)
                                                            instr_title_7.innerHTML = "How to prepare:"
                                                            arr = response.results[6].instructions
                                                            let myarr = arr;
                                                            for (let i = 0; i < myarr.length; i++) {
                                                                console.log((myarr[i].display_text))
                                                            
                                                                instr_7.innerHTML += ((myarr[i].display_text) + "<br>")
                                                                showInstructionsLink_7 = undefined;
                                                    }
                                                          
                                                        })
                                                        .catch(err => console.error(err));} 
                                                        function showInstructionsLink_8() {
                                                            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                                                .then(response => response.json())
                                                                .then(response => {
                                                                    console.log(response)
                                                                    instr_title_8.innerHTML = "How to prepare:"
                                                                    arr = response.results[7].instructions
                                                                    let myarr = arr;
                                                                    for (let i = 0; i < myarr.length; i++) {
                                                                        console.log((myarr[i].display_text))
                                                                    
                                                                        instr_8.innerHTML += ((myarr[i].display_text) + "<br>")
                                                                        showInstructionsLink_8 = undefined;
                                                            }
                                                                  
                                                                })
                                                                .catch(err => console.error(err));} 
                                                                function showInstructionsLink_9() {
                                                                    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${ingredient_1.value}`, options)
                                                                        .then(response => response.json())
                                                                        .then(response => {
                                                                            console.log(response)
                                                                            instr_title_9.innerHTML = "How to prepare:"
                                                                            arr = response.results[8].instructions
                                                                            let myarr = arr;
                                                                            for (let i = 0; i < myarr.length; i++) {
                                                                                console.log((myarr[i].display_text))
                                                                            
                                                                                instr_9.innerHTML += ((myarr[i].display_text) + "<br>")
                                                                                showInstructionsLink_9 = undefined;
                                                                    }
                                                                          
                                                                        })
                                                                        .catch(err => console.error(err));} 
       
      

