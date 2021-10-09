const fetchAPI = new FetchAPI();
const ui = new UI();
const form = document.querySelector('form');
const searchResultsDiv = document.querySelector('.search-results');
const formSpan = document.querySelector("span");


let search = '';



form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    search = e.target.querySelector('input').value;
    
    // getdataandadd(search)
    
    if(!search == ""){
        action(search);
    }else{
        ui.errorsAdd('You must fill the form');
        
    }

    
    
})



async function action(search){

    
    const recipes = await fetchAPI.makeFetch(search);

    if(recipes){
        ui.show(recipes)
    }

    


} 



//! ui.js ve fetchAPI.js dosyalarına aktarıldı

/*
async function getDataAndAdd(search){
    let elements = '';

    baseURL = `https://api.edamam.com/search`;
            
    let fetchURL = baseURL + `?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(fetchURL);
    const data = await response.json();
    recipes = data.hits;
    console.log(recipes);
        recipes.map( therecipe =>{

            elements += 
            `
            <div class="item">
    
                <img src="${therecipe.recipe.image}" alt="${therecipe.recipe.label}">

                <div class="flex-container">
                    <h1 class="title">${therecipe.recipe.label}</h1>
                    <a class="view-button" href="${therecipe.recipe.url}" target="_blank">Tarifi Görüntüle</a>
                </div>

                <p class="item-data">Calories: ${therecipe.recipe.calories}</p>

            </div>
            
            `
            

        });

        searchResultsDiv.innerHTML = elements;

} 
*/