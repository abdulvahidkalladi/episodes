import axios from "axios";
// base url for the request
const instance = axios.create({
  baseURL: "https://api.sampleapis.com/",
});

export default instance;
