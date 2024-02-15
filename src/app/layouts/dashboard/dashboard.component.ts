import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './pages/users/models';
import { selectAuthUser } from '../../core/store/auth/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;

  authUser$: Observable<User | null>;

  constructor(private authService: AuthService, private store: Store) {
    this.authUser$ = this.store.select(selectAuthUser);
  }

  logout(): void {
    this.authService.logout();
  }
}
