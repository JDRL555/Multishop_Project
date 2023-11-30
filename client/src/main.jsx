import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './styles/index.css'
import './styles/Error.css'
import './styles/loading.css'
import ErrorPage from './components/error-page.jsx';
import Login from './components/Login.jsx';
import Loading from './components/loading.jsx';
// import {Suspense, lazy} from 'react';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Error",
    element: <ErrorPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/loading",
    element: <Loading/>,
    errorElement: <ErrorPage/>,
  },
]);

// const carga = lazy(()=> import('./components/loading') ) 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
