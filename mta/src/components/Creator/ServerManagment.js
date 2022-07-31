import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServerManagment = () =>
{
    const { server_id } = useParams();




    return (
			<>
				<IsLogin>
					<IsCreator>
						<Spinnable>
							{/* ----------------------------------------------- */}
							<div class="container">
								<div class="row ">
									<Link
										class="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold"
										to={`/make-admin/${server_id}`}
									>
										<i className="fa fa-user  "></i>
										<span className="">اضافه کردن ادمین </span>
									</Link>
									<div class="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold">
										<i className="fa fa-cog  "></i>{" "}
										<span className="">action 2</span>
									</div>
									<div class="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold">
										<i className="fa fa-cog  "></i>{" "}
										<span className="">action 3</span>
									</div>
									<div class="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold">
										<i className="fa fa-cog  "></i>{" "}
										<span className="">action 4</span>
									</div>
								</div>
							</div>

							{/* ----------------------------------------------- */}
						</Spinnable>
					</IsCreator>
				</IsLogin>
			</>
		);




};

export default ServerManagment;
