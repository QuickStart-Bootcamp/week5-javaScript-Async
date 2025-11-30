const categoryContainer = document.querySelector('.js-category-container');
let categories = null;
const mealContainer = document.querySelector('.js-meal-container');

function getCategoryById(id) {
    if (categories === null) {
        return null;
    }
    return categories.find(category => category.idCategory === String(id));
}

function loadCategories() {
    mealContainer.innerHTML = '';
    if (categories === null) {
        fetchCategories() 
            .then(displayCategories);
    } else {
        displayCategories();
    }
}

function renderCategory(category, wide=false) {
    return `
        <div 
            class="category-item ${wide===true ? 'wide' : ''}" 
            data-id="${category.idCategory}">
            <h2>${category.strCategory}</h2>
            <img 
                src="${category.strCategoryThumb}" 
                alt="${category.strCategory}" />
            <p>${category.strCategoryDescription}</p>
        </div>
    `;
}


function displayCategories() { 
    if (categories === null) {
        return;
    }
    categoryContainer.innerHTML = categories
        .map(category => renderCategory(category))
        .join('');
}

function fetchCategories() {
    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(data => data.json()) 
        .then(response => {
            categories = response.categories;
            return Promise.resolve({categoriesLoaded: true});
        });
}


function renderIngredients(meal) {
    let html = '<ul class="ingredient-list">';
    for (let i = 1; i <= 20; ++i) {
        const ingredientValue = meal['strIngredient' + i];
        const ingredientMeasure = meal['strMeasure' + i];
        if (typeof ingredientValue === 'string' && ingredientValue.length > 0) {
            html += `<li>${ingredientValue} (${ingredientMeasure})</li>`;
        }
    }
    html += '</ul>';
    return html;
}

function renderMeal(meal) {
    const ingredientsHtml = renderIngredients(meal);

    return `
        <div class="meal wide">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <p>${meal.strInstructions}</p>
            ${ingredientsHtml}
        </div>
    `;
}

function isPromiseFulfilled(response) {
    return response => response.status === 'fulfilled';
}

function displayMealDetails(mealResponses) {
    mealContainer.innerHTML = mealResponses 
        .filter(isPromiseFulfilled)
        .map(response => response.value.meals[0]) // these arrays have a length of 1
        .map(meal => renderMeal(meal)) 
        .join('');
}

function loadMealsByCategory(response) {
    const mealList = response.meals.slice(0, 10); 

    const mealPromiseList = mealList.map(meal => 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then(data => data.json())
    );

    Promise.allSettled(mealPromiseList).then(displayMealDetails);
}


function fetchMealListByCategory(currentCategory) {
    const categoryName = currentCategory.strCategory;
    const URL_PREFIX = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;

    return fetch(URL_PREFIX + categoryName)
        .then(data => data.json())
}

function categoryClicked(event) {
    const id = event.target.dataset.id || event.target.parentElement.dataset.id;
    if (typeof id === 'undefined') {
        return;
    } else if (id === 'all') {
        loadCategories();
    } else {
        const currentCategory = getCategoryById(id);
        categoryContainer.innerHTML = `
            ${renderCategory(currentCategory, true)}
            <button data-id="all">Choose another category</button>
        `;

        mealContainer.innerHTML = 'Loading...';
        fetchMealListByCategory(currentCategory)
            .then(loadMealsByCategory);
    }
}

categoryContainer.addEventListener('click', categoryClicked);
loadCategories();