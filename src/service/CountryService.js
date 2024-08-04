import axios from "axios";

const URL_BASE = "http://localhost:8080/api/vi/manager/countries"

export const getAllCountries = () => axios.get(URL_BASE)
