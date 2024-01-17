import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FullNamePipe } from '../../../../shared/full-name.pipe';

@NgModule({
  declarations: [PipesComponent],
  imports: [CommonModule, SharedModule],
  exports: [PipesComponent],
  providers: [DatePipe, FullNamePipe],
})
export class PipesModule {}
