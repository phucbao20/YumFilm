import axios from "axios";

const url_dashboard = "http://localhost:8080/api/v1/manager/adminDashboard"

export const getCountFilm = () => axios.get(url_dashboard + '/getCountFilm')

export const getAllTicket = () => axios.get(url_dashboard + '/getAllTicket')

export const getRevenueFilm = () => axios.get(url_dashboard + '/getRevenueFilm')

export const getAllInvoice = () => axios.get(url_dashboard + '/getAllInvoice')

export const getTotalAndTicketYear2023 = () => axios.get(url_dashboard + '/getTotalAndTicketYear2023')

export const getTop5Film = () => axios.get(url_dashboard + '/getTopFilm')
