import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clase16ReduxComponent } from './clase-16-redux.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [Clase16ReduxComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Clase16ReduxComponent,
      },
    ]),
  ],
})
export class Clase16ReduxModule {}
