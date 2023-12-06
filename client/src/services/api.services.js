import { API } from "../constants/api.constants.js";

export async function getUsers() {
  const result = await fetch(API.API_URL + API.USERS_ROUTE)
  const data = await result.json()
  return data
}

export async function authUser(email, password) {
  const result = await fetch(API.API_URL + API.AUTH_ROUTE, {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,password})
  })
  const response = await result.json()
  return response 
}

export async function checkToken(token) {
  try {
    const result = await fetch(API.API_URL + API.AUTH_ROUTE + `?token=${token}`)
    const response = await result.json()
    return response.error
  } catch (error) {
    return false
  }
}