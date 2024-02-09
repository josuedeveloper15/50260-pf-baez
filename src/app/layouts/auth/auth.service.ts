import { Injectable } from '@angular/core';
import { User } from '../dashboard/pages/users/models';
import { Router } from '@angular/router';
import { AlertsService } from '../../core/services/alerts.service';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: User | null = null;

  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService,
    private httpClient: HttpClient
  ) {}

  private setAuthUser(user: User): void {
    this.authUser = user;
    localStorage.setItem('token', user.token);
  }

  login(data: LoginData): Observable<User[]> {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
      )
      .pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this.alertsService.showError('Email o password invalidos');
          }
        })
      );
  }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.authUser = null;
            localStorage.removeItem('token');
            return false;
          }
        })
      );
  }
}
