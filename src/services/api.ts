import axios from "axios";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003/v1";
} else {
  baseURL = "https://sf-tech-back.onrender.com/v1";
}
console.log(`Axios instance created: baseURL`);
const api = axios.create({
  baseURL,
});

export default api;
