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
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								{/*  */}
								<div class="container  ">
									<ul class="list-group  ">
										{servers.length > 0 ? (
											servers.map((server) => (
												<li
													class="list-group-item clearfix bg-dark text-white  col-12 my-2 border-danger "
													key={server.id}
												>
													<h3 class="list-group-item-heading ">
														{server.name}
													</h3>

													<div
														class="btn-toolbar pull-right"
														role="toolbar"
														aria-label=""
													>
														<Link
															to={`/server-managment/${server.id}`}
															class="btn btn-danger"
														>
															مدریت
														</Link>
														<a
															href="#"
															class="btn btn-primary btn-outline-danger mx-2 disabled"
														>
															تعداد روز باقی مانده: 12
														</a>
														<a
															href="#"
															class="btn btn-primary btn-outline-danger mx-2 disabled"
														>
															پورت ورود سرور:{server.server_port}
														</a>
													</div>
												</li>
											))
										) : (
											<>
												<div className="container bg-info card text-white text-center my-5">
													<h1>سروری وجود ندارد</h1>
												</div>
												<div className="d-flex justify-content-center">
													<Link
														to={`/create-server`}
														className="text-center btn btn-danger    "
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
