import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/api/v1/seat"

export const getListSeat = () => axios.get(REST_API_BASE_URL);