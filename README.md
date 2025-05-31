# 🎬 ReelVibe

**ReelVibe** is a modern movie discovery app built with **ReactJS**, designed to help users explore trending films and search for their favorite movies using data from **The Movie Database (TMDB)**. It demonstrates essential React concepts like functional components, props, state, hooks, conditional rendering, and API integration. It also uses **Appwrite** as a Backend-as-a-Service (BaaS) to track trending search terms and persist data.

---

## 🚀 Features

- 🔍 Search movies using the TMDB API
- ⚡ Instant UI updates with React’s Virtual DOM
- 🔥 View trending searches based on real user behavior
- 🧠 Functional components with hooks like `useState` and `useEffect`
- 📦 Data persistence via **Appwrite**
- ⌨️ Input debouncing for optimized API calls
- 📱 Responsive design & modern styling with Tailwind CSS

---

## 🛠️ Tech Stack

| Tech         | Purpose                                |
|--------------|----------------------------------------|
| React        | Frontend framework                     |
| Vite         | Project bundler and dev server         |
| Tailwind CSS | Styling framework                      |
| TMDB API     | Movie data provider                    |
| Appwrite     | BaaS for persisting trending data      |
| Node.js      | Runtime for development environment    |
| npm          | Package manager                        |
| Git          | Version control                        |

---

## 🧪 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/isharaU/ReelVibe.git
cd reelvibe
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file in the root with the following:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

### 4. Start the dev server

```bash
npm run dev
```

---

## 🧠 Key Concepts Learned

* **JSX & Functional Components**
* **Props & Component Reuse**
* **React State & `useState`**
* **Side Effects with `useEffect`**
* **Conditional Rendering**
* **Custom Hooks (debounced input)**
* **API Integration & Fetching**
* **Error/loading states**
* **Environment Variables**
* **Using Appwrite for backend logic**
* **Basic Deployment to static server**

---

## 📦 Build & Deploy

To build the app for production:

```bash
npm run build
```

Upload the contents of the `/dist` folder to any static hosting service (like Hostinger, Vercel, Netlify, etc).

For secure deployment, consider setting up an **SSL certificate** for HTTPS.

---

## 🌱 Next Steps

After mastering this React project, consider leveling up with:

* **Next.js** – for full-stack React apps with routing, SSR, and API routes
* **TypeScript** – for type safety and better tooling
* **Redux / Zustand** – for advanced state management
* **Unit testing with Jest + React Testing Library**
* **Deploying with CI/CD pipelines**

---

## 📸 Screenshot

*Insert a screenshot of your app here once it's done!*


---

## 📫 Stay in Touch

Feel free to fork this repo, improve it, and share your version!
Questions? Ideas? Hit me up! 😄

---

**Made with 💙 using React & Vite**




