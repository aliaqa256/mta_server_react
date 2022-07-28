// register user component function
import styles from "./Register.module.css";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import MyInput from "../MyInput";
import { useFormik } from "formik";
import { RegisterSchema } from "../../validations/registerValidation";

const Register = (props) => {
	const fetchData = useAxios();
	const handleSubmit = async (values) => {
		if (values['password'] !== values['confirm_password']) {
			toast.error("پسورد ها یکی نیستند");
		} else {
			try {
				const response = await fetchData("/auth/register/", {
					method: "POST",
					data: values,
				});
				if (response.status === 201) {
					toast.success( "ثبت نام با موفقیت انجام شد" );
					 
				} else {
					toast.error("خطا در ثبت نام");
				}
			} catch (err) {
				toast.error("خطا در ثبت نام");
			}
		}
	};
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirm_password: "",
		},
		validationSchema: RegisterSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});
	return (
		<Spinnable>
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<h1 className={` ${styles.color_white}  display-4 text-center `}>
							ثبت نام
						</h1>
						<form className="" onSubmit={formik.handleSubmit}>
							<MyInput
								id="username"
								type="text"
								name="username"
								placeholder="نام کاربری"
								lable="username"
								formik={formik}
							/>
							<MyInput
								id="email"
								type="email"
								name="email"
								placeholder="ایمیل"
								lable="email"
								formik={formik}
							/>
							<MyInput
								id="password"
								type="password"
								name="password"
								placeholder="پسورد"
								lable="password"
								formik={formik}
							/>
							<MyInput
								id="confirm_password"
								type="password"
								name="confirm_password"
								placeholder="تکرار پسورد"
								lable="confirm password"
								formik={formik}
							/>
							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg form-control register-btn my-4 "
							>
								ثبت نام
							</button>
						</form>
					</div>
				</div>
			</div>
		</Spinnable>
	);
};

export default Register;
