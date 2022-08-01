import './App.css';
import {  Routes, Route } from 'react-router-dom';
import {
	CreateServer,
	AdminLogin,
	Login,
	Register,
	Navbar,
	Myservers,
	MainPage,
	ServerManagment,
	MakeAdmin
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
			  <Route path="myservers" element={ <Myservers /> } />
			  <Route path="server-managment/:server_id" element={ <ServerManagment /> } />
			  <Route path="make-admin/:server_id" element={ <MakeAdmin /> } />
			</Routes>
		</div>
	);

}

export default App;
