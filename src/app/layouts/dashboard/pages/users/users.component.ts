import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { UsersService } from './users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  roles: string[] = [];

  dataSource: User[] = [];
  totalItems = 0;
  pageSize = 5;
  currentPage = 1;

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
      // this.usersService.getUsers(),
      this.usersService.paginate(this.currentPage),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];

        const paginationResult = value[1];
        this.totalItems = paginationResult.items;
        this.dataSource = paginationResult.data;

        // this.dataSource = value[1];
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

  onPage(ev: PageEvent) {
    this.currentPage = ev.pageIndex + 1;
    this.usersService.paginate(this.currentPage, ev.pageSize).subscribe({
      next: (paginateResult) => {
        this.totalItems = paginateResult.items;
        this.dataSource = paginateResult.data;
        this.pageSize = ev.pageSize;
      },
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
