import axios from "axios";

const http = axios.create({
  baseURL: '',
  timeout: 20000
})



export default http