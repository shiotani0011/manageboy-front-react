import axios from "axios";
import { DEFAULT_API_LOCALHOST } from "../config/env";

export const postLogin = async (params) => {
  try {
    const response = await axios.post(
      `${DEFAULT_API_LOCALHOST}/api/auth/login`,
      params,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("registration error", error);
  }
};

export const fetchMembers = () => {
  return axios
    .get(`${DEFAULT_API_LOCALHOST}/api/members`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
