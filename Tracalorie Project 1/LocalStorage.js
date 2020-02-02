class LocalStorage{
    getFromLS(){
        let data = undefined;
        let response = JSON.parse(window.localStorage.getItem('meals'));
        if(response !== null){
            data = response;
        }
        return data;
    }
    setToLS(meals){
        window.localStorage.setItem('meals', JSON.stringify(meals))
    }
}