import React from "react";

function Title({ children }) {
  const styles = {
    title: { fontSize: "20px", fontWeight: "bold", padding: "8px 12px",textAlign:"center" }
  };
  return <div style={styles.title}>{children}</div>;
}

export default Title;
