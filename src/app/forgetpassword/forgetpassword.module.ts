import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule,MatFormFieldControl} from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { ForgetpasswordPage } from './forgetpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetpasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgetpasswordPage]
})
export class ForgetpasswordPageModule {}
