import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { EditprofilePage } from './editprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditprofilePage]
})
export class EditprofilePageModule {}
