import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import { IonicModule } from '@ionic/angular';


import { CheckoutPage } from './checkout.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
