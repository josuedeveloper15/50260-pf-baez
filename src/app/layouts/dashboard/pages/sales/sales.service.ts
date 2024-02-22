import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { CreateSaleData, Sale } from './models';
import { catchError, concatMap, throwError } from 'rxjs';
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
    return this.http.get<User>(`${environment.apiURL}/users/${userId}`).pipe(
      concatMap((user) =>
        this.http.get(`${environment.apiURL}/sales?userId=${user.id}`)
      ),
      catchError((error) => {
        alert('Ocurrio un error');
        return throwError(() => error);
      })
    );
  }

  createSale(data: CreateSaleData) {
    return this.http.post<Sale>(`${environment.apiURL}/sales`, data);
  }
}
