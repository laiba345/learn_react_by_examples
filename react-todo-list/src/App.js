import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList foo="hello foo" />
    </div>
  );
}

export default App;
