
## 📌 Repository Structure 

```
TheMealDB-Explorer/
├── backend/
│   ├── server.js
│   ├── mealService.js
│   ├── cache.js
│   ├── package.json
│   └── ...other backend files
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── ...other UI files
└── README.md  
```
### 📌 README.md

# 🍽️ TheMealDB Explorer

A full-stack web application that allows users to explore meals, search recipes, browse categories, and view detailed instructions using **TheMealDB API**.

---

## 🚀 Tech Stack

| Layer        | Technology                             |
| ------------ | -------------------------------------- |
| Frontend     | HTML, CSS, JavaScript                  |
| Backend      | Node.js, Express                       |
| External API | TheMealDB (test API key: `1`)          |
| Caching      | In-Memory Cache (Extensible for Redis) |

---

## ✨ Features

✔ Search meals by name
✔ Browse categories (Chicken, Vegan, etc.)
✔ Random Meal ― *“I’m feeling hungry”* button
✔ Ingredients list & cooking instructions
✔ YouTube embed for recipe videos
✔ Fully responsive UI
✔ Backend caching for faster performance

---

## 📁 Project Structure

```
TheMealDB-Explorer
├── backend     # REST API with caching
└── frontend    # UI Layer
```

---

## 🖥️ Getting Started

### 🔹 1️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Backend starts at:
➡ [http://localhost:5000](http://localhost:5000)

---

### 🔹 2️⃣ Frontend Setup

Just open this file in browser:

```
frontend/index.html
```

OR use a Live Server extension (VS Code)

UI will communicate with backend via:

```
http://localhost:5000/api/
```

---

## 🔌 Backend API Endpoints

| Method | Endpoint                   | Description           |
| ------ | -------------------------- | --------------------- |
| GET    | `/api/search?name=chicken` | Search meals by name  |
| GET    | `/api/categories`          | Get meal categories   |
| GET    | `/api/random`              | Get a random meal     |
| GET    | `/api/meal/:id`            | Get full meal details |

✔ Follows REST design
✔ Uses cached requests to reduce external API calls

