import axios from "axios";

export const flavorsApi = axios.create({
  baseURL: 'https://order-pizza-api.herokuapp.com/'
})
export const usersApi = axios.create({
  baseURL: 'http://localhost:3333/'
})