const MyInput = ({
	type,
	name,
	placeholder,
	value,
	onChange,
	error,
	ref,
	lable,
	id,
	formik,
	gt,
	...rest
}) => {
	return (
		<>
			<label htmlFor={name}>{lable}</label>

			<div className="form-group my-2 input-group  ">
				<input
					id={id}
					type={type}
					className="form-control form-control-lg "
					name={name}
					placeholder={placeholder}
					ref={ref}
					value={value}
					onChange={onChange}
					{...formik.getFieldProps({ name })}
				/>
				{formik.touched[id] && formik.errors[id] ? (
					<div className="text-danger">{formik.errors[id]}</div>
				) : null}

				{gt && (
					<div class="input-group-prepend ">
						<label class="input-group-text gr-txt" for="inputGroupSelect01 ">
							{gt}
						</label>
					</div>
				)}
			</div>
		</>
	);
};

export default MyInput;
