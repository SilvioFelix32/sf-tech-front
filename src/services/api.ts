import axios from "axios";
import { environment } from "../config/environment";

const { stage, localBaseURL, baseURL } = environment;

if (!stage) {
  throw new Error("Environment stage not found");
}

let resolvedBaseURL = "";

if (stage === "dev") {
  resolvedBaseURL = localBaseURL;
} else {
  resolvedBaseURL = baseURL;
}

console.info("Service started with baseURL: ", resolvedBaseURL);

const api = axios.create({
  baseURL: resolvedBaseURL,
});

export default api;
