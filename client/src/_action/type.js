import { GET_TYPE } from "../config/constanst";
import { API } from "../config/api";

export const get_type = () => {
  return {
    type: GET_TYPE,
    payload: async () => {
      const res = await API.get("/type");
      const { data } = res.data;
      return data;
    }
  };
};
