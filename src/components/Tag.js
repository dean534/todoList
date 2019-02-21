import React from "react";

function Tag({ onClick, title, filter, en }) {
  return (
    <li
      onClick={onClick}
      style={{
        backgroundColor: "white",
        width: "100%",
        textAlign: "center",
        border: "1px solid",
        borderRadius: "8px 8px 0 0",
        borderBottom: filter === en ? "none" : "1px solid"
      }}
    >
      <button
        style={{ border: "none", background: "none", fontWeight: "bold" }}
      >
        {title}
      </button>
    </li>
  );
}

export default Tag;
