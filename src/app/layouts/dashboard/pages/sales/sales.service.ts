import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Sale } from './models';
import { concatMap } from 'rxjs';
import { User } from '../users/models';

@Injectable({ providedIn: 'root' })
export class SalesService {
  constructor(private http: HttpClient) {}

  getSales() {
    return this.http.get<Sale[]>(
      // environment.apiURL + ''
      `${environment.apiURL}/sales?_embed=user&_embed=product`
    );
  }

  getSalesById(userId: string | number) {
    return this.http
      .get<User>(`${environment.apiURL}/users/${userId}`)
      .pipe(
        concatMap((data) =>
          this.http.get(`${environment.apiURL}/sales?userId=${data.id}`)
        )
      );
  }
}
