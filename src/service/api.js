import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://escola-sonho-de-icaro.herokuapp.com/",
  headers: {                  
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"                   
},
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;