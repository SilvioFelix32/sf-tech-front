import axios from "axios";

const api = axios.create({
  baseURL: "https://vercel.com/silviofelix32/sf-tech-back/v1",
});

export default api;
