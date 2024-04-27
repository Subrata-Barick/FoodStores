import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Home from './Home/Home.jsx';


import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Cart from './components/Cart.jsx';
import SinglePageProducts from './components/SinglePageProducts.jsx';
import { Provider } from 'react-redux';
import {store} from './redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react';
import Approved from './components/Approved.jsx';
import Sucess from './pages/Sucess.jsx';


const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/shop/:id',
      element:<SinglePageProducts/>
    },
   {
    path:'/Sucess',
    element:<Approved element={<Sucess/>}/>
   }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
 <Auth0Provider
    domain="dev-1dem3q5ny70rqfad.us.auth0.com"
    clientId="8d9z6E2swNoChuFnFCr2CcT2ywDNGY5Y"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  
  </Auth0Provider>,
)
