import React from "react";
import { connect } from "react-redux";
import List from "components/List";
import Todo from "components/Todo";
import { toggleTodo, deleteTodo, fetchTodos } from "actions/todos";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos, toggleTodo, filter, deleteTodo } = this.props;
    let filtedTodos = todos
      ? todos.filter(todo => {
          switch (filter) {
            case "all":
              return true;
            case "yet":
              return todo.completed === false;
            case "completed":
              return todo.completed === true;
            default:
              return console.log("filter not found");
          }
        })
      : [];
    return (
      <List border height="270px" bgColor="white" borderRadius>
        {filtedTodos.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </List>
    );
  }
}
const mapStateToProps = state => ({ todos: state.todos, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
