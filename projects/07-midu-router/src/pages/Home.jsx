import { navigate } from "../App.jsx";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <button onClick={() => navigate("/about")}>Sobre Nosotros</button>
    </div>
  );
}
