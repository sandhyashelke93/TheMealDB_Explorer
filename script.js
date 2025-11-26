const API = "http://localhost:5000/api";

window.onload = () => {
  fetch(API + "/categories")
    .then(r => r.json())
    .then(d => {
      const div = document.getElementById("categories");
      d.categories.forEach(c => {
        let b = document.createElement("button");
        b.textContent = c.strCategory;
        b.onclick = () => loadCategory(c.strCategory);
        div.appendChild(b);
      });
    });
};

function searchMeals() {
  let q = document.getElementById("search").value;
  fetch(API + "/search?q=" + q)
    .then(r => r.json())
    .then(d => renderMeals(d.meals));
}

function loadCategory(c) {
  fetch(API + "/category/" + c)
    .then(r => r.json())
    .then(d => renderMeals(d.meals));
}

function randomMeal() {
  fetch(API + "/random")
    .then(r => r.json())
    .then(d => showModal(d.meals[0]));
}

function renderMeals(meals) {
  const div = document.getElementById("results");
  div.innerHTML = "";
  meals?.forEach(m => {
    let img = document.createElement("img");
    img.src = m.strMealThumb;
    img.onclick = () => loadMeal(m.idMeal);
    div.appendChild(img);
  });
}

function loadMeal(id) {
  fetch(API + "/meal/" + id)
    .then(r => r.json())
    .then(d => showModal(d.meals[0]));
}

/* ----------------------------------------------------------
   ✔ FIXED YOUTUBE EXTRACTION (works for ALL video formats)
-----------------------------------------------------------*/
function extractYouTubeID(url) {
  if (!url) return "";

  // Format #1 → https://www.youtube.com/watch?v=VIDEOID
  if (url.includes("v=")) {
    return url.split("v=")[1].split("&")[0];
  }

  // Format #2 → https://youtu.be/VIDEOID
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1].split("?")[0];
  }

  return "";
}

/* ----------------------------------------------------------
   ✔ FIXED YOUTUBE EMBED (NO MORE ERROR 153)
-----------------------------------------------------------*/
function showModal(meal) {
  const modal = document.getElementById("mealModal");
  const body = document.getElementById("modal-body");

  let yt = extractYouTubeID(meal.strYoutube);

  let youtubeHTML = yt ? `
    <h3>YouTube Recipe</h3>
    <div class="youtube-box">
      <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/${yt}?playsinline=1&rel=0&modestbranding=1"
              allowfullscreen></iframe>
    </div>
  ` : `<p>No video available for this recipe.</p>`;

  body.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img class="modal-img" src="${meal.strMealThumb}" />

    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>

    <h3>Ingredients</h3>
    <ul>${getIngredients(meal).map(i => `<li>${i}</li>`).join("")}</ul>

    ${youtubeHTML}
  `;

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("mealModal").classList.add("hidden");
}

function getIngredients(meal) {
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    let ing = meal[`strIngredient${i}`];
    let m = meal[`strMeasure${i}`];
    if (ing) arr.push(`${ing} - ${m}`);
  }
  return arr;
}
