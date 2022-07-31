// register user component function
import styles from "./Register.module.css";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import MyInput from "../MyInput";
import { useFormik } from "formik";
import { LoginSchema } from "../../validations/loginValidation";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/authSlicer";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Islogout from "../Auth/IsLogout";

const Login = (props) => {
	const fetchData = useAxios();
	const serverRef = useRef(0);
	const dispatch = useDispatch();

	const [servers, setServers] = useState([]);

	useEffect(() => {
		const getListOfServers = async () => {
			try {
				const response = await fetchData("auth/servers-list", {
					method: "GET",
				});
				if (response.status === 200) {
					setServers(response.data);
				} else {
					toast.error("خطا در دریافت لیست سرورها");
				}
			} catch (error) {
				console.log(error);
				toast.error("خطا در برقراری ارتباط با سرور");
			}
		};

		getListOfServers();
	}, [fetchData]);

	const handleSubmit = async (values) => {
		const data = {
			server_number: serverRef.current.value,
			...values,
		};
		try {
			const response = await fetchData("/auth/mta-login/", {
				method: "POST",
				data: data,
			});
			console.log(response);
			if (response.status === 200) {
				console.log("200");
				localStorage.setItem("token", response.data.data.access);
				const user = jwt_decode(response.data.data.access);
				dispatch(loginAction(user));

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
		} catch (err) {
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
		<Islogout>
			<Spinnable>
				<div className="container">
					<div className="row">
						<div className="col-md-6 m-auto">
							<h1 className={` ${styles.color_white}  display-4 text-center `}>
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

								<label for="server">سرور</label>
								<div className="form-group my-2 input-group  ">
									<select
										name="server"
										id="server"
										className="form-control"
										ref={serverRef}
									>
										{servers.map((server) => (
											<option key={server.id} value={server.id}>
												{server.name}
											</option>
										))}
									</select>
									<div class="input-group-prepend ">
										<label
											class="input-group-text gr-txt"
											for="inputGroupSelect01 "
										>
											<i className="far fa-caret-square-down"></i>
										</label>
									</div>
								</div>
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
		</Islogout>
	);
};

export default Login;
