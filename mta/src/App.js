import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Login,Register, Navbar } from "./components/index";




function App ()
{
	


  return (
	  <div className="App">
	
				<Navbar />
				<Routes>
					<Route path="/" element={<Navigate to="/register" />} />
			  <Route path="register" element={ <Register /> } />
			  <Route path="login" element={<Login/>} />
		  </Routes>
	
		</div>
	);

}

export default App;
