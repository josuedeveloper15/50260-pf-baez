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
import { UsersService } from '../../../../core/services/users.service';
import { UsersMockService } from '../../../../core/services/users-mock.service';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [UsersComponent],
  providers: [
    // UsersService,
    // {
    //   provide: UsersService,
    //   useClass: UsersMockService,
    // },
  ],
})
export class UsersModule {}
