import { useEffect, useState } from "react";
import "./App.css";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event("pushstate");
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <button onClick={() => navigate("/about")}>Sobre Nosotros</button>
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
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main>
      <div>Midu Router</div>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
