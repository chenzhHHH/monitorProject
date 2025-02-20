import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiUtils {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(method: string, url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const fullUrl = `${this.baseURL}${url}`;
    const requestConfig: AxiosRequestConfig = {
      method,
      url: fullUrl,
      ...config,
      headers: {
        // 'Authorization': `Bearer ${token}`, // 预留token位置
        ...config?.headers,
      },
    };

    try {
      return await axios(requestConfig);
    } catch (error) {
      throw error;
    }
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('GET', url, config);
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('POST', url, { ...config, data });
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('PUT', url, { ...config, data });
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('DELETE', url, config);
  }
}

export default ApiUtils;
