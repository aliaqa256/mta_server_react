import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useEffect, useState } from "react";
Modal.setAppElement("#root");

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

const AcceptModal = ({ modalIsOpen, afterOpenModa, closeModal, onAccept ,body}) => {
	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModa}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="ایا مطمین هستید؟"
			>
				<div classNameName="modal" tabindex="-1">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">ایا مطمین هستید؟</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<p>{body}</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
									onClick={closeModal}
								>
									بستن
								</button>
								<button type="button" className="btn btn-primary"
									onClick={onAccept}
								>
									قبول
								</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default AcceptModal;
