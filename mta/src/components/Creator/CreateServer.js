// register user component function
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import MyInput from "../MyInput";
import { useFormik } from "formik";
import { RunServerSchema } from "../../validations/runServerValidation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CreateServer = (props) => {
	const { money } = useSelector((state) => state.auth);
	const fetchData = useAxios();
	let navigate = useNavigate();


	const handleSubmit = async ( values ) =>
	{
		

				if (money < 100) {
					toast.error("پول شما کمتر از صد تومن است");
					return;
				}
		const data = {
			...values,
		};
		try {
			const response = await fetchData("/auth/runserver/", {
				method: "POST",
				data: data,
			});
			console.log(response);
			if (response.status === 200) {

                toast.success( "سرور با موفقیت ساخته شد " );
				toast.info( "سرور در حال ران شدن است کمتر از 5 دقیقه صبر کنید" );
				navigate("/myservers");
			} else {
					toast.error("خطایی رخ داد");
			}
		} catch (err) {
			toast.error("خطایی رخ داد");
		}
	};

	const formik = useFormik({
		initialValues: {
			servername: "",
		},
		validationSchema: RunServerSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

    return (
			<IsLogin>
				<IsCreator>
					<Spinnable>
						<div className="container">
							<div className="row">
								<div className="col-md-6 m-auto">
									<h1 className={` text-white  display-4 text-center `}>
										ورود
									</h1>

									<form className="" onSubmit={formik.handleSubmit}>
										<MyInput
											id="servername"
											type="text"
											name="servername"
											placeholder="نام سرور"
											lable="servername"
											formik={formik}
										/>

										<button
											type="submit"
											className="btn btn-primary btn-block btn-lg form-control register-btn my-4 "
										>
											ساخت سرور
										</button>
									</form>
									<ul className="text-white  my-1">
										<li className="text-white my-1">
											در صورت ساخت سرور 100 تومن از کیف پول شما کم میشود
										</li>
										<li className="text-white my-1">
											بعد از خرید سرور بعد از حدود پنج دقیقه سرور ساخته میشود
										</li>
										<li className="text-white my-1">
											در لیست سرور های من پورت سرور شما نوشته شده است
										</li>
										<li  className="text-white my-1"> مثال:62.3.41.227:3002</li>
									</ul>
								</div>
							</div>
						</div>
					</Spinnable>
				</IsCreator>
			</IsLogin>
		);
};

export default CreateServer;
