import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, MatTableModule],
  exports: [UsersComponent],
})
export class UsersModule {}
