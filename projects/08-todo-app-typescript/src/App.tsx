import { Copyright } from "./components/Copyright";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { useTodos } from "./hooks/useTodoFirst";

const App: React.FC = () => {
  const {
    handleCompleted,
    handleSave,
    handleRemove,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos();
  return (
    <>
      <div className="todoapp">
        <Header saveTodo={handleSave} />
        <Todos
          removeTodo={handleRemove}
          setCompleted={handleCompleted}
          setTitle={handleUpdateTitle}
          todos={filteredTodos}
        />
      </div>
      <Copyright />
    </>
  );
};

export default App;
