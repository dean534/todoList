import React from "react";

function Background({ children }) {
  const styles = {
    background: {
      width: "100vw",
      height: "100vh",
      background:
        "url(https://images.pexels.com/photos/933154/pexels-photo-933154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center center",
      backgroundSize: "cover"
    },
    panel: {
      backgroundColor: "#C0C0C0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "400px",
      width: "300px",
      borderRadius: "12px",
      border: "1px solid",
      boxShadow: "1px 2px"
    }
  };
  return (
    <div style={styles.background}>
      <div style={styles.panel}>{children}</div>
    </div>
  );
}

export default Background;
