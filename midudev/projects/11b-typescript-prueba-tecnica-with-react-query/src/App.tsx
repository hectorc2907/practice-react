import { useMemo, useState, useRef } from "react";
import "./App.css";
import { UsersList } from "./components/UsersList";
import { type User, SortBy } from "./types.d";
import { useUsers } from "./hooks/useUser";
import { Results } from "./components/Results";

function App() {
  const {
    isLoading,
    isError,
    users,
    fetchNextPage,
    hasNextPage,
    deleteUser,
    refetch,
  } = useUsers();
  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const initialUsers = useRef<User[]>([]); // Referencia a los usuarios iniciales

  // Actualizar la referencia a los usuarios iniciales cuando cambian los usuarios
  useMemo(() => {
    initialUsers.current = users;
  }, [users]);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const handleReset = () => {
    refetch();
    setFilterCountry(null); // Resetear el filtro
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

  const filteredUsers = useMemo(() => {
    return filterCountry != null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase());
        })
      : users;
  }, [users, filterCountry]);

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers;

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    };

    return filteredUsers.sort((a, b) => {
      const extractProperty = compareProperties[sorting];
      return extractProperty(a).localeCompare(extractProperty(b));
    });
  }, [filteredUsers, sorting]);

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <Results />
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY
            ? "No ordenar por país"
            : "Ordenar por país"}
        </button>
        <button onClick={handleReset}>Resetear estado</button>
        <input
          placeholder="Filtra por país"
          onChange={(e) => {
            setFilterCountry(e.target.value);
          }}
        />
      </header>
      <main>
        {users.length > 0 && (
          <UsersList
            changeSorting={handleChangeSort}
            deleteUser={deleteUser}
            showColors={showColors}
            users={sortedUsers}
          />
        )}
        {isLoading && <strong>Cargando...</strong>}
        {isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}

        {!isLoading && !isError && hasNextPage === true && (
          <button
            onClick={() => {
              void fetchNextPage();
            }}
          >
            Cargar más resultados
          </button>
        )}

        {!isLoading && !isError && hasNextPage === false && (
          <p>No hay más resultados</p>
        )}
      </main>
    </div>
  );
}

export default App;
