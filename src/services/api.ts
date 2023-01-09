import axios from "axios";

const api = axios.create({
  baseURL: "https://vercel.com/silviofelix32/sf-tech-back/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  },
});

export default api;
