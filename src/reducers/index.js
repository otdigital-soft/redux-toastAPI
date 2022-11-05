import { combineReducers } from "redux";
import { todoReducer } from "./reducerTodo";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
