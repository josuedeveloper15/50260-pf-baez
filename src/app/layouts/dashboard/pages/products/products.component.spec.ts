import { TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('Pruebas de ProductsComponent', () => {
  let component: ProductsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        MockProvider(ProductsService, {
          getProducts: () =>
            of([
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
            ]),
        }),
      ],
    });
    component = TestBed.createComponent(ProductsComponent).componentInstance;
  });

  it('Las columnas de la tabla de productos deben ser (displayedColumns): "id", "productName", "createdAt", "actions"', () => {
    expect(component.displayedColumns).toContain('id');
    expect(component.displayedColumns).toContain('productName');
    expect(component.displayedColumns).toContain('createdAt');
    expect(component.displayedColumns).toContain('actions');
  });
});
