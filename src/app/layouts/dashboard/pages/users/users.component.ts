import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { UsersService } from './users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: User[] = [];
  roles: string[] = [];

  constructor(
    private usersService: UsersService,
    private loadingService: LoadingService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.queryParams);
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([
      this.usersService.getRoles(),
      this.usersService.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];
        this.dataSource = value[1];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
      // error: (error) => {
      //   if (error instanceof HttpErrorResponse) {
      //     if (error.status === 500) {
      //       alert('Error del servidor')
      //     }
      //     if (error.status === 404) {

      //     }
      //   }
      // },
    });
  }

  onDeleteUser(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.usersService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onUserSubmitted(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.usersService.createUser(ev).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}
