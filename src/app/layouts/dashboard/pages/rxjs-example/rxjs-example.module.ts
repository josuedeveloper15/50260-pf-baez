import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsExampleComponent } from './rxjs-example.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [RxjsExampleComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [RxjsExampleComponent],
})
export class RxjsExampleModule {}
