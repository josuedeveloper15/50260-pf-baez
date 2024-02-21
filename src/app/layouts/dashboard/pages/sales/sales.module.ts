import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { EffectsModule } from '@ngrx/effects';
import { SalesEffects } from './store/sales.effects';
import { StoreModule } from '@ngrx/store';
import { salesFeature } from './store/sales.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { SaleDialogComponent } from './components/sale-dialog/sale-dialog.component';
import { ProductsService } from '../products/products.service';

@NgModule({
  declarations: [SalesComponent, SaleDialogComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
    StoreModule.forFeature(salesFeature),
    EffectsModule.forFeature([SalesEffects]),
  ],
  providers: [ProductsService],
})
export class SalesModule {}
