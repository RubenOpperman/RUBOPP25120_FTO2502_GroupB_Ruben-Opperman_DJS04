# 🎧 Podcast Explorer

**Podcast Explorer** is a responsive web application built with **React**, **Vanilla JavaScript**, **TailwindCSS**, and **HTML**. It allows users to browse, filter, sort, and search podcasts fetched from an external API, with a modern UI and smooth loading experience.

---

## 🚀 Features

✅ Built with **React**, **Vanilla JavaScript**, **TailwindCSS**, and **HTML5**  
✅ Fetches real-time podcast data from an external **API**  
✅ Displays a **loading screen** while fetching data  
✅ Filter podcasts by **genre** and **sort order** (A–Z, Z–A, Newest)  
✅ **Search** podcasts by title  
✅ Responsive, clean layout with modern card design  
✅ Built using a **component-based architecture**
✅ Pagination controls with **Previous** and **Next** buttons

---

## 🛠️ Tech Stack

- **React** – JavaScript library for building UI components
- **Vanilla JavaScript** – Used for utility functions and logic
- **TailwindCSS** – Utility-first CSS framework for modern design
- **HTML5** – Semantic markup and layout
- **Vite** – Fast development server and bundler

---

## 🧠 How It Works

1. The app displays a **loading screen** while podcast data is being fetched.
2. Podcast data is retrieved from an external API using async functions.
3. Users can:
   - **Filter by genre**
   - **Sort** podcasts alphabetically or by latest update
   - **Search** by podcast title
4. Podcasts are displayed in responsive cards with titles, descriptions, images, and genre tags.
5. Pagination is implemented to display 8 podcasts per page, with controls to navigate between pages.

---

## 📁 Project Structure

```
PODCAST-LANDING-PAGE
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── apple-podcast.svg
│   │   ├── gray-calendar.svg
│   │   └── react.svg
│   ├── components/
|   |   |
|   |   ├──filter.jsx
│   │   ├── genres.jsx
│   │   ├── header.jsx
│   │   └── mainContent.jsx
|   |   ├──pageNav.jsx
│   ├── data/
│   │   ├── genreData.js
│   │   └── podcastData.js
│   ├── utils/
│   │   ├── formatDate.js
│   │   └── getGenreIds.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RubenOpperman/RUBOPP25120_FTO2502_GroupB_Ruben-Opperman_DJS04.git
```

### 2️⃣ Install Dependencies

`npm install`

### 3️⃣ Run the App

## ⚡ Vite Development

Run the app with Vite:

```bash
npm run dev
```
