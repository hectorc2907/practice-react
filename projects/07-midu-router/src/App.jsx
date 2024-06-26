import { useState } from "react";
import "./App.css";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <a href="/about">Sobre Nosotros</a>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1805291672273575936/IlcQEzur_400x400.jpg"
          alt="mi foto"
        />
        <p>Hola!, estoy creando un React Router desde cero</p>
      </div>
      <a href="/">Home</a>
    </div>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <main>
      <div>Midu Router</div>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
