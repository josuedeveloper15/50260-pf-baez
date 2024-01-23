import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingTriggered$ = new Subject<boolean>();

  public isLoading$ = this.loadingTriggered$.asObservable();

  setIsLoading(value: boolean): void {
    this.loadingTriggered$.next(value);
  }
}
