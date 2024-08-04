import axios from "axios"
import Cookies from 'js-cookie'

const token = Cookies.get("YumFilm")

const BASE_URL_PAYMENT = "http://localhost:8080/api/v1/booking/payment"
const BASE_URL_PAYMENT_STATUS = "http://localhost:8080/api/v1/booking/payment-status"

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const payment = (invoice) => axios.post(BASE_URL_PAYMENT, invoice)
export const paymentstatus = (params) => axios.post(`${BASE_URL_PAYMENT_STATUS}?${params}`);
    // axios({
    //   method: 'post',
    //   url: `${BASE_URL_PAYMENT_STATUS}?${params}`,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });