import axios from "axios";
import {useAppDispatch} from "../store";
import {useForm} from "react-hook-form";
import {requestPostLogin} from "../stores/auth";

export const Login = (props) => {
	const dispatch = useAppDispatch();
	const {handleSubmit, errors, register} = useForm();

	const onSubmit = data => {
		const params = {
			user: {
				email: data.email,
				password: data.password,
			}
		}
		dispatch(requestPostLogin(params));
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
