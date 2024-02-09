import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';

// ENVOLTURA DE INPUT
import { MatFormFieldModule } from '@angular/material/form-field';
// INPUT
import { MatInputModule } from '@angular/material/input';
// SELECT
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { UsersMockService } from '../../../../core/services/users-mock.service';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
import { MatIconModule } from '@angular/material/icon';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
@NgModule({
  declarations: [UsersComponent, UserFormComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
  exports: [UsersComponent],
  providers: [
    UsersService,
    // {
    //   provide: UsersService,
    //   useClass: UsersMockService,
    // },
  ],
})
export class UsersModule {}
