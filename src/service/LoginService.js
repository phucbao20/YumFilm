import axios from "axios";

const BASE_URL_REST_API = "http://localhost:8080/api/v1/login"

export const loginByUserName = (user) =>
    fetch(BASE_URL_REST_API, {
        method: 'post',
        body: user
    })