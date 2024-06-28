import { useEffect, useState } from "react";
import "./App.css";
import { type User } from "./type";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=100`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <UsersList users={users} />
    </>
  );
}

export default App;
