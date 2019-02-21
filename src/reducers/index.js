import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export default reducers;
