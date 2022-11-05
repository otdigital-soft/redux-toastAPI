import { ADD_TODOS, SET_TODOS, DELETE_TODOS } from "../types/constants";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      return action.data;
    }
    case ADD_TODOS: {
      return [...state, action.data];
    }
    case DELETE_TODOS: {
      return [...state.filter((item) => item._id !== action.data._id)];
    }
    default:
      return state;
  }
};
