import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, FETCH_TODO } from "type";

const initialState = [
  { id: 1, text: "practice", completed: false },
  { id: 2, text: "exercise", completed: true },
  { id: 3, text: "practice", completed: true }
];
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case FETCH_TODO:
      return action.payload;

    default:
      return state;
  }
};
export default todosReducer;
