import { type User } from "../type.d";

interface Props {
  showColors: boolean;
  users: User[];
}

export function UsersList({ showColors, users }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? "#333" : "#555";
          const color = showColors ? backgroundColor : "transparent";
          const tcolor = showColors ? "white" : "black";
          return (
            <tr
              key={user.email}
              style={{ backgroundColor: color, color: tcolor }}
            >
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Borrar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
