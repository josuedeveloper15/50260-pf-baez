import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [PipesComponent],
  imports: [CommonModule, SharedModule],
  exports: [PipesComponent],
})
export class PipesModule {}
