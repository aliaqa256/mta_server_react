import { NavLink,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/authSlicer";
const Navbar = () => {
	const { isAuthenticated, is_creator } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(logoutAction());
		localStorage.removeItem("token");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-pills redpill ">
			<Link
				to="/"
				activeClassName="none"
				className="navbar-brand"
			>
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
					<div class="dropdown ">
						<button
							class="btn btn-secondary dropdown-toggle bg-danger"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							کاربری
						</button>
						<div
							class="dropdown-menu bg-black dropdown-menu-dark"
							aria-labelledby="dropdownMenuButton"
						>
							{isAuthenticated || (
								<li className="nav-item dropdown-item ">
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
								<li className="nav-item dropdown-item">
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
								<li className="nav-item dropdown-item">
									<NavLink
										to="/admin-login"
										activeClassName="active"
										className="nav-link"
									>
										ورود سازنده سرور
									</NavLink>
								</li>
							)}

							{!isAuthenticated || (
								<li className="nav-item dropdown-item">
									<a className="nav-link" onClick={logout}>
										خروج
									</a>
								</li>
							)}
						</div>
					</div>

					{!is_creator || (
						<>
							<div class="dropdown mx-2  ">
								<button
									class="btn btn-secondary dropdown-toggle bg-info"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									مدریت سرورها
								</button>
								<div
									class="dropdown-menu bg-black dropdown-menu-dark"
									aria-labelledby="dropdownMenuButton"
								>
									<li className="nav-item dropdown-item ">
										<NavLink
											to="/create-server"
											activeClassName="active "
											className="nav-link"
										>
											ساخت سرور
										</NavLink>
									</li>

									<li className="nav-item dropdown-item ">
										<NavLink
											to="/myservers"
											activeClassName="active "
											className="nav-link"
										>
											سرور های من{" "}
										</NavLink>
									</li>
								</div>
							</div>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
