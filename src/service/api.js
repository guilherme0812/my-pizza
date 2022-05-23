import axios from "axios";

export const flavorsApi = axios.create({
  baseURL: 'https://order-pizza-api.herokuapp.com/'
})
export const api = axios.create({
  baseURL: 'http://192.168.0.4:9000/'
})