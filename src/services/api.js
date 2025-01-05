const BASE_URL = "https://swapi.py4e.com/api/";

export async function fetchCategoryData(category) {
  try {
    const response = await fetch(`${BASE_URL}${category}/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${category}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function getRandomItem(data) {
  if (!data || data.length === 0) return null;
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}
