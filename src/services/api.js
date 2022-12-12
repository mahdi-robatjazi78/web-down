import axios from "axios";
import { toast } from "react-hot-toast";

const baseUrl = "http://87.107.146.138:9004";
const secondSlice = "/api/link";

const AxiosInstance = axios.create({
  baseURL: `${baseUrl}${secondSlice}`,
  timeout: 30000,
  headers: { Authorization: "Bearer KCcVf1aEWiHejwMxxixTS3GrNhkYfzYzt07PYXxU" },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.response.data.message);

    return Promise.reject(error);
  }
);

export default AxiosInstance;
