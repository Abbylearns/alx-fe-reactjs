import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Zustand Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
