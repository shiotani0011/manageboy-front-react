import axios from "axios";
import { DEFAULT_API_LOCALHOST } from "../config/env";

export const fetchMember = (memberId) => {
  return axios
    .get(`${DEFAULT_API_LOCALHOST}/api/members/${memberId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
