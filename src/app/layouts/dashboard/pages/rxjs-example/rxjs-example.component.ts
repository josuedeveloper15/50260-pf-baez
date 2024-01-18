import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss',
})
export class RxjsExampleComponent {
  /**
   *  OBSERVABLE
   *  - Pueden emitir 0, 1 o mas valores
   *
   *
   *  PROMISES
   *  - Pueden emitir 0 o 1 valor
   *
   */

  loading = false;

  users: string[] = [];

  getUsersSubscription?: Subscription;

  // allSubscriptions: Subscription[] = [];

  constructor() {
    console.log('Se instancio el componente');

    setTimeout(() => {
      console.log('Timeout!');
    }, 1000);

    console.log('---- FIN ----');

    // Se instancio el componente
    // Timeout!
    // ---- FIN ----

    // this.getUsersFromPromise();
    // this.getUsersFromObservable();
  }

  getUsersFromObservable(): void {
    this.getUsersSubscription?.unsubscribe();

    this.loading = true;
    const getUsers$ = new Observable<string[]>((subscriber) => {
      // setTimeout(() => {
      //   subscriber.next(['Goku', 'Gohan', 'Videl', 'Piccolo', 'Milk']);
      // }, 2000);

      setInterval(() => {
        subscriber.error(
          'No posee permisos para consultar la lista de usuarios'
        );
        // subscriber.next(['Goku', 'Gohan', 'Videl', 'Piccolo', 'Milk']);
      }, 1000);
    });

    this.getUsersSubscription = getUsers$.subscribe({
      // El observable emite valores (equivale al then)
      next: (respuesta) => {
        this.users = respuesta;
      },
      // El observable emite errores (equivale al catch)
      error: (error) => {
        alert(error);
      },
      // El observable finalizo, y dejo de emitir valores (equivale al finally)
      complete: () => {
        this.loading = false;
      },
    });
  }

  getUsersFromPromise(): void {
    // Se instancio el componente
    // ---- FIN ----
    // Despues de 1000ms Timeout!

    const getUsers = new Promise<string[]>((resolve, reject) => {
      // reject('No posee permisos para consultar la lista de usuarios');
      setTimeout(() => {
        resolve(['Goku', 'Gohan', 'Videl', 'Piccolo', 'Milk']);
      }, 2000);
    });

    this.loading = true;
    getUsers
      // Respuesta satisfactoria (resolve)
      .then((respuesta) => {
        this.users = respuesta;
      })
      // Respuesta incorrecta/fallida (reject)
      .catch((error) => console.error(error))
      // Metodo que se ejecuta al finalizar la promesa, sin importar si se resolvio satisfactoriamente
      .finally(() => {
        this.loading = false;
      });
  }
}
