import * as Yup from "yup";

export const MakeAdminSchema = Yup.object().shape({
	username: Yup.string()
        .required( "نام کاربری را وارد کنید" ),
    rank: Yup.number("عدد بین صفر تا ده").min( 0, "باید بین صفر تا ده باشد" ).max( 10, "باید بین صفر تا ده باشد" ).required( "رنک را وارد کنید" ), 
});
