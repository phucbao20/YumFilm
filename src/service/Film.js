import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/film"

export const getListFilmHot = () => axios.get(REST_API_BASE_URL + "/filmHot")
export const getListAllFilm = () => axios.get(REST_API_BASE_URL + "/allFilm")