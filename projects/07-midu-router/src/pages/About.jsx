import { navigate } from "../App";

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1805291672273575936/IlcQEzur_400x400.jpg"
          alt="mi foto"
        />
        <p>Hola!, estoy creando un React Router desde cero</p>
      </div>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
