// axios custom hook
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadingAction } from "../redux/authSlicer";

const useAxios = (url, options) => {
	const dispatch = useDispatch();

	const axiosInstance = axios.create({
		baseURL: "http://62.3.41.227/api/",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	axiosInstance.interceptors.request.use(async (request) => {
		try {
			const accessToken = localStorage.getItem( "token" );
			console.log(accessToken)
			if (accessToken) {
				request.headers.Authorization = `Bearer ${ accessToken }`;
				return request;
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
				dispatch(loadingAction(false));
				localStorage.removeItem( "token" );
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
