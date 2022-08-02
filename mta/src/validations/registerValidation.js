import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
	username: Yup.string()
		.required("نام کاربری را وارد کنید")
		.min(3, "نام کاربری باید حداقل 3 کاراکتر باشد"),
	email: Yup.string()
		.required("ایمیل را وارد کنید")
		.email("ایمیل وارد شده معتبر نمی باشد"),
	password: Yup.string()
		.required("پسورد را وارد کنید")
		.min(8, "پسورد باید حداقل 8 کاراکتر باشد")
		.matches(
			//must contain letter and number
			"([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*",
			"پسورد باید دارای 8  کارکتر هم عدد و حرف باشد"
		),
	confirm_password: Yup.string()
		.required("تکرار پسورد را وارد کنید")
		.oneOf([Yup.ref("password"), null], "پسورد و تکرار پسورد باید یکسان باشد"),
});
