import axios from "axios"

const BASE_URL_REST_API = "http://localhost:8080/api/v1"

export const createUser = (user) => axios.post(BASE_URL_REST_API + "/register", user)
export const getRole = () => axios.get(BASE_URL_REST_API + "/account")
