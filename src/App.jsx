import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Reviews from './pages/Reviews/Reviews';
import Layout from './Layout/Layout';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

import LoginPage from './components/LoginPage/LoginPage';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/review',
        element: <Reviews/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/place_order' ,
        element: <PlaceOrder/>,
      },
      {
        path: '/confirm_order',
        element: <OrderConfirmation/>
      },
      
    ]
  }
])

const App = () => {
  return (
    <div className='app-container'> 
        <RouterProvider router={router} />
    </div>
  )
}

export default App