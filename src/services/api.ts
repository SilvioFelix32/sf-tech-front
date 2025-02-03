import axios from "axios";

//const baseURL = "http://localhost:3003/v1";
const baseURL = "https://sf-tech-back.onrender.com/v1";

const api = axios.create({
  baseURL,
});

export default api;
