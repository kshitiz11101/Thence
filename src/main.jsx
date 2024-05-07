import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Submit from './pages/Submit.jsx'


const routing=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:'/submit',
    element:<Submit/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routing}/>
  
)
