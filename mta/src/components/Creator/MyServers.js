import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Myservers = ( props ) =>
{
    const fetchData = useAxios();
    const [ servers, setServers ] = useState( [] );
    

    useEffect( () =>
    {
        
const getListOfServers = async () => {
	try {
		const response = await fetchData("auth/my-servers/", {
			method: "GET",

		});
		if (response.status === 200) {
			setServers(response.data);
		} else {
			toast.error("خطا در دریافت لیست سرورها");
		}
	} catch (error) {
		console.log(error);
		toast.error("خطا در برقراری ارتباط با سرور");
	}
};

getListOfServers();



    },[])
	


	return (
		<IsLogin>
			<IsCreator>
				<Spinnable>
					<div classNameName="container">
						<div classNameName="row">
							<div classNameName="col-md-12">
								{/*  */}
								<div className="container  ">
									<ul className="list-group  ">
										{servers.length > 0 ? (
											servers.map((server) => (
												<li
													className="list-group-item clearfix bg-dark text-white  col-12 my-2 border-danger "
													key={server.id}
												>
													<h3 className="list-group-item-heading ">
														{server.name}
													</h3>

													<div
														className="btn-toolbar pull-right"
														role="toolbar"
														aria-label=""
													>
														<Link
															to={`/server-managment/${server.id}`}
															className="btn btn-danger"
														>
															مدریت
														</Link>
														<a
															href="#"
															className="btn btn-primary btn-outline-danger mx-2 disabled"
														>
															تعداد روز باقی مانده: 12
														</a>
														<a
															href="#"
															className="btn btn-primary btn-outline-danger mx-2 disabled"
														>
															پورت ورود سرور:{server.server_port}
														</a>
													</div>
												</li>
											))
										) : (
											<>
												<div classNameName="container bg-info card text-white text-center my-5">
													<h1>سروری وجود ندارد</h1>
												</div>
												<div classNameName="d-flex justify-content-center">
													<Link
														to={`/create-server`}
														classNameName="text-center btn btn-danger    "
													>
														{" "}
														همین حالا یکی بسازید
													</Link>
												</div>
											</>
										)}
									</ul>
								</div>
								{/*  */}
							</div>
						</div>
					</div>
				</Spinnable>
			</IsCreator>
		</IsLogin>
	);
};

export default Myservers;
