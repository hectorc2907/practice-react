import "./App.css";
import { useCatFact } from "./hooks/useCatFact";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const handleClick = async () => {
    refreshFact();
  };
  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {/* {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )} */}
    </main>
  );
}
