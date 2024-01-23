import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';

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

  constructor(private loadingService: LoadingService) {
    // LOGICA
    this.subscribeToNumbersObservable();

    this.subscribeToNumbersSubject();
    this.numbersSubject$.next(1);
    this.numbersSubject$.next(2);
    this.numbersSubject$.next(3);

    // this.getUsuarios();
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
    const obs = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(['Tomas', 'Matias', 'Josefina']);
        subscriber.complete();
      }, 2000);
    });

    this.loadingService.setIsLoading(true);
    obs.subscribe({
      // NEXT
      next: (usuarios) => console.log(usuarios),

      // ERROR
      error: (err) => {},
      // COMPLETE: Es cuando el observable deja definitivamente de emitir valores
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}
