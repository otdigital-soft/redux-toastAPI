import { toastNotify } from "../components/Toast";
import { useFetch } from "../utils/utilFetch";

import {
  ADD_TODOS,
  SET_TODOS,
  DELETE_TODOS,
  BACKEND_NOT_RESPONDING,
} from "../types/constants";

export const setTodos = () => {
  return async (dispatch) => {
    try {
      const data = await useFetch("todos", "GET", "");
      dispatch({ type: SET_TODOS, data });
    } catch (err) {
      toastNotify({ error: BACKEND_NOT_RESPONDING });
      console.error(err);
    }
  };
};

export const addTodos = (input) => {
  return async (dispatch) => {
    try {
      const data = await useFetch("todos", "POST", input);
      toastNotify(data, ADD_TODOS);
      const { createDate } = data;
      if (createDate) {
        dispatch({ type: ADD_TODOS, data });
      }
    } catch (err) {
      toastNotify({ error: BACKEND_NOT_RESPONDING });
      console.error(err);
    }
  };
};

export const deleteTodos = (id) => {
  return async (dispatch) => {
    try {
      const data = await useFetch(`todos/${id}`, "DELETE", { _id: id });
      toastNotify(data, DELETE_TODOS);
      dispatch({ type: DELETE_TODOS, data });
    } catch (err) {
      toastNotify({ error: BACKEND_NOT_RESPONDING });
      console.error(err);
    }
  };
};
