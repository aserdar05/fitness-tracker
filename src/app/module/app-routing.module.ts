import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../ui/home/home.component";
import { ProductsComponent } from "../ui/products/products.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}