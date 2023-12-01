import { useState } from 'react'
import { BrowserRouter, RouterProvider, Route, Routes} from "react-router-dom";
import './styles/App.css'
import Login from '../src/components/Login';

export default function Routers() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
