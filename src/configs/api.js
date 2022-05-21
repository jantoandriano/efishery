import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/",
});

export default baseApi;
