// register user component function
import styles from "./Register.module.css";

const Register = ( props ) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<h1 className={` ${styles.color_white}  display-4 text-center  `}>
							ثبت نام
						</h1>
						<form onSubmit={handleSubmit} className="">
							<div className="form-group my-2">
								<label htmlFor="name">username</label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="name"
									placeholder="یوزر نیم"
								/>
							</div>
							<div className="form-group my-2">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className="form-control form-control-lg"
									name="Email"
									placeholder="ایمیل"
								/>
							</div>
							<div className="form-group my-2">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control form-control-lg"
									name="password"
									placeholder="پسورد"
								/>
							</div>
							<div className="form-group my-2">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									type="password"
									className="form-control form-control-lg"
									name="confirmPassword"
									placeholder="تایید پسورد"
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg form-control register-btn my-4 "
								disabled={pristine || submitting}
							>
								ثبت نام
							</button>
						</form>
					</div>
				</div>
			</div>
		);
}

    
export default Register;