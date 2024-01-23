import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../injection-tokens';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

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

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private alerts: AlertsService) {}

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
