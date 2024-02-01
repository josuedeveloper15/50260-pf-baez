import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /users
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
