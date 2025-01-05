import { renderHome } from "./pages/home.js";
import { fetchCategoryData, getRandomItem } from "./services/api.js";

async function renderCategory(category) {
  const data = await fetchCategoryData(category);
  const randomItem = getRandomItem(data);

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="card">
      <h2>${randomItem.name || randomItem.title}</h2>
      <p>${randomItem.gender || randomItem.director || "No details available"}</p>
      <button id="new-item">Get Random Item</button>
    </div>
  `;

  document.getElementById("new-item").addEventListener("click", () => {
    renderCategory(category);
  });
}

function router() {
  const hash = window.location.hash.slice(2); 
  if (!hash) {
    renderHome();
  } else {
    renderCategory(hash);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
