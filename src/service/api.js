import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  //baseURL: "http://localhost:3001/",
  baseURL: "https://escolasonhosdeicaro.herokuapp.com/",
  headers: {                  
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "auth", 
    "Access-Control-Allow-Methods": "get, post, options, put, patch, delete" ,
    "Content-Type": "application/json;charset=UTF-8"                   
},
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Berear = `${token}`;
  }
  return config;
});

export default api;