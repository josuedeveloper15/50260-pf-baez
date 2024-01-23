import { Component } from '@angular/core';
import { Observable, Subject, catchError, filter, of, map } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-rxjs-introduccion',
  templateUrl: './rxjs-introduccion.component.html',
  styles: ``,
})
export class RxjsIntroduccionComponent {
  numbersObservable$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  });

  numbersSubject$ = new Subject();

  constructor(
    private loadingService: LoadingService,
    private alertsService: AlertsService
  ) {
    // LOGICA
    // this.subscribeToNumbersObservable();

    // this.subscribeToNumbersSubject();
    this.numbersSubject$.next(1);
    this.numbersSubject$.next(2);
    this.numbersSubject$.next(3);

    this.getUsuarios();
    // this.getTeachers();
  }

  subscribeToNumbersSubject(): void {
    this.numbersSubject$.subscribe({
      next: (numbers) => console.log('NUMEROS SUBJECT: ', numbers),
    });
  }

  subscribeToNumbersObservable(): void {
    this.numbersObservable$.subscribe({
      next: (numbers) => console.log('NUMEROS OBSERVABLE: ', numbers),
    });
  }

  getTeachers(): void {
    this.loadingService.setIsLoading(true);

    setTimeout(() => {
      this.loadingService.setIsLoading(false);
    }, 5000);
  }

  getUsuarios(): void {
    // SIMULACION A UNA PETICION A UNA BASE DE DATOS (API)
    const obs = new Observable<number>((subscriber) => {
      setTimeout(() => {
        // subscriber.error('404 Not Found');
        // subscriber.next([]);
        // subscriber.next(['Tomas', 'Matias', 'Josefina']);
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.complete();
      }, 2000);
    });

    this.loadingService.setIsLoading(true);
    obs
      .pipe(
        // filter((data) => !!data.length),
        // map((data) => data.map((el) => el.toUpperCase())),
        map((numero) => numero * 2), // 2, 4, 6
        map((numero) => numero * 2), // 4, 8, 12
        map((numero) => numero * 2), // 8, 16, 24
        catchError((error) => {
          this.alertsService.showError('Error al cargar los usuarios');
          return of([]);
          // return new Observable((subs) => subs.next([]), compl)
        })
      )
      .subscribe({
        // NEXT
        next: (usuarios) => {
          // if (usuarios.length) {
          //   this.alertsService.showSuccess(
          //     'Realizado',
          //     'Se cargaron los usuarios'
          //   );
          // }
          console.log(usuarios);
          // this.alertsService.showError();
        },
        // ERROR
        error: (err) => {},
        // COMPLETE: Es cuando el observable deja definitivamente de emitir valores
        complete: () => {
          this.loadingService.setIsLoading(false);
        },
      });
  }
}
