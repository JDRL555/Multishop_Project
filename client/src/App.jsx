import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CookiesProvider } from 'react-cookie'

import './styles/App.css'

import LoginPage from '../src/pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage'
import DashboardPage from './pages/DashboardPage'

export default function Routers() {

  return(
    <div>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  )
}
