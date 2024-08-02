import axios from "axios";

const URL_BASE = "http://localhost:8080/api/vi/manager/film"

export const getAllFilmDetailAdmin = () => axios.get(URL_BASE)

export const getByIdFilmDetailAdmin = (filmId) => axios.get(`${URL_BASE}/${filmId}`)
