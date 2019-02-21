import React from "react";

function Todo({ todo, toggleTodo, deleteTodo }) {
  const { text, completed } = todo;
  const styles = {
    list: {
      margin: "8px 4px",
      padding: "8px 4px",
      display: "flex",
      alignItems: "center",
      borderRadius: "4px",
      border: "1px solid"
    },
    text: { textDecoration: completed ? "line-through" : null },
    icon:{marginLeft:"auto"}
  };
  return (
    <li style={styles.list}>
      <input
        type="checkbox"
        checked={completed ? "checked" : false}
        onChange={toggleTodo}
      />
      <span style={styles.text}>{text}</span>
      <i style={styles.icon} onClick={deleteTodo} className="fas fa-trash"></i>
    </li>
  );
}

export default Todo;
