import React from "react";

function Section({ children }) {
  const styles = {
    section: {
      padding: "8px 12px",

    }
  };
  return <div style={styles.section}>{children}</div>;
}

export default Section;
