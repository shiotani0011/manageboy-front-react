import axios from "axios";
import {useAppDispatch} from "../store";
import {useForm} from "react-hook-form";
import {requestPostLogin} from "../stores/auth";
import {useHistory} from "react-router-dom";

export const Login = (props) => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const {handleSubmit, errors, register} = useForm();

	const onSubmit = async (data) => {
		const params = {
			user: {
				email: data.email,
				password: data.password,
			}
		}
		await dispatch(requestPostLogin(params));
		const token = await localStorage.getItem('token');
		if(token !== null) {
			history.push('/');
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<p>ログイン</p>
			<input
				type="email"
				name="email"
				placeholder="メールアドレス"
				ref={register({required: true})}
			/>
			<input
				type="password"
				name="password"
				placeholder="パスワード"
				ref={register({required: true})}
			/>
			<button type="submit">ログイン</button>
		</form>
	);
};
