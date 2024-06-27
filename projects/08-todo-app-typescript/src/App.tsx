import { Header } from "./components/Header";
import { useTodos } from "./hooks/useTodoFirst";

const App: React.FC = () => {
  const { handleSave } = useTodos();
  return (
    <>
      <div className="todoapp">
        <Header saveTodo={handleSave} />
      </div>
    </>
  );
};

export default App;
