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


const CreateServer = (props) => {
	const fetchData = useAxios();
	let navigate = useNavigate();


	const handleSubmit = async (values) => {
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
				if (
					response.response.status === 400 ||
					response.response.status === 403
				) {
					toast.error("خطایی رخ داد");
				}
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
						<h1 className={` text-white  display-4 text-center `}>ورود</h1>

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
					</div>
				</div>
			</div>
                </Spinnable>
                 </IsCreator>
            </IsLogin>
	);
};

export default CreateServer;
