
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
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
          <BrowserRouter>
            <CustomNavbar></CustomNavbar>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/myaccount' element={<MyAccount />} />
            </Routes>
          </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
