import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";


const IsLogin = (props) => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const navigate = useNavigate();
    useEffect( () =>
    { 
        
        	if (!isAuthenticated) {
						toast.error("شما باید وارد شوید");
						navigate("/login");
					}

    }, [] );


    return ( <> { props.children }</>);
    
};

export default IsLogin;
