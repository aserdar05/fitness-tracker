import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../security/auth.guard";
import { LoginComponent } from "../ui/auth/login/login.component";
import { SignupComponent } from "../ui/auth/signup/signup.component";
import { HomeComponent } from "../ui/home/home.component";
import { ProductsComponent } from "../ui/products/products.component";
import { TrainingComponent } from "../ui/training/training.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}