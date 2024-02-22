import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { Product } from './models';
import { LoadingService } from '../../../../core/services/loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

let products: Product[] = [
  {
    id: 1,
    name: 'PC Gamer',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Teclado Mecanico',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'Auricular 7.1',
    createdAt: new Date(),
  },
];

@Injectable()
export class ProductsService {
  constructor(
    private loadingService: LoadingService,
    private httpClient: HttpClient
  ) {}

  getProducts() {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .get<Product[]>(`${environment.apiURL}/products`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  createProduct(data: Product) {
    products = [...products, { ...data, id: products.length + 1 }];
    return this.getProducts();
  }

  deleteProductById(id: number) {
    products = products.filter((el) => el.id != id);
    return this.getProducts();
  }

  updateProductById(id: number, data: Product) {
    products = products.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this.getProducts();
  }
}
