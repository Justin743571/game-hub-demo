import axios, { AxiosRequestConfig } from "axios";
import Game from "../entities/Game";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "26c784c8f7b443fa955bc2fb4c190c87",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id:string |number) =>{
    return axiosInstance
      .get<T>(this.endpoint+`/${id}`)
      .then(res =>res.data)
  }
}

export default ApiClient;
