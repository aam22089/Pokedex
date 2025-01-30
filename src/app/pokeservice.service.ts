import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0'
  private limit = 50;
  private offset = 0;
  constructor(private http: HttpClient) { }
  getPokeList(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${this.limit}&offset=${this.offset}`)
  }
}
