import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SalesService {
  constructor(private http: HttpClient) {}

  getSales() {
    return this.http.get(
      // environment.apiURL + ''
      `${environment.apiURL}/sales?_embed=user&_embed=product`
    );
  }
}
