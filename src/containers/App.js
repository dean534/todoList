import React, { Component } from "react";
import Background from "components/Background";
import Desktop from "containers/Desktop";
import AddTodo from "containers/AddTodo";
import Title from "components/Title";

class App extends Component {
  render() {
    return (
      <Background>
        <Title>React 待辦事項</Title>
        <Desktop />
        <AddTodo />
      </Background>
    );
  }
}

export default App;
