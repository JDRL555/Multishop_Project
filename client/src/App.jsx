import { BrowserRouter, Route, Routes} from "react-router-dom";

import './styles/App.css'

import Login from '../src/components/Login';
import Error from './components/Error-page'
import Dashboard from './components/Dashboard'

export default function Routers() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
