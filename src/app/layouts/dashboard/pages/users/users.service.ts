import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
import { User } from './models';
import { Observable, catchError, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];

@Injectable()
export class UsersService {
  constructor(private alerts: AlertsService, private httpClient: HttpClient) {}

  getUserById(id: number | string): Observable<User | undefined> {
    return this.httpClient.get<User>(`${environment.apiURL}/users/${id}`);
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }

  getUsers() {
    // let headers = new HttpHeaders();

    // headers = headers.append('HOLAMUNDO', localStorage.getItem('token') || '');

    return this.httpClient
      .get<User[]>(`${environment.apiURL}/users`, {
        // headers: headers,
      })
      .pipe(
        catchError((error) => {
          this.alerts.showError('Error al cargar los usuarios');
          return of([]);
        })
      );
  }

  createUser(payload: User) {
    // USERS_DB.push(payload);
    // return this.getUsers();
    return this.httpClient
      .post<User>(`${environment.apiURL}/users`, payload)
      .pipe(mergeMap(() => this.getUsers()));
  }

  deleteUser(userID: number) {
    // USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    // return this.getUsers().pipe(
    //   tap(() =>
    //     this.alerts.showSuccess('Realizado', 'Se elimino correctamente')
    //   )
    // );
    return this.httpClient
      .delete<User>(`${environment.apiURL}/users/${userID}`)
      .pipe(mergeMap(() => this.getUsers()));
  }
}
