import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/authSlicer";
const Navbar = () =>
{
	const { isAuthenticated } = useSelector( ( state ) => state.auth );
	const dispatch = useDispatch();
	const logout = () =>
	{
		dispatch(logoutAction());
		localStorage.removeItem("token");
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-pills redpill " >
			<a className="navbar-brand" href="#">
				express
			</a>
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
					{isAuthenticated || (
						<li className="nav-item ">
							<NavLink
								to="/register"
								activeClassName="active "
								className="nav-link"
							>
								ثبت نام
							</NavLink>
						</li>
					)}

					{isAuthenticated || (
						<li className="nav-item">
							<NavLink
								to="/login"
								activeClassName="active"
								className="nav-link"
							>
								ورود
							</NavLink>
						</li>
					)}
					{!isAuthenticated || (
						<li className="nav-item">
							<a className="nav-link" onClick={logout}>
								خروج
							</a>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
