import useTodoStore from "../store/useTodoStore";

export default function TodoList() {
  const { todos, removeTodo } = useTodoStore();

  if (todos.length === 0) {
    return <p>No todos yet ✅</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo, index) => (
        <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span>{todo}</span>
          <button onClick={() => removeTodo(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
