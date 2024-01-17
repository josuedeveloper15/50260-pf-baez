import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';
import { RepetirDirective } from './repetir.directive';

@NgModule({
  declarations: [FullNamePipe, ResaltadoDirective, RepetirDirective],
  imports: [CommonModule],
  exports: [FullNamePipe, ResaltadoDirective, RepetirDirective],
})
export class SharedModule {}
