import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  /**
   * FormGroup agrupar controles y crear objetos
   * FormArray que agrupan controles y crean array
   * FormControl es la definicion de un control para capturar el valor
   */

  categoriesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoriesForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      products: this.fb.array([]),
    });

    console.log(this.categoriesForm);

    /**
     * {
     *    name: ''
     *    products: []
     * }
     */
  }

  get productsControl() {
    return this.categoriesForm.get('products') as FormArray<FormGroup>;
  }

  getControl(index: number) {
    return this.productsControl.controls[index]?.get(
      'productName'
    ) as FormControl;
  }

  deleteControl(index: number) {
    this.productsControl.removeAt(index);
  }

  onAddProduct(): void {
    const formArray = this.categoriesForm.get('products');
    if (formArray instanceof FormArray) {
      formArray.push(
        this.fb.group({
          productName: this.fb.control(''),
        })
      );
    }
  }
}
