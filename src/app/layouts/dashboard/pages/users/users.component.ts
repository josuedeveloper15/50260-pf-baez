import { Component } from '@angular/core';
import { User } from './models';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naru@mail.com',
      password: '123456',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasu@mail.com',
      password: '123456',
      role: 'USER',
    },
  ];

  onUserSubmitted(ev: User): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }
}
