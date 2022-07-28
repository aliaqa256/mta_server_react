import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.required("نام کاربری را وارد کنید"),
	password: Yup.string()
		.required("پسورد را وارد کنید")

});
