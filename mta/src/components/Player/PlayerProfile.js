import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import avatar from "../../assets/avatar.jpg";

const PlayerProfile = (props) => {
	const fetchData = useAxios();
	const [userdata, setUserdata] = useState({});
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		const getMyInfo = async () => {
			try {
				const response = await fetchData("auth/player-info/", {
					method: "GET",
				});
				if (response.status === 200) {
					setUserdata(response.data);
				} else {
				toast.error("خطا در برقراری ارتباط با سرور");
				}
			} catch (error) {
				console.log(error);
				toast.error("خطا در برقراری ارتباط با سرور");
			}
		};

		getMyInfo();
	}, []);

	return (
		<IsLogin>
			<Spinnable>
				{/* ------------------------------- */}

				<div className="container emp-profile">
					<form method="post">
						<div className="row">
							<div className="col-md-4">
								<div className="profile-img w-75">
									<img src={avatar} alt="" />
									{/* <div className="file btn btn-lg btn-primary">
										Change Photo
										<input type="file" name="file" />
									</div> */}
								</div>
							</div>
							<div className="col-md-6">
								<div className="profile-head">
									<h5>{userdata.username}</h5>
									<h6>Player</h6>
									<p className="proile-rating">
										RANKINGS : <span>به زودی</span>
									</p>
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link active"
												id="home-tab"
												data-toggle="tab"
												href="#home"
												role="tab"
												aria-controls="home"
												aria-selected="true"
											>
												About
											</a>
										</li>
										{/* <li className="nav-item">
											<a
												className="nav-link"
												id="profile-tab"
												data-toggle="tab"
												href="#profile"
												role="tab"
												aria-controls="profile"
												aria-selected="false"
											>
												Timeline
											</a>
										</li> */}
									</ul>
								</div>
							</div>
							{/* <div className="col-md-2">
								<input
									type="submit"
									className="profile-edit-btn"
									name="btnAddMore"
									value="Edit Profile"
								/>
							</div> */}
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="profile-work">
									<p>WORK LINK</p>
									<p>به زودی</p>
									{/* <a href="">Website Link</a>
									<br />
									<a href="">Bootsnipp Profile</a>
									<br />
									<a href="">Bootply Profile</a> */}
									<p>SKILLS</p>
									<p>به زودی</p>
									{/* <a href="">Web Designer</a>
									<br />
									<a href="">Web Developer</a>
									<br />
									<a href="">WordPress</a>
									<br />
									<a href="">WooCommerce</a>
									<br />
									<a href="">PHP, .Net</a> */}
									<br />
								</div>
							</div>
							<div className="col-md-8">
								<div className="tab-content profile-tab" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab"
									>
										<div className="row">
											<div className="col-md-6">
												<label className="text-dark">User Id</label>
											</div>
											<div className="col-md-6">
												<p>{userdata.id}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label className="text-dark">Name</label>
											</div>
											<div className="col-md-6">
												<p>{userdata.username}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label className="text-dark">Email</label>
											</div>
											<div className="col-md-6">
												<p>{userdata.email}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label className="text-dark">Phone</label>
											</div>
											<div className="col-md-6">
												<p>به زودی</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label className="text-dark">Profession</label>
											</div>
											<div className="col-md-6">
												<p>به زودی</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label className="text-dark">admin</label>
											</div>
											<div className="col-md-6">
                                                <p>{ userdata.admin}</p>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab"
									>
										<div className="row">
											<div className="col-md-6">
												<label>Experience</label>
											</div>
											<div className="col-md-6">
												<p>Expert</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Hourly Rate</label>
											</div>
											<div className="col-md-6">
												<p>10$/hr</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Total Projects</label>
											</div>
											<div className="col-md-6">
												<p>230</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>English Level</label>
											</div>
											<div className="col-md-6">
												<p>Expert</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Availability</label>
											</div>
											<div className="col-md-6">
												<p>6 months</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<label>Your Bio</label>
												<br />
												<p>Your detail description</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>

				{/* ------------------------------- */}
			</Spinnable>
		</IsLogin>
	);
};

export default PlayerProfile;
