export function renderHome() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="categories">
      <a href="#/people">People</a>
      <a href="#/films">Films</a>
      <a href="#/planets">Planets</a>
      <a href="#/species">Species</a>
      <a href="#/starships">Starships</a>
      <a href="#/vehicles">Vehicles</a>
    </div>
  `;
}
