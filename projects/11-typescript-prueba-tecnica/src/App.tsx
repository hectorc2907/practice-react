import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api?rsults=100`)
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
    </>
  );
}

export default App;
