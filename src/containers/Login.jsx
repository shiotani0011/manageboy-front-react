import axios from "axios";
import {useAppDispatch} from "../store";
import {useForm} from "react-hook-form";

export const Login = (props) => {
	const dispatch = useAppDispatch();
	const {handleSubmit, errors, register} = useForm();

	const onSubmit = data => console.log(data);

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
