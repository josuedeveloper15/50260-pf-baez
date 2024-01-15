import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';

@NgModule({
  declarations: [FullNamePipe],
  imports: [CommonModule],
  exports: [FullNamePipe],
})
export class SharedModule {}
