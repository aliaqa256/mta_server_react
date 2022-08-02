import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MakeAdminSchema } from "./../../validations/makeAdminValidation";
import { useRef } from "react";
import MyInput from "../MyInput";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const MakeAdmin = () => {
	const { server_id } = useParams();

	const fetchData = useAxios();
	let navigate = useNavigate();
	const is_fist_timeRef = useRef(null);

	const handleSubmit = async (values) => {
		const data = {
			isfirsttime: is_fist_timeRef.current.checked,
			servernumber: server_id,
			...values,
		};
		try {
			const response = await fetchData("/auth/make-admin/", {
				method: "POST",
				data: data,
			});
			console.log(response);
			if (response.status === 200) {
				toast.success("عملیات ادمین کردن با موفقیت انحام شد ");
			} else {
				toast.error("خطایی رخ داد");
			}
		} catch (err) {
			toast.error("خطایی رخ داد");
		}
	};

	const formik = useFormik({
		initialValues: {
			rank: "",
			username: "",
		},
		validationSchema: MakeAdminSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	return (
		<>
			<IsLogin>
				<IsCreator>
					<Spinnable>
						{/* --------------------------- */}

						<div className="container">
							<div className="row">
								<div className="col-md-6 m-auto">
									<h1 className={` text-white  display-4 text-center `}>
										ادمین
									</h1>

									<form className="" onSubmit={formik.handleSubmit}>
										<MyInput
											id="username"
											type="text"
											name="username"
											placeholder="یوزر نیم بازی کن در بازی هنگام ثبت نام مثلا:aliaqa"
											lable="username"
											formik={formik}
										/>
										<MyInput
											id="rank"
											type="text"
											name="rank"
											placeholder="رنک ادمینی در سرور"
											lable="rank"
											formik={formik}
										/>

										<div>
											<input
												type="checkbox"
												id="flexSwitchCheckDefault"
												ref={is_fist_timeRef}
											/>
											<label for="flexSwitchCheckDefault">
												ایا بار اول است که به این پلیر رنک میدهید؟
											</label>
										</div>
										<button
											type="submit"
											className="btn btn-primary btn-block btn-lg form-control register-btn my-4 "
										>
											اعمال تغییر
										</button>
									</form>
								</div>
							</div>
						</div>

						{/* --------------------------- */}
					</Spinnable>
				</IsCreator>
			</IsLogin>
		</>
	);
};

export default MakeAdmin;
