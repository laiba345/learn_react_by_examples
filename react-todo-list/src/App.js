import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  function addTodo(t) {
    console.log('addTodo:', t)
  }
  return (
    <div>
      <TodoInput addTodo={ addTodo } />
      <TodoList foo="hello foo" />
    </div>
  );
}

export default App;
