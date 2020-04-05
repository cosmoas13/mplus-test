import { GET_AUTHOR } from "../config/constanst";
import { API } from "../config/api";

export const get_author = () => {
  return {
    type: GET_AUTHOR,
    payload: async () => {
      const res = await API.get("/author");
      const { data } = res.data;
      return data;
    }
  };
};
