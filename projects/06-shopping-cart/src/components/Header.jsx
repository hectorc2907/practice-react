import { Filter } from "./Filter";

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filter changeFilters={changeFilters} />
    </header>
  );
}
