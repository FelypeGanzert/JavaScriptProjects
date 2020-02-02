// Initialize the UI
const ui = new UI();

// Initialize the Local Storage
const ls = new LocalStorage();
meals = new Meals();
if (ls.getFromLS() !== undefined) {
    mealsLS = ls.getFromLS();
    meals.setFromLocalStorage(mealsLS.meals, mealsLS.id);
    ui.showMeals(meals.getMeals());
    document.getElementById('total-calories').innerHTML = `Total Calories: ${meals.getTotalCalories()}`
}


document.body.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.id === 'add-meal') {
        addMeal()
    }
    if (e.target.classList.contains('edit-item')) {
        let name = e.target.parentElement.querySelector('.meal-name').innerText;
        let calories = e.target.parentElement.querySelector('.calories-value').innerText;
        let id = e.target.parentElement.id;
        editMeal(name, calories, id);
    }
    if (e.target.id === 'update-meal') {
        updateMeal();
    }
    if (e.target.id === 'delete-meal') {
        deleteMeal();
    }
    if (e.target.id === 'back') {
        back();
    }
    if (e.target.id === 'clear-all') {
        clearAll();
    }
});

function addMeal() {
    let name = document.getElementById('meal-name').value;
    let calories = document.getElementById('calories').value;
    meals.addMeal(name, calories);
    resetForm();
    updateDependeces();
}
function editMeal(name, calories, id) {
    document.getElementById('new-meal-buttons').style.display = 'none';
    document.getElementById('edit-meal-buttons').style.display = 'block';
    document.getElementById('id').value = id;
    document.getElementById('meal-name').value = name;
    document.getElementById('calories').value = calories;
}
function back() {
    document.getElementById('new-meal-buttons').style.display = 'block';
    document.getElementById('edit-meal-buttons').style.display = 'none';
    resetForm();
}
function updateMeal() {
    let name = document.getElementById('meal-name').value;
    let calories = document.getElementById('calories').value;
    let id = document.getElementById('id').value;
    meals.updateMeal(name, calories, id);
    updateDependeces();
    back();
}
function deleteMeal() {
    let id = document.getElementById('id').value;
    meals.deleteMeal(id);
    updateDependeces();
    back();
}
function clearAll(){
    meals.reset();
    updateDependeces();
}

function resetForm(){
    document.getElementById('id').value = "";
    document.getElementById('meal-name').value = "";
    document.getElementById('calories').value = "";
    document.getElementById('meal-name').focus();
}
function updateDependeces(){
    ui.showMeals(meals.getMeals());
    ls.setToLS(meals);
    document.getElementById('total-calories').innerHTML = `Total Calories: ${meals.getTotalCalories()}`
}