import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { EffectsModule } from '@ngrx/effects';
import { SalesEffects } from './store/sales.effects';
import { StoreModule } from '@ngrx/store';
import { salesFeature } from './store/sales.reducer';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    StoreModule.forFeature(salesFeature),
    EffectsModule.forFeature([SalesEffects]),
  ],
})
export class SalesModule {}
