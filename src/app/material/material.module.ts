import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  imports: [],
  exports: [
    MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, 
    MatButtonModule, MatOptionModule, MatSelectModule, MatCardModule,
    MatProgressBarModule
  ],
  declarations: [],
  providers: [],
})
export class MaterialModule { }
