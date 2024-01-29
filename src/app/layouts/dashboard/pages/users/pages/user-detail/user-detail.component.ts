import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { LoadingService } from '../../../../../../core/services/loading.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private loadingService: LoadingService
  ) {
    this.loadingService.setIsLoading(true);
    this.usersService.getUserById(this.route.snapshot.params['id']).subscribe({
      next: (findedUser) => {
        console.log(findedUser);
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}
