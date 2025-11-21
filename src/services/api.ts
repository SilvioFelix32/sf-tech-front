import axios from "axios";
import { environment } from "../config/environment";

const { stage, localBaseURL, baseURL, salesBaseURL } = environment;

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

let resolvedSalesBaseURL = "";

if (salesBaseURL) {
  resolvedSalesBaseURL = salesBaseURL;
} else {
  resolvedSalesBaseURL = resolvedBaseURL;
}

console.info("Sales service started with baseURL: ", resolvedSalesBaseURL);

const salesApi = axios.create({
  baseURL: resolvedSalesBaseURL,
});

export default api;
export { salesApi };
