import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getAllBooks() {
    const urlApi = 'http://localhost:4200/inicio';
    return this.http.get(urlApi);
  }
}
