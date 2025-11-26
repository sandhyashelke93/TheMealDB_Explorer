import axios from "axios";
import { getCache, setCache } from "./cache.js";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function fetchData(cacheKey, url, ttl = 300) {
  const c = getCache(cacheKey);
  if (c) return c;
  const r = await axios.get(url);
  setCache(cacheKey, r.data, ttl);
  return r.data;
}

export const searchMeals = q => fetchData(`s:${q}`, `${BASE_URL}/search.php?s=${q}`);
export const getMeal = id => fetchData(`m:${id}`, `${BASE_URL}/lookup.php?i=${id}`);
export const getCategories = () => fetchData("cat", `${BASE_URL}/categories.php`);
export const mealsByCategory = c => fetchData(`cat:${c}`, `${BASE_URL}/filter.php?c=${c}`);
export const randomMeal = () => fetchData("random", `${BASE_URL}/random.php`, 60);
