import React from "react";

function List({ children, flex, border, height,bgColor,borderRadius }) {
  const styles = {
    list: {
      backgroundColor: bgColor ? bgColor : null,
      overflow: "auto",
      margin: "0",
      padding: "0",
      listStyle: "none",
      display: flex ? "flex" : null,
      border: border ? "1px solid" : null,
      borderTop: "none",
      borderRadius: borderRadius? "0 0 4px 4px":null,
      height: height ? height : null
    }
  };
  return <ul style={styles.list}>{children}</ul>;
}

export default List;
