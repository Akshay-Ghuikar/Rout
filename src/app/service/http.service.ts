import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  header: HttpHeaders = new HttpHeaders({
    key: 'value',
  });
  // baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  baseUrl: string = 'http://localhost:3000/';

  getDataFromServer(endpoints: string) {
    const url = this.baseUrl + endpoints;

    return this.http.get(url, { headers: this.header });
  }

  postDataServer(endpoints: any, data: any) {
    const url = this.baseUrl + endpoints;

    return this.http.post(url, data, { headers: this.header });
  }

  UpdateData(endpoints: any, data: any) {
    const url = this.baseUrl + endpoints;

    return this.http.put(url, data, { headers: this.header });
  }


  deleteData(endpoints:any){
    const url = this.baseUrl + endpoints;


    return this.http.delete(url, { headers: this.header })
  }
}






