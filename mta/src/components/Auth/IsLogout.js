import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const IsLogin = (props) => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, []);

	return <> {props.children}</>;
};

export default IsLogin;
