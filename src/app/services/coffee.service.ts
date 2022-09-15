import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coffee } from '../model/coffee.model';

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  private apiUrl = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl)
  }
}
