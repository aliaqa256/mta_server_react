const Failed = (props) => {
    return (
			<>
				<div className="container col-6">
					<div className="alert alert-danger text-center my-4 bg-danger " role="alert">
						پرداخت شما شکست خورد اگر مبلغی کم شد تا 72 ساعت اینده بر میگردد
					</div>
				</div>
			</>
		);
};

export default Failed;
