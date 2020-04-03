import {
  GET_BOOKS,
  POST_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK
} from "../config/constanst";
import { API } from "../config/api";

export const get_books = () => {
  return {
    type: GET_BOOKS,
    payload: async () => {
      const res = await API.get("/index");
      const { data } = res.data;
      return data;
    }
  };
};

export const post_book = data => {
  return {
    type: POST_BOOK,
    payload: async () => {
      const res = await API.post("/store", data);
      const { book } = res.data;
      return book;
    }
  };
};

export const update_book = (data, id) => {
  return {
    type: UPDATE_BOOK,
    payload: async () => {
      const res = await API.put(`/update/${id}`, data);
      const { book } = res.data;
      return book;
    }
  };
};

export const delete_book = id => {
  return {
    type: DELETE_BOOK,
    payload: async () => {
      const res = await API.delete(`/destroy/${id}`);
      const { data } = res.data;
      return data;
    }
  };
};
