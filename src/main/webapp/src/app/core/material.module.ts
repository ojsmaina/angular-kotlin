import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,MatSortModule,MatStepperModule,MatSelectModule,MatAutocompleteModule,
  MatMenuModule, MatGridListModule, MatCardModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatMenuModule,
    MatGridListModule,MatCardModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule,MatSortModule,
    MatStepperModule,MatSelectModule,MatAutocompleteModule
  ],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatMenuModule,
    MatGridListModule,MatCardModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule,MatSortModule,
    MatStepperModule,MatSelectModule,MatAutocompleteModule
  ],
})
export class CustomMaterialModule { }
