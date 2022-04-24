import axios from "axios";

export const flavorsApi = axios.create({
  baseURL: 'https://order-pizza-api.herokuapp.com/'
})