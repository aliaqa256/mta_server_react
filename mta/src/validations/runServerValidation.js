import * as Yup from "yup";

export const RunServerSchema = Yup.object().shape({
	servername: Yup.string().required(" نام سرور را وارد کنید"),
});
