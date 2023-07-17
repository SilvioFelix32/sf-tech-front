import axios from "axios";

//prod api
const api = axios.create({
  baseURL: "https://sf-tech-back.onrender.com/v1",
});

//local api
//  const api = axios.create({
//    baseURL: "http://localhost:3003/v1",
//  });

export default api;
