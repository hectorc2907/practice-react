import { Link } from "../components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <Link to="/about">Sobre Nosotros</Link>
    </div>
  );
}
