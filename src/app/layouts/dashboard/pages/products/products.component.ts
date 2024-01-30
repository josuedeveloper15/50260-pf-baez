import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './models';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  displayedColumns = ['id', 'productName', 'createdAt', 'actions'];

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }

  onCreate(): void {
    this.dialog
      .open(ProductDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.productsService.createProduct(result).subscribe({
              next: (products) => (this.products = products),
            });
          }
        },
      });
  }

  onEdit(product: Product) {
    this.dialog
      .open(ProductDialogComponent, {
        data: product,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.productsService
              .updateProductById(product.id, result)
              .subscribe({
                next: (products) => (this.products = products),
              });
          }
        },
      });
  }

  onDelete(id: number) {
    if (confirm('Esta seguro?')) {
      this.productsService.deleteProductById(id).subscribe({
        next: (products) => {
          this.products = products;
        },
      });
    }
  }
}
