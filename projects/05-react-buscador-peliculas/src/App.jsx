import "./App.css";
import responseMovies from "./mocks/with-results.json";
import withoutResult from "./mocks/no-result.json";
import { Movies } from "./components/Movies";

export function App() {
  const movies = responseMovies.Search;
  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form">
          <input placeholder="Avenger, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  );
}
