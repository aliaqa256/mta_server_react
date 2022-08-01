// register user component function
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import MyInput from "../MyInput";
import { useFormik } from "formik";
import { AddCreditSchema } from "../../validations/AddCreditValodations";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AddCredit = (props) => {
	const fetchData = useAxios();
	let navigate = useNavigate();

	const handleSubmit = async (values) => {
		const data = {
			...values,
		};
		try {
			const response = await fetchData("/auth/create-order/", {
				method: "POST",
				data: data,
			});
			console.log(response);
			if (response.status === 200) {
				// reirect to payment page
                // window.location.href = response.data.url;
                window.open(response.data.link);
			} else {
				toast.error("خطایی رخ داد");
			}
		} catch (err) {
			toast.error("خطایی رخ داد");
		}
	}

const formik = useFormik( {
    initialValues: {
        amount: "",
    },
    validationSchema: AddCreditSchema,
    onSubmit: ( values ) =>
{
        handleSubmit( values );
        },
	});

	return (
		<IsLogin>
				<Spinnable>
					<div className="container">
						<div className="row">
							<div className="col-md-6 m-auto">
								<h1 className={` text-white  display-4 text-center `}>حساب خود را شارژ کنید</h1>

								<form className="" onSubmit={formik.handleSubmit}>
									<MyInput
										id="amount"
										type="text"
										name="amount"
										placeholder="مقدار به تومن"
										lable="amount"
										formik={formik}
									/>

									<button
										type="submit"
										className="btn btn-primary btn-block btn-lg form-control register-btn my-4 "
									>پرداخت									</button>
								</form>
								
							</div>
						</div>
					</div>
				</Spinnable>
		</IsLogin>
	);
};

export default AddCredit;
