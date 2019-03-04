import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { EditpasswordPage } from './editpassword.page';

const routes: Routes = [
  {
    path: '',
    component: EditpasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditpasswordPage]
})
export class EditpasswordPageModule {}
