import express from "express";
import cors from "cors";
import { searchMeals, getMeal, getCategories, mealsByCategory, randomMeal } from "./mealService.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/search", async (req, res) => {
  res.json(await searchMeals(req.query.q || ""));
});

app.get("/api/meal/:id", async (req, res) => {
  res.json(await getMeal(req.params.id));
});

app.get("/api/categories", async (req, res) => {
  res.json(await getCategories());
});

app.get("/api/category/:name", async (req, res) => {
  res.json(await mealsByCategory(req.params.name));
});

app.get("/api/random", async (req, res) => {
  res.json(await randomMeal());
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
