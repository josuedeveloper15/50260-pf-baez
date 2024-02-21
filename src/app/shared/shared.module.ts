import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';
import { RepetirDirective } from './repetir.directive';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ValidationErrorsPipe } from './validation-errors.pipe';
import { ResaltadoDirective2 } from './resaltado2.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective,
    ValidationErrorsPipe,
    ResaltadoDirective2,
  ],
  imports: [CommonModule],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ValidationErrorsPipe,
    MatPaginatorModule,
    ResaltadoDirective2,
  ],
})
export class SharedModule {}
