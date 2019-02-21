import React from "react";
import Section from "components/Section";
import Form from "components/Form";
import { connect } from "react-redux";
import { addTodo } from "actions/todos";

function AddTodo({ addTodo }) {
  return (
    <Section>
      <Form addTodo={addTodo} />
    </Section>
  );
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
