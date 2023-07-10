import axios from "axios";

const api = axios.create({
    baseURL: "https://sf-tech-back.onrender.com/v1",
});

// const api = axios.create({
//   baseURL: "http://localhost:3003/v1",
// });

export default api;
