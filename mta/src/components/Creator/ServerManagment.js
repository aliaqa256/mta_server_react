import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import Spinnable from "../Spinnable";
import IsLogin from "../Auth/IsLogin";
import IsCreator from "../Auth/IsCreator";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AcceptModal from "../AcceptModal";
import { useSelector } from "react-redux";

const ServerManagment = () => {
	const { server_id } = useParams();
	const [ modalIsOpen, setIsOpen ] = useState( false );
	const fetchData = useAxios();
	const { money } = useSelector((state) => state.auth);
	function openModal() {
		setIsOpen(true);
	}
	function afterOpenModal() {
		console.log("afterOpenModal");
	}

	function closeModal() {
		setIsOpen(false);
	}

	const onModalAccept =async () =>
	{ 
		if (+money < 100000) {
			toast.error("پول شما کمتر از صد تومن است");
			setIsOpen(false);
			return;
		}


try {
		const response = await fetchData("auth/add-days-to-server/", {
			method: "POST",
			data: {
				servernumber: server_id
			}
		});
	if ( response.status === 200 )
	{
		toast.success("سرور شما تمدید شد")
		} else {
		toast.error("خطا در برقراری ارتباط با سرور");
		}
	} catch (error) {
		console.log(error);
		toast.error("خطا در برقراری ارتباط با سرور");
	}
setIsOpen(false);
	}
	

	return (
		<>
			<IsLogin>
					<Spinnable>
						{/* --------------------------------------- */}
						<AcceptModal
							afterOpenModa={afterOpenModal}
							closeModal={closeModal}
							modalIsOpen={modalIsOpen}
							body="اگر بر روی تایید کلیک کنید سرور شما سی روز تمدید میشود و از کیف پول شما کم میشود"
							onAccept={onModalAccept}
						></AcceptModal>

						{/* ----------------------------------------------- */}
						<div className="container">
							<div className="row ">
								<Link
									className="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold"
									to={`/make-admin/${server_id}`}
								>
									<i classNameName="fa fa-user  "></i>
									<span classNameName="">اضافه کردن ادمین </span>
								</Link>
								<div
									onClick={openModal}
									className="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold"
								>
									<i classNameName="fa fa-cog  "></i>{" "}
									<span classNameName="">تمدید سرور برای 30 روز</span>
								</div>
								<div className="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold">
									<i classNameName="fa fa-cog  "></i>{" "}
									<span classNameName="">action 3</span>
								</div>
								<div className="col-md-3 bg-primary bg-opacity-70 my-4 mx-4 btn-outline-dark  btn  fw-bold">
									<i classNameName="fa fa-cog  "></i>{" "}
									<span classNameName="">action 4</span>
								</div>
							</div>
						</div>

						{/* ----------------------------------------------- */}
					</Spinnable>
			</IsLogin>
		</>
	);
};

export default ServerManagment;
