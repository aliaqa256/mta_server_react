import Spinner from "./Spinner";
import { useSelector } from "react-redux";
const Spinnable = ( props ) =>
{
    const { loading } = useSelector((state) => state.auth);
	return (
        <>
            {loading ? (<Spinner />) : (props.children)}
            
        </>


	);
};

export default Spinnable;
