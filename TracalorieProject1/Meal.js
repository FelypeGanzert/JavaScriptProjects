class Meals {
    meals = [];
    id = 0;

    setFromLocalStorage(meals, id) {
        this.meals = meals;
        this.id = id;
    }

    addMeal(name, calories) {
        let meal = new Meal(name, calories, this.nextId());
        this.meals.push(meal);
    }

    deleteMeal(id) {
        let start;
        this.meals.forEach((meal, index) => {
            if (meal.id == parseInt(id)) {
                start = index;
            }
        });
        if (start !== undefined) {
            this.meals.splice(start, 1);
        }
    }

    updateMeal(name, calories, id) {
        let _index;
        this.meals.forEach((meal, index) => {
            if (meal.id == parseInt(id)) {
                _index = index;
            }
        });
        if (_index !== undefined) {
            this.meals.splice(_index, 1, { name: name, calories: calories, id: id });
        }
    }

    nextId() {
        return this.id++;
    }

    logMeals() {
        this.meals.forEach(meal => {
            console.log(`${meal.name}: ${meal.calories}, id: ${meal.id}`)
        })
    }

    getMeals() {
        return this.meals;
    }

    getTotalCalories() {
        let sum = 0;
        this.meals.forEach(m => {
            sum += Number(m.calories);
        })
        return sum;
    }

    reset() {
        this.meals = [];
        this.id = 0;
    }
}

class Meal {
    constructor(name, calories, id) {
        this.name = name;
        this.calories = calories;
        this.id = id;
    }

    update(name, calories) {
        this.name = name;
        this.calories = calories;
    }
}