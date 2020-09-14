import axios from "axios";

const instance = axios.create({
  // API URL (cloud function)
  // baseURL: "http://localhost:5001/ecomm-6f74a/us-central1/api",
  baseURL: "https://us-central1-ecomm-6f74a.cloudfunctions.net/api",
});

export default instance;
