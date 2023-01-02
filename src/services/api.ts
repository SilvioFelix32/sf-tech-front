import axios from "axios";

const api = axios.create({
  baseURL: "https://sf-tech-back.vercel.app/v1",
});

export default api;
