import * as Yup from "yup";

export const AddCreditSchema = Yup.object().shape({
	amount: Yup.number().min(10000,"حد اقل 10 هزار تومان").required(" مقدار را وارد کنید"),
});
