import axios from "axios";

export const flavorsApi = axios.create({
  baseURL: 'https://order-pizza-api.herokuapp.com/'
})
export const usersApi = axios.create({
  baseURL: 'http://192.168.0.6:3333/'
})