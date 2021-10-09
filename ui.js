class UI {

    constructor(){
        this.errors = [];
        this.searchResultsDiv = document.querySelector('.search-results');

        
    }

    async show(recipes){
        let elements = '';
        

        try {
            let datas = await recipes
            datas.map( therecipe =>{

            elements += 
            `
            <div class="item">
    
                <img src="${therecipe.recipe.image}" alt="${therecipe.recipe.label}">

                <div class="flex-container">
                    <h1 class="title">${therecipe.recipe.label}</h1>
                    <a class="view-button" href="${therecipe.recipe.url}" target="_blank">Tarifi Görüntüle</a>
                </div>

                <p class="item-data">Calories: ${therecipe.recipe.calories.toFixed(1)}</p>

            </div>
            
            `
            

        });
        } catch (error) {
            this.errorsAdd("There's an error occured on UI show method:   "+error);
        }
        
        this.add(elements)
    }

    add(elements){
        // const searchResultsDiv = document.querySelector('.search-results');

        try {
            this.searchResultsDiv.innerHTML = elements;
        } catch (error) {
            this.errorsAdd("There's an error occured on the adding element method(UIadd):   "+error);
        }
        

    }

    errorsAdd(error){
        this.errors.push(error);

        this.errorsShow(this.errors);

    }

    errorsShow(errors){
        errors.map(error => {
            formSpan.innerText = error;
        })
    }


}