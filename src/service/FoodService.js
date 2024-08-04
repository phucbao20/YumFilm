import axios from "axios"

const BASE_URL = "http://localhost:8080/api/v1/manager/food"

export const selectAll = () => axios.get(BASE_URL)
export const selectById = (foodId) => axios.get(BASE_URL + "/food-detail/edit/" +foodId)
export const createFood = (food) => axios.post(BASE_URL + "/food-detail/add", food)
export const deleteFood = (foodId) => axios.delete(BASE_URL + "/food-detail/delete/"+ foodId)
export const updateFood = (food) => axios.put(BASE_URL + "/food-detail/update", food)
