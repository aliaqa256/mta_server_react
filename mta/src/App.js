import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import {
	CreateServer,
	AdminLogin,
	Login,
	Register,
	Navbar,
	Myservers,
	MainPage
} from "./components/index";




function App ()
{
	


  return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<MainPage />}  />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="admin-login" element={<AdminLogin />} />
				<Route path="create-server" element={<CreateServer />} />
				<Route path="myservers" element={<Myservers />} />
			</Routes>
		</div>
	);

}

export default App;
