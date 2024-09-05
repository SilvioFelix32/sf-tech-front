import axios from "axios";

const baseURL = "https://sf-tech-back.onrender.com/v1";

const api = axios.create({
  baseURL,
});

export default api;
