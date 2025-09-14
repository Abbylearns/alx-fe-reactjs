import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>Add</button>
    </form>
  );
}
