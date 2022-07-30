// register user component function
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import MyInput from "../MyInput";
import { useFormik } from "formik";
import { LoginSchema } from "../../validations/loginValidation";
import { useDispatch } from "react-redux";
import { loginAction, setCreatorAction } from "../../redux/authSlicer";
import jwt_decode from "jwt-decode";

const Login = (props) => {
	const fetchData = useAxios();
	const dispatch = useDispatch();




	const handleSubmit = async (values) => {
		const data = {
			...values,
		};
		try {
			const response = await fetchData("/auth/login/", {
				method: "POST",
				data: data,
			} );
			console.log(response);
            if ( response.status === 200 )
            {
				localStorage.setItem("token", response.data.access);
				const user = jwt_decode(response.data.access);
                dispatch( loginAction( user ) );
                dispatch( setCreatorAction( true ) );
				toast.success("شما با موفقیت وارد شدید");
			} else {
				if (
					response.response.status === 400 ||
					response.response.status === 403
				) {
					toast.error("   نام کاربری یا پسورد اشتباه است");
					toast.info("  لطفا به انتخاب سرور خود نیز دقت کنید");
				}
			}
		} catch ( err )
		{
			console.log(err);
			toast.error("خطا در ورود");
		}
	};

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	return (
		<Spinnable>
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<h1 className={` text-white  display-4 text-center `}>
							ورود
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
								id="password"
								type="password"
								name="password"
								placeholder="پسورد"
								lable="password"
								formik={formik}
							/>


					

							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg form-control register-btn my-4 "
							>
								ورود
							</button>
						</form>
					</div>
				</div>
			</div>
		</Spinnable>
	);
};

export default Login;
