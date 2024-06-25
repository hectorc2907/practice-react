import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

export function App() {
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputEl = inputRef.current;
    const value = inputEl.value;
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Avenger, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
