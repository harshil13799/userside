import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { ViewprofilePage } from './viewprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ViewprofilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewprofilePage]
})
export class ViewprofilePageModule {}
