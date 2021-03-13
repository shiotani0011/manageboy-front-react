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
		if(data.status === 'error') {
			// エラー処理
		} else {
			// localStorageにトークンをセットする
			localStorage.setItem('token', data.token);
		}
	} catch (error) {
		// ログイン失敗
		console.error("error!!!")
		dispatch(postLoginFailure());
	}
};
