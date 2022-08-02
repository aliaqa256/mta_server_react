import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/authSlicer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { setMoneyAction } from "../redux/authSlicer";
const Navbar = () => {
	const { isAuthenticated, is_creator } = useSelector((state) => state.auth);
	const [money, setMoney] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const fetchData = useAxios();
	const logout = () => {
		dispatch(logoutAction());
		localStorage.removeItem( "token" );
		localStorage.removeItem( "is_login" )
		localStorage.removeItem('is_creator')
		navigate("/");
	};

	useEffect(() => {
		const getMyMoney = async () => {
			try {
				const response = await fetchData("auth/my-money", {
					method: "GET",
				});
				if (response.status === 200) {
					setMoney(response.data);
					console.log("-------");
					console.log(response.data);
					dispatch(setMoneyAction(response.data));
				} else
				{
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		};
			getMyMoney();
	}, []);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-pills redpill sticky-top ">
			<Link to="/" activeClassName="none" className="navbar-brand">
				express
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="navbarNav"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<div className="dropdown ">
						<button
							className="btn btn-secondary dropdown-toggle bg-danger"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							کاربری
						</button>
						<div
							className="dropdown-menu bg-black dropdown-menu-dark"
							aria-labelledby="dropdownMenuButton"
						>
							{isAuthenticated || (
								<li className="nav-item dropdown-item text-center  ">
									<NavLink
										to="/register"
										activeClassName="active "
										className="nav-link"
									>
										ثبت نام سازنده سرور
									</NavLink>
								</li>
							)}

							{isAuthenticated || (
								<li className="nav-item dropdown-item text-center ">
									<NavLink
										to="/login"
										activeClassName="active"
										className="nav-link"
									>
										ورود پلیر
									</NavLink>
								</li>
							)}

							{isAuthenticated || (
								<li className="nav-item dropdown-item text-center ">
									<NavLink
										to="/admin-login"
										activeClassName="active"
										className="nav-link"
									>
										ورود سازنده سرور
									</NavLink>
								</li>
							)}

							{!isAuthenticated || is_creator || (
								<li className="nav-item dropdown-item text-center ">
									<NavLink
										activeClassName="active"
										className="nav-link text-center"
										to="/player-profile"
									>
										پروفایل
									</NavLink>
								</li>
							)}
							{!isAuthenticated || (
								<li className="nav-item dropdown-item text-center">
									<NavLink
										activeClassName="active"
										className="nav-link text-center"
										to="/add-credit"
									>
										شارژ کیف پول
									</NavLink>
								</li>
							)}

							{!isAuthenticated || (
								<li className="nav-item dropdown-item text-center">
									<button className="nav-link" onClick={logout}>
										خروج
									</button>
								</li>
							)}
						</div>
					</div>

					{!is_creator || (
						<>
							<div className="dropdown mx-2  ">
								<button
									className="btn btn-secondary dropdown-toggle bg-info"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									مدریت سرورها
								</button>
								<div
									className="dropdown-menu bg-black dropdown-menu-dark"
									aria-labelledby="dropdownMenuButton"
								>
									<li className="nav-item dropdown-item text-center  ">
										<NavLink
											to="/create-server"
											activeClassName="active "
											className="nav-link"
										>
											ساخت سرور
										</NavLink>
									</li>

									<li className="nav-item dropdown-item text-center  ">
										<NavLink
											to="/myservers"
											activeClassName="active "
											className="nav-link"
										>
											سرور های من
										</NavLink>
									</li>
								</div>
							</div>
						</>
					)}
				</ul>
			</div>
			{!isAuthenticated || (
				<li className="nav-item text-white mojodi btn outline-info disabled   ">
					موجودی کیف پول شما :{money}
				</li>
			)}
		</nav>
	);
};

export default Navbar;
