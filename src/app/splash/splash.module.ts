import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule,MatFormFieldControl,MatIconModule} from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { SplashPage } from './splash.page';

const routes: Routes = [
  {
    path: '',
    component: SplashPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplashPage]
})
export class SplashPageModule {}
