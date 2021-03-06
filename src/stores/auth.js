import {createSlice} from '@reduxjs/toolkit';
import {postLogin} from "../apis/auth.api";

const initialState = {};

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		postLoginRequest: (state) => {
		},
		postLoginSuccess: (state) => {
		},
		postLoginFailure: (state) => {
		},
	},
});

export default slice.reducer;

export const {
	postLoginSuccess,
	postLoginFailure,
	postLoginRequest,
} = slice.actions;

export const requestPostLogin = (params) => async (dispatch) => {
	dispatch(postLoginRequest());
	try {
		const data = await postLogin(params);
		if (data) {
			// ログイン成功、セッション格納
		} else {
			// ログイン失敗
		}
		dispatch(postLoginSuccess());
	} catch (error) {
		dispatch(postLoginFailure());
	}
};
