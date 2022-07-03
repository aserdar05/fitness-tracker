import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './ui/products/products.component';
import { ProductsService } from './service/products.service';
import { HomeComponent } from './ui/home/home.component';
import { ProductComponent } from './ui/product/product.component';
import { AppRoutingModule } from './module/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material.module';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { LoginComponent } from './ui/auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './ui/navigation/header/header.component';
import { SidenavListComponent } from './ui/navigation/sidenav-list/sidenav-list.component';
import { TrainingComponent } from './ui/training/training.component';
import { PastTrainingsComponent } from './ui/training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './ui/training/current-training/current-training.component';
import { NewTrainingComponent } from './ui/training/new-training/new-training.component';
import { StopTrainingModalComponent } from './ui/training/modal/stop-training-modal/stop-training-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    TrainingComponent,
    PastTrainingsComponent,
    CurrentTrainingComponent,
    PastTrainingsComponent,
    NewTrainingComponent,
    StopTrainingModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
