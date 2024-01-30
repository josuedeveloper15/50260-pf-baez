import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

@NgModule({
  declarations: [ProductsComponent, ProductDialogComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
  providers: [ProductsService],
})
export class ProductsModule {}
