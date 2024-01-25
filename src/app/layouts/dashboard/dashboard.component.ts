import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  logout(): void {
    // /dashboard/users
    // this.router.navigate(['users'], { relativeTo: this.route })
    localStorage.removeItem('access-token');
    this.router.navigate(['auth', 'login']);
  }
}
