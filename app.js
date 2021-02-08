const SearchBar = document.getElementById("search_button");

SearchBar.addEventListener('click', () => {
    const inputMeal = document.getElementById("SearchMeal").value;
    getMealData(inputMeal)
})

const getMealData = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => updateUI(data))
}

const updateUI = meals => {
    const div = document.getElementById("meals");
    meals.meals.forEach(meals => {
        const mealDiv = document.createElement("div")
        const MealInfo = `
        <div class="meal" onclick="displayMealDetail('${meals.idMeal}')">
            <img src="${meals.strMealThumb}">
            <h4>${meals.strMeal}</h4>
        </div>


        `;
        console.log("dfdsfdfdsf", mealDiv.innerHTML)
        mealDiv.innerHTML = MealInfo;
        div.appendChild(mealDiv)

    });

}

getMealData();



const displayMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data));
}

const renderMealInfo = meals => {
    console.log(meals.meals);
    const mealDiv = document.getElementById("mealDetail");
    mealDiv.innerHTML = `
    <div id="MealDetail">
        <img style="width:300px; height:200px;border-radius: 20px;" src="${meals.meals[0].strMealThumb}">
        <h2>${meals.meals[0].strMeal}</h2>
        <h4>Ingredients:</h4>
        <ul>
            <li> ${meals.meals[0].strIngredient1}</li>
            <li> ${meals.meals[0].strIngredient2}</li>
            <li> ${meals.meals[0].strIngredient3}</li>
            <li> ${meals.meals[0].strIngredient4}</li>
            <li> ${meals.meals[0].strIngredient5}</li>
            <li> ${meals.meals[0].strIngredient6}</li>
        </ul>

    </div>


    `
}