import { Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { checkToken } from '../services/api.services.js'

// eslint-disable-next-line react/prop-types
export default function Protected({ route="/" }) {

  const navigate = useNavigate()
  const [ cookies ] = useCookies(["user_token"])
  
  useEffect(() => {
    async function validate() {
      const invalidToken = await checkToken(cookies.user_token || "")
      
      if(invalidToken) navigate(route)
    }
    validate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return <Outlet />
}
