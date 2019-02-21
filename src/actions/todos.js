import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, FETCH_TODO } from "type";
import uuidv4 from "uuid/v4";

export const toggleTodo = id => dispatch => {
  Mystorage(
    {
      type: TOGGLE_TODO,
      id
    },
    dispatch
  );
};

export const addTodo = text => dispatch =>
  Mystorage(
    {
      type: ADD_TODO,
      id: uuidv4(),
      text
    },
    dispatch
  );

export const deleteTodo = id => dispatch => {
  Mystorage(
    {
      type: DELETE_TODO,
      id
    },
    dispatch
  );
};

export const fetchTodos = () => ({
  type: FETCH_TODO,
  payload: JSON.parse(window.localStorage.getItem("todoList"))
});

const Mystorage = (action, dispatch) => {
  let state = JSON.parse(window.localStorage.getItem("todoList"))
    ? JSON.parse(window.localStorage.getItem("todoList"))
    : [];
  window.localStorage.setItem(
    "todoList",
    JSON.stringify(todoList(action, state))
  );
  dispatch(action);
};

const todoList = (action, state) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return;
  }
};
