// axios custom hook
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadingAction } from "../redux/authSlicer";

const useAxios = (url, options) => {
	const dispatch = useDispatch();

	const axiosInstance = axios.create({
		baseURL: "http://localhost:8000/api/",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	axiosInstance.interceptors.request.use(async (request) => {
		try {
			const accessToken = localStorage.getItem("token");
			if (accessToken) {
				request.headers.Authorization = `Bearer ${accessToken}`;
			}
			if (accessToken == null) {
				return request;
			}
		} catch (err) {
			console.log( err );
			console.log("in axios interceptor");
		}
	});

	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response.status === 401) {
				// TODO navigate to login page and clear local storage
			}

			return error;
		}
	);

	const fetchData = async (url, options) => {
		dispatch(loadingAction(true));
		try {
			const response = await axiosInstance(url, options);
			dispatch(loadingAction(false));
			return response;
		} catch (error) {
			dispatch(loadingAction(false));

			return error.response;
		}
	};

	return fetchData;
};

export default useAxios;
