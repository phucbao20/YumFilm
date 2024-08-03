import axios from "axios";

const url_chartadmin = "http://localhost:8080/api/v1/manager/chart"

export const getTicketOfYear = () => axios.get(url_chartadmin + '/getTicketOfYear')

export const getTotalAndTicketYear2024 = () => axios.get(url_chartadmin + '/getTotalAndTicketYear2024')

export const getTotalOfYear = () => axios.get(url_chartadmin + '/getTotalOfYear')

