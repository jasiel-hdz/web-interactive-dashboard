import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    error?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = environment.apiUrl;
  constructor(
     private httpClient: HttpClient,
     private router: Router) { }

  buildQueryParams(params: any) {
    return (
      Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&") || ""
    );
  }

  get<T>(endpoint: string, params: any = {}) {
    const api_url = this.API_URL;
    const queryParams = this.buildQueryParams(params);
    return this.httpClient
      .get(`${api_url}/${endpoint}${queryParams ? '?' + queryParams : ''}`)
      .toPromise() as Promise<ApiResponse<T>>;
  }

  post<T>(endpoint: string, body: any) {
    return firstValueFrom(
      this.httpClient
      .post(`${this.API_URL}/${endpoint}`, body)) as Promise<ApiResponse<T>>;
  }

  put<T>(endpoint: string, body: any) {
    return firstValueFrom(
      this.httpClient
      .put(`${this.API_URL}/${endpoint}`, body)
      ) as Promise<ApiResponse<T>>;
  }

  delete<T>(endpoint: string) {
    return firstValueFrom(
      this.httpClient
      .delete(`${this.API_URL}/${endpoint}`)
    )as Promise<ApiResponse<T>>;
  }

  patch<T>(endpoint: string, body: any) {
    return firstValueFrom(
      this.httpClient
      .patch(`${this.API_URL}/${endpoint}`, body)
      ) as Promise<ApiResponse<T>>;
  }

  getCustom<T>(url: string,) {
    return firstValueFrom(this.httpClient.get(url)) as Promise<ApiResponse<T>>;
  }

  postBlob<T>(endpoint: string, body: any) {
    return firstValueFrom(
      this.httpClient
      .post(`${this.API_URL}/${endpoint}`, body, { responseType: 'blob' })
      ) as unknown as Promise<ApiResponse<T>>;
  }

}