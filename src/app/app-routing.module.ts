import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'productdetail/:p_id', loadChildren: './productdetail/productdetail.module#ProductdetailPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'categorydetail/:cat_name', loadChildren: './categorydetail/categorydetail.module#CategorydetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' },
  { path: 'viewprofile', loadChildren: './viewprofile/viewprofile.module#ViewprofilePageModule' },
  { path: 'editprofile/:email_id', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'editpassword/:email_id', loadChildren: './editpassword/editpassword.module#EditpasswordPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'filterpage', loadChildren: './filterpage/filterpage.module#FilterpagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
