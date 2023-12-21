import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CookiesProvider } from 'react-cookie'

import './styles/App.css'

import LoginPage from '../src/pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage'
import DashboardPage from './pages/DashboardPage'
import AdminPage from './pages/AdminPage'


import Protected from './components/Protected'

export default function Routers() {

  return(
    <div>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<Protected />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  )
}
