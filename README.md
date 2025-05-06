# Movie App

Welcome to the **Movie App**, a web application that allows you to explore movies and TV shows from the omdbapi database. With this app, you can search for any movie or TV show, add it to your favorites, and manage your favorites list by removing individual items or clearing the entire list and also navigate between light and dark modes.

 
## 🚀 Features

- **Search Movies and TV Shows**  
  Search any movie or TV show using data fetched from the **OMDB API**.

- **Favorites Management (with Zustand + localStorage)**  
  - Add or remove movies and TV shows from your favorites list.  
  - Clear the entire favorites list with one click.  
  - Favorites are **persisted in localStorage**, so they remain saved even after page reloads.  

- **Responsive UI with Burger Menu**  
  Fully responsive design with a mobile-friendly **burger menu** for intuitive navigation.

- **Dark and Light Modes**  
  Seamless theme switching using **next-themes**, giving users control over their preferred look.

- **Styled with SCSS**  
  Custom styles are crafted using **SCSS** for modular, maintainable, and scalable styling.

- **Aliased Imports**  
  Clean and simplified import paths using **Next.js alias configuration** (`@/components`, `@/styles`, etc.).

- **React Icons**  
  Beautiful and consistent iconography using the **React Icons** library.

- **Pagination**  
  Displays a limited number of results per page to improve readability and UX.

- **Conditional Rendering**  
  Hides the default movie list when search results are available for a cleaner interface.

- **Server-Side Rendering (SSR)**  
  Uses **Next.js SSR** to improve performance and SEO.

- **CI/CD & Deployment**  
  Deployed on **Vercel** with **CI/CD** integration for automatic updates via GitHub.

## 🛠️ Tech Stack

- **Next.js**: A React framework for building server-rendered applications.
- **Bun**: A fast all-in-one JavaScript runtime used as the package manager and runtime for this project.
- **OMDB API**: For fetching movie and TV show data.
- **Vercel**: For deployment and CI/CD integration.
- **GitHub**: For version control and repository hosting.
- **next-themes**: For managing theme switching (dark/light modes).
- **SCSS**: For styling, making it modular, maintainable, and scalable.
- **React Icons**: For beautiful and consistent iconography.
- **Zustand**: For state management in React.
  
## 📁 Project Structure

<p align="center">
  <img src="https://github.com/reemsarhan/MovieApp/blob/main/READMEpics/diagram-export-5-6-2025-8_58_00-PM.png?raw=true" alt="Project Structure" width="800"/>
</p>

## ⚙️ Prerequisites
Before getting started, make sure you have the following installed on your system:
1. **Node.js**  
   Download it from the official [Node.js website](https://nodejs.org/).
2. **npm** (Node Package Manager)  
   **npm** comes bundled with **Node.js**. Ensure you have the latest version of **npm** installed by running:
   ```bash
   npm install -g npm
   ```
3. **bun**
  Bun is a fast all-in-one JavaScript runtime used as the package manager and runtime for this project.
  You can install Bun by running:
   ```
   curl -fsSL https://bun.sh/install | bash
   bun --version
   ```
## 🖥️ How to Run the App Locally

To run the app locally, follow these steps:

1. **Install Bun**  
   If you don't have **Bun** installed, you can install it by following the instructions on the official [Bun website](https://bun.sh/).

2. **Clone the Repository**  
   Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/your-username/MovieApp.git
   cd movie-app
   ```
3. **Install Dependencies**
Install the required dependencies using Bun:
```
bun install
```
Run the App
Start the development server:
```
bun dev
```
Open the App
Copy the localhost URL provided in the terminal (e.g., http://localhost:3000). Paste it into your browser's address bar and press Enter

## 🚀 Deployment

The app is deployed and can be accessed live at the following URL:

**[Movie App - Live Demo](https://movie-app-henna-sigma.vercel.app/)**  
  ### https://movie-app-henna-sigma.vercel.app/
<p align="center">
  <img src="https://github.com/reemsarhan/MovieApp/blob/main/READMEpics/deployment.png" width="400"/>
</p>


## Some UI from the website
### 🌗 Light and Dark Mode Views

Below are screenshots of the MovieApp interface in both light and dark modes, showcasing responsive layout and theming:

<p align="center">
  <img src="https://github.com/reemsarhan/MovieApp/blob/main/READMEpics/light%20mode.png" alt="Light Mode" width="48%"/>
  <img src="https://github.com/reemsarhan/MovieApp/blob/main/READMEpics/full%20screen.png" alt="Dark Mode" width="48%"/>
</p>

---

###  Responsive Navigation (Hamburger Menu)

On smaller screens, the navigation bar collapses into a hamburger menu for a cleaner mobile-friendly layout:

<p align="center">
  <img src="https://github.com/reemsarhan/MovieApp/blob/main/READMEpics/hamburger.png" alt="Hamburger Menu" width="40%"/>
</p>
