const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealSection = document.getElementById('meal-section');
    mealSection.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const newDiv = document.createElement('div');
        newDiv.classList.add('col')
        newDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        </div>
        `

        mealSection.appendChild(newDiv);
    });
}

function searchMilk() {
    const inputField = document.getElementById('text-field');
    const searchText = inputField.value;
    loadMeals(searchText);
    inputField.value = '';
}

// loadMeals(a);