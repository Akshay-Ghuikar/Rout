import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:'productList', component:ProductListComponent},
    {path:'createProduct', component:CreateProductComponent},
    {path:'editProduct/:id', component:CreateProductComponent},

  ]},



  {path:'post', component:PostComponent,children:[
    {path:'postList', component:PostListComponent},
    {path:'createPost', component:CreatePostComponent},
  ]},
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
