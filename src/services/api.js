

const baseUrl = "http://87.107.146.138:9004"
const secondSlice = "/api/link"


const AxiosInstance = axios.create({
    baseURL: `${baseUrl}${secondSlice}`,
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default AxiosInstance