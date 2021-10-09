class FetchAPI{
    
    constructor(){

        // const APP_ID = 'a38f0eb3';
        // const APP_KEY = '302a74a4f73d8b90d40f58031f17c978'

        this.baseURL = `https://api.edamam.com/search`;
        this.APP_ID = "a38f0eb3";
        this.APP_KEY = "302a74a4f73d8b90d40f58031f17c978";
        
    }


    async makeFetch(search){

        
        try {
            let fetchURL = this.baseURL + `?q=${search}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`;
            console.log(fetchURL);
            const response = await fetch(fetchURL);
            const data = await response.json();
            return data.hits;
            
        }catch (error){
            const iuerror = new UI();
            error = `Error on the FetchAPI.makeFetch method:   ${error}`;
            iuerror.errorsAdd(error);

        }  
        
        
        

    }



}