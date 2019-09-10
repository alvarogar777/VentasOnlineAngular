import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
 private API_URL = 'https://localhost:44349/api/v1';
 private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFsdmFyb0BnbWFpbC5jb20iLCJDdWFscWllclZhbG9yIjoiVmFsb3IgZGUgbGEgbGxhdmUiLCJqdGkiOiJjOGYyNDRhNC1jM2VkLTRmYTAtYjI3OS1kMmUyYmI1NTg5MWYiLCJleHAiOjE1Njc4NzAzMjB9.j4xGhlLClJTn48XEab8FnbnV6WuPn_pGrj4zZYLGIak';
  constructor(private _httpClient:HttpClient) 
  { }

  getData(url: string){
      const headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`});
      return this._httpClient.get(`${this.API_URL}/${url}`,{headers});
  }

  getCategorias(){
    return this.getData('categorias');
  }
}
