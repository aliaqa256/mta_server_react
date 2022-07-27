// register user component function


const Register = ( props ) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your DevConnector account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control form-control-lg" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control form-control-lg" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control form-control-lg" name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={pristine || submitting}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

    
export default Register;