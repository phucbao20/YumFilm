import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/api/v1/booking/seat"

const REST_API_BASE_URL_1 = "http://localhost:8080/api/v1/booking/film"

export const getListSeat = () => axios.get(REST_API_BASE_URL);

export const getFilmById = (filmId) => axios.get(REST_API_BASE_URL_1 + '/' + filmId);