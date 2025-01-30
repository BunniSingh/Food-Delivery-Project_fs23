import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import LoginPage from '../components/LoginPage/LoginPage'
import { setLoginState, setUserData } from '../slices/loginSlice'


const Layout = () => {
  const {loginState} = useSelector(state => state.login_data);
  const dispatch = useDispatch();
  
  let userLoginDetails = localStorage.getItem('userLoginDetails');

  useEffect(()=>{
    if(userLoginDetails){
      userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'))
      dispatch(setUserData(userLoginDetails));
    }
    else{
      dispatch(setLoginState(true));
      setTimeout(() => {
        dispatch(setLoginState(false));
      },10_000);
    }
  },[])
  

  return (
    <div>
        {loginState && <LoginPage/>}
        <Navbar/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout