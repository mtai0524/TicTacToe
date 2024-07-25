import axios from "axios";
import config from "./config";

const instance = axios.create({
  baseURL: config.API_HOSTING,
});

export default instance;
