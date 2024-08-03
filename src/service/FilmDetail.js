import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/api/vi/filmDetail"

export const getFilmDetailById = (filmID) => axios.get(REST_API_BASE_URL + '/' + filmID);