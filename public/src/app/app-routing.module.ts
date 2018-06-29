import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'products/new', component: NewproductComponent},
  {path: 'products/:id', component: DetailsComponent},
  {path: 'products/:id/edit', component: EditComponent},
  {path: '', redirectTo: "/products", pathMatch: 'full'},
  {path: '**', redirectTo: "/product"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
