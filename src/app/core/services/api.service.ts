import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// interfaces
import { Card } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('/assets/mock-data/cards.json');
  }
}
