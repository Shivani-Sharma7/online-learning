
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/Signup';
import { useEffect, useState } from 'react';
import MyAccount from './components/MyAccount';
import CustomNavbar from './components/Navbar';

function App() {
  const [userData,setUserData]=useState('');
  useEffect(()=>{
    const formdata=JSON.parse(localStorage.getItem('formData'));
    if (formdata){
      setUserData(formdata.user_fname);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar user_data={userData}></CustomNavbar>
        <Routes>
          <Route path='/' element={<Homepage user_data={userData} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/myaccount' element={<MyAccount user_data={userData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
