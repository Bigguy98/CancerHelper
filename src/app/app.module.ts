import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { NavItemComponent } from './layouts/nav-item/nav-item.component';
import { PredictFormComponent } from './layouts/predict-form/predict-form.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DemoMaterialModule } from './layouts/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "predict",
    component: PredictFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemComponent,
    PredictFormComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
