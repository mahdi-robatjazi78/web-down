import axios from "axios";

const baseUrl = "http://87.107.146.138:9004";
const secondSlice = "/api/link";

const AxiosInstance = axios.create({
  baseURL: `${baseUrl}${secondSlice}`,
  timeout: 30000,
  // headers: {'X-Custom-Header': 'foobar'}
});




// AxiosInstance.interceptors.request.use(
//   function (config) {

//     if (config.url.startsWith("/download?url=")){

//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// AxiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );






export default AxiosInstance;
