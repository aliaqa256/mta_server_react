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
	...rest
}) => {
	return (
		<div className="form-group my-2">
			<label htmlFor={name}>{lable}</label>
			<input
				id={id}
				type={type}
				className="form-control form-control-lg"
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
		</div>
	);
};


export default MyInput;