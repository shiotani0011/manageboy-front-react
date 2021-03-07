import axios from "axios";
import {API_ENDPOINT} from "../config/env";

export const postLogin = async (params) => {
	try {
		const response = await axios.post(`${API_ENDPOINT}/auth/login`, params, {withCredentials: true});
		return response.data;
	} catch (error) {
		console.error("registration error", error);
	}
};
