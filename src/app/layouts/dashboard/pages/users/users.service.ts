import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
import { User } from './models';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [
  {
    id: 1,
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    email: 'naru@mail.com',
    password: '123456',
    role: 'ADMIN',
  },
  {
    id: 2,
    firstName: 'Sasuke',
    lastName: 'Uchiha',
    email: 'sasu@mail.com',
    password: '123456',
    role: 'USER',
  },
];

@Injectable()
export class UsersService {
  constructor(private alerts: AlertsService) {}

  getUserById(id: number | string): Observable<User | undefined> {
    return of(USERS_DB.find((user) => user.id == id)).pipe(delay(1000));
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }

  getUsers() {
    return of(USERS_DB).pipe(delay(1000));
  }

  createUser(payload: User) {
    USERS_DB.push(payload);
    return this.getUsers();
  }

  deleteUser(userID: number) {
    USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se elimino correctamente')
      )
    );
  }
}
