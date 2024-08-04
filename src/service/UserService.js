import axios from "axios"

const BASE_URL_REST_API = "http://localhost:8080/api/v1/register"

export const createUser = (user) => axios.post(BASE_URL_REST_API, user)
