import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T, any>> {
    return this.client.get<T>(url, config);
  }
}

const apiClient = new ApiClient();
export default apiClient;
