import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Page404 from './pages/404'
import { Router } from "./components/Router";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
];

function App() {
  return (
    <main>
      <div>Midu Router</div>
      <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  );
}

export default App;
