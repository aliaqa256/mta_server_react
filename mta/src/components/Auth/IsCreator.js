import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const IsCreator = (props) => {
	const { is_creator } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (!is_creator) {
			toast.error("شما به این صفحه دسترسی ندارید");
			navigate("/admin-login");
		}
	}, []);

    return <> { props.children }</>;
};

export default IsCreator;
