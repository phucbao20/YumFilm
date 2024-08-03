import axios from "axios";

const url_tableAdmin = "http://localhost:8080/api/v1/manager/adminTable"

export const getFoodTable = () => axios.get(url_tableAdmin + '/getFoodTable')

export const getFilmTable = () => axios.get(url_tableAdmin + '/getFilmTable')

export const getUserRankingTable = () => axios.get(url_tableAdmin + '/getUserRankingTable')

export const getInvoicePaymentStatusTrue = () => axios.get(url_tableAdmin + '/getInvoicePaymentStatusTrue')

export const getInvoicePaymentStatusFalse = () => axios.get(url_tableAdmin + '/getInvoicePaymentStatusFalse')