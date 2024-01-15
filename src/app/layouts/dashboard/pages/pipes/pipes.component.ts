import { Component } from '@angular/core';
import { UserPipe } from '../../../../shared/full-name.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  today = new Date();
  price = 10000;

  user: UserPipe = {
    firstName: 'Goku',
    lastName: 'Son',
  };
}
