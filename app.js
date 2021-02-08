const searchBar = document.getElementById("mealSearch");
let hpMeals = [];
searchBar.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    const searchString = e.target.value;
    let hpMeals = [];
    const filteredMeals = hpMeals.filter((meal) => {
        return (
            meal.strMeal.includes(searchString)
        )
    });
    console.log(filteredMeals);
})

// const getMealData = strMeal => {
//     const url = `"https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}"`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }


fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(data => displayMeals(data))


const displayMeals = meals => {
    const div = document.getElementById("meals");
    meals.meals.forEach(meals => {
        const mealDiv = document.createElement("div")
        const MealInfo = `
        
        <div class="meal" onclick="displayMealDetail('${meals.idMeal}')">
            <img src="${meals.strMealThumb}">
            <h3>${meals.strMeal}</h3>
        </div>
        
            
        `;
        mealDiv.innerHTML = MealInfo;
        div.appendChild(mealDiv)

    });


    // for (let i = 0; i < meals.meals.length; i++) {

    //     const meal = meals.meals[i]
    //     // console.log(meal.strMeal)
    //     const mealDiv = document.createElement("div")
    //     const MealInfo = `
    //     <div class="meal" onclick="displayMealDetail('${meal.strMeal}')">
    //         <img src="${meal.strMealThumb}">
    //         <h3>${meal.strMeal}</h3>
    //     </div>


    //     `;
    //     mealDiv.innerHTML = MealInfo;
    //     div.appendChild(mealDiv)
    // }
}


const displayMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data));
    // .then(data => console.log(data));
}

const renderMealInfo = meals => {
    // console.log(meals.meals[0].strIngredient1);
    console.log(meals.meals);

    const mealDiv = document.getElementById("mealDetail");
    mealDiv.innerHTML = `
    <img style="width:300px;" src="${meals.meals[0].strMealThumb}">
    <h1>${meals.meals[0].strMeal}</h1> 
    <h3>Ingredients:</h3>
    <ul>
        <li> ${meals.meals[0].strIngredient1}</li>
        <li> ${meals.meals[0].strIngredient2}</li>
        <li> ${meals.meals[0].strIngredient3}</li>
        <li> ${meals.meals[0].strIngredient4}</li>
        <li> ${meals.meals[0].strIngredient5}</li>
        <li> ${meals.meals[0].strIngredient6}</li>
    </ul>

   
    `
    // for (i = 1; i <= 20; i++) {
    //     // x = `strIngredient${i}`;
    //     x = `strIngredient${i}`;
    //     console.log(x,meals.meals[0].x);
    //     mealDiv.innerHTML = `
    //         <p> Ingredient : ${meals.meals[0].x}</p>
    //         `
    // }
}