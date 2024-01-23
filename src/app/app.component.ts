import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '50260-pf-baez';

  // isLoading = false;

  isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.isLoading$;
    this.loadingService.isLoading$.subscribe({
      next: (v) => console.log(v),
    });
    // this.loadingService.isLoading$.subscribe({
    //   next: (value) => {
    //     this.isLoading = value;
    //   },
    // });
  }
}
