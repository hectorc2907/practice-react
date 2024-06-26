import { Link } from "../components/Link";

const i18n = {
  es: {
    title: "Sobre nosotros",
    button: "Ir a la home",
    description:
      "¡Hola! Me llamo Hector y estoy creando un clon de React Router.",
  },
  en: {
    title: "About us",
    button: "Go to home page",
    description:
      "Hi! My name is Hector and I am creating a clone of React Router.",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");
  return (
    <div>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1805291672273575936/IlcQEzur_400x400.jpg"
          alt="mi foto"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </div>
  );
}
