import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import {
	loginAction,
	loadingAction,
	logoutAction,
	setCreatorAction,
	setMoneyAction,
} from "../../redux/authSlicer";

const IsCreator = (props) => {
	const { is_creator, isAuthenticated } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispach = useDispatch();
	const fetchData = useAxios();
	useEffect(() => {
		const local_is_creator = localStorage.getItem("is_creator");
		if (!is_creator && local_is_creator) {
			const preload = async () => {
				const IsLogin = async () => {
					try {
						const response = await fetchData("auth/is_login/", {
							method: "GET",
						});
						if (response.status === 200 && response.data.is_creator) {
							return response.data;
						} else {
							return "no";
						}
					} catch (error) {
						console.log(error);
					}
				};

				if (!isAuthenticated) {
					const response = await IsLogin();
					if (response === "no") {
						dispach(logoutAction());

						toast.error("شما به این صفحه دسترسی ندارید");
						navigate("/");
					} else {
						dispach(loginAction(response));
						dispach(setCreatorAction(response.is_creator));
						dispach(setMoneyAction(response.money));
						localStorage.setItem("is_login", true);
						localStorage.setItem("is_creator", response.is_creator);
					}
				}
			};
			preload();
		}
	}, []);

	return <> {props.children}</>;
};

export default IsCreator;
