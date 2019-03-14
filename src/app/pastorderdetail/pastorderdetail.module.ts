import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PastorderdetailPage } from './pastorderdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PastorderdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PastorderdetailPage]
})
export class PastorderdetailPageModule {}
