import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { User } from '../dashboard/pages/users/models';

describe('Pruebas de AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('AuthService debe estar definido', () => {
    expect(authService).toBeTruthy();
  });

  it('Al llamar login() debe establecer un authUser', () => {
    const MOCK_RESPONSE: User[] = [
      {
        id: 23,
        firstName: 'MOCKNAME',
        lastName: 'MOCKLASTNAME',
        email: 'mock@mail.com',
        password: 'password',
        role: 'ADMIN',
        token: 'ksdjakdasdsad',
      },
    ];

    // Llamamos al login
    authService
      .login({ email: 'mock@mail.com', password: 'password' })
      .subscribe({
        next: () => {
          // Verificamos que el login establezca correctamente el usuario
          expect(authService.authUser).toEqual(MOCK_RESPONSE[0]);
        },
      });

    // Sobre escribimos la request por una request falsa
    httpController
      .expectOne({
        url: 'http://localhost:3000/users?email=mock@mail.com&password=password',
        method: 'GET',
      })
      .flush(MOCK_RESPONSE);
  });
});
