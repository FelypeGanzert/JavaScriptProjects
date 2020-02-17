class UI {
    constructor() {
        this.mealsList = document.querySelector('#meals-list');
    }
    showMeals(meals) {
        this.mealsList.innerHTML = "";
        if (meals.length >= 1) {
            meals.forEach(meal => {
                let mealList = document.createElement('li');
                mealList.setAttribute('id', meal.id);
                mealList.innerHTML = `
                    <span class="meal-name">${meal.name}</span>
                    <span class="meal-calories"><span class="calories-value">${meal.calories}</span> Calories</span>
                    <i class="material-icons edit-item">edit</i>
                `
                this.mealsList.appendChild(mealList);
            });
        }
    }
}