import React from "react";

function Form({ addTodo }) {
  const styles = {
    form: {
      backgroundColor:"white",
      height: "24px",
      display: "flex",
      borderRadius: "4px",
      border: "1px solid",
      overFlow: "hidden"
    },
    input: {
      width: "100%",
      outline: "none",
      border: "none",
      backgroundColor: "rgba(0,0,0,0)",
      textIndent:"8px"
    },
    btn: { border: "none", backgroundColor: "rgba(0,0,0,0)" }
  };
  let input;
  return (
    <form
      style={styles.form}
      onSubmit={e => {
        e.preventDefault();
        addTodo(input.value);
      }}
    >
      <input style={styles.input} type="text" ref={node => (input = node)} />
      <button style={styles.btn}>Add</button>
    </form>
  );
}

export default Form;
