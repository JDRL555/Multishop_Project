import { useState } from "react"
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { authUser } from "../services/api.services";
import Login from '../components/Login'
import Loading from '../components/Loading'
import '../styles/Login.css'

export default function LoginPage() {
  const navigate = useNavigate();

  const [show, setShow] = useState('hide')

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [result, setResult] = useState([])

  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [cookies, setCookies] = useCookies("user_token")

  const login = async e => {
    e.preventDefault()
    setShow('show')

    const result = await authUser(email, password)

    if(result.error) {
      setShow('hide')
      setResult(result.msg)
    } else {
      setCookies("user_token", result.token, {
        path: "/",
        maxAge: 3600 * 2,
        sameSite: true,
      })
      navigate("/dashboard")
    }
  }
  return (
    <>
      <div className={show}>
        <Loading  />
      </div>
      <Login 
        onSubmit={login}
        setEmail={setEmail}
        setPassword={setPassword}
        result={result}
      />
    </>
  )
}
