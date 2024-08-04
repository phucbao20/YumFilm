import axios from "axios";

const URL_BASE = "http://localhost:8080/api/v1/manager/film"

export const getAllFilmDetailAdmin = () => axios.get(URL_BASE)

export const getByIdFilmDetailAdmin = (filmId) => axios.get(`${URL_BASE}/${filmId}`)

export const createFilm = (film) => axios.post(URL_BASE, film)

export const updateFilm = (film) => axios.put(URL_BASE, film)

export const deleteFilm = (filmId) => axios.delete(`${URL_BASE}/${filmId}`)


